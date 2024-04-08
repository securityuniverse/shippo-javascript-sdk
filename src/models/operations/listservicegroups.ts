/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListServiceGroupsRequest = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListServiceGroupsResponse = {
    httpMeta: components.HTTPMetadata;
    serviceGroupListResponse?: Array<components.ServiceGroup> | undefined;
};

/** @internal */
export namespace ListServiceGroupsRequest$ {
    export type Inbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListServiceGroupsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListServiceGroupsRequest> = z
        .object({
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace ListServiceGroupsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        serviceGroupListResponse?: Array<components.ServiceGroup$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<ListServiceGroupsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            serviceGroupListResponse: z.array(components.ServiceGroup$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.serviceGroupListResponse === undefined
                    ? null
                    : { serviceGroupListResponse: v.serviceGroupListResponse }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        serviceGroupListResponse?: Array<components.ServiceGroup$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListServiceGroupsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            serviceGroupListResponse: z.array(components.ServiceGroup$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.serviceGroupListResponse === undefined
                    ? null
                    : { serviceGroupListResponse: v.serviceGroupListResponse }),
            };
        });
}
