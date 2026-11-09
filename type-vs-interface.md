# Type Aliases vs Interfaces in TypeScript

## Introduction
Both `type` and `interface` describe the shape of data in TypeScript, and for plain objects they look almost identical. However, they differ in important ways that affect how you design your code.

## Key Differences

**1. Extending.** Interfaces use `extends`, while type aliases combine shapes with intersections (`&`).

```ts
interface Animal { name: string }
interface Dog extends Animal { bark(): void }

type Cat = Animal & { meow(): void };
```

**2. Declaration merging.** Only interfaces can be declared twice; TypeScript merges them into one. Types throw a duplicate identifier error.

```ts
interface User { id: number }
interface User { email: string } // merged: { id; email }
```

**3. Flexibility.** Only `type` can alias unions, primitives, and tuples.

```ts
type ID = string | number;
type Point = [number, number];
```

## When to Choose Which
Use `interface` for object shapes, class contracts (`implements`), and public library APIs, where declaration merging lets consumers extend your types. Use `type` for unions, tuples, function signatures, and mapped or conditional types.

## Conclusion
A good rule of thumb: prefer `interface` for objects and `type` for everything else. Most importantly, stay consistent across your team's codebase.
