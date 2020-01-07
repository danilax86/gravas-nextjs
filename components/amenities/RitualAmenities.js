import RitualAmenity from '../amenity/RitualAmenity'
import { withTranslation } from '../../i18n'
import Items from './style'

const RitualAmenities = ({amenities, title, t}) => (
    <Items>
        <h3 className="title">{t(title)}</h3>
        <div className="amenities">
            {amenities.map(amenity => (
                <RitualAmenity key={amenity.label}{...amenity}/>
            ))}
        </div>  
    </Items>
)
export default withTranslation('sauna_rituals')(RitualAmenities)