const searchButtonEl = document.getElementById("searchButton");
const inputEl = document.getElementById("searchInput");
const dropdownEl = document.getElementByName("language")[0].value;

searchButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  //   const search = inputEl.value;
  //   window.location.replace(`/find/${search}`);
  console.log("=========================" + dropdownEl.value);
  console.log(inputEl.value);
});
