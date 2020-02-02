import Card from "./style";
import { withTranslation } from "../../i18n";
import dynamic from "next/dynamic";
import toCapitalCase from "../../lib/toCapitalCase";

const HighlightCard = ({ icon, label, caption, t }) => {
  const iconName = toCapitalCase(icon);
  const Icon = dynamic(() => import(`../icons/${iconName}`));
  return (
    <Card>
      <Icon style={{ color: "#1E514B", fontSize: "24px" }} />
      <h4 className="label">{t(label)}</h4>
      <p className="caption">{t(caption)}</p>
    </Card>
  );
};
export default withTranslation("sport_activities")(HighlightCard);
