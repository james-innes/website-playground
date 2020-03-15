import React from "react";

const tree = {
  images: [
    "1.jpg",
    "2.jpg"
  ]
}

export default () => {
  return (
    <div class="gallery">
      {
        tree.images.map(image =>
          (<img src={`http://localhost:1234/images/${image}`} alt="" />)

        )
      }
    </div>
  );
}
