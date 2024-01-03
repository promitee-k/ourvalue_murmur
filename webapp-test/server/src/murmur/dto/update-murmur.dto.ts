import { PartialType } from '@nestjs/mapped-types';
import { CreateMurmurDto } from './create-murmur.dto';

export class UpdateMurmurDto extends PartialType(CreateMurmurDto) {}
