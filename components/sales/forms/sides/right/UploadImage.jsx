import React, { useContext } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { LuUploadCloud } from "react-icons/lu";
import Image from "next/image";
import { DragDropContext } from "@/contexts/DragDrop";
import { FaQuestionCircle } from "react-icons/fa";
import { Tooltip } from "antd";

const UploadImage = () => {
  const { images, isDragging, fileInputRef, selectFiles, onFileSelect } =
    useContext(DragDropContext);

  return (
    <div className="flex column gap1rem border_all padding1rem add_product_right_component">
      <FormSectionHeader
        text={"Product Images"}
        component={
          <Tooltip
            title="You can upload manually by clicking on the box below, or drag and drop images automatically... Images should not be more than 5"
            color={"var(--main_bg)"}
          >
            <FaQuestionCircle />
          </Tooltip>
        }
      />
      <label
        htmlFor="upload_images"
        className="border_all padding1rem upload_image_container flex align_center justify_center column gap05rem pointer"
      >
        <LuUploadCloud size={24} />
        {!isDragging && images.length < 5 ? (
          <p className="text_center">
            <strong role="button" onClick={selectFiles}>
              Click anywhere to upload images
            </strong>{" "}
            or drag and drop images (5. max)
          </p>
        ) : isDragging && images.length >= 5 ? (
          <p className="text_center red_text">
            You cant add any additional image
          </p>
        ) : (
          <p className="text_center">Drop images here</p>
        )}
        <input
          ref={fileInputRef}
          onChange={onFileSelect}
          type="file"
          name=""
          multiple
          id="upload_images"
        />
      </label>

      <div className="flex gap05rem wrap">
        {images.map((image, _) => (
          <Image
            src={image.url}
            key={_}
            alt={image.name}
            width={50}
            height={50}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
