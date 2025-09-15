const matter = require("gray-matter");
const path = require("path");
const fs = require("fs");

const playersFolderPath = path.join(__dirname, `../../docs/Players`);
const skinSize = { width: 180, height: 432 };
const metadata = `---
title: "Players"
---
`;

// To add gradient
// backgroundImage: "linear-gradient(to top, #0c0c0c, rgba(0, 0, 0, 0))"
const styles = {
  img: {
    display: "inline-block",
    padding: 0,
    margin: 0,
    "max-width": skinSize.width + "px",
    "max-height": skinSize.height + "px",
  },
  playerContainer: {
    display: "inline-block",
    padding: "10px",
    margin: "10px",
    "border-radius": "5px",
  },
};

let players = "";

const unsafeCharacters = new Set(["<", ">", "'", '"', "&"]);
function isUnsafe(text) {
  for (const char of text) {
    return unsafeCharacters.has(char);
  }

  return false;
}

function getSkinUrl(markdown, overrideSize = true) {
  const urls = [];

  const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
  while ((match = regex.exec(markdown)) !== null) {
    urls.push(match[1]);
  }

  for (const url of urls) {
    if (url.startsWith("https://s.namemc.com/3d/"))
      return overrideSize
        ? url.replace(
            `width=100&height=200`,
            `width=${skinSize.width}&height=${skinSize.height}`
          )
        : url;
  }
}

for (const file of fs.readdirSync(playersFolderPath)) {
  if ((!file.endsWith(".md") && !file.endsWith(".mdx")) || file == "index.md")
    continue;

  const filename = file.substring(0, file.lastIndexOf("."));

  const { data, content } = matter(
    fs.readFileSync(`${playersFolderPath}/${file}`).toString()
  );
  const username = data.title || data.sidebar_label;

  if (username) {
    if (isUnsafe(username)) continue;

    let skinUrl = getSkinUrl(content);
    if (!skinUrl) skinUrl = `https://www.mc-heads.net/body/${username}`;

    players += `
    <a style={${JSON.stringify(
      styles.playerContainer
    )}} href="/Players/${filename}">
      <center>
        <h2>${username}</h2>
      </center>
      <img style={${JSON.stringify(styles.img)}} src="${skinUrl}"/>
    </a>\n`;
  }
}

const content = `${metadata}\n${players}`;

fs.writeFileSync(`${playersFolderPath}/index.md`, content);
