import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ imagesData, onShowLargeImg }) => (
  <ul className={styles.imageGallery}>
    {imagesData.map(({ largeImageURL, webformatURL, id }) => (
      <ImageGalleryItem
        url={webformatURL}
        urlLarge={largeImageURL}
        key={id}
        onShowLargeImg={onShowLargeImg}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  onShowLargeImg: PropTypes.func.isRequired,
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
