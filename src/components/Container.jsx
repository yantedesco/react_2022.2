export const Container = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "green"
      }}
    >
      {props.children}
    </div>
  );
};
