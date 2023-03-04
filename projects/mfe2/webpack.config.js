const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",

  exposes: {
    "./CommentsModule": "./projects/mfe2/src/app/comments/comments.module.ts",
    "./AppModule": "./projects/mfe2/src/app/app.module.ts",
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
