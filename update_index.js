const fs = require("fs");
const path = require("path");

const notesDir = path.join(__dirname, "notes");
const indexFile = path.join(__dirname, "index.md");

function updateIndex() {
  try {
    // Read all files in the notes directory
    const files = fs
      .readdirSync(notesDir)
      .filter((file) => file.endsWith(".md"))
      .sort(); // Sort alphabetically

    // Construct the markdown content
    let content = '---\ntitle: "writing"\n---\n\n';

    files.forEach((file) => {
      content += `- [${file}](notes/${file})\n`;
    });

    // Write the updated content to index.md
    fs.writeFileSync(indexFile, content, "utf8");
    console.log(
      "Successfully updated index.md with links from notes directory.",
    );
  } catch (err) {
    console.error("Error updating index.md:", err);
  }
}

updateIndex();
