const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  APP_DIR: path.resolve(CURRENT_WORKING_DIR, "src/client/"),
  ASSETS_DIR: path.resolve(CURRENT_WORKING_DIR, "src/client/assets/"),
  PUBLIC_DIR: path.resolve(CURRENT_WORKING_DIR, "public/static")
};
