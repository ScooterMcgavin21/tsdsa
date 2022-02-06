// Node class to wrap linked list
export namespace DS {
  export class Node<T> {
    public item: T | null;         // holds data
    public next: Node<T> | null;   // links nodes

    public constructor(item: T | null = null) {
      this.item = item;
      this.next = null;
    }
  }
}



