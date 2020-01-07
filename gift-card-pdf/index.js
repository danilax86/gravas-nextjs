const PdfKit = require("pdfkit");
const fs = require("fs");
const qrcode = require("qrcode");
const themes = require("./themes");
const moment = require("moment");

const createPDF = async ({
  id,
  note,
  items,
  products,
  validUntil,
  theme: themeName
}) => {
  const formatProductLabel = (units, product) => {
    switch (product.price_type.name) {
      case "absolute":
      case "per_person":
        return `${product.name} ${units} personām`;
      case "value":
        return `Atpūta € ${units} vērtībā`;
    }
  };

  const qrPath = `./gift-card-pdf/qr/${id}.png`;

  await qrcode.toFile(qrPath, id);
  const theme = themes.find(theme => theme.name === themeName);

  const pdf = new PdfKit();
  pdf.registerFont("Regular", "./gift-card-pdf/fonts/Roboto-Regular.ttf");
  pdf.registerFont("Bold", "./gift-card-pdf/fonts/Roboto-Bold.ttf");
  pdf.registerFont("Vibes", "./gift-card-pdf/fonts/GreatVibes-Regular.ttf");

  pdf.image(`${__dirname}/images/${theme.image}`, 0, 0, {
    width: 615,
    height: 264
  });

  const stream = fs.createWriteStream(`./gift-card-pdf/output/${id}.pdf`);
  pdf.pipe(stream);

  pdf
    .fillColor(theme.title.color)
    .font("Vibes")
    .fontSize(64)
    .text(`Dāvanu karte`, {
      y: 200,
      align: "center"
    });

  pdf
    .fillColor(theme.note.color)
    .font("Vibes")
    .fontSize(28)
    .text(note, {
      align: "center",
      height: 64,
      ellipsis: true
    });

  pdf
    .fillColor("black")
    .text("", 32, 288)
    .font("Vibes")
    .fontSize(32)
    .text("Pakalpojumi");

  const columns = items.length > 4 ? 2 : 1;

  pdf
    .fontSize(columns === 2 ? 16 : 20)
    .font("Vibes")
    .list(
      items.map(item => {
        const product = products.find(p => p.id === item.id);
        return formatProductLabel(item.persons || item.value, product);
      }),
      {
        columns,
        bulletRadius: 2,
        height: 200
      }
    );

  pdf
    .fillColor("black")
    .font("Regular")
    .fontSize(12)
    .text("Davanu karted deriguma termins:", 32, 540, {
      width: 280
    })
    .font("Bold")
    .text(moment(validUntil).format("DD.MM.YYYY"))
    .moveDown()
    .font("Regular")
    .text("Lai izmantotu dāvanu karti, viesošanās iepriekš jārezervē:", {
      width: 280
    });
  pdf
    .font("Regular")
    .text("Tālr: ", {
      continued: true
    })
    .font("Bold")
    .text("+371  2 66 47 133");

  pdf
    .font("Regular")
    .text("E-pasts: ", {
      continued: true
    })
    .font("Bold")
    .text("info@gravas.lv");

  pdf
    .font("Regular")
    .text("Plašāka informācija par pakalpojumiem pieejama", {
      continued: true,
      width: 280
    })
    .font("Bold")
    .text("www.gravas.lv");

  pdf
    .moveDown()
    .font("Regular")
    .text(`Davanu kartes nr: ${id}`);

  pdf.image(qrPath, 400, 550);

  pdf.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => {
      resolve();
    });

    stream.on("error", () => {
      reject();
    });
  });
};

module.exports = createPDF;
