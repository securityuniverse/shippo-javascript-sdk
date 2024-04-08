/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Additional invoiced charges to be shown on the Customs Declaration Commercial Invoice.
 */
export type CustomsInvoicedCharges = {
    /**
     * Currency for the invoiced charges amounts incurred on the end consumer.
     */
    currency: string;
    /**
     * Total shipping paid by the buyer.
     */
    totalShipping?: string | undefined;
    /**
     * Total taxes paid by the buyer.
     */
    totalTaxes?: string | undefined;
    /**
     * Total duties paid by the buyer.
     */
    totalDuties?: string | undefined;
    /**
     * Other fees paid by the buyer.
     */
    otherFees?: string | undefined;
};

/** @internal */
export namespace CustomsInvoicedCharges$ {
    export type Inbound = {
        currency: string;
        total_shipping?: string | undefined;
        total_taxes?: string | undefined;
        total_duties?: string | undefined;
        other_fees?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CustomsInvoicedCharges, z.ZodTypeDef, Inbound> = z
        .object({
            currency: z.string(),
            total_shipping: z.string().optional(),
            total_taxes: z.string().optional(),
            total_duties: z.string().optional(),
            other_fees: z.string().optional(),
        })
        .transform((v) => {
            return {
                currency: v.currency,
                ...(v.total_shipping === undefined ? null : { totalShipping: v.total_shipping }),
                ...(v.total_taxes === undefined ? null : { totalTaxes: v.total_taxes }),
                ...(v.total_duties === undefined ? null : { totalDuties: v.total_duties }),
                ...(v.other_fees === undefined ? null : { otherFees: v.other_fees }),
            };
        });

    export type Outbound = {
        currency: string;
        total_shipping?: string | undefined;
        total_taxes?: string | undefined;
        total_duties?: string | undefined;
        other_fees?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomsInvoicedCharges> = z
        .object({
            currency: z.string(),
            totalShipping: z.string().optional(),
            totalTaxes: z.string().optional(),
            totalDuties: z.string().optional(),
            otherFees: z.string().optional(),
        })
        .transform((v) => {
            return {
                currency: v.currency,
                ...(v.totalShipping === undefined ? null : { total_shipping: v.totalShipping }),
                ...(v.totalTaxes === undefined ? null : { total_taxes: v.totalTaxes }),
                ...(v.totalDuties === undefined ? null : { total_duties: v.totalDuties }),
                ...(v.otherFees === undefined ? null : { other_fees: v.otherFees }),
            };
        });
}
