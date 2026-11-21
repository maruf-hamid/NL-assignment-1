# Type vs Interface in TypeScript: What's the Difference?
## Introduction
TypeScript provides both type aliases and interface declarations to describe the structure of data. They often look similar, but they have important differences in how they behave and how they can be extended. Understanding these differences helps developers choose the right tool for different situations.
## Detailed Discussion
An interface is primarily used to define the shape of an object. It can be extended by another interface using the extends keyword, making it useful for building reusable object structures.
```typescript
 interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
} 
```
Here, Employee inherits the properties of Person and adds employeeId.

A type alias can also describe object structures and combine them using intersections. However, unlike interfaces, type aliases can represent unions, primitive types, tuples, and other types.

```typescript
type Status = "success" | "error";
 type PersonInfo = {
  name: string;
  age: number;
};

type EmployeeInfo = PersonInfo & {
  employeeId: number;
}; 
```
Another difference is declaration merging. Multiple declarations with the same interface name can merge their properties, while type aliases cannot be redeclared with the same name in the same scope.
## Conclusion
Use interface when defining object shapes that may be extended or merged, especially in public API. Use type when you need unions, intersections, primitives, tuples, or more complex type expressions.