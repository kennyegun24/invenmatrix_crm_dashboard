import React from "react";

const FormSectionHeader = ({ text, component }) => {
  return (
    <div className="form_section_header flex align_center justify_between">
      <h2>{text}</h2>
      {component}
    </div>
  );
};

export default FormSectionHeader;
