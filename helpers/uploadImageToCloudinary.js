import axios from "axios";
// import Resizer from "react-image-file-resizer";

export const uploadImages = async (selectedImages, Resizer) => {
  const uploadPreset = "ml_default";
  const cloud_name = "drfqge33t";

  const maxWidth = 450;
  const maxHeight = 700;
  const quality = 85;
  const fileType = "image/*";
  const uploadedImageUrls = [];

  const promises = selectedImages?.map((img) => {
    return new Promise((resolve, reject) => {
      try {
        Resizer.imageFileResizer(
          img,
          maxWidth,
          maxHeight,
          fileType,
          quality,
          0,
          async (resizedImage) => {
            const formData = new FormData();
            formData.append("file", resizedImage);
            formData.append("upload_preset", uploadPreset);

            try {
              const postCloudinary = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                formData
              );
              const imageUrl = postCloudinary.data.secure_url;
              console.log(imageUrl);
              uploadedImageUrls.push(imageUrl);
              resolve();
            } catch (error) {
              console.error("Error uploading image:", error);
              reject(error);
            }
          },
          "base64"
        );
      } catch (error) {
        console.error("Error processing image:", error);
      }
    });
  });

  await Promise.all(promises);
  console.log(uploadedImageUrls, "uploadedImages");
  return uploadedImageUrls;
};
