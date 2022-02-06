import { DS } from './node';
/**   HEAD                TAIL
 * item   next        item   next
 *  ____________      ____________
 * |  x  |    -|---->|  x  |  x  |    x = null
 * |_____|_____|     |_____|_____|
 * 
 */
export class LinkedList<T> {
  private head: DS.Node<T>;
  private tail: DS.Node<T>;

  constructor() {
    this.head = new DS.Node<T>();
    this.tail = new DS.Node<T>();
    this.head.next = this.tail;
  }
  /**
   * (O)1: 
   * Checks to see if the list contains any nodes other than head or tail.
   * returns true if head.next points to tail
   */
  public isEmpty(): boolean {
    return this.head.next === this.tail;
  }
  /**
   * (O)1: 
   * Inserts an element at the beginning of the list.
   * @param {T} item - item to be added to the list
   * @return {void}
   */
  public insertFirst(item: T): void {
    const newNode = new DS.Node<T>(item); // encapsullate item into Node object

    newNode.next = this.head.next;  // next pointer assigned head such that they point at the same node
    this.head.next = newNode;       // insert at beginning head pointer now points to newNode
  }
  /**
   * Inserts element to end of the list by traversing to find tailnodes pointer
   */
  public insertLast(item: T): void {
    const newNode = new DS.Node<T>(item);
    let current: DS.Node<T> | null = this.head;

    // traverse list and move current pointer to tail node
    while (current && current.next !== this.tail) {
      current = current.next;
    }
    if (current) {
      newNode.next = this.tail;
      current.next = newNode;
    }
  }
  /**
   * Removes the element at the end of the list.
   */
  public removeFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error('Empty List');
    }
    let returnvalue: DS.Node<T> | null = this.head.next;
    if (returnvalue) {
      this.head.next = returnvalue.next;
      returnvalue.next = null;
    }

    // returns item stored in node, not the nodeitself
    return returnvalue ? returnvalue.item : null;
  }
  /**
   * O(n): 
   * Removes an element with a given key.
   */
  public remove(searchKey: T): T | null {
    if (this.isEmpty()) {
      throw new Error('Empty List');
    }
    let returnvalue: DS.Node<T> | null = null;   // node to be removed
    let current: DS.Node<T> = this.head;         // helper node

    // move current pointer to node before matching node to remove
    while (current.next && current.next.item !== searchKey) {
      current = current.next;
    }
    if (current.next) {
      returnvalue = current.next;
      current.next = current.next.next;
      returnvalue.next = null;
    }
    return returnvalue && returnvalue.item ? returnvalue.item : null;
  }

  // Checks to see if an element with a given key is in the list.
  public contains(searchItem: T): boolean {
    if (this.isEmpty()) {
      throw new Error('Empty List');
    }

    let returnvalue: boolean = false;
    let current: DS.Node<T> | null = this.head;

    // traversing list until item is found or tail reached
    while (current && current.next !== this.tail) {
      if (current.next && current.next.item === searchItem) {
        returnvalue = true;
        break;
      }
      current = current.next
    }
    return returnvalue;
  }
  /**
   * (O)1: 
   * Retrieve the first element in the list without removing it.
   * this.head.next never null in a non-empty list.
   */
  public getFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error('Empty List');
    }
    return this.head.next ? this.head.next.item : null;
  }

  // list contents
  public listContents(): void {
    let current = this.head.next;

    while (current && current !== this.tail) {
      console.log(`${current.item}`);
      current = current.next;
    }
  }
};
