module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("burger", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		burger_name: {
			type: Sequelize.STRING,
			validate: {
				notEmpty: true
			}
		},
		devoured: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	});

	return Burger;
};

