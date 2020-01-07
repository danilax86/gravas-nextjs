import Items from './style';
import GuesthouseExtraDetail from '../../components/extra-detail/GuesthouseExtraDetail'
import { withTranslation } from '../../i18n'
const GuesthouseExtraDetails = ({details, title, t}) => {
    return (
        <Items>
            <h3 className="title">{t(title)}</h3>
            <div>
                {details.map(detail => (
                    <GuesthouseExtraDetail key={detail.title} {...detail}/>
                ))}
            </div>   
        </Items>    
    )
}

export default  withTranslation('guesthouse')(GuesthouseExtraDetails)