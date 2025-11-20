const matter = require("gray-matter");
const path = require("path");
const fs = require("fs");

const playersFolderPath = path.join(__dirname, `../../docs/Players`);

const skinSize = { width: 180, height: 432 };

const metadata = `---
title: "Players"
---
`;

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
    if (unsafeCharacters.has(char)) return true;
  }
  return false;
}

function getSkinUrl(markdown) {
  const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    const url = match[1];

    if (url.startsWith("https://s.namemc.com/3d/")) {
      // Split base + params
      const [base, paramString] = url.split("?");
      const params = new URLSearchParams(paramString);

      // Force uniform size
      params.set("width", skinSize.width);
      params.set("height", skinSize.height);

      return `${base}?${params.toString()}`;
    }
  }
  return null;
}

for (const file of fs.readdirSync(playersFolderPath)) {
  if ((!file.endsWith(".md") && !file.endsWith(".mdx")) || file === "index.md")
    continue;

  const filename = file.substring(0, file.lastIndexOf("."));
  const raw = fs.readFileSync(`${playersFolderPath}/${file}`).toString();
  const { data, content } = matter(raw);

  const username = data.title || data.sidebar_label;

  if (username) {
    if (isUnsafe(username)) continue;

    let skinUrl = getSkinUrl(content);

    if (!skinUrl) {
      skinUrl = `https://www.mc-heads.net/body/${username}?width=${skinSize.width}&height=${skinSize.height}`;
    }

    players += `
<a style={${JSON.stringify(styles.playerContainer)}} href="/Players/${filename}">
  <center>
    <h2>${username}</h2>
  </center>
  <img style={${JSON.stringify(styles.img)}} src="${skinUrl}" />
</a>
`;
  }
}

const content = `${metadata}\n${players}`;

fs.writeFileSync(`${playersFolderPath}/index.md`, content);
