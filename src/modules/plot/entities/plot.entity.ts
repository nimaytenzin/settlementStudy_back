import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Plot extends Model {
  @Column(DataType.INTEGER)
  plotFeatureId: number;

  @Column(DataType.STRING)
  developmentStatus: string;

  @Column(DataType.STRING)
  use: string;

  @Column(DataType.TEXT)
  remarks: string;
}
