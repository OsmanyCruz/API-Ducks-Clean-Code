class GetRandomDuckUseCase {
  constructor(duckRepository) {
    this.duckRepository = duckRepository;
  }

  async execute() {
    const { images, gifs } = await this.duckRepository.fetchDuckList();

    // Combinar ambos arrays
    const allItems = [...images, ...gifs];

    if (allItems.length === 0) {
      throw new Error("No ducks available to select.");
    }

    // Seleccionar un elemento aleatorio
    const randomIndex = Math.floor(Math.random() * allItems.length);
    const randomDuck = allItems[randomIndex];

    // Generar la URL completa
    return `https://random-d.uk/api/${randomDuck}`;
  }
}

module.exports = GetRandomDuckUseCase;
