const util = require("util");
const glob = require("glob");
const fs = require("fs");
const path = require("path");

const globp = util.promisify(glob);
const readFilep = util.promisify(fs.readFile);


async function assertPkgPrivate (dirpath) {
  const pkgJsonPathsNested = [].concat(
    await globp(dirpath+"/!(node_modules)/package.json"),
    await globp(dirpath+"/package.json"),
  );

  const pkgJsonPaths = [].concat(pkgJsonPathsNested);

  const pkgJsons = await Promise.all(
    pkgJsonPaths.map(async function(filepath) {
      const data = await readFilep(filepath);
      return {
        filepath,
        data: JSON.parse(data.toString())
      }
    })
  );

  pkgJsons.forEach(function({filepath, data}) {
    if (!data.private) {
      const relPath = path.relative(process.cwd(), filepath);
      throw new Error(`Missing {private: true} in file: "${relPath}"`);
    }
  })
}

module.exports = assertPkgPrivate;
