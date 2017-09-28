const passport = require("passport");
//Route handler

//try use express.router
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(res.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
