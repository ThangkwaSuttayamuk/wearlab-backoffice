import "./initialCircle.css";

type InitialCircleProps = {
  initial: string;
};

const InitialCircle: React.FC<InitialCircleProps> = ({ initial }) => {
  return (
    <div className="initial-circle-layout">
      <text className="initial-text">{initial}</text>
    </div>
  );
};

export default InitialCircle;
