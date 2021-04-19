import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { priorityColourMapping, taskStatusColourMapping, Task } from 'src/app/models/task.model';
import { TagService } from 'src/app/services/tag.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Output("viewTask") viewTaskEvent: EventEmitter<Task> = new EventEmitter();
  mapping: {
    priorityColour: any,
    taskStatusColour: any
  };
  tasks: Task[];

  constructor(private taskService: TaskService, private tagService: TagService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.findAll();
    this.mapping = {
      priorityColour: priorityColourMapping,
      taskStatusColour: taskStatusColourMapping
    };
  }

  deleteTask(id: number): void {
    console.log("Deleting", id);
    this.taskService.delete(id);
  }

  viewTask(task: Task): void {
    this.viewTaskEvent.emit(task);
  }

}
