import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=5891845-66174e067b1f9940a42957e0b&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data);
};

export default { fetchImages };
