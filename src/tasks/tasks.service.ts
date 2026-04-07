import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  // 1. Crear ahora es async y devuelve una promesa de Task
  async create(title: string, description: string): Promise<Task> {
    const task = this.tasksRepository.create({
      title,
      description,
      iscompleted: false,
    });
    return this.tasksRepository.save(task);
  }

  // 2. Listar ahora devuelve una promesa de un array de Task
  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  // 3. Actualizar usando el repositorio de TypeORM
  async update(
    id: number,
    update: {
      id?: number;
      title?: string;
      description?: string;
      iscompleted?: boolean;
    },
  ): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    if (update.id !== undefined) {
      task.id = update.id;
    }
    if (update.title !== undefined) {
      task.title = update.title;
    }
    if (update.description !== undefined) {
      task.description = update.description;
    }
    if (update.iscompleted !== undefined) {
      task.iscompleted = update.iscompleted;
    }
    return this.tasksRepository.save(task);
  }

  // 4. Eliminar usando el repositorio de TypeORM
  async remove(id: number): Promise<void> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    await this.tasksRepository.remove(task);
  }
}
