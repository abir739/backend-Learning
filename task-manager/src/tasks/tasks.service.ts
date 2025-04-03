import { Injectable } from '@nestjs/common';
import { TasksModule } from './tasks.module';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: TasksModule[] = [];

  getAllTasks(): TasksModule[] {
    return this.tasks;
  }

  createTask(title: string, description: string): TasksModule {
    const newTask: TasksModule = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
