class DuckController {
  constructor(getRandomDuckUseCase) {
    this.getRandomDuckUseCase = getRandomDuckUseCase;
  }

  async getRandomDuck(req, res) {
    try {
      const url = await this.getRandomDuckUseCase.execute();
      res.json({ url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DuckController;
