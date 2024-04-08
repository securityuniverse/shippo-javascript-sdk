/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCarrierParcelTemplateRequest = {
    /**
     * The unique string representation of the carrier parcel template
     */
    carrierParcelTemplateToken: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetCarrierParcelTemplateResponse = {
    httpMeta: components.HTTPMetadata;
    carrierParcelTemplate?: components.CarrierParcelTemplate | undefined;
};

/** @internal */
export namespace GetCarrierParcelTemplateRequest$ {
    export type Inbound = {
        CarrierParcelTemplateToken: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetCarrierParcelTemplateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                CarrierParcelTemplateToken: z.string(),
                "SHIPPO-API-VERSION": z.string().optional(),
            })
            .transform((v) => {
                return {
                    carrierParcelTemplateToken: v.CarrierParcelTemplateToken,
                    ...(v["SHIPPO-API-VERSION"] === undefined
                        ? null
                        : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                };
            });

    export type Outbound = {
        CarrierParcelTemplateToken: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCarrierParcelTemplateRequest
    > = z
        .object({
            carrierParcelTemplateToken: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                CarrierParcelTemplateToken: v.carrierParcelTemplateToken,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace GetCarrierParcelTemplateResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        CarrierParcelTemplate?: components.CarrierParcelTemplate$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetCarrierParcelTemplateResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                CarrierParcelTemplate: components.CarrierParcelTemplate$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.CarrierParcelTemplate === undefined
                        ? null
                        : { carrierParcelTemplate: v.CarrierParcelTemplate }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        CarrierParcelTemplate?: components.CarrierParcelTemplate$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCarrierParcelTemplateResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            carrierParcelTemplate: components.CarrierParcelTemplate$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.carrierParcelTemplate === undefined
                    ? null
                    : { CarrierParcelTemplate: v.carrierParcelTemplate }),
            };
        });
}
