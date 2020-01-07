import Card from "./style";
import { withTranslation } from "../../i18n";

const HighlightCard = ({ icon, label, caption, t }) => {
  return (
    <Card>
      <span className={`icon-${icon}`}></span>
      <h4 className="label">{t(label)}</h4>
      <p className="caption">{t(caption)}</p>
    </Card>
  );
};
export default withTranslation("sport_activities")(HighlightCard);
