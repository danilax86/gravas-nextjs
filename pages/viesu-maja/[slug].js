import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import ServiceHeader from "../../components/service-header/ServiceHeader";
import GuesthouseHighlightCards from "../../components/highlight-cards/GuesthouseHighlightCards";
import guestHouseServices from "../../static/data/guesthouse/guesthouse";
import { GuesthouseDescriptions } from "../../components/page-descriptions/PageDescriptions";
import { withTranslation } from "../../i18n";
import GuesthouseAmenities from "../../components/amenities/GuesthouseAmenities";
import GuesthouseExtraDetails from "../../components/extra-details/GuesthouseExtraDetails";
import GuesthousePriceTags from "../../components/pricesTags/GuesthousePriceTags";
import Footer from "../../components/footer/footer";

const GuesthousePage = ({ t }) => {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug.replace(/\-/g, "_");
  const guesthouseService = guestHouseServices.find(
    guesthouse => guesthouse.title === title
  );

  return (
    <Layout
      title={t(guesthouseService.metaTitle)}
      description={t(guesthouseService.metaDescription)}
    >
      <PageHeaderImage
        imgsrc={guesthouseService.img}
        alt={t(guesthouseService.alt)}
      />
      <ServiceHeader title={t(guesthouseService.title)} />
      <GuesthouseHighlightCards highlights={guesthouseService.highlights} />
      <GuesthouseDescriptions descriptions={guesthouseService.descriptions} />
      <GuesthouseAmenities
        amenities={guesthouseService.amenities}
        title={guesthouseService.whatIsIncludedTitle}
      />
      <GuesthouseExtraDetails
        details={guesthouseService.extraDetails}
        title={guesthouseService.considerTitle}
      />
      <GuesthousePriceTags
        prices={guesthouseService.allPrices}
        title={guesthouseService.allPriceTitle}
      />
      <Footer />
    </Layout>
  );
};

GuesthousePage.getInitialProps = async () => ({
  namespacesRequired: ["guesthouse"]
});

export default withTranslation("guesthouse")(GuesthousePage);
