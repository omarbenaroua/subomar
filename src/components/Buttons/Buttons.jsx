import "./Buttons.css";

const PrimaryButton = ({ text, action }) => {
  return (
    <>
      <button onClick={action} type="button" className="primary-btn btn">
        {text}
      </button>
    </>
  );
};

const SecondaryButton = ({ text, action }) => {
  return (
    <>
      <button onClick={action} type="button" className="secondary-btn btn">
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
export { SecondaryButton };
