import React, { useState } from "react";
import { GallaryForm } from "./components/GallaryForm";
import { Gallary } from "./components/Gallary";
import { GallaryFullItem } from "./components/GallaryFullItem";

// import { galleryImages } from "./photos.json";

function App() {
  const [photos, setPhotos] = useState([]);

  const [full, setFull] = useState({
    url: "",
    isFull: false,
  });

  // useEffect(() => {
  //   // console.log(galleryImages);
  //   setPhotos(galleryImages);
  // }, []);

  function gallaryItemClick(url) {
    document.body.style.overflow = "hidden";
    setFull({ url, isFull: true });
  }

  function gallaryItemClose() {
    document.body.removeAttribute("style");
    setFull({ url: "", isFull: false });
  }

  function gallaryItemDelete(url) {
    const newPhotos = photos.filter((photo) => photo.url !== url);
    document.body.removeAttribute("style");
    setPhotos(newPhotos);
    setFull({ url: "", isFull: false });
  }

  const uploadImage = (file, e) => {
    e.preventDefault();

    if (!file.length) return;

    setPhotos([...file, ...photos]);
  };

  return (
    <div className="container">
      <GallaryForm submitForm={uploadImage} />
      <Gallary
        photos={photos}
        itemClick={gallaryItemClick}
        deleteItem={gallaryItemDelete}
      />
      {full.isFull && (
        <GallaryFullItem
          closeItem={gallaryItemClose}
          deleteItem={gallaryItemDelete}
          url={full.url}
        />
      )}
    </div>
  );
}

export default App;
