const fs = require("fs");

console.log("Reading ./public/blog ...");
const pages = [];
const years = fs.readdirSync("./public/blog");

years.map(year => {
  if (fs.lstatSync(`./public/blog/${year}`).isFile()) return null;
  const months = fs.readdirSync(`./public/blog/${year}`);
  months.map(month => {
    const articles = fs.readdirSync(`./public/blog/${year}/${month}`);
    articles.map(article => {
      const content = fs.readFileSync(
        `./public/blog/${year}/${month}/${article}/index.html.md`,
        { encoding: "utf8" }
      );
      const lines = content.split("\n");
      const headerLines = [];
      let isHeader = false;
      let title = "ERROR";
      lines.map(line => {
        if (line === "---") isHeader = !isHeader;
        if (line !== "---" && isHeader) {
          headerLines.push(line);
        }
        return null;
      });
      headerLines.map(header => {
        const parts = header.split(": ");
        if (parts.length > 1) {
          switch (parts[0]) {
            case "title":
              title = parts[1];
              break;
            default:
              break;
          }
        }
        return null;
      });
      pages.push({ year, month, article, title });
      console.log("-> Found page", title);
    });
  });
});

let indexText = "";
pages.map(page => {
  indexText = `${indexText}${page.year};${page.month};${page.article};${
    page.title
  }\n`;
});
fs.writeFileSync("./public/blog/index.txt", indexText, { encoding: "utf8" });
console.log("Done, check ./public/blog/index.txt");
