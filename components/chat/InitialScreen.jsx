import React, { useState, useRef } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const InitialScreen = () => {
  const [height, setHeight] = useState(100); // Initial height
  const containerRef = useRef(null);

  const startDragging = (e) => {
    const isTouch = e.type === "touchstart";
    const startY = isTouch ? e.touches[0].clientY : e.clientY;
    const startHeight = height;

    const onMove = (e) => {
      const moveY = isTouch ? e.touches[0].clientY : e.clientY;
      let newHeight = startHeight - (moveY - startY);

      if (newHeight > 400) {
        newHeight = 400;
      }

      if (newHeight < 100) {
        newHeight = 100;
      }

      setHeight(newHeight);
    };

    const onEnd = () => {
      document.removeEventListener(isTouch ? "touchmove" : "mousemove", onMove);
      document.removeEventListener(isTouch ? "touchend" : "mouseup", onEnd);
    };

    document.addEventListener(isTouch ? "touchmove" : "mousemove", onMove);
    document.addEventListener(isTouch ? "touchend" : "mouseup", onEnd);
  };

  return (
    <div
      className="chat_bot_initial_screen_component"
      style={{ height: `${height}px` }}
      ref={containerRef}
    >
      <div
        className="bar_header"
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        <div className="bar pointer" />
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        neque non deserunt cumque voluptate totam saepe, tempore labore velit
        quae, repudiandae in? Magni saepe ad fuga sapiente a, architecto
        ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique magnam sed quidem! Eligendi, praesentium neque. Numquam iusto
        aut praesentium obcaecati, laborum quaerat harum aliquid minus nesciunt
        doloribus earum quis repellat? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate illum voluptas magni minima inventore
        eligendi sed corporis cumque fuga deleniti, incidunt officiis, nostrum
        temporibus dicta at dolores labore cupiditate facilis! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nulla quis eos esse
        mollitia minus aliquid, distinctio, dolor, magni soluta alias nihil
        tempora quas pariatur cupiditate quam. Dolores commodi voluptas cumque.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae
        vero maiores maxime? Consequatur iure facilis ipsa cum ab, sint sunt
        ipsum, quis tempora odit architecto, in aperiam libero obcaecati. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque cum
        unde saepe beatae fugiat, magni alias natus? Consequatur nihil maxime
        quibusdam accusantium aperiam cupiditate laborum officia quasi dolor
        eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        quia magni velit molestias fugiat explicabo dicta atque tempore magnam
        fuga quasi modi, optio sapiente mollitia incidunt. Dolor officia porro
        repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vero at consequuntur facilis repellendus voluptatum delectus, sed
        reiciendis ex maxime dolores sint, amet et in impedit eveniet eligendi
        harum voluptas officia. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Distinctio aspernatur id sint minus dolorem, vero nam
        ratione architecto voluptate dolore culpa tenetur, quo placeat, possimus
        rem voluptatibus maiores porro ab! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Officiis iure, asperiores dolores, aperiam
        nisi laboriosam porro id fuga aspernatur maiores obcaecati, alias
        expedita magni accusamus natus a officia ad? Dignissimos. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Nam aliquid beatae eaque
        pariatur. Dolorum quod ad aliquam vitae cupiditate. Quia veritatis iste
        dolores suscipit voluptates esse sequi. Distinctio, molestiae quas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, amet
        culpa quam architecto magnam ullam similique quisquam ex esse minus
        explicabo deserunt totam aperiam accusamus assumenda animi. Adipisci,
        architecto exercitationem? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Asperiores nobis odio a impedit aut sapiente neque
        temporibus, molestias labore fuga doloremque, laudantium vel esse quidem
        rerum delectus at eum eius? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Minima unde, vel officia nostrum hic, qui incidunt
        sunt, consequuntur nemo odio atque repellat dignissimos id ut cumque
        assumenda dolore eligendi quam? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Omnis beatae aperiam placeat quasi aliquam sit cumque
        id explicabo cum asperiores. Consequuntur impedit, maxime qui quae
        dignissimos enim aliquam inventore nobis? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ad aliquam impedit earum, facere natus
        incidunt. Aperiam nesciunt at non, dicta quod molestiae saepe
        accusantium distinctio labore nulla eaque illo cumque?
      </div>
    </div>
  );
};

export default InitialScreen;
