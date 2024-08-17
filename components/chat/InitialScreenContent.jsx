import React from "react";
import "./initial_content.css";
import {
  FaAngleRight,
  FaCircleInfo,
  FaMessage,
  FaPaperPlane,
  FaQuestion,
  FaRobot,
} from "react-icons/fa6";

const InitialScreenContent = () => {
  return (
    <div className="initial_screen_content flex column gap1rem width100">
      <div className="flex width100 align_center initial_screen_row justify_between">
        <h3 className="flex align_center gap05rem">
          <FaMessage /> What is InvenMatrix?
        </h3>
        <FaAngleRight />
      </div>
      <div className="flex width100 align_center initial_screen_row justify_between">
        <h3 className="flex align_center gap05rem">
          <FaCircleInfo /> About us
        </h3>
        <FaAngleRight />
      </div>
      <div className="flex width100 align_center initial_screen_row justify_between">
        <h3 className="flex align_center gap05rem">
          <FaQuestion /> What&apos;s New
        </h3>
        <FaAngleRight />
      </div>
      <div className="flex width100 align_center initial_screen_row justify_between">
        <h3 className="flex align_center gap05rem">
          <FaRobot size={20} /> Talk to MatriBot
        </h3>
        <FaPaperPlane />
      </div>
    </div>
  );
};

export default InitialScreenContent;
