const sh = require("shelljs");
//const fs = require("fs");

//const articlesDir = "/home/lambros/dev/github/lambrospetrou.github.io/homepage/build-tools/test/articles";
const articlesDir = "/home/lambros/dev/github/lambrospetrou.github.io/homepage/content/articles";

const oldArticleDirs = sh.ls(articlesDir)
  .filter(f => !f.endsWith(".md"))
  .filter(f => f.match(/^\d{4}-\d{2}-\d{2}.*/))

// Delete the original
oldArticleDirs.forEach(f => {
  try {
    sh.rm(`${articlesDir}/${f}/${f}.md`);
  } catch (e) {
    console.error(`Could not process ${f}`, e);
  }
});


// oldArticleDirs.forEach(f => {
//   const date = f.substring(0, 10);
//   const slug = f.substring(11);

//   // date: 2019-08-26T19:41:00+01:00
//   try {
//     const original = fs.readFileSync(`${articlesDir}/${f}/${f}.md`);
//     const lines = original.toString("UTF-8").split("\n");
//     const newLines = [
//       lines[0],
//       `slug: ${slug}`,
//       `date: ${new Date(date).toISOString()}`,
//       ...lines.slice(1)
//     ];

//     console.log(`${f} => ${date} :: ${slug}`);
//     console.log(newLines.slice(0, 10))

//     fs.writeFileSync(`${articlesDir}/${f}/index.md`, newLines.join("\n"));

//   } catch (e) {
//     console.error(`Could not process ${f}`, e);
//   }
// });

// const oldArticleFiles = sh.ls(articlesDir)
//   .filter(f => f.match(/^\d{4}-\d{2}-\d{2}.*\.md$/))

// oldArticleFiles.forEach(f => {
//   const date = f.substring(0, 10);
//   const slug = f.substring(11, f.length-3);

//   try {
//     const original = fs.readFileSync(`${articlesDir}/${f}`);
//     const lines = original.toString("UTF-8").split("\n");
//     const newLines = [
//       lines[0],
//       `slug: ${slug}`,
//       `date: ${new Date(date).toISOString()}`,
//       ...lines.slice(4)
//     ];

//     console.log(`${f} => ${date} :: ${slug}`);
//     console.log(newLines.slice(0, 10))

//     fs.writeFileSync(`${articlesDir}/${f}`, newLines.join("\n"));

//   } catch (e) {
//     console.error(`Could not process ${f}`, e);
//   }
// });
