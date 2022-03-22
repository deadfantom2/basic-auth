const userService = require('../services/users.service');

exports.login = async (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: 'Username or password is incorrect' })
    )
    .catch((err) => next(err));
};
