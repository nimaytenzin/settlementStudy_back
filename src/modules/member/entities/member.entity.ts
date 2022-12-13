import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Member extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  unitId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  householdId: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  occupation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  workplace: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  travelMode: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  educationLevel: string;
}
