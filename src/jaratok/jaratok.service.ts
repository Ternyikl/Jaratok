import { Injectable } from '@nestjs/common';
import { CreateJaratokDto } from './dto/create-jaratok.dto.js';
import { UpdateJaratokDto } from './dto/update-jaratok.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class JaratokService {

  constructor( private readonly db: PrismaService){

  }

  create(createJaratokDto: CreateJaratokDto) {
    return 'This action adds a new jaratok';
  }

  findAll() {
    return this.db.jarat.findMany({
      omit: {
        tipusId: true
      },
      orderBy: {
        Szam: 'asc',
        megallok: {
          _count: 'asc'
        }
      },
      include: {
        megallok: true,
        tipus: true
      },
      //skip: 50,
      take: 10
    })
  }

  getMegallok() {
    return this.db.megallo.findMany({
      include: {
        jaratok: true
      },
      where:{
        jaratok: {
          some: {
            tipusId: 2
          }
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} jaratok`;
  }

  update(id: number, updateJaratokDto: UpdateJaratokDto) {
    return `This action updates a #${id} jaratok`;
  }

  remove(id: number) {
    return `This action removes a #${id} jaratok`;
  }
}
