const passport = require("passport");
//Route handler

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req,res) => {
      res.redirect('/surveys');
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    //res.send(res.user);res.user is from passport
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
