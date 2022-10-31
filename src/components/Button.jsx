export const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        fontSize: props.fontSize
      }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
