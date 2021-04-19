import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { PriorityEnum, Tag, Task, TaskStatusEnum } from 'src/app/models/task.model';
import { TagService } from 'src/app/services/tag.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'advanced-task',
  templateUrl: './advanced-task.component.html',
  styleUrls: ['./advanced-task.component.css']
})
export class AdvancedTaskComponent implements OnInit {

  @Input("mode") viewMode: ViewModeEnum;
  @Input("task") task: Task;
  @Output("save") save: EventEmitter<boolean> = new EventEmitter();

  extraData: QuickAddExtraData;
  listOfTags: Tag[];
  hasSteps: boolean = false;
  searchValue = '';
  constructor(
    private taskService: TaskService, 
    private tagService: TagService) { }

  ngOnInit(): void {
    this.extraData = {
      priorityKeys: Object.keys(PriorityEnum),
      taskStatusKeys: Object.keys(TaskStatusEnum)
    };
    this.listOfTags = this.tagService.findAll();
    this.hasSteps = this.task.subTasks.length==0 ? false : true;
    console.log(this.task);
  }

  updateTaskDuration(res: Date[]): void {
    this.task.duration = res;
  }

  saveTask(yes: boolean): void {
    this.save.emit(yes);
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

}

class QuickAddExtraData {
  priorityKeys: string[];
  taskStatusKeys: string[];
}

export enum ViewModeEnum {
  ADD="ADD",
  EDIT="EDIT"
}