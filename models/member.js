/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sex: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'member',
		timestamps: false
	});
};
