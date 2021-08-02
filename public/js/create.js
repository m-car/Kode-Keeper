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

    sectionEl.remove();

    const modal = document.createElement("h1");
    const subText = document.createElement("p");
    modal.setAttribute("class", "title has-text-centered mt-3");
    subText.setAttribute("class", "sub has-text-centered is-size-6");

    modal.textContent = "Snippet Created!";
    subText.textContent =
      "Your newly created Snippet can be found under the 'Find' tag.";
    container.append(modal);
    modal.append(subText);

    document.rem;
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".create-form")
  .addEventListener("submit", handleCreateSubmit);

const sectionEl = document.querySelector("#section");

const container = document.querySelector("#container");
