import { useState } from "react";
import Step from "../step";
import TextField from "@material-ui/core/TextField";
import { withTranslation } from "../../../i18n";
import styled from "@emotion/styled";

const MAX_CHAR_COUNT = 100;

const CharCounter = styled.div`
  color: ${p =>
    p.maxCharsReached ? p.theme.colors.error : p.theme.colors.primary};
`;

const EnterNoteStep = ({ t, title, setNote }) => {
  const [charCount, setCharCount] = useState(0);
  const [value, setValue] = useState("");

  const handleOnChange = desiredValue => {
    if (desiredValue.length <= MAX_CHAR_COUNT) {
      setValue(desiredValue);
      setNote(desiredValue);
    }
    setCharCount(value.length);
  };

  return (
    <Step title={title}>
      <TextField
        multiline
        fullWidth
        value={value}
        name="note"
        variant="outlined"
        rowsMax="5"
        maxLength="300"
        label={t("note")}
        onChange={e => {
          handleOnChange(e.target.value);
        }}
      />
      <CharCounter maxCharsReached={charCount >= MAX_CHAR_COUNT}>
        {charCount} / {MAX_CHAR_COUNT}
      </CharCounter>
    </Step>
  );
};

export default withTranslation("gift_cards")(EnterNoteStep);
