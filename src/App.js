import React, { Component } from 'react';
import imagesApi from './Components/Services/images-api';
import './App.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Layout from './Components/Layout';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    images: [],
    largeImg: '',
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showLargeImg = e => {
    this.setState({ largeImg: e.currentTarget.dataset.source });
    this.toggleModal();
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(({ hits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        console.log(this.state.images);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImg } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    const shouldRenderText = images.length === 0 && !isLoading;

    return (
      <Layout onChange={this.onChangeQuery}>
        {error && <span>Жизь-боль, все пропало!</span>}

        {shouldRenderText && (
          <p className="text">
            Ищущим какую-нибудь вещь приходится или найти ее, или дойти до
            отрицания нахождения и признания ее невоспринимаемости, или
            упорствовать в отыскивании.
          </p>
        )}

        <ImageGallery imagesData={images} onShowLargeImg={this.showLargeImg} />

        {isLoading && (
          <Loader type="Puff" color="#f158b1" height={50} width={50} />
        )}

        {shouldRenderLoadMoreButton && (
          <Button onFetchImages={this.fetchImages} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt="" />
          </Modal>
        )}
      </Layout>
    );
  }
}

export default App;
