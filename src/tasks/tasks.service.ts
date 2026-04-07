import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(title: string, description: string): Task {
    const task: Task = {
      id: this.idCounter++,
      title,
      description,
      iscompleted: false,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  update(
    id: number,
    update: {
      id?: number;
      title?: string;
      description?: string;
      iscompleted?: boolean;
    },
  ): Task {
    const task = this.tasks.find((task) => task.id === id);
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
    return task;
  }

  remove(id: number): Task {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    const [removedTask] = this.tasks.splice(index, 1);
    return removedTask;
  }
}
