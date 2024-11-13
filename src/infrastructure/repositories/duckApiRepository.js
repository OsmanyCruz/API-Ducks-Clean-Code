const axios = require("axios");

class DuckApiRepository {
  async fetchDuckList() {
    try {
      const response = await axios.get("https://random-d.uk/api/list");
      return {
        images: response.data.images || [],
        gifs: response.data.gifs || [],
      };
    } catch (error) {
      throw new Error("Error fetching ducks from API: " + error.message);
    }
  }
}

module.exports = DuckApiRepository;