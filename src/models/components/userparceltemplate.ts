/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CarrierParcelTemplate, CarrierParcelTemplate$ } from "./carrierparceltemplate";
import { DistanceUnit, DistanceUnit$ } from "./distanceunit";
import { WeightUnit, WeightUnit$ } from "./weightunit";
import * as z from "zod";

export type UserParcelTemplate = {
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit?: DistanceUnit | undefined;
    /**
     * The height of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    height?: string | undefined;
    /**
     * The length of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    length?: string | undefined;
    /**
     * The name of the User Parcel Template
     */
    name?: string | undefined;
    /**
     * The weight of the package, in units specified by the weight_unit attribute.
     */
    weight?: string | undefined;
    /**
     * The unit used for weight.
     */
    weightUnit?: WeightUnit | undefined;
    /**
     * The width of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    width?: string | undefined;
    /**
     * Date and time of User Parcel Template creation
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given User Parcel Template object
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the User Parcel Template object
     */
    objectOwner?: string | undefined;
    /**
     * Date and time of last update on User Parcel Template
     */
    objectUpdated?: Date | undefined;
    template?: CarrierParcelTemplate | undefined;
};

/** @internal */
export namespace UserParcelTemplate$ {
    export type Inbound = {
        distance_unit?: DistanceUnit | undefined;
        height?: string | undefined;
        length?: string | undefined;
        name?: string | undefined;
        weight?: string | undefined;
        weight_unit?: WeightUnit | undefined;
        width?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_updated?: string | undefined;
        template?: CarrierParcelTemplate$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UserParcelTemplate, z.ZodTypeDef, Inbound> = z
        .object({
            distance_unit: DistanceUnit$.optional(),
            height: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            weight: z.string().optional(),
            weight_unit: WeightUnit$.optional(),
            width: z.string().optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            template: CarrierParcelTemplate$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.distance_unit === undefined ? null : { distanceUnit: v.distance_unit }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weight_unit === undefined ? null : { weightUnit: v.weight_unit }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.object_created === undefined ? null : { objectCreated: v.object_created }),
                ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                ...(v.object_owner === undefined ? null : { objectOwner: v.object_owner }),
                ...(v.object_updated === undefined ? null : { objectUpdated: v.object_updated }),
                ...(v.template === undefined ? null : { template: v.template }),
            };
        });

    export type Outbound = {
        distance_unit?: DistanceUnit | undefined;
        height?: string | undefined;
        length?: string | undefined;
        name?: string | undefined;
        weight?: string | undefined;
        weight_unit?: WeightUnit | undefined;
        width?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_updated?: string | undefined;
        template?: CarrierParcelTemplate$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserParcelTemplate> = z
        .object({
            distanceUnit: DistanceUnit$.optional(),
            height: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            weight: z.string().optional(),
            weightUnit: WeightUnit$.optional(),
            width: z.string().optional(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            template: CarrierParcelTemplate$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.distanceUnit === undefined ? null : { distance_unit: v.distanceUnit }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weightUnit === undefined ? null : { weight_unit: v.weightUnit }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.objectCreated === undefined ? null : { object_created: v.objectCreated }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.objectOwner === undefined ? null : { object_owner: v.objectOwner }),
                ...(v.objectUpdated === undefined ? null : { object_updated: v.objectUpdated }),
                ...(v.template === undefined ? null : { template: v.template }),
            };
        });
}
