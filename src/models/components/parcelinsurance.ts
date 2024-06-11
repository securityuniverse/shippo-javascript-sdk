/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set provider to `FEDEX`, `UPS`, or `ONTRAC`.
 */
export enum ParcelInsuranceProvider {
    Fedex = "FEDEX",
    Ups = "UPS",
    Ontrac = "ONTRAC",
}

/**
 * To add insurace to your parcel, specify `amount`, `content` and `currency`. <br><br>If you do not want to add insurance to you parcel, do not set these parameters.
 */
export type ParcelInsurance = {
    /**
     * Declared value of the goods you want to insure.
     */
    amount?: string | undefined;
    /**
     * Description of parcel content.
     */
    content?: string | undefined;
    /**
     * Currency for the amount value. Currently only USD is supported for FedEx and UPS.
     */
    currency?: string | undefined;
    /**
     * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set provider to `FEDEX`, `UPS`, or `ONTRAC`.
     */
    provider?: ParcelInsuranceProvider | undefined;
};

/** @internal */
export namespace ParcelInsuranceProvider$ {
    export const inboundSchema = z.nativeEnum(ParcelInsuranceProvider);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ParcelInsurance$ {
    export const inboundSchema: z.ZodType<ParcelInsurance, z.ZodTypeDef, unknown> = z.object({
        amount: z.string().optional(),
        content: z.string().optional(),
        currency: z.string().optional(),
        provider: ParcelInsuranceProvider$.inboundSchema.optional(),
    });

    export type Outbound = {
        amount?: string | undefined;
        content?: string | undefined;
        currency?: string | undefined;
        provider?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParcelInsurance> = z.object({
        amount: z.string().optional(),
        content: z.string().optional(),
        currency: z.string().optional(),
        provider: ParcelInsuranceProvider$.outboundSchema.optional(),
    });
}
