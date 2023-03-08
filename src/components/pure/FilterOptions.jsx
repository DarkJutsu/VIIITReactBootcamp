import PropsTypes from "prop-types";
import { FilterContainer } from "../containers/FilterContainer";

export const FilterOptions = () => {
  const myClass = {
    "marginTop": "20px",
  };

  return (
    <div style={myClass}>
      <FilterContainer filter="SHOW_ALL">ALL</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">ACTIVE</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">COMPLETE</FilterContainer>
    </div>
  );
};
