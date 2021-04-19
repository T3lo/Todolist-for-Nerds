export class Task {
    id: number;
    name: string;
    duration: Date[];
    priority: PriorityEnum;
    subTasks: Task[];
    tags: Tag[];
    status: TaskStatusEnum;
    progress: number;
    constructor() {
        this.subTasks = [];
        this.tags = [];
        this.priority = PriorityEnum.MEDIUM;
        this.duration = [null, null];
        this.name = '';
        this.status = TaskStatusEnum.TODO;
        this.progress = 20;
    }
}

export enum PriorityEnum {
    LOW="LOW",
    MEDIUM="MEDIUM",
    HIGH="HIGH",
    CRITICAL="CRITICAL"
}

export enum TaskStatusEnum {
    TODO="TODO",
    STARTED="STARTED",
    PAUSED="PAUSED",
    DONE="DONE"
}

export class Tag {
    id: number;
    name: string;
}

export const priorityColourMapping = {
    "LOW": "yellow",
    "MEDIUM": "orange",
    "HIGH": "red",
    "CRITICAL": "black"
}

export const taskStatusColourMapping = {
    "TODO": "purple",
    "STARTED": "blue",
    "PAUSED": "grey",
    "DONE": "green"
}