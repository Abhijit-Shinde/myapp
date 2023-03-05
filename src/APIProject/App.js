import SearchBar from "./SearchBar";
import searchImage from "./api";
import ImageList from "./ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImage(term);
    setImages(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
