class GetDucksByNumber {
    constructor(duckRepository) {
      this.duckRepository = duckRepository;
    }
  
    async execute(number) {
      const duckList = await this.duckRepository.fetchDuckList();
      return duckList
        .filter((_, index) => index === number)
        .map((duck) => `https://random-d.uk/api/${duck.url}`);
    }
  }
  
  module.exports = GetDucksByNumber;