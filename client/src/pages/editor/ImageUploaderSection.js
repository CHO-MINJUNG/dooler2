import React from "react";
import ImageUploader from "react-images-upload";

const ImageUploaderSection = () => {
  const onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={this.onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
  );
};

export default ImageUploaderSection;