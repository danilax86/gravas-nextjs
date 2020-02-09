import Link from "next/link";
import Card from "./style";
import { withTranslation } from "../../i18n";

const ServiceCard = ({ id, title, priceTitle, priceFrom, img, t, prefix }) => {
  const slug = title.replace(/\_/g, "-");
  return (
    <Link href={`/${prefix}/${slug}`} prefetch={false}>
      <Card>
        <picture>
          <img src={img} alt={t(title)} type="image/webp" />
        </picture>
        <h3 className="title">{t(title)}</h3>
        <div className="detail-items">
          <span>{t(priceTitle)}</span>
          <span>{t(priceFrom)}</span>
        </div>
      </Card>
    </Link>
  );
};

export const RitualServiceCard = withTranslation("sauna_rituals")(ServiceCard);
export const GuestHouseServiceCard = withTranslation("guesthouse")(ServiceCard);
export const SportActivitiesCard = withTranslation("sport_activities")(
  ServiceCard
);
