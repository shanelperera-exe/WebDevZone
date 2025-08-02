import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} alt="Random Image" />

    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
        alt="Pizza"
        className="food-img"
      />
      <img
        src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
        alt="Burger"
        className="food-img"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGxJQNLQ_tpfDqgGfFpEARarc7qNGTDVEYg&s"
        alt="Pasta"
        className="food-img"
      />
    </div>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
  </div>,
  document.getElementById("root")
);
