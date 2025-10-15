import "./Header.css";

const Header = () => {
  const openSidebar = () => {
    let sideBar = document.getElementsByClassName("menu-links")[0];
    let body = document.body;

    if (sideBar) {
      if (sideBar.style.display === "none" || !sideBar.style.display) {
        sideBar.style.display = "flex";
        body.style.overflow = "hidden";
      } else {
        sideBar.style.display = "none";
        body.style.overflow = "auto";
      }
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo"></div>
        <a className="church-name roboto-medium" href="/">Othandweni Ethiopian Christians Church </a>
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
        <a className="link roboto-regular" href="/sermons&teachings">Sermons & Teachings</a>
        <a className="link roboto-regular" href="/news">News</a>
        <a className="link roboto-regular" href="/ministries">Ministries</a>
        <a className="link roboto-regular" href="/media">Gallery</a>
        <a className="link roboto-regular" href="/donate">Donate</a>
        <a className="link roboto-regular" href="/contact">Contact</a>
      </div>
     
    </div>
  );
};

export default Header;
