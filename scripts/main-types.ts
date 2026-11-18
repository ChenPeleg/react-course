export const myNumber: number = 10;
export const myString: string = "Hello, TypeScript!";
export const myBoolean: boolean = true;

interface Person {
  name: string;
  age: number;
}

export const myArray: Array<Person> = [
  {
    name: "Alice",
    age: 30,
  },
];

function makeTupple<T>(value: T): [T, T] {
  return [value, value];
}
export const result = makeTupple(5);
