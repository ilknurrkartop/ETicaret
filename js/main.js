import headerFunc from "./header.js";
import productsFunc from "./products.js";

(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
})();

