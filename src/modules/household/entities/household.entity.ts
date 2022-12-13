import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Household extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  buildingFeatureId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  unitId: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  zhisar: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  zhisarFrom: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  membersStayingOut: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  membersStayingIn: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  khimsaAcres: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  kamzhingAcres: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  chhuzhingAcres: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  yaks: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cows: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  horses: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  poultry: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  vehicles: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  tv: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lpg: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  electricUtensils: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  foodCrops: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  cashCrops: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  incomeSource: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  annualIncomeRange: string;
}
