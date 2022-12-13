import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class PlotImage extends Model {
  @Column(DataType.INTEGER)
  plotFeatureId: number;

  @Column(DataType.STRING)
  uri: string;
}
