/**
 * Common options for anchors.
 */
export interface AnchorOptions extends Record<string, any> {
    /**
     * Optional css class that will be applied to any DOM element for an endpoint using this anchor.
     */
    cssClass?:string
}

/**
 * Constructor options for a Perimeter Anchor.
 */
export interface PerimeterAnchorOptions extends AnchorOptions {
    shape:string
    rotation?:number
    anchorCount?:number
}

/**
 * Defines the current location that an anchor is placed at.
 * @internal
 */
export type AnchorPlacement = {
    curX:number,
    curY:number,
    x:number,
    y:number,
    ox:number,
    oy:number
}

/**
 * Default anchor locations.
 */
export enum AnchorLocations {
    Assign = "Assign",
    /**
     * Chooses from Top, Left, Bottom or Right, depending on which is closest to the anchor at the other end of the connection.
     */
    AutoDefault = "AutoDefault",
    /**
     * Bottom middle of the element.
     */
    Bottom = "Bottom",
    /**
     * Bottom left corner of the element.
     */
    BottomLeft = "BottomLeft",
    /**
     * Bottom right corner of the element.
     */
    BottomRight = "BottomRight",
    /**
     * Center of the element.
     */
    Center = "Center",
    /**
     * Assigns a separate anchor point for each endpoint, choosing whichever face is closest to the element at the other end of each connection.
     */
    Continuous = "Continuous",
    /**
     * As with Continuous, but only use the bottom face.
     */
    ContinuousBottom = "ContinuousBottom",
    /**
     * As with Continuous, but only use the left face.
     */
    ContinuousLeft = "ContinuousLeft",
    /**
     * As with Continuous, but only use the right face.
     */
    ContinuousRight = "ContinuousRight",
    /**
     * As with Continuous, but only use the top face.
     */
    ContinuousTop = "ContinuousTop",
    /**
     * As with Continuous, but only use the left and right faces.
     */
    ContinuousLeftRight = "ContinuousLeftRight",
    /**
     * As with Continuous, but only use the top and bottom faces.
     */
    ContinuousTopBottom = "ContinuousTopBottom",
    /**
     * Center of the left edge of the element.
     */
    Left = "Left",
    /**
     * Tracks the perimeter of some shape.
     */
    Perimeter = "Perimeter",
    /**
     * Center of the right edge of the element.
     */
    Right = "Right",
    /**
     * Center of the top edge of the element.
     */
    Top = "Top",
    /**
     * Top left corner of the element.
     */
    TopLeft = "TopLeft",
    /**
     * Top right corner of the element.
     */
    TopRight = "TopRight"
}

/**
 * List of entries in the AnchorLocations enum
 */
export type AnchorId = keyof typeof AnchorLocations

/**
 * An anchor spec in the form `{type:..., options:{ ... }}`
 */
export type FullAnchorSpec = {type:AnchorId, options:AnchorOptions}

/**
 * Models the specification of a single anchor.
 */
export type SingleAnchorSpec = AnchorId | FullAnchorSpec | AnchorPlacement | Array<AnchorPlacement>

/**
 * Models the specification of anchor - which may be a SingleAnchorSpec, or an array of SingleAnchorSpec objects.
 */
export type AnchorSpec = SingleAnchorSpec | Array<SingleAnchorSpec>