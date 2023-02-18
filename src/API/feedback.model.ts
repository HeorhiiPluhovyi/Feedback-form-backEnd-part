import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface FeedbackCreationAttrs {
  email: string;
  userName: string;
  massage: string;
}
@Table({ tableName: 'feedback' })
export class FeedbackModel extends Model<FeedbackModel, FeedbackCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  userName: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  massage: string;
}
