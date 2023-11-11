import { describe, expect, test } from "bun:test";
import { LinkedQueue, Queue } from "./Queue";
import { Constructor } from "./Util";

function testQueue(ctor: Constructor<Queue<any>>) {
  test("add and remove several items", () => {
    const queue = new ctor();

    expect(queue.dequeue()).toEqual(undefined);
    for (let i = 0; i < 5; i++) queue.enqueue(i);
    for (let i = 0; i < 5; i++) expect(queue.dequeue()).toEqual(i);
    expect(queue.dequeue()).toEqual(undefined);
    for (let i = 5; i < 10; i++) queue.enqueue(i);
    for (let i = 5; i < 10; i++) expect(queue.dequeue()).toEqual(i);
    expect(queue.dequeue()).toEqual(undefined);
  });

  test("check is empty", () => {
    const queue = new ctor();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue("test element");
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test("check queue size", () => {
    const queue = new ctor();
    expect(queue.size()).toEqual(0);
    for (let i = 0; i < 5; i++) queue.enqueue(i);
    expect(queue.size()).toEqual(5);
    for (let i = 0; i < 3; i++) queue.dequeue();
    expect(queue.size()).toEqual(2);
  });
}

describe("LinkedQueue", () => testQueue(LinkedQueue));
