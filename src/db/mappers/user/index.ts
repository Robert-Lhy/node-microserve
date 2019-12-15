import { Model, DataTypes, INTEGER, STRING, DATE } from 'sequelize'
import { sequelize } from '@db'
class UserModel extends Model {}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: STRING,
    phoneNo: STRING,
    address: STRING,
    age: INTEGER,
    name: STRING,
    created: DATE,
    modified: DATE
  },
  {
    tableName: 'student',
    createdAt: 'created',
    updatedAt: 'modified',
    modelName: 'studentModel',
    sequelize
  }
)
export default UserModel
