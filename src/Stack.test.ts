import { describe, expect, test } from "bun:test";
import { LinkedStack, Stack } from "./Stack";
import { Constructor } from "./Util";

function testStack(ctor: Constructor<Stack<any>>) {
  test("add and remove items", () => {
    const stack = new ctor();

    expect(stack.pop()).toEqual(undefined);
    for (let i = 0; i < 5; i++) stack.push(i);
    for (let i = 4; i >= 0; i--) expect(stack.pop()).toEqual(i);
    expect(stack.pop()).toEqual(undefined);
    for (let i = 5; i < 10; i++) stack.push(i);
    for (let i = 9; i >= 5; i--) expect(stack.pop()).toEqual(i);
    expect(stack.pop()).toEqual(undefined);
  });

  test("check is empty", () => {
    const stack = new ctor();
    expect(stack.isEmpty()).toEqual(true);
    stack.push("test element");
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test("check stack size", () => {
    const stack = new ctor();
    expect(stack.size()).toEqual(0);
    for (let i = 0; i < 5; i++) stack.push(i);
    expect(stack.size()).toEqual(5);
    for (let i = 0; i < 3; i++) stack.pop();
    expect(stack.size()).toEqual(2);
  });
}

describe("LinkedStack", () => testStack(LinkedStack));
