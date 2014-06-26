Package.describe({
  summary: "Twitter package for Meteor"
});

Npm.depends({"node-twitter": "0.5.1"});

Package.on_use(function (api) {
  api.add_files("main.js", "server");
  if(api.export) {
    api.export('Twitter');
  }
});
