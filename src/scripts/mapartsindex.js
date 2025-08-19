const path = require("path");
const fs = require("fs");

const mapartsFolderPath = path.join(__dirname, `../../static/img/maparts`);
const docsFolderPath = path.join(__dirname, `../../docs`);
const mapSize = { width: 60, height: 60 };
const metadata = `---
title: "Maparts gallery"
description: The mapart gallery of the wiki
sidebar_position: 2
---
:::warning

Some of these images may not be suitable for immature audiences.

:::\n
`;

// To add gradient
// backgroundImage: "linear-gradient(to top, #0c0c0c, rgba(0, 0, 0, 0))"
const styles = {
  "dim-text": {
    color: "#a7a7a7",
  },
  img: {
    display: "inline-block",
    padding: 0,
    margin: 0,
    "max-width": mapSize.width + "vw",
    "max-height": mapSize.height + "vh",
  },
  mapartContainer: {
    display: "inline-block",
    margin: "5px",
    "border-radius": "5px",
  },
};

//    { mapart type } v          v { mapart author }
//const maparts: Map<string, Map<string, string[]>> = new Map()
//                                       ^ maparts (html elements)

const maparts = new Map()

const unsafeCharacters = new Set(["<", ">", "'", '"', "&"]);
function isUnsafe(text) {
  for (const char of text) {
    return unsafeCharacters.has(char);
  }

  return (
    !text.endsWith(".png") && !text.endsWith(".jpg") && !text.endsWith(".jpeg")
  );
}

function getFileName(filename) {
  return filename.substring(0, filename.lastIndexOf("."));
}

function getMapartMetadata(filename) {
  // filename without the extension
  if (filename.includes("|")) {
    let name = filename.split("|")[0];
    let dimensions = filename.split("|")[1];

    if (name == "") name = null;
    if (dimensions == "") dimensions = null;

    return { dimensions, name };
  } else return { dimensions: null, name: filename };
}

function getMapartElements(path, author, dimensions, name) {
  const dimTextStyles = JSON.stringify(styles["dim-text"]);

  return `
  <a style={${JSON.stringify(styles.mapartContainer)}} href="${path}" target="_blank">
    <img style={${JSON.stringify(styles.img)}} src="${path}"/>
    <center>
      ${dimensions
      ? `<span style={${dimTextStyles}}>[ ${dimensions} ]</span>`
      : ""
      }
      ${name ? `<h2>${name}</h2>` : ""}
    </center>
  </a>
  `;
}


for (const mapartType of fs.readdirSync(mapartsFolderPath, {
  withFileTypes: true,
})) {
  if (!mapartType.isDirectory()) continue;
  maparts.set(mapartType.name, new Map())
  const typeMap = maparts.get(mapartType.name)

  for (const mapartFileOrEntity of fs.readdirSync(
    path.join(mapartsFolderPath, mapartType.name),
    { withFileTypes: true }
  )) {
    if (isUnsafe(mapartFileOrEntity.name)) continue;

    if (mapartFileOrEntity.isDirectory()) {
      typeMap?.set(mapartFileOrEntity.name, [])
      const authorArray = typeMap?.get(mapartFileOrEntity.name)

      for (const mapart of fs.readdirSync(
        path.join(mapartsFolderPath, mapartType.name, mapartFileOrEntity.name),
        { withFileTypes: true }
      )) {
        if (mapart.isDirectory()) continue;
        if (isUnsafe(mapart.name)) continue;

        const mapartPath = `/img/maparts/${mapartType.name}/${mapartFileOrEntity.name}/${mapart.name}`;
        const { dimensions, name } = getMapartMetadata(
          getFileName(mapart.name)
        );

        authorArray?.push(getMapartElements(mapartPath, mapartFileOrEntity.name, dimensions, name) + "\n");
      }
    }
  }
}

let content = metadata;

maparts.forEach((mapartsFromType, mapartType, f) => {
  content += `## Maparts by ${mapartType}\n`

  mapartsFromType.forEach((maparts, author) => {
    content += `### ${author.replaceAll("-", " ").replaceAll("|", ", ")}\n`;
    content += maparts.join("\n")
  });
});

fs.writeFileSync(`${docsFolderPath}/maparts.md`, content);
