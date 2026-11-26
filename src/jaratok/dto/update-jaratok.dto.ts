import { PartialType } from '@nestjs/mapped-types';
import { CreateJaratokDto } from './create-jaratok.dto.js';

export class UpdateJaratokDto extends PartialType(CreateJaratokDto) {}
