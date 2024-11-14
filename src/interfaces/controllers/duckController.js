class DuckController {
  constructor(getRandomDuckUseCase, getDucksByNumberUseCase) {
    this.getRandomDuckUseCase = getRandomDuckUseCase;
    this.getDucksByNumberUseCase = getDucksByNumberUseCase;
  }

  async getRandomDuck(req, res) {
    try {
      const url = await this.getRandomDuckUseCase.execute();
      res.json({ url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDucksByNumber(req, res) {
    try {
      const number = parseInt(req.params.number, 10);
      const urls = await this.getDucksByNumberUseCase.execute(number);
      res.json({ urls });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DuckController;
