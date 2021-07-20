import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, urlLarge, id, onShowLargeImg }) => (
  <li key={id} className="ImageGalleryItem">
    <img
      onClick={onShowLargeImg}
      src={url}
      data-source={urlLarge}
      alt=""
      className={styles.imageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  onShowLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
