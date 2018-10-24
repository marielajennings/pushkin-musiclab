import Axios from 'axios';

const axiosCB = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api/cb'
      : '//localhost/api/cb'
});

module.exports = axiosCB;
