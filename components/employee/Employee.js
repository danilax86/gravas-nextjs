import EmployeeExperience from "../employee-experience/EmployeeExperience";
import { withTranslation } from "../../i18n";
import Button from "../button/button";
import EmployeeDetails from "./style";

const Users = ({ employee, t }) => {
  return (
    <EmployeeDetails>
      <h3 className="title">{t(employee.title)}</h3>
      <div className="items">
        <div className="education">
          <img className="image" src={employee.img} alt={employee.alt} />
          {employee.educations.map(education => (
            <EmployeeExperience key={education.year} {...education} />
          ))}
        </div>
        <div className="about">
          <h2>{t(employee.name)}</h2>
          <p>{t(employee.description)}</p>
          <div>
            <Button
              onClick={() => {
                console.log("You clicked on me");
              }}
              type="button"
              buttonStyle="btn--primary--outline"
              children={t(employee.contact)}
            />
          </div>
        </div>
      </div>
    </EmployeeDetails>
  );
};

export default withTranslation("employees")(Users);
