import PropsTypes from "prop-types";

export const Filter = ({ active, onClick, children }) => {
  const myClass = {
    "marginRight": "10px",
    "marginLeft": "10px",
  };

  if (active) {
    return <span style={myClass}>{children}</span>;
  }

  return (
    <button
      style={myClass}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Filter.propTypes = {
  active: PropsTypes.bool.isRequired,
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.node.isRequired,
};
