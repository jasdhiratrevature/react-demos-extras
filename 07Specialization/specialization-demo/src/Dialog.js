import FancyBorder from "./FancyBorder";
function Dialog(props) {
    return (
      <FancyBorder color="purple">
        <h2 className="Dialog-title">
          {props.title}
        </h2>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  export default Dialog;