import GuesthousePriceTag from '../priceTag/GuesthousePriceTag';
import { withTranslation } from '../../i18n'
import Items from './style'

const GuesthousePriceTags = ({prices, t, title}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div className="price-cards">
                {prices.map(price => (
                    <GuesthousePriceTag key={price.title} {...price}/>
                ))}
            </div> 
        </Items>
    )
        
}

export default  withTranslation('sauna_rituals')(GuesthousePriceTags);