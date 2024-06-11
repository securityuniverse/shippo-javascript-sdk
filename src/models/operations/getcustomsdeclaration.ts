/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetCustomsDeclarationGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetCustomsDeclarationRequest = {
    /**
     * Object ID of the customs declaration
     */
    customsDeclarationId: string;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
};

/** @internal */
export namespace GetCustomsDeclarationGlobals$ {
    export const inboundSchema: z.ZodType<GetCustomsDeclarationGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomsDeclarationGlobals> = z
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
export namespace GetCustomsDeclarationRequest$ {
    export const inboundSchema: z.ZodType<GetCustomsDeclarationRequest, z.ZodTypeDef, unknown> = z
        .object({
            CustomsDeclarationId: z.string(),
            page: z.number().int().default(1),
        })
        .transform((v) => {
            return remap$(v, {
                CustomsDeclarationId: "customsDeclarationId",
            });
        });

    export type Outbound = {
        CustomsDeclarationId: string;
        page: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomsDeclarationRequest> = z
        .object({
            customsDeclarationId: z.string(),
            page: z.number().int().default(1),
        })
        .transform((v) => {
            return remap$(v, {
                customsDeclarationId: "CustomsDeclarationId",
            });
        });
}
