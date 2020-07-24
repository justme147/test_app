import React, { useEffect } from "react";

import closeIcon from "../assets/img/close_icon.svg";
import deleteIcon from "../assets/img/delete_icon.svg";

export const GallaryFullItem = ({ closeItem, deleteItem, url }) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        closeItem();
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="gallary__full">
      <div className="gallary__inner">
        <img
          src={deleteIcon}
          alt="close_icon"
          className="gallary__delete"
          onClick={() => deleteItem(url)}
          title="Удалить"
        />
        <img
          src={closeIcon}
          alt="close_icon"
          className="gallary__close"
          onClick={() => closeItem()}
          title="Закрыть"
        />
      </div>
      <img src={url} alt={url} className="gallary__image--width" />
    </div>
  );
};
