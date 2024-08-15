import React, { useContext, useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { LuUploadCloud } from "react-icons/lu";
import Image from "next/image";
import { DragDropContext } from "@/contexts/DragDrop";
import { FaQuestionCircle } from "react-icons/fa";
import { Tooltip } from "antd";

const UploadText = ({ isDragging, images, selectFiles }) => (
  <>
    <LuUploadCloud size={28} />
    {!isDragging && images.length < 5 ? (
      <p className="text_center">
        <strong role="button" onClick={selectFiles}>
          Click anywhere to upload images
        </strong>{" "}
        or drag and drop images (5. max)
      </p>
    ) : isDragging && images.length >= 5 ? (
      <p className="text_center red_text">You cant add any additional image</p>
    ) : (
      <p className="text_center">Drop images here</p>
    )}
  </>
);

const UploadImage = () => {
  const { images, isDragging, fileInputRef, selectFiles, onFileSelect } =
    useContext(DragDropContext);
  const [showFull, setShowFull] = useState(true);

  return (
    <div
      className={`flex column gap1rem add_product_right_component border_all padding1rem optional_feeds ${
        showFull && "show_full"
      }`}
    >
      <FormSectionHeader
        text={"Product Images"}
        component={
          <Tooltip
            title="You can upload manually by clicking on the box below, or drag and drop images automatically... Images should not be more than 5"
            color={"var(--main_bg)"}
          >
            <FaQuestionCircle size={13} />
          </Tooltip>
        }
        setShowFull={setShowFull}
        showFull={showFull}
      />
      <label
        htmlFor="upload_images"
        className="dashed_lg_border_all padding1rem upload_image_container flex align_center justify_center column gap1rem pointer"
      >
        <div class="corner-1" />
        <div class="corner-2" />
        <UploadText
          images={images}
          isDragging={isDragging}
          selectFiles={selectFiles}
        />
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
