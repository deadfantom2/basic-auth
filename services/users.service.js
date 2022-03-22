const users = [
  {
    id: 1,
    username: 'frfr',
    password: 'frfr',
  },
];

exports.authenticate = async ({ username, password }) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
};
