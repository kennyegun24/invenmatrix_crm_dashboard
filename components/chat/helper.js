export const startDragging = (e, height, setHeight) => {
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
