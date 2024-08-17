import React, { useState } from "react";
import { startDragging } from "./helper";
import InitialScreenContent from "./InitialScreenContent";

const InitialScreen = () => {
  const [height, setHeight] = useState(100); // Initial height

  return (
    <div className="width100">
      <div className="initial_screen_top_logo flex column align_center gap05rem">
        <div className="img_logo" />
        <h2>InvenMatrix</h2>
        <p>All in one Inventory System</p>
        <p className="bot_welcome_text">
          Hi there! I'm MatriBot, your friendly assistant. I'm here to help you
          navigate and make the most out of your inventory dashboard. If you
          have any questions or need assistance, just let me know. Let's make
          managing your inventory a breeze!
        </p>
      </div>
      <div
        className="chat_bot_initial_screen_component"
        style={{ height: `${height}px` }}
      >
        <div
          className="bar_header"
          onMouseDown={(e) => startDragging(e, height, setHeight)}
          onTouchStart={(e) => startDragging(e, height, setHeight)}
        >
          <div className="bar pointer" />
        </div>
        <InitialScreenContent />
      </div>
    </div>
  );
};

export default InitialScreen;
