/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Specify the PO number field on the label (FedEx only).
 */
export type PoNumber = {
    /**
     * Custom prefix for PO number field (ZPL labels only). Up to 11 characters, including trailing
     *
     * @remarks
     * spaces. Empty string indicates removal of default prefix. To use the default prefix, do not include
     * this property.
     */
    prefix?: string | undefined;
    /**
     * Optional text to be printed on the shipping label for PO number. Up to 40 characters. If
     *
     * @remarks
     * this is provided, reference_2 will be ignored.
     */
    value?: string | undefined;
};

/** @internal */
export namespace PoNumber$ {
    export type Inbound = {
        prefix?: string | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PoNumber, z.ZodTypeDef, Inbound> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        prefix?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PoNumber> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
