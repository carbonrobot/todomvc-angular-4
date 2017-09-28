export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  subs: Todo[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}