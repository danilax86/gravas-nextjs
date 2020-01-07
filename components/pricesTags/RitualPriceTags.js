import RitualPriceTag from '../priceTag/RitualPriceTag';
import { withTranslation } from '../../i18n'
import Items from './style'

const RitualPriceTags = ({prices, t, title}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div className="price-cards">
                {prices.map(price => (
                    <RitualPriceTag key={price.title} {...price}/>
                ))}
            </div> 
        </Items>
    )
        
}

export default  withTranslation('sauna_rituals')(RitualPriceTags);