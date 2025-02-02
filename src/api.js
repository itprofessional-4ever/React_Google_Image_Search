import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ebd-CfbTMQzq0waQ9AyM33FsCjPO5PgNuRu_WlCs0dg'
    },
    params: {
      query: 'term',
    }
  });

  return response.data.results;
}

export default searchImages;