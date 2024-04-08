/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CarrierAccountWithExtraInfo,
    CarrierAccountWithExtraInfo$,
} from "./carrieraccountwithextrainfo";
import * as z from "zod";

export type CarrierAccountPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<CarrierAccountWithExtraInfo> | undefined;
};

/** @internal */
export namespace CarrierAccountPaginatedList$ {
    export type Inbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<CarrierAccountWithExtraInfo$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<CarrierAccountPaginatedList, z.ZodTypeDef, Inbound> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(CarrierAccountWithExtraInfo$.inboundSchema).optional(),
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
        results?: Array<CarrierAccountWithExtraInfo$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountPaginatedList> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(CarrierAccountWithExtraInfo$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
