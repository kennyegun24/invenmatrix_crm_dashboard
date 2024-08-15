import { Tooltip } from "antd";
import { FaQuestionCircle } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

export const Container = ({ children }) => (
  <div className="flex column container gap1rem">{children}</div>
);

export const SalesContainer = ({ children }) => (
  <div className="flex column sales_container gap1rem">{children}</div>
);

export const FieldTitle = ({
  title,
  helper,
  displayBin,
  click = () => alert("Not working"),
}) => (
  <p className="flex align_center justify_between" style={{ fontSize: "13px" }}>
    <span className="flex gap05rem align_center">
      {title}
      {
        <Tooltip
          title={helper}
          color={"var(--main_bg)"}
          overlayInnerStyle={{ color: "var(--text_color)" }}
        >
          <FaQuestionCircle size={13} />
        </Tooltip>
      }
    </span>
    {displayBin && (
      <IoTrashOutline onClick={() => click()} size={18} className="pointer" />
    )}
  </p>
);
