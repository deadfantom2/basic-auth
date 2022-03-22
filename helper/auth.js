const userService = require('../services/users.service');

module.exports = basicAuth;

async function basicAuth(req, res, next) {
  const {
    path,
    headers: { authorization },
  } = req;

  if (path === '/api/authenticate') {
    return next();
  }

  if (!authorization || authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization' });
  }

  const token = authorization.split(' ')[1];
  const credentials = Buffer.from(token, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');
  const user = await userService.authenticate({ username, password });

  if (!user) {
    return res.status(401).json({ message: 'Invalid Authentication' });
  }
  req.user = user;
  next();
}
