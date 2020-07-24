import React, { useState } from "react";
import { GallaryDropzone } from "./GallaryDropzone";

export const GallaryForm = ({ submitForm }) => {
  const [path, setPath] = useState("");
  const [file, setFile] = useState([]);
  const [countFile, setCountFile] = useState(0);

  const submitHandler = (e) => {
    if (path !== "") {
      submitForm([{ url: path, width: "auto", height: "auto" }, ...file], e);
      setFile([]);
      setPath("");
      setCountFile(0);
      return;
    }

    submitForm(file, e);
    setFile([]);
    setCountFile(0);
  };

  const fileHandler = (files) => {
    const paths = [];

    setCountFile(files.length);

    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      if (/image.*/.test(files[i].type)) {
        reader.readAsDataURL(files[i]);
      } else if (/application.json/.test(files[i].type)) {
        reader.readAsText(files[i]);
      }
      reader.onload = () => {
        const result = reader.result;
        if (/image.*/.test(files[i].type)) {
          const newResult = {
            url: result,
            width: "auto",
            height: "auto",
          };
          paths.push(newResult);
        } else if (/application.json/.test(files[i].type)) {
          const some = [];
          Object.values(JSON.parse(result)).map((item) => some.push(...item));
          console.log(some);
          paths.push(...some);
        }
      };
    }
    setFile(paths);
  };

  return (
    <form className="form-loading">
      <div className="form-loading__inner">
        <label htmlFor="input-path">Введите путь до картинки</label>
        <input
          type="text"
          id="input-path"
          className="form-loading__input"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          className="form-loading__input"
          placeholder="Введите URL картинки"
        />
      </div>
      <GallaryDropzone filesHandler={fileHandler} filesCount={countFile} />
      <button onClick={(e) => submitHandler(e)} className="form-loading__btn">
        Загрузить
      </button>
    </form>
  );
};
