const BASE_URL = 'https://swapi.dev/api';

export const getCharacters = async (page = 1, search = '') => {
  const response = await fetch(`${BASE_URL}/people/?page=${page}&search=${search}`);
  return response.json();
};
