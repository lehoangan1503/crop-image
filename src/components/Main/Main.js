import React from "react";
import { useState } from "react";
import "../../styles/Main.scss";

const Main = () => {
  //state for user url image
  const [urlImage, setUrlImage] = useState("");

  //handle  change of input field
  const handleChange = (e) => {
    const { value } = e.target;
    setUrlImage(value);
  };

  //handle onClick event
  const handleOnClick = (e) => {
    const { name } = e.target;
    if (name === "Crop Image") {
      var animation = document.getElementById("animation-loading");
      animation.style.visibility = "visible";
      setTimeout(() => {
        const canvas = document.getElementById("cropped-canvas-image"),
          ctx = canvas.getContext("2d"),
          image = document.getElementById("cropped-image");
        canvas.style.visibility = "visible";
        canvas.width = "400";
        canvas.height = "400";

        ctx.drawImage(
          image,
          image.naturalWidth * 0.3,
          image.naturalHeight * 0.2,
          image.naturalWidth / 2.5,
          image.naturalHeight / 2,
          0,
          0,
          image.naturalWidth / 2.5,
          image.naturalHeight / 2
        );

        setUrlImage("");
        animation.style.visibility = "hidden";
      }, 3000);
    }
    if (name === "Download") {
      var link = document.createElement("a");
      link.download = "cropped-image.png";
      link.href = document.getElementById("cropped-canvas-image").toDataURL();
      link.click();
    }
    if (name === "Do Another") {
      const canvas = document.getElementById("cropped-canvas-image");
      canvas.style.visibility = "hidden";
      setUrlImage("");
    }
  };

  return (
    <div className="Main">
      <div className="main-container">
        <form>
          <div className="input-url-image">
            <label htmlFor="url-image">Enter url image:</label>
            <input
              id="url-image"
              name="url-image"
              type="text"
              value={urlImage}
              onChange={handleChange}
            />
          </div>

          {urlImage === "" ? (
            ""
          ) : (
            <div className="image-container">
              <img
                crossOrigin="anonymous"
                src={urlImage}
                id="cropped-image"
                alt="You was put a wrong link, please try again!"
              ></img>
            </div>
          )}

          <div className="button-group">
            <input
              name="Crop Image"
              type="button"
              value="Crop Image"
              onClick={handleOnClick}
            />
            <input
              type="button"
              name="Download"
              id=""
              value="Download"
              onClick={handleOnClick}
            />
            <input
              name="Do Another"
              type="button"
              value="Do Another"
              onClick={handleOnClick}
            />
          </div>
        </form>{" "}
        <div id="animation-loading" style={{ visibility: "hidden" }}>
          <div className="dot-item-1"></div>
          <div className="dot-item-2"></div>
          <div className="dot-item-3"></div>
        </div>
        <div className="canvas-result">
          <canvas id="cropped-canvas-image"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Main;
