import { withTranslation } from "../../i18n";
import Card from "./style";
import dynamic from "next/dynamic";
import toCapitalCase from "../../lib/toCapitalCase";

const RitualAmenity = ({ icon, label, caption, t }) => {
  const iconName = toCapitalCase(icon);
  const Icon = dynamic(() => import(`../icons/${iconName}`));
  return (
    <Card>
      <Icon style={{ color: "#002823", fontSize: "32px" }} />
      <h4 className="label">{t(label)}</h4>
      <p className="caption">{t(caption)}</p>
    </Card>
  );
};
export default withTranslation("sauna_rituals")(RitualAmenity);
