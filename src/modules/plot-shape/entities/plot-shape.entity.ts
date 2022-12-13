import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class PlotShape extends Model {
  @Column(DataType.INTEGER)
  plotFeatureId: number;

  @Column(DataType.STRING)
  isCompleted: string;

  @Column(DataType.STRING)
  settlement: string;

  @Column(DataType.GEOMETRY('Polygon'))
  geom: string;
}
