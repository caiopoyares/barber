module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      date: DataTypes.DATE
    },
    {}
  );
  Appointment.associate = function(models) {
    // associations can be defined here
    Appointment.belongsTo(models.User, { foreignKey: "user_id" });
    Appointment.belongsTo(models.User, { foreignKey: "provider_id" });
  };
  return Appointment;
};
