import Items from './style';
import RitualExtraDetail from '../../components/extra-detail/RitualExtraDetail'
import { withTranslation } from '../../i18n'
const RitualExtraDetails = ({details, title, t}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div>
                {details.map(detail => (
                    <RitualExtraDetail key={detail.title} {...detail}/>
                ))}
            </div>   
        </Items>    
    )
}

export default  withTranslation('sauna_rituals')(RitualExtraDetails)