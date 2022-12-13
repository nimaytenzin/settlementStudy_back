import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class BuildingShape extends Model {
  @Column(DataType.INTEGER)
  buildingFeatureId: number;

  @Column(DataType.STRING)
  isCompleted: string;

  @Column(DataType.STRING)
  settlement: string;

  @Column(DataType.GEOMETRY('Point'))
  geom: string;
}
