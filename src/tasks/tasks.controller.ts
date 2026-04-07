import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() body: { title: string; description: string }) {
    console.log(body);
    return this.tasksService.create(body.title, body.description);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return Promise.resolve(this.tasksService.findAll());
  }

  /*   @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  } */

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      id?: number;
      title?: string;
      description?: string;
      iscompleted?: boolean;
    },
  ) {
    return this.tasksService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
