import { Document, HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: false })
  name?: string;

  @Prop()
  email: string;

  @Prop({ required: false })
  userName?: string;

  @Prop({ required: false, select: false })
  password?: string;

  @Prop({ required: false, type: Number, default: 0 })
  current_balance?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
