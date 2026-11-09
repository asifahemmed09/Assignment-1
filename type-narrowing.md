# Type Narrowing in TypeScript

## Introduction
Type narrowing is how TypeScript refines a broad type, such as a union, into a more specific one inside a block of code. It relies on runtime checks that the compiler understands, which lets you write safe code without unsafe type assertions.

## Narrowing Techniques

**1. `typeof`** works for primitive types.

```ts
function format(value: string | number) {
  if (typeof value === "string") return value.toUpperCase(); // string
  return value.toFixed(2); // number
}
```

**2. `instanceof`** works for class instances.

```ts
function handle(err: Error | TypeError) {
  if (err instanceof TypeError) console.log("Type problem:", err.message);
  else console.log("General error:", err.message);
}
```

**3. The `in` operator** checks whether a property exists on an object, which is ideal for unions of object types.

```ts
type Car = { drive(): void };
type Boat = { sail(): void };

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) vehicle.drive(); // Car
  else vehicle.sail(); // Boat
}
```

## Why It Matters
Without narrowing, calling `value.toUpperCase()` on `string | number` would be a compile error. Narrowing turns runtime checks into compile-time guarantees.

## Conclusion
Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes. Together they make union types practical and safe.
