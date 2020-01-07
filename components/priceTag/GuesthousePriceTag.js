import Item from './style';
import { withTranslation } from '../../i18n'

const GuesthousePriceTag = ({icon, title, forPerson, additionalPerson, totalPrice, t}) => {
    return(
        <Item>
            <span className={`icon-${icon}`}></span>
            <h2>{t(title)}</h2>
            <p>{t(forPerson)}</p>
            <p>{t(additionalPerson)}</p>
            <h3 className="price">{t(totalPrice)}</h3>
        </Item>
    )
}

export default  withTranslation('guesthouse')(GuesthousePriceTag);