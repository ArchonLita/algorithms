import { Optional } from "./Util";

export abstract class Queue<T> {
  abstract enqueue(value: T): void;
  abstract dequeue(): Optional<T>;
  abstract isEmpty(): boolean;
  abstract size(): number;
}

interface Node<T> {
  value: T;
  next?: Node<T>;
}

export class LinkedQueue<T> extends Queue<T> {
  private _head?: Node<T>;
  private _tail?: Node<T>;
  private _size = 0;

  override enqueue(value: T) {
    const node: Node<T> = { value };
    if (this._tail) this._tail.next = node;
    if (!this._head) this._head = node;
    this._tail = node;
    this._size++;
  }

  override dequeue(): Optional<T> {
    const value = this._head?.value;
    if (this._head) this._size--;
    this._head = this._head?.next;
    return value;
  }

  override isEmpty(): boolean {
    return !this._head;
  }

  override size(): number {
    return this._size;
  }
}
