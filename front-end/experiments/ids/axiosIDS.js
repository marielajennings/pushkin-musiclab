import Axios from 'axios';

const axiosIDS = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api/ids'
      : '//localhost/api/ids'
});

module.exports = axiosIDS;
