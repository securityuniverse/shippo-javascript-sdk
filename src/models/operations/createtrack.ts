/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateTrackRequest = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
    tracksRequest?: components.TracksRequest | undefined;
};

export type CreateTrackResponse = {
    httpMeta: components.HTTPMetadata;
    track?: components.Track | undefined;
};

/** @internal */
export namespace CreateTrackRequest$ {
    export type Inbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        TracksRequest?: components.TracksRequest$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTrackRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
            TracksRequest: components.TracksRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                ...(v.TracksRequest === undefined ? null : { tracksRequest: v.TracksRequest }),
            };
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        TracksRequest?: components.TracksRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTrackRequest> = z
        .object({
            shippoApiVersion: z.string().optional(),
            tracksRequest: components.TracksRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
                ...(v.tracksRequest === undefined ? null : { TracksRequest: v.tracksRequest }),
            };
        });
}

/** @internal */
export namespace CreateTrackResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Track?: components.Track$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTrackResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Track: components.Track$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Track === undefined ? null : { track: v.Track }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Track?: components.Track$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTrackResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            track: components.Track$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.track === undefined ? null : { Track: v.track }),
            };
        });
}
