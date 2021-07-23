import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, onShowLargeImg }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={onShowLargeImg}
      src={url}
      alt=""
      className={styles.imageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onShowLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
