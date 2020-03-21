/* eslint func-names: ["error", "never"] */
/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
module.exports = function(env) {
  return require(`./webpack.${env}.js`);
};
