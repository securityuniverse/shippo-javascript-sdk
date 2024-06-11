/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CarrierAccountCanadaPostCreateParameters,
    CarrierAccountCanadaPostCreateParameters$,
} from "./carrieraccountcanadapostcreateparameters";
import * as z from "zod";

export type CarrierAccountCanadaPostCreateRequest = {
    carrier: string;
    parameters: CarrierAccountCanadaPostCreateParameters;
};

/** @internal */
export namespace CarrierAccountCanadaPostCreateRequest$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountCanadaPostCreateRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        carrier: z.string(),
        parameters: CarrierAccountCanadaPostCreateParameters$.inboundSchema,
    });

    export type Outbound = {
        carrier: string;
        parameters: CarrierAccountCanadaPostCreateParameters$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountCanadaPostCreateRequest
    > = z.object({
        carrier: z.string(),
        parameters: CarrierAccountCanadaPostCreateParameters$.outboundSchema,
    });
}
