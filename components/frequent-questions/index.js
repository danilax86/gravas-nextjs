import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import tabData from "../../static/data/contacts/faq";
import { TabItem, TabContent, FaqItem, Question } from "./style";
import { withTranslation } from "../../i18n";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E514B"
    },
    secondary: {
      main: "#F9E18B"
    }
  }
});

const FAQ = ({ t }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState();

  const handleChange = (event, tab) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Tabs value={activeTab} textColor="primary" onChange={handleChange}>
          {tabData.map(item => (
            <Tab label={t(item.title)} />
          ))}
        </Tabs>
      </ThemeProvider>

      <TabContent>
        {tabData.map((item, index) => (
          <TabItem active={activeTab === index}>
            {item.questions.map(({ label, answer }) => (
              <FaqItem>
                <Question active={answer === activeQuestion}>
                  <h3 onClick={() => setActiveQuestion(answer)}>{t(label)}</h3>
                  <p className="answer">{t(answer)}</p>
                </Question>
              </FaqItem>
            ))}
          </TabItem>
        ))}
      </TabContent>
    </React.Fragment>
  );
};

export default withTranslation("frequent_questions")(FAQ);
