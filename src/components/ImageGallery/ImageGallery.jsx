import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ images, openModal }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
    ))}
  </ul>
);

export default ImageGallery;