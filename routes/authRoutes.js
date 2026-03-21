const passport = require('passport');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/',
    }),
    (req, res) => {
      res.redirect('/');
    },
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
        return res.status(500).send({ error: 'Logout failed' });
      }
      res.redirect('/');
    });
  });
};
