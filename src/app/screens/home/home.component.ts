import { Component, OnInit } from '@angular/core';
import { PriorityEnum, Tag, Task } from 'src/app/models/task.model';
import { TagService } from 'src/app/services/tag.service';
import { TaskService } from 'src/app/services/task.service';
import { ViewModeEnum } from './advanced-task/advanced-task.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[];
  quickTask: Task;
  listOfTags: Tag[];
  selectedTask: Task;
  viewMode: ViewModeEnum;
  showAdvancedSettingsFlag: boolean;

  constructor(private taskService: TaskService, private tagService: TagService) {
  }
  
  ngOnInit(): void {
    this.tasks = this.taskService.findAll();
    this.quickTask = new Task();
    this.listOfTags = this.tagService.findAll();
    this.selectedTask = null;
    console.log("home loaded");
  }

  addQuickTask(saveFlag: boolean): void {
    if (saveFlag){
      this.quickTask.id = this.hashCode(
        this.quickTask.name, 
        Math.floor(Math.random()*160)
      );
      this.taskService.save(this.quickTask);
    }
    this.quickTask = new Task();
    console.log(this.tasks);
  }

  updateTaskDuration(res: Date[]): void {
    this.quickTask.duration = res;
  }

  openAdvancedSettings(task: Task, add: boolean): void {
    this.viewMode = add ? ViewModeEnum.ADD : ViewModeEnum.EDIT;
    this.selectedTask = task;
    this.showAdvancedSettingsFlag = true;
  }

  closeAdvancedSettings(): void {
    this.showAdvancedSettingsFlag = false;
  }

  private hashCode(str: string,chr: number) {
    var hash = 0, i;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

}