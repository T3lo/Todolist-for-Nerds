import { Injectable } from '@angular/core';
import { Tag, Task } from '../models/task.model';
import { EntityService } from '../models/entity-service.model';

@Injectable({
  providedIn: 'root'
})
export class TagService extends EntityService<Tag> {

  constructor() {
    super();
    for(let i=0;i<10;i++) {
      this.findAll().push(
        {
          id: i,
          name: "tag"+i
        }
      );
    }
    console.log(this.findAll());
  }

  getId(el: Tag): number {
    return el.id;
  }

}
