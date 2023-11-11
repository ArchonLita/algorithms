export type Optional<T> = T | undefined;
export type Comparator<T> = (a: T, b: T) => number;
export type Constructor<T, P = undefined> = new (args?: P) => T;
