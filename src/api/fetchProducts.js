const fetchProducts = async (query) => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${URL}${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
