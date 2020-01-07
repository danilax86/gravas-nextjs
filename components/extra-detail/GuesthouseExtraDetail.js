import Item from './style';
import { withTranslation } from '../../i18n'

const GuesthouseExtraDetail = ({title, details, t}) => {
    return (
        <Item>
            <div className="detail">
                <h3>{t(title)}</h3>
                <p>{t(details)}</p>
            </div>
            <div className="line"></div>
        </Item>
    )
}

export default withTranslation('guesthouse')(GuesthouseExtraDetail);