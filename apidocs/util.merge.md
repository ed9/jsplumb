<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jsplumb/util](./util.md) &gt; [Merge](./util.merge.md)

## Merge type

A copy of a concept from a later version of Typescript than jsPlumb can currently use.

<b>Signature:</b>

```typescript
export declare type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
```