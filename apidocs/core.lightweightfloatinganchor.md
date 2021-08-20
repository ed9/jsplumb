<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jsplumb/core](./core.md) &gt; [LightweightFloatingAnchor](./core.lightweightfloatinganchor.md)

## LightweightFloatingAnchor class

<b>Signature:</b>

```typescript
export declare class LightweightFloatingAnchor implements LightweightAnchor 
```
<b>Implements:</b> [LightweightAnchor](./core.lightweightanchor.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(instance, element)](./core.lightweightfloatinganchor._constructor_.md) |  | Constructs a new instance of the <code>LightweightFloatingAnchor</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [cssClass](./core.lightweightfloatinganchor.cssclass.md) |  | string |  |
|  [currentLocation](./core.lightweightfloatinganchor.currentlocation.md) |  | number |  |
|  [element](./core.lightweightfloatinganchor.element.md) |  | any |  |
|  [id](./core.lightweightfloatinganchor.id.md) |  | string |  |
|  [instance](./core.lightweightfloatinganchor.instance.md) |  | [JsPlumbInstance](./core.jsplumbinstance.md) |  |
|  [isContinuous](./core.lightweightfloatinganchor.iscontinuous.md) |  | false |  |
|  [isDynamic](./core.lightweightfloatinganchor.isdynamic.md) |  | false |  |
|  [isFloating](./core.lightweightfloatinganchor.isfloating.md) |  | boolean |  |
|  [locations](./core.lightweightfloatinganchor.locations.md) |  | any\[\] |  |
|  [locked](./core.lightweightfloatinganchor.locked.md) |  | boolean |  |
|  [orientation](./core.lightweightfloatinganchor.orientation.md) |  | [Orientation](./core.orientation.md) |  |
|  [size](./core.lightweightfloatinganchor.size.md) |  | Size |  |
|  [timestamp](./core.lightweightfloatinganchor.timestamp.md) |  | string |  |
|  [type](./core.lightweightfloatinganchor.type.md) |  | string |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [out()](./core.lightweightfloatinganchor.out.md) |  | notification the endpoint associated with this anchor is no longer hovering over another anchor; we should resume calculating orientation as we normally do. |
|  [over(endpoint)](./core.lightweightfloatinganchor.over.md) |  | notification the endpoint associated with this anchor is hovering over another anchor; we want to assume that anchor's orientation for the duration of the hover. |
