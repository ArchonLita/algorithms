import { Optional } from "./Util";

export abstract class Stack<T> {
  abstract push(value: T): void;
  abstract pop(): Optional<T>;
  abstract isEmpty(): boolean;
  abstract size(): number;
}

interface Node<T> {
  value: T;
  next?: Node<T>;
}

export class LinkedStack<T> extends Stack<T> {
  private _root?: Node<T>;
  private _size = 0;

  override push(value: T) {
    this._root = { value, next: this._root };
    this._size++;
  }

  override pop(): Optional<T> {
    const value = this._root?.value;
    if (this._root) this._size--;
    this._root = this._root?.next;
    return value;
  }

  override isEmpty(): boolean {
    return !this._root;
  }

  override size(): number {
    return this._size;
  }
}
