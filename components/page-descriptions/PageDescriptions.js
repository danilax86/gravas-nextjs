import ServiceDescriptions from "./style";
import { withTranslation } from "../../i18n";

const PageDescriptions = ({ descriptions, t }) => {
  return (
    <ServiceDescriptions>
      {descriptions.map(description => (
        <div className="item" key={description.id}>
          <h3 className="label">{t(description.label)}</h3>
          <p className="description">{t(description.text)}</p>
        </div>
      ))}
    </ServiceDescriptions>
  );
};

export const IndexDescriptions = withTranslation("service_descriptions")(
  PageDescriptions
);
export const RitualDescriptions = withTranslation("sauna_rituals")(
  PageDescriptions
);
export const GuesthouseDescriptions = withTranslation("guesthouse")(
  PageDescriptions
);
export const SportActivityDescriptions = withTranslation("sport_activities")(
  PageDescriptions
);
