import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Unit extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  buildingFeatureId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  isLocked: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  use: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  floorLevel: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  number: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  bedrooms: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ownership: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  rent: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  businessName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  businessType: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  businessContact: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  businessTurnover: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  institutionName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  institutionEstablishmentYear: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  institutionStaffs: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  institutionStudents: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  institutionContact: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  religiousInstitionName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  religiousInstituionEstablishmentYear: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  religiousInstitutionMonks: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  religiousInstitutionLopons: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  religiousInstitutionContact: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  officeName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  officeType: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  officeEstablishmentYear: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  officeContact: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  remarks: string;
}
