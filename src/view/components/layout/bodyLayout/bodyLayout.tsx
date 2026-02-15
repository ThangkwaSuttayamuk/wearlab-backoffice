import useDialogStore from "../../../../stores/dialog/useDialogStore";
import useNavbarStore from "../../../../stores/navbar/useNavbarStore";
import FilterCollapse from "../../collapse/filterCollapse";
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
  const { isShowNavbar } = useNavbarStore();
  const { typeDialog } = useDialogStore();

  return (
    <div className={`bodyLayout-layout ${isShowNavbar}`}>
      <div className="bodyLayout-header-layout">
        <text className="bodyLayout-header-text">{header}</text>
        {filter}
      </div>
      {typeDialog === "Filter Product" && <FilterCollapse />}
      <div className="bodyLayout-content">
        {children}
      </div>
    </div>
  );
};

export default BodyLayout;
