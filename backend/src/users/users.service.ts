import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabseService } from '../databse/databse.service';

@Injectable()
export class UsersService {
  constructor(private readonly databseService: DatabseService) {}

  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databseService.users.create({
      data: createUserDto,
    });
  }

  async findAll(page: number, limit: number) {
    return this.databseService.users.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number) {
    return this.databseService.users.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return this.databseService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databseService.users.delete({
      where: {
        id,
      },
    });
  }
}
