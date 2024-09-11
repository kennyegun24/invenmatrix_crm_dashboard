import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
const AddToOrdered = ({ item, isModalOpen, setIsModalOpen }) => {
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
        okText={"Confirm"}
        onCancel={handleCancel}
        centered
      >
        <div className="flex column gap1rem padding1rem">
          <Image
            style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
            src={item?.images[0]}
            height={125}
            width={150}
          />
          <div>
            <h3>Product Name</h3>
            <p>Random product</p>
          </div>
          <div>
            <h3>Barcode</h3>
            <p>ABC-123456</p>
          </div>
          <section className="flex column gap05rem align_center">
            <strong>Quantity</strong>
            <div
              className="flex gap1rem align_center justify_between"
              style={{
                width: "100%",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
            >
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
