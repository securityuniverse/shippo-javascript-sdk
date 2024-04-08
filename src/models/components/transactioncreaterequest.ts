/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LabelFileType, LabelFileType$ } from "./labelfiletype";
import * as z from "zod";

export type TransactionCreateRequest = {
    async?: boolean | undefined;
    /**
     * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
     *
     * @remarks
     * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
     */
    labelFileType?: LabelFileType | undefined;
    metadata?: string | undefined;
    rate: string;
};

/** @internal */
export namespace TransactionCreateRequest$ {
    export type Inbound = {
        async?: boolean | undefined;
        label_file_type?: LabelFileType | undefined;
        metadata?: string | undefined;
        rate: string;
    };

    export const inboundSchema: z.ZodType<TransactionCreateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            async: z.boolean().optional(),
            label_file_type: LabelFileType$.optional(),
            metadata: z.string().optional(),
            rate: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.async === undefined ? null : { async: v.async }),
                ...(v.label_file_type === undefined ? null : { labelFileType: v.label_file_type }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                rate: v.rate,
            };
        });

    export type Outbound = {
        async?: boolean | undefined;
        label_file_type?: LabelFileType | undefined;
        metadata?: string | undefined;
        rate: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionCreateRequest> = z
        .object({
            async: z.boolean().optional(),
            labelFileType: LabelFileType$.optional(),
            metadata: z.string().optional(),
            rate: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.async === undefined ? null : { async: v.async }),
                ...(v.labelFileType === undefined ? null : { label_file_type: v.labelFileType }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                rate: v.rate,
            };
        });
}
