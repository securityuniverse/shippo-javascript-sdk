/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetTransactionRequest = {
    /**
     * Object ID of the transaction to update
     */
    transactionId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetTransactionResponse = {
    httpMeta: components.HTTPMetadata;
    transaction?: components.Transaction | undefined;
};

/** @internal */
export namespace GetTransactionRequest$ {
    export type Inbound = {
        TransactionId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            TransactionId: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                transactionId: v.TransactionId,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        TransactionId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionRequest> = z
        .object({
            transactionId: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                TransactionId: v.transactionId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace GetTransactionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Transaction?: components.Transaction$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Transaction: components.Transaction$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Transaction === undefined ? null : { transaction: v.Transaction }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Transaction?: components.Transaction$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            transaction: components.Transaction$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.transaction === undefined ? null : { Transaction: v.transaction }),
            };
        });
}
