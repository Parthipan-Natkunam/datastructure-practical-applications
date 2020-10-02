const yargs = require("yargs");
const { initInMemoryHashMap, getDuplicateImages } = require("./util");

const cliOptions = yargs.usage("Usage: -p").option("p", {
  alias: "path",
  describe: "image path of the reference img",
  type: "string",
  demandOption: true,
}).argv;

(async function () {
  console.log(`Generating In-memory reference Map`);
  await initInMemoryHashMap();
  await getDuplicateImages(cliOptions.path);
})();

// async function getSimilarity(path1, path2) {
//   console.log(chalk.green.bold(`Comparing Images. Please Wait...`));
//   const similarityPercent = await compareImages(path1, path2);
//   const similarity = chalk.redBright.yellow.bold(`${similarityPercent}%`);
//   const result = chalk.red.bold(`The images are ${similarity} similar`);
//   const message = boxen(result, boxenOptions);
//   console.log(message);
// }
