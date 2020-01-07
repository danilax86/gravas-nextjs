import { withTranslation } from '../../i18n';
import Experience from './style';

const EmployeeExperience = ({year, event, t}) => {
    return (
            <Experience>
                <h3 className="year">{t(year)}</h3>
                <p className="description">{t(event)}</p>
            </Experience>
        )
}

export default withTranslation('employees')(EmployeeExperience);
    