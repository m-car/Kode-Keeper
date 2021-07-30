// Validate user input and send login request
const handleCreateSubmit = async (event) => {
  event.preventDefault();
  try {
    const snippet_name = document.querySelector("#snippet-name").value.trim();
    const tag_name = document.querySelector("#tag-name").value.trim();
    const snippet_body = document.querySelector("#snippet-body").value.trim();

    if (!snippet_name || !snippet_body) {
      alert("You must provide a snippet name and body.");
      return;
    }

    // if (password !== confirmPassword) {
    //   alert('Passwords to not match.');
    //   return;
    // }

    const response = await fetch("/api/snippets", {
      method: "POST",
      body: JSON.stringify({ snippet_name, snippet_body, tag_name }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to create snippet.");
      return;
    }

    // stay on snippet create page
    // window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".create-form")
  .addEventListener("submit", handleCreateSubmit);
