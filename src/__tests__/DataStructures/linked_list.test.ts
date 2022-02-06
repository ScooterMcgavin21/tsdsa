import { LinkedList } from "../../DataStructures/linked_list/linked_list";
import { DS } from "../../DataStructures/linked_list/node";

describe('Linked list', () => {
  const list = new LinkedList<string>();

  test('Node Constructor', () => {
    expect(DS).toBeDefined;
  });

  test('list is empty', () => {
    expect(list.isEmpty()).toBe(true);
  });

  test(`insertFirst and getFirst return 'first'`, () => {
    list.insertFirst("first");

    const item = list.getFirst();
    expect(item).toEqual("first");
    //list.listContents();
  });

  test(`insertFirst inserts 'ifyouaintfirst' and getFirst retrieves 'ifyouaintfirst'`, () => {
    list.insertFirst('ifyouaintfirst');

    const item = list.getFirst();
    expect(item).toEqual('ifyouaintfirst');
    //list.listContents();
  });

  test(`contains "first"`, () => {
    expect(list.contains("first")).toBe(true);
  });

  test(`does not contain "last"`, () => {
    expect(list.contains("last")).toBe(false);
  });

  test(`contains node with "first" removed`, () => {
    const item = list.remove("first");

    expect(item).toEqual("first");
    //list.listContents();
  });

  test('empty node with "ifyouaintfirst" removed', () => {
    expect(list.isEmpty()).toBe(false);
    const item = list.remove('ifyouaintfirst');

    expect(item).toEqual('ifyouaintfirst');
    expect(list.isEmpty()).toBe(true);
  });

  test('Error when using getFirst in an empty list', () => {
    expect(() => { list.getFirst(); }).toThrowError();
  });

  test('removeFirst removes element with value "C" after insertFirst "A", "B", "C"', () => {
    list.insertFirst("A");
    list.insertFirst("B");
    list.insertFirst("C");
    expect(list.removeFirst()).toBe("C");
  });

  test(`removeFirst remaining items until list is empty, returning "B", "A"`, () => {
    expect(list.isEmpty()).toBe(false);
    expect(list.removeFirst()).toBe("B");
    expect(list.removeFirst()).toBe("A");
    expect(list.isEmpty()).toBe(true);
  });

  test(`insertLast("A", "B", "C"), removeFirst() x 3 returns "A", "B", "C"`, () => {
    expect(list.isEmpty()).toBe(true);
    list.insertLast("A");
    list.insertLast("B");
    list.insertLast("C");
    expect(list.isEmpty()).toBe(false);

    expect(list.removeFirst()).toBe("A");
    expect(list.removeFirst()).toBe("B");
    expect(list.removeFirst()).toBe("C");
    expect(list.isEmpty()).toBe(true);
  });

  test(`throw an error when calling remove("apple") on empty list`, () => {
    expect(() => {
      list.remove("apple");
    }).toThrowError();
  });

  test(`return null when calling remove("apple") on non-empty list`, () => {
    list.insertFirst("banana");
    expect(list.remove("apple")).toBeNull();
  });

  test(`return "apple" when calling remove("apple") on non-empty list containing "apple"`, () => {
    list.insertFirst("apple");
    expect(list.remove("apple")).toBe("apple");
  });

});
