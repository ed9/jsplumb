<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jsplumb/core](./core.md) &gt; [JsPlumbInstance](./core.jsplumbinstance.md) &gt; [\_getAssociatedElements](./core.jsplumbinstance._getassociatedelements.md)

## JsPlumbInstance.\_getAssociatedElements() method

For some given element, find any other elements we want to draw whenever that element is being drawn. for groups, for example, this means any child elements of the group. For an element that has child elements that are also managed, it means those child elements.

<b>Signature:</b>

```typescript
abstract _getAssociatedElements(el: T["E"]): Array<T["E"]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  el | T\["E"\] |  |

<b>Returns:</b>

Array&lt;T\["E"\]&gt;
