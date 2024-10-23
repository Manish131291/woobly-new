import "./Divider.styles.scss";

interface DividerProps {
  size?: "thin" | "normal" | "thick";
  text?: string;
  classes?: string;
}

export const Divider: React.FC<DividerProps> = ({
  size = "normal",
  text,
  classes,
}: DividerProps) => {
  return (
    <>
      <div className={`divider divider--${size} ${classes ?? ""}`}>
        <span className="divider__line"></span>
        {text && <span className="divider__text">{text}</span>}
        <span className="divider__line"></span>
      </div>
    </>
  );
};
