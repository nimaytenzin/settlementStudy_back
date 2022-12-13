import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class BuildingImage extends Model {
  @Column(DataType.INTEGER)
  buildingFeatureId: number;

  @Column(DataType.STRING)
  uri: string;

  @Column(DataType.STRING)
  filename: string;
}
