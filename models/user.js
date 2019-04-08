/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user',
		timestamps: false
	});
};
