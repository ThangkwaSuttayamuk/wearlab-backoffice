import "./navbar.css";
import useViewModel from "./useViewModel";

export default function Navbar() {
  const { listNavbar, activeButton, onClick, isShowNavbar } = useViewModel();
  return (
    <div className={`navbar-layout ${isShowNavbar ? "isShowNavbar" : ""}`}>
      {listNavbar.map((item) => {
        return (
          <div
            className={`navbar-button-layout ${
              activeButton === item.id ? "active" : ""
            }`}
            onClick={() => {
              onClick(item.id);
            }}
          >
            <img
              src={item.icon}
              alt="navbarIcon "
              className={`navbar-icon ${isShowNavbar ? "isShowNavbar" : ""}`}
            />
            {isShowNavbar && (
              <text
                className={`navbar-text ${
                  activeButton === item.id ? "active" : ""
                }`}
              >
                {item.title}
              </text>
            )}
          </div>
        );
      })}
    </div>
  );
}
