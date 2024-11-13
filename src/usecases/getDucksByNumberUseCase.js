class GetDucksByNumberUseCase {
  constructor(duckRepository) {
    this.duckRepository = duckRepository;
  }

  async execute(number) {
    if (typeof number !== "number" || number < 0) {
      throw new Error("Invalid number parameter. Must be a positive integer.");
    }

    const { images, gifs } = await this.duckRepository.fetchDuckList();

    // Combinar imágenes y GIFs
    const allItems = [...images, ...gifs];

    // Filtrar elementos que contienen el número
    const filteredItems = allItems.filter((item) => item.includes(`${number}`));

    // Generar URLs completas
    const urls = filteredItems.map((item) => `https://random-d.uk/api/${item}`);

    return urls;
  }
}

module.exports = GetDucksByNumberUseCase;
