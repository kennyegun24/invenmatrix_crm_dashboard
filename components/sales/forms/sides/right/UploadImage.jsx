import React, { useRef, useState } from "react";
import FormSectionHeader from "../../FormSectionHeader";
import { LuUploadCloud } from "react-icons/lu";
import Image from "next/image";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef();

  const selectFiles = () => {
    fileInputRef.current.click();
  };
  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files?.length === 0) return;
    const remainingSlots = 5 - images.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);
    const newImages = filesToUpload.reduce((acc, file) => {
      if (
        file.type.split("/")[0] === "image" &&
        !images.some((img) => img.name === file.name)
      ) {
        acc.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
      }
      return acc;
    }, []);
    setImages((prev) => [...prev, ...newImages]);
  };

  const dragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const drop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e?.dataTransfer?.files;
    if (files?.length === 0) return;
    const remainingSlots = 5 - images.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);
    const newImages = filesToUpload.reduce((acc, file) => {
      if (
        file.type.split("/")[0] === "image" &&
        !images.some((img) => img.name === file.name)
      ) {
        acc.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
      }
      return acc;
    }, []);
    setImages((prev) => [...prev, ...newImages]);
  };
  return (
    <div
      className="flex column gap1rem border_all padding1rem add_product_right_component"
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={drop}
    >
      <FormSectionHeader text={"Product Images"} />
      <label
        htmlFor="upload_images"
        className="border_all padding1rem upload_image_container flex align_center justify_center column gap05rem pointer"
      >
        <LuUploadCloud size={24} />
        {!isDragging ? (
          <p className="text_center">
            <strong role="button" onClick={selectFiles}>
              Click anywhere to upload images
            </strong>{" "}
            or drag and drop images (5. max)
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
