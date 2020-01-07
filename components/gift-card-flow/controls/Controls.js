export default ({ steps, activeStep, handleBack, handleNext }) => {
  const isFirstStep =
    steps.findIndex(step => step.key === activeStep.key) === 0;
  return (
    <footer>
      <button onClick={handleBack} disabled={isFirstStep}>
        back
      </button>
      <button disabled={!activeStep.complete} onClick={handleNext}>
        contine
      </button>
    </footer>
  );
};
