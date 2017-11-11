module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("burger", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		burger_name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		// Timestamps
      	createdAt: DataTypes.DATE,
      	updatedAt: DataTypes.DATE
	});

	return Burger;
};

