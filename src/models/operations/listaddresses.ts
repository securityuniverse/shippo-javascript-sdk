/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListAddressesRequest = {
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100)
     */
    results?: number | undefined;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListAddressesResponse = {
    httpMeta: components.HTTPMetadata;
    addressPaginatedList?: components.AddressPaginatedList | undefined;
};

/** @internal */
export namespace ListAddressesRequest$ {
    export type Inbound = {
        page?: number | undefined;
        results?: number | undefined;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAddressesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        page: number;
        results: number;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAddressesRequest> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace ListAddressesResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AddressPaginatedList?: components.AddressPaginatedList$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListAddressesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AddressPaginatedList: components.AddressPaginatedList$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AddressPaginatedList === undefined
                    ? null
                    : { addressPaginatedList: v.AddressPaginatedList }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AddressPaginatedList?: components.AddressPaginatedList$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAddressesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            addressPaginatedList: components.AddressPaginatedList$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.addressPaginatedList === undefined
                    ? null
                    : { AddressPaginatedList: v.addressPaginatedList }),
            };
        });
}
