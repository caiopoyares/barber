module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  });

  return User;
};
