const axios = require("axios");
const DuckRepository = require("../../domain/contracts/duckRepository");

class DuckApiRepository extends DuckRepository {
    async fetchDuckList() {
      try {
        const response = await axios.get("https://random-d.uk/api/list");
        const images = response.data.images;
        if (!Array.isArray(images)) {
          throw new Error("Unexpected response format: images is not an array");
        }
        return images.map((url, index) => ({ id: index, url }));
      } catch (error) {
        throw new Error("Error fetching ducks from API: " + error.message);
      }
    }
  }

module.exports = DuckApiRepository;