/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Location, Location$ } from "./location";
import * as z from "zod";

export type PickupBase = {
    /**
     * The object ID of your USPS or DHL Express carrier account.
     *
     * @remarks
     * You can retrieve this from your Rate requests or our <a href="#tag/Carrier-Accounts/">Carrier Accounts</a> endpoint.
     */
    carrierAccount: string;
    /**
     * Location where the parcel(s) will be picked up.
     */
    location: Location;
    /**
     * A string of up to 100 characters that can be filled with any additional information you
     *
     * @remarks
     * want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * The latest that you requested your parcels to be available for pickup.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    requestedEndTime: Date;
    /**
     * The earliest that you requested your parcels to be ready for pickup.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    requestedStartTime: Date;
    /**
     * The transaction(s) object ID(s) for the parcel(s) that need to be picked up.
     */
    transactions: Array<string>;
};

/** @internal */
export namespace PickupBase$ {
    export type Inbound = {
        carrier_account: string;
        location: Location$.Inbound;
        metadata?: string | undefined;
        requested_end_time: string;
        requested_start_time: string;
        transactions: Array<string>;
    };

    export const inboundSchema: z.ZodType<PickupBase, z.ZodTypeDef, Inbound> = z
        .object({
            carrier_account: z.string(),
            location: Location$.inboundSchema,
            metadata: z.string().optional(),
            requested_end_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            requested_start_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            transactions: z.array(z.string()),
        })
        .transform((v) => {
            return {
                carrierAccount: v.carrier_account,
                location: v.location,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                requestedEndTime: v.requested_end_time,
                requestedStartTime: v.requested_start_time,
                transactions: v.transactions,
            };
        });

    export type Outbound = {
        carrier_account: string;
        location: Location$.Outbound;
        metadata?: string | undefined;
        requested_end_time: string;
        requested_start_time: string;
        transactions: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PickupBase> = z
        .object({
            carrierAccount: z.string(),
            location: Location$.outboundSchema,
            metadata: z.string().optional(),
            requestedEndTime: z.date().transform((v) => v.toISOString()),
            requestedStartTime: z.date().transform((v) => v.toISOString()),
            transactions: z.array(z.string()),
        })
        .transform((v) => {
            return {
                carrier_account: v.carrierAccount,
                location: v.location,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                requested_end_time: v.requestedEndTime,
                requested_start_time: v.requestedStartTime,
                transactions: v.transactions,
            };
        });
}
