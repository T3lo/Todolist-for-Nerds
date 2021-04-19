export abstract class EntityService<T> {
    
    private t: T[];
    
    constructor() {
        this.t = [];
    }

    // Replace the functionality from lists to API calls
    findAll(): T[] {
        return this.t;
    }

    findById(id: number): T {
        let val = this.t.filter(el => this.getId(el) == id);
        return val.length==0 ? null : val[0];
    }

    save(t0: T) {
        this.t.push(t0);
    }

    delete(id: number) {
        // let temp = this.findById(id);
        let ind = this.t.findIndex(el => this.getId(el)===id);
        if (ind===-1) {
            console.error(id,"not found");
        } else {
            this.t.splice(ind, 1);
        }
    }

    edit(id: number, t0: T) {
        let val: T[] = this.t.filter(el => this.getId(el) == id);
        if (val.length==0) return
        else {
            val[0] = t0;
        }
    }

    abstract getId(el: T): number;
}