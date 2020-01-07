import Items from './style';
import ActivityExtraDetail from '../../components/extra-detail/ActivityExtraDetail'
import { withTranslation } from '../../i18n'
const ActivityExtraDetails = ({details, title, t}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div>
                {details.map(detail => (
                    <ActivityExtraDetail key={detail.title} {...detail}/>
                ))}
            </div>   
        </Items>    
    )
}

export default  withTranslation('sport_activities')(ActivityExtraDetails)