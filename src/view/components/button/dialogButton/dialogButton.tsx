import "./dialogButton.css";

type DialogButtonProps = {
  title: string;
  action: () => void;
};

const DialogButton: React.FC<DialogButtonProps> = ({
  title,
  action,
}) => {
  return (
    <div
      className={`dialogButton-layout ${title}`}
      onClick={() => {
        action();
      }}
    >
      <text className={`dialogButton-text ${title}`}>{title}</text>
    </div>
  );
};

export default DialogButton;
