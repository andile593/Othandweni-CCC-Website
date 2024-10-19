import "./Header.css";

const Header = () => {
  const openSidebar = () => {
    let sideBar = document.getElementsByClassName("menu-links")[0];

    if (sideBar) {
      if (sideBar.style.display === "none" || !sideBar.style.display) {
        sideBar.style.display = "flex";
      } else {
        sideBar.style.display = "none";
      }
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo"></div>
        <p className="church-name roboto-medium">Othandweni Ethiopian Christians Church </p>
      </div>

      <svg
        className="menu"
        xmlns="http://www.w3.org/2000/svg"
        height="26px"
        viewBox="0 -960 960 960"
        width="26px"
        fill="#000000"
        onClick={openSidebar}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <div className="menu-links">
        <li className="link roboto-regular">Projects</li>
        <li className="link roboto-regular">Skills</li>
        <li className="link roboto-regular">About</li>
        <li className="link roboto-regular">Contact</li>
      </div>
     
    </div>
  );
};

export default Header;
