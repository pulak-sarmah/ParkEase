import { PickType } from '@nestjs/swagger';
import { User as UserEntity } from '../entity/user.entity';

export class CreateUser extends PickType(UserEntity, [
  'uid',
  'name',
  'image',
]) {}
