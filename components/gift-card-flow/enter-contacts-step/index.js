import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withTranslation } from "../../../i18n";
import styled from "@emotion/styled";
import emailRegex from "../../../constants/emailRegex";

import Step from "../step";

const TextFieldColumn = styled.div`
  display: flex;
  flex-direction: column;

  .MuiTextField-root {
    margin-bottom: 1rem;
  }
`;

const EnterContactsStep = ({ t, title, setContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    setContacts({
      name,
      phone,
      email
    });
  }, [name, phone, email]);

  return (
    <Step title={title}>
      <TextFieldColumn>
        <TextField
          variant="outlined"
          label={t("name")}
          name="name"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label={t("phone")}
          name="phone"
          onChange={e => setPhone(e.target.value)}
        />
        <TextField
          error={(email !== "") & !isValidEmail}
          variant="outlined"
          required
          type="email"
          label={t("email")}
          name="email"
          onChange={e => {
            const email = e.target.value;
            setIsValidEmail(emailRegex.test(email));
            setEmail(email);
          }}
        />
      </TextFieldColumn>
    </Step>
  );
};

export default withTranslation("gift_cards")(EnterContactsStep);
