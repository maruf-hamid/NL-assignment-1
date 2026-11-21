# Combining Union and Intersection Types in TypeScript

## Introduction

TypeScript provides union and intersection types to create flexible and reusable type definitions. A union allows a value to match one of several types, while an intersection combines multiple types into a single type that must satisfy all of them.

## Detailed Discussion

A union type represents alternatives. For example, a payment may be processed using a card or cash:

```typescript
type CardPayment = {
  cardNumber: string;
  amount: number;
};

type CashPayment = {
  cashReceived: number;
  amount: number;
};

type Payment = CardPayment | CashPayment;
```

A variable of type Payment can represent either payment structure.

An intersection combines requirements from multiple types:

```typescript
type Timestamped = {
  createdAt: Date;
};

type Identifiable = {
  id: number;
};

type RecordInfo = Timestamped & Identifiable;
```

A RecordInfo object must contain both createdAt and id.

## Conclusion

Union types describe alternatives, while intersection types combine requirements. Using them together helps model complex data accurately, improves type safety, and reduces duplicated type definitions in tyypeScript applications.
