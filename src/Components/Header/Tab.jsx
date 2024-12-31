import "./style.scss";
import { NavLink } from "react-router-dom";

const Tab = () => {
  return (
    <div className="header_tab">
      <h1>Your notes</h1>
      <div className="header_tab_box">
        <div className="header_tab_box_item">
          <NavLink to="/">All</NavLink>
          <NavLink to="/personal">Personal</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/business">Business</NavLink>
        </div>
        <div className="header_tab_box_actionBtn">
          <NavLink to="/completed">Completed notes</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tab;
