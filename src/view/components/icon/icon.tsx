import useNavbarStore from "../../../stores/navbar/useNavbarStore";
import "./icon.css";

type IconProps = {
  icon: React.FC;
  onClick: () => void;
};

const Icon: React.FC<IconProps> = ({ icon: IconComponent, onClick }) => {
  const {isShowNavbar} = useNavbarStore();
  
  return (
    <div className="icon-layout" onClick={onClick}>
      <IconComponent  />
    </div>
  );
};

export default Icon;
