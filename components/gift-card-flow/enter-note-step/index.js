import Step from "../step";

const EnterNoteStep = ({ title, setNote }) => {
  return (
    <Step title={title}>
      <label>Enter note</label>
      <textarea
        onChange={e => {
          setNote(e.target.value);
        }}
      ></textarea>
    </Step>
  );
};

export default EnterNoteStep;
