import ActivityAmenity from "../amenity/ActivityAmenity";
import { withTranslation } from "../../i18n";
import Items from "./style";

const ActivityAmenities = ({ amenities, title, t }) => (
  <Items>
    <h3 className="title">{t(title)}</h3>
    <div className="amenities">
      {amenities.map(amenity => (
        <ActivityAmenity key={amenity.label} {...amenity} />
      ))}
    </div>
  </Items>
);
export default withTranslation("sport_activities")(ActivityAmenities);
