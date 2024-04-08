/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Shipment, Shipment$ } from "./shipment";
import * as z from "zod";

export type ShipmentPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Shipment> | undefined;
};

/** @internal */
export namespace ShipmentPaginatedList$ {
    export type Inbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Shipment$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<ShipmentPaginatedList, z.ZodTypeDef, Inbound> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Shipment$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Shipment$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShipmentPaginatedList> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Shipment$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
