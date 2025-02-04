import { NavLink } from "react-router-dom";
import { primaryMenuLinks } from "../navigation/HeaderMenuLinks";

const HeaderNav = () => {
  return (
    <div className="text-white gap-4 flex">
      {primaryMenuLinks.map((item) => (
        <NavLink
          className="text-white"
          to={item.path}
          key={item.title}
          style={{
            textDecoration: "none",
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderNav;
