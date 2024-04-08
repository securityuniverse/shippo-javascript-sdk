/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UpdateShippoAccountRequest = {
    /**
     * Object ID of the ShippoAccount
     */
    shippoAccountId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
    shippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest | undefined;
};

export type UpdateShippoAccountResponse = {
    httpMeta: components.HTTPMetadata;
    shippoAccount?: components.ShippoAccount | undefined;
};

/** @internal */
export namespace UpdateShippoAccountRequest$ {
    export type Inbound = {
        ShippoAccountId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
        ShippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateShippoAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ShippoAccountId: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
            ShippoAccountUpdateRequest:
                components.ShippoAccountUpdateRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                shippoAccountId: v.ShippoAccountId,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                ...(v.ShippoAccountUpdateRequest === undefined
                    ? null
                    : { shippoAccountUpdateRequest: v.ShippoAccountUpdateRequest }),
            };
        });

    export type Outbound = {
        ShippoAccountId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
        ShippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateShippoAccountRequest> = z
        .object({
            shippoAccountId: z.string(),
            shippoApiVersion: z.string().optional(),
            shippoAccountUpdateRequest:
                components.ShippoAccountUpdateRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ShippoAccountId: v.shippoAccountId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
                ...(v.shippoAccountUpdateRequest === undefined
                    ? null
                    : { ShippoAccountUpdateRequest: v.shippoAccountUpdateRequest }),
            };
        });
}

/** @internal */
export namespace UpdateShippoAccountResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        ShippoAccount?: components.ShippoAccount$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateShippoAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ShippoAccount: components.ShippoAccount$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ShippoAccount === undefined ? null : { shippoAccount: v.ShippoAccount }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ShippoAccount?: components.ShippoAccount$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateShippoAccountResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            shippoAccount: components.ShippoAccount$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.shippoAccount === undefined ? null : { ShippoAccount: v.shippoAccount }),
            };
        });
}
