import header_logo from "../assets/logo.png";
import "./Header.css";

const Header = (props) => {
  const backToUnfilteredList = () => {
    props.renderUnfilteredList();
  };

  return (
    <header className="header">
      <img
        src={header_logo}
        className="header_logo"
        alt="logo"
        onClick={backToUnfilteredList}
      />
    </header>
  );
};

export default Header;
