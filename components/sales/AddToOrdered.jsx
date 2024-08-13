import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa6";
const AddToOrdered = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <Modal
        title="Record New Order"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex column gap05rem padding1rem">
          <section className="flex column gap05rem">
            <p style={{ letterSpacing: "1px" }}>
              <strong>Product:</strong> ihqkakh
            </p>
            <p style={{ letterSpacing: "1px" }}>
              <strong>Barcode:</strong> 123456789
            </p>
          </section>
          <section className="flex column gap05rem">
            <strong>Quantity</strong>
            <div className="flex gap1rem align_center">
              <Button
                disabled={num === 0}
                onClick={() => setNum((e) => e - 1)}
                icon={<FaMinus />}
              />
              <strong>{num}</strong>
              <Button onClick={() => setNum((e) => e + 1)} icon={<FaPlus />} />
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};
export default AddToOrdered;
