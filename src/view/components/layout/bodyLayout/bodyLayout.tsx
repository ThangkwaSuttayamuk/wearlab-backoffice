import useNavbarStore from "../../../../stores/navbar/useNavbarStore";
import "./bodyLayout.css";

type BodyLayoutProps = {
  children: any;
  header: string;
  filter?: any;
};

const BodyLayout: React.FC<BodyLayoutProps> = ({
  children,
  header,
  filter,
}) => {
  const {isShowNavbar} = useNavbarStore();

  return (
    <div className={`bodyLayout-layout ${isShowNavbar}`}>
      <div className="bodyLayout-header-layout">
        <text className="bodyLayout-header-text">{header}</text>
        {filter}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BodyLayout;
