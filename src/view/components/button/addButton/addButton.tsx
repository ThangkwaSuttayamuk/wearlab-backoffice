import useViewModel from "../useViewModel";
import "./addButton.css";

type AddButtonProps = {
  title: string;
  dialogType: string;
};

const AddButton: React.FC<AddButtonProps> = ({ title, dialogType }) => {
  const { setDialog } = useViewModel();

  return (
    <div onClick={() => {
      setDialog(dialogType)
    }} className="addButton-layout">
      <text className="addButton-icon">
        +
      </text>
      <text className="addButton-text">{title}</text>
    </div>
  );
};

export default AddButton;
