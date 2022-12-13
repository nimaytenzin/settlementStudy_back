import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Building extends Model {
  @Column(DataType.INTEGER)
  buildingFeatureId: number;

  @Column(DataType.STRING)
  isLocked: string;

  @Column(DataType.STRING)
  existancyStatus: string;

  @Column(DataType.STRING)
  associativePosition: string;

  @Column(DataType.STRING)
  ownership: string;

  @Column(DataType.STRING)
  floors: string;

  @Column(DataType.STRING)
  jamthog: string;

  @Column(DataType.STRING)
  basement: string;

  @Column(DataType.STRING)
  use: string;

  @Column(DataType.STRING)
  age: string;

  @Column(DataType.STRING)
  rennovation: string;

  @Column(DataType.STRING)
  rennovationRemarks: string;

  @Column(DataType.STRING)
  style: string;

  @Column(DataType.STRING)
  type: string;

  @Column(DataType.STRING)
  material: string;

  @Column(DataType.STRING)
  roofType: string;

  @Column(DataType.STRING)
  roofMaterial: string;

  @Column(DataType.STRING)
  toiletMode: string;

  @Column(DataType.STRING)
  toiletType: string;

  @Column(DataType.STRING)
  roadAccess: string;

  @Column(DataType.STRING)
  parking: string;

  @Column(DataType.STRING)
  remarks: string;
}
