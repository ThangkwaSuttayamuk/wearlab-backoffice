import "./sellButton.css";

type SellButtonProps = {
  title: string;
  onClick: () => void;
  stock: number;
};

const SellButton: React.FC<SellButtonProps> = ({
  title,
  onClick,
  stock,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`sellButton-layout ${stock === 0 ? "outOfStock" : "available"}`}
    >
      <text className="sellButton-text">{title}</text>
    </div>
  );
};

export default SellButton;
