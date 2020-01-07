import { withTranslation } from '../../i18n'
import Card from './style'

const RitualAmenity = ({icon, label, caption, t}) => {
    return (
        <Card>
            <span className={`icon-${icon}`}></span>
            <h4 className="label">{t(label)}</h4>
            <p className="caption">{t(caption)}</p>
        </Card>
    )
}
export default withTranslation('sauna_rituals')(RitualAmenity);