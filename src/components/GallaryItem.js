import React, { useState } from "react";

export const GallaryItem = ({ photo, itemClick, itemDelete }) => {
  const loadHandler = () => {
    itemDelete(photo.url);
  };

  return (
    <div className="gallary__item" onClick={() => itemClick(photo.url)}>
      <img
        src={photo.url}
        alt={photo.url}
        className="gallary__image"
        onError={() => loadHandler()}
      />
      <span className="gallary__descr">Description</span>
    </div>
  );
};
