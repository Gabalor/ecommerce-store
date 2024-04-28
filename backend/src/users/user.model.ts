import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({ 
  tableName: 'usuarios',
  timestamps: false, // Indica a Sequelize que no cree automáticamente createdAt y updatedAt
})
export class User extends Model<User> {
  @PrimaryKey // Especifica que esta columna es la clave primaria
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true, // Indica que el valor de esta columna se incrementa automáticamente
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  edad: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sexo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  escolaridad: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estadoCivil: string;
}
