class GetRandomDuck {
    constructor(duckRepository) {
      this.duckRepository = duckRepository;
    }
  
    async execute() {
      const duckList = await this.duckRepository.fetchDuckList();
      const randomDuck = duckList[Math.floor(Math.random() * duckList.length)];
      return `https://random-d.uk/api/${randomDuck.url}`;
    }
  }
  
  module.exports = GetRandomDuck;