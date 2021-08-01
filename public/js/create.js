// Validate user input and send login request
const handleCreateSubmit = async (event) => {
  event.preventDefault();
  try {
    const snippet_name = document.querySelector("#snippet-name").value.trim();
    const tag_name = document.querySelector("#tag-name").value.trim();
    const snippet = document.querySelector("#snippet-body").value.trim();
    const language = document.querySelector("#language").value;
    if (!snippet_name || !snippet) {
      alert("You must provide a snippet name and body.");
      return;
    }

    // if (password !== confirmPassword) {
    //   alert('Passwords to not match.');
    //   return;
    // }
    console.log(snippet_name);
    console.log(tag_name);
    console.log(snippet);
    console.log(language);
    // console.log(language);
    const response = await fetch("/api/snippets", {
      method: "POST",
      body: JSON.stringify({ snippet_name, snippet, tag_name, language }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to create snippet.");
      return;
    }
    alert("snippet created ");
    // stay on snippet create page
    // window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".create-form")
  .addEventListener("submit", handleCreateSubmit);
