import axios from "axios";
import { accessKey, unsplashUrl } from "./secrets";

const searchImage = async (searchTerm) => {
  const response = await axios.get(`${unsplashUrl}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImage;
