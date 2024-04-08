/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The unit used for weight.
 */
export enum WeightUnit {
    G = "g",
    Kg = "kg",
    Lb = "lb",
    Oz = "oz",
}

/** @internal */
export const WeightUnit$ = z.nativeEnum(WeightUnit);
