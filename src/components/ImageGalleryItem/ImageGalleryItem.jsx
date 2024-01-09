import React from 'react';

const ImageGalleryItem = ({ imageUrl, alt }) => (
  <li className="gallery-item">
    <img src={imageUrl} alt={alt} />
  </li>
);

export default ImageGalleryItem;