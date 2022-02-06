export class Stack<T> {
  stack: T[];
  length: number;
  readonly maxSize: number;

  constructor(maxSize: number) {
    this.length = 0;
    this.maxSize = maxSize;
    this.stack = new Array<T>(this.maxSize);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxSize;
  }

  push(newItem: T): void {
    if (this.isFull()) {
      throw new Error('Stack overflow');
    }
    this.stack[this.length++] = newItem;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }
    const retval = this.stack[--this.length];
    return retval;
  }

  top(): T {
    if (this.isEmpty()) {
      throw new Error('Stack Empty');
    }
    return this.stack[this.length - 1];
  }

  public stackContents(): void {
    console.log('Stack Contents');
    for (let i = 0; i < this.length; ++i) {
      console.log(`stack[${i}]: ${this.stack[i]}`);
    }
  }
}
