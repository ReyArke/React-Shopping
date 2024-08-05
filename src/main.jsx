// import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import App from "./App";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";


 

// const categories = [
//   "electronics",
//   "jewelry",
//   "men's clothing",
//   "women's clothing",
// ];

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router} />);

//view - react note
// const app=createElement
// ("div",
//     {id:"category-section",className:"p-5"},

//     createElement("p", {className:"text-2xl text-grey-500 mb-4"}, 
//       "Product Categories"
//     ),

//     createElement(
//       "div",
//       null,
//       ...categories.map((category) => createElement("button", 
//         {className:"border px-4 py-2 me-2 border-black"},
//          category
//           )
//         )
//     )  
//   );
// console.log(app);

//view render



// const title = document.createElement("p");

// title.innerText = "Product Categories";
// title.classList.add("text-2xl", "text-grey-500","mb-4");



// const categoryButton = (categoryName) => {
//   const btn = document.createElement("button");
//   btn.innerText = categoryName;
//   btn.innerText = categoryName;
//   btn.classList.add("border", "px-4", "py-2", "me-2", "border-black");
//   return btn;
// };

// root.append(title);

// categories.forEach((category) => root.append(categoryButton(category)));
