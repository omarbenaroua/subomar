import "./Title.css";

const Title = (props) => {
  return (
    <>
      <div className="container">
        <p className="title">{props.children}</p>
      </div>
    </>
  );
};

export default Title;
