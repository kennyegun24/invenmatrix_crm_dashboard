import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const FormSectionHeader = ({ text, component, setShowFull, showFull }) => {
  return (
    <div className="form_section_header flex align_center justify_between">
      <h2 className="flex align_center gap05rem">
        {text} {component}
      </h2>
      <FaChevronDown
        className="pointer"
        onClick={() => setShowFull((prev) => !prev)}
      />
    </div>
  );
};

export default FormSectionHeader;
