import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User extends Document {
  @Field(() => ID)
  declare _id: string;

  @Prop({ required: true, unique: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  password: string;

  @Prop()
  @Field({ nullable: true })
  name?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
