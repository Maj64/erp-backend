// public/upload.js
document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("file-input");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  try {
    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);
    alert("File uploaded successfully");
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to upload file");
  }
});

// public/upload.js
// ...

const fileListContainer = document.getElementById("file-list-container");

// Function to fetch and display the list of uploaded files
async function fetchAndDisplayFiles() {
  try {
    const response = await fetch("/files");
    const result = await response.json();

    if (result.status === "success") {
      fileListContainer.innerHTML = "";
      result.files.forEach((file) => {
        const listItem = document.createElement("li");
        const fileLink = document.createElement("a");
        fileLink.href = `/uploads/${file}`;
        fileLink.target = "_blank";
        fileLink.innerText = file;
        listItem.appendChild(fileLink);
        fileListContainer.appendChild(listItem);
      });
    } else {
      alert("Failed to fetch files");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to fetch files");
  }
}

// Fetch and display files when the page loads
fetchAndDisplayFiles();

// Update the file list when a file is uploaded
document.getElementById("upload-form").addEventListener("submit", async (e) => {
  // ...
  if (response.ok) {
    await fetchAndDisplayFiles();
  }
});
