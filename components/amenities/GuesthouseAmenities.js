import  GuesthouseAmenity from '../amenity/GuesthouseAmenity'
import { withTranslation } from '../../i18n'
import Items from './style'

const GuesthouseAmenities = ({amenities, title, t}) => (
    <Items>
        <h3 className="title">{t(title)}</h3>
        <div className="amenities">
            {amenities.map(amenity => (
                <GuesthouseAmenity key={amenity.label}{...amenity}/>
            ))}
        </div>  
    </Items>
)
export default withTranslation('guesthouse')(GuesthouseAmenities)