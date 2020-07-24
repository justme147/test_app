import React from "react";
import { GallaryItem } from "./GallaryItem";

export const Gallary = ({ photos, itemClick, deleteItem }) => {
  if (!photos.length) {
    return <p className="gallary__empty">Изображений пока нет.</p>;
  }

  return (
    <section className="gallary">
      {photos.map((photo, idx) => (
        <GallaryItem
          photo={photo}
          key={photo.url + idx}
          itemClick={itemClick}
          itemDelete={deleteItem}
        />
      ))}
    </section>
  );
};
