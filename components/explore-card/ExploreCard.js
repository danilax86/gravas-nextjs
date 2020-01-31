import Link from "next/link";
import Card from "./style";
import { withTranslation } from "../../i18n";

const ExploreCard = ({ label, img, href, t }) => (
  <Link href={href}>
    <Card>
      <picture>
        <img src={img} alt={t(label)} type="image/webp" />
      </picture>
      <span className="label">{t(label)}</span>
    </Card>
  </Link>
);

export default withTranslation("explore_cards")(ExploreCard);
