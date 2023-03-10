const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",

  exposes: {
    "./CommentsModule": "./projects/mfe2/src/app/comments/comments.module.ts",
    "./AppModule": "./projects/mfe2/src/app/app.module.ts",
    "./DashboardModule": "./projects/mfe2/src/app/dashboard.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "@darkeering/shared-lib": { singleton: true },
  },
});
