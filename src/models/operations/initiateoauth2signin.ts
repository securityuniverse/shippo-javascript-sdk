/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type InitiateOauth2SigninRequest = {
    /**
     * The carrier account ID to start a signin process
     */
    carrierAccountObjectId: string;
    /**
     * Callback URL. The URL that tells the authorization server where to send the user back to after they approve the request.
     */
    redirectUri: string;
    /**
     * A random string generated by the consuming application and included in the request to prevent CSRF attacks. The consuming application checks that the same value is returned after the user authorizes Shippo.
     */
    state?: string | undefined;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type InitiateOauth2SigninResponse = {
    httpMeta: components.HTTPMetadata;
    headers: Record<string, Array<string>>;
};

/** @internal */
export namespace InitiateOauth2SigninRequest$ {
    export type Inbound = {
        CarrierAccountObjectId: string;
        redirect_uri: string;
        state?: string | undefined;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<InitiateOauth2SigninRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CarrierAccountObjectId: z.string(),
            redirect_uri: z.string(),
            state: z.string().optional(),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                carrierAccountObjectId: v.CarrierAccountObjectId,
                redirectUri: v.redirect_uri,
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        CarrierAccountObjectId: string;
        redirect_uri: string;
        state?: string | undefined;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InitiateOauth2SigninRequest> = z
        .object({
            carrierAccountObjectId: z.string(),
            redirectUri: z.string(),
            state: z.string().optional(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                CarrierAccountObjectId: v.carrierAccountObjectId,
                redirect_uri: v.redirectUri,
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace InitiateOauth2SigninResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Headers: Record<string, Array<string>>;
    };

    export const inboundSchema: z.ZodType<InitiateOauth2SigninResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Headers: Record<string, Array<string>>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InitiateOauth2SigninResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                Headers: v.headers,
            };
        });
}
