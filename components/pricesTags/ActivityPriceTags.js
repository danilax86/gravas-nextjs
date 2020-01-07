import ActivityPriceTag from '../priceTag/ActivityPriceTag';
import { withTranslation } from '../../i18n'
import Items from './style'

const ActivityPriceTags = ({prices, t, title}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div className="price-cards">
                {prices.map(price => (
                    <ActivityPriceTag key={price.title} {...price}/>
                ))}
            </div> 
        </Items>
    )
        
}

export default  withTranslation('sport_activities')(ActivityPriceTags);