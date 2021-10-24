const axios = require('axios').default;

const URL = 'https://api.quotable.io';

module.exports = {
  async getRandomQuote() {
    try {
      const response = await axios.get(URL + '/random');
      return response.data;
    } catch (error) {
      return error.message || 'Unknown error.';
    }
  },
};
