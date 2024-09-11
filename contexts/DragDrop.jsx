"use client";
import { createContext, useRef, useState } from "react";

export const DragDropContext = createContext();

const DragDropPovider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
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
    setSelectedImages(filesToUpload);
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
    setSelectedImages([]);
  };
  const drop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e?.dataTransfer?.files;
    if (files?.length === 0) return;
    const remainingSlots = 5 - images.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);
    console.log(filesToUpload);
    setSelectedImages(filesToUpload);
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
    <DragDropContext.Provider
      value={{
        images,
        isDragging,
        fileInputRef,
        selectedImages,
        selectFiles,
        onFileSelect,
      }}
    >
      <div onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
        {/* {isDragging && (
          <HoverToUpload images={images} isDragging={isDragging} />
        )} */}
        {children}
      </div>
    </DragDropContext.Provider>
  );
};

export default DragDropPovider;
