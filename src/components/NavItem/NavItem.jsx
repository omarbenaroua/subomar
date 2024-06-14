import "./NavItem.css";

const NavItem = (props) => {
  return (
    <>
      <div className="nav-item">{props.children}</div>
    </>
  );
};

export default NavItem;
