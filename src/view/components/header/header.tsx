import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMenu,
} from "react-icons/md";
import Icon from "../icon/icon";
import InitialCircle from "../initialCircle/initialCircle";
import ImageLogo from "./../../../assets/images/logo.jpg";
import "./header.css";
import useViewModel from "./useViewModel";

export default function Header() {
  const { isShowNavbar, onClickNavbarHeaderIcon } = useViewModel();

  return (
    <div className="header-layout">
      <div className={`header-menu`}>
        <Icon
          icon={MdMenu as React.FC}
          onClick={() => {
            onClickNavbarHeaderIcon();
          }}
        />
      </div>
      <div className="header-logo-layout">
        <img src={ImageLogo} alt="logo" className="header-logo-image" />
        <div className="header-logo-text-group">
          <text className="header-logo-text">Wearlab</text>
          <text className="header-backoffice-text">back office site</text>
        </div>
        <div className={`header-navbar ${isShowNavbar}`}>
          <Icon
            icon={
              (isShowNavbar
                ? MdKeyboardArrowLeft
                : MdKeyboardArrowRight) as React.FC
            }
            onClick={() => {
              onClickNavbarHeaderIcon();
            }}
          />
        </div>
      </div>

      <div className="header-user-layout">
        <InitialCircle initial="P" />
        <div className="header-user-layout text">
          <div className="header-name-layout">
            <text className="header-user-text">Pawida Suttayamuk</text>
            <text className="header-role-text">Admin</text>
          </div>
          <Icon icon={MdKeyboardArrowDown as React.FC} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
