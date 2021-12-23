#!/usr/bin/env node

const { JSDOM } = require("jsdom");
const fs = require("fs-extra");
const marked = require("marked");

build();

async function build() {
  await fs.emptyDir("public/");

  async () =>
    await fs.copy("pages/", "public/", {
      filter: (f) => !f.startsWith(".") && !f.endsWith(".md"),
    }).then(() => console.log("done"))

  await processDirectory("pages");
}

async function processDirectory(directoryPath) {
  let contents = await fs.readdir(`${directoryPath}/`);
  const processPagePromises = [];
  for (const element of contents) {
    const isDirectory = (
      await fs.lstat(`${directoryPath}/${element}`)
    ).isDirectory();
    if (isDirectory) {
      await processDirectory(
        `${directoryPath}/${element}`,
        processPagePromises
      );
      continue;
    }
    processPagePromises.push(processPage(`${directoryPath}/${element}`));
  }
  await Promise.all(processPagePromises);
}

async function processPage(pagePath) {
  let templatePath = "template.html";
  const fileData = await fs.readFile(pagePath, "utf-8");
  const parsedHtml = marked(fileData);
  const dom = await JSDOM.fromFile(templatePath);
  const document = dom.window.document;
  const pageContentElement = document.getElementById("page-content");
  pageContentElement.innerHTML = parsedHtml;

  const h1s = document.getElementsByTagName("h1");
  if (h1s.length) {
    title = h1s[0].innerHTML;
  }

  if (title) {
    document.title = title;
  }

  const finalHtml = document.getElementsByTagName("html")[0].outerHTML;

  const pagePathParts = pagePath.replace("pages/", "").split("/");
  const pageName = pagePathParts.pop().split(".md")[0];
  const targetPath = pagePathParts.join("/");
  await fs.writeFile(`public/${targetPath}/${pageName}.html`, finalHtml);
}
