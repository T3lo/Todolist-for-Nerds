import { Injectable } from '@angular/core';
import { EntityService } from '../models/entity-service.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends EntityService<Task> {
  
  constructor() {
    super();
  }
  
  getId(el: Task): number {
    return el.id;
  }

}
