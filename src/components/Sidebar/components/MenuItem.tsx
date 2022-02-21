import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: React.ReactNode;
  name?: string;
  to: string;
  tip?: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { icon, name, to } = props;

  return (
    <Link
      className="menu"
      style={{
        textDecoration: "none",
        display: "flex",
        flex: "auto",
        justifyItems: "center",
        cursor: "pointer",
        color: "#ff5811",
        width: "auto",
      }}
      to={to}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center',
          width: '30px',
          height: '30px',
          boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          borderRadius: '5px'
        }}
      >
        {icon}
      </div>
      <div
        className="menu-text"
        style={{
          paddingLeft: 12,
          paddingTop: 6,
          fontWeight: 500,
          color: "#000000",
          fontSize: '16px',
          fontFamily: 'Trebuchet MS, sans-serif'
        }}
      >
        {name}
      </div>
    </Link>
  );
};
