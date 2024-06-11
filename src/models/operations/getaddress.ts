/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetAddressGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetAddressRequest = {
    /**
     * Object ID of the address
     */
    addressId: string;
};

/** @internal */
export namespace GetAddressGlobals$ {
    export const inboundSchema: z.ZodType<GetAddressGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "SHIPPO-API-VERSION": "shippoApiVersion",
            });
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAddressGlobals> = z
        .object({
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                shippoApiVersion: "SHIPPO-API-VERSION",
            });
        });
}

/** @internal */
export namespace GetAddressRequest$ {
    export const inboundSchema: z.ZodType<GetAddressRequest, z.ZodTypeDef, unknown> = z
        .object({
            AddressId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                AddressId: "addressId",
            });
        });

    export type Outbound = {
        AddressId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAddressRequest> = z
        .object({
            addressId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                addressId: "AddressId",
            });
        });
}
