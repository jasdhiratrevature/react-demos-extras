function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-purple' + props.color}>
        {props.children}
      </div>
    );
  }

  export default FancyBorder;