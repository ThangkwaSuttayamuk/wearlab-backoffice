import DialogButton from "../button/dialogButton/dialogButton";
import "./primaryPopUp.css";
import useViewModel from "./useViewModel";

const PrimaryPopUp: React.FC = () => {
  const { setInitialState, title, message } = useViewModel();

  return (
    <div className="primary-pop-up-background">
      <div className="primary-pop-up-group-layout">
        <text className="primary-pop-up-text head">{title}</text>
        <div className="primary-pop-up-group-form-layout">
          <div className="primary-pop-up-form-group">
            <text className="primary-pop-up-text">
              {message}
            </text>
          </div>
        </div>
        <div className="primary-pop-up-form-group bottom">
          <DialogButton title={"Close"} action={setInitialState} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryPopUp;
