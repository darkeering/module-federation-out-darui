const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",

  exposes: {
    "./Module": "./projects/mfe2/src/app/commments/commments.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "projects/shared-lib/src/public-api": { singleton: true },
  },
});
