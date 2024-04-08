/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DistanceUnit, DistanceUnit$ } from "./distanceunit";
import * as z from "zod";

export type CarrierParcelTemplate = {
    /**
     * The name of the carrier that provides this parcel template
     */
    carrier?: string | undefined;
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit?: DistanceUnit | undefined;
    /**
     * The height of the package, in units specified by the distance_unit attribute
     */
    height?: string | undefined;
    /**
     * True if the carrier parcel template allows custom dimensions, such as USPS Softpack.
     */
    isVariableDimensions?: string | undefined;
    /**
     * The length of the package, in units specified by the distance_unit attribute
     */
    length?: string | undefined;
    /**
     * The name of the carrier parcel template
     */
    name?: string | undefined;
    /**
     * The unique string representation of the carrier parcel template
     */
    token?: string | undefined;
    /**
     * The width of the package, in units specified by the distance_unit attribute
     */
    width?: string | undefined;
};

/** @internal */
export namespace CarrierParcelTemplate$ {
    export type Inbound = {
        carrier?: string | undefined;
        distance_unit?: DistanceUnit | undefined;
        height?: string | undefined;
        is_variable_dimensions?: string | undefined;
        length?: string | undefined;
        name?: string | undefined;
        token?: string | undefined;
        width?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CarrierParcelTemplate, z.ZodTypeDef, Inbound> = z
        .object({
            carrier: z.string().optional(),
            distance_unit: DistanceUnit$.optional(),
            height: z.string().optional(),
            is_variable_dimensions: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            token: z.string().optional(),
            width: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
                ...(v.distance_unit === undefined ? null : { distanceUnit: v.distance_unit }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.is_variable_dimensions === undefined
                    ? null
                    : { isVariableDimensions: v.is_variable_dimensions }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.token === undefined ? null : { token: v.token }),
                ...(v.width === undefined ? null : { width: v.width }),
            };
        });

    export type Outbound = {
        carrier?: string | undefined;
        distance_unit?: DistanceUnit | undefined;
        height?: string | undefined;
        is_variable_dimensions?: string | undefined;
        length?: string | undefined;
        name?: string | undefined;
        token?: string | undefined;
        width?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierParcelTemplate> = z
        .object({
            carrier: z.string().optional(),
            distanceUnit: DistanceUnit$.optional(),
            height: z.string().optional(),
            isVariableDimensions: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            token: z.string().optional(),
            width: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
                ...(v.distanceUnit === undefined ? null : { distance_unit: v.distanceUnit }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.isVariableDimensions === undefined
                    ? null
                    : { is_variable_dimensions: v.isVariableDimensions }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.token === undefined ? null : { token: v.token }),
                ...(v.width === undefined ? null : { width: v.width }),
            };
        });
}
