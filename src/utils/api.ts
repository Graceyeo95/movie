export const fetchTrendingData = async () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('API key is missing!');
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
};
