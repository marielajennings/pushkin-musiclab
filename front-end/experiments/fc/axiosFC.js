import Axios from 'axios';

const axiosFC = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api/fc'
      : '//localhost/api/fc'
});

module.exports = axiosFC;
