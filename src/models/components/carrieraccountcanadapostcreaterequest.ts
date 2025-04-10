/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CarrierAccountCanadaPostCreateParameters,
  CarrierAccountCanadaPostCreateParameters$inboundSchema,
  CarrierAccountCanadaPostCreateParameters$Outbound,
  CarrierAccountCanadaPostCreateParameters$outboundSchema,
} from "./carrieraccountcanadapostcreateparameters.js";

export type CarrierAccountCanadaPostCreateRequest = {
  carrier?: "canada_post" | undefined;
  parameters: CarrierAccountCanadaPostCreateParameters;
};

/** @internal */
export const CarrierAccountCanadaPostCreateRequest$inboundSchema: z.ZodType<
  CarrierAccountCanadaPostCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier: z.literal("canada_post").optional(),
  parameters: CarrierAccountCanadaPostCreateParameters$inboundSchema,
});

/** @internal */
export type CarrierAccountCanadaPostCreateRequest$Outbound = {
  carrier: "canada_post";
  parameters: CarrierAccountCanadaPostCreateParameters$Outbound;
};

/** @internal */
export const CarrierAccountCanadaPostCreateRequest$outboundSchema: z.ZodType<
  CarrierAccountCanadaPostCreateRequest$Outbound,
  z.ZodTypeDef,
  CarrierAccountCanadaPostCreateRequest
> = z.object({
  carrier: z.literal("canada_post").default("canada_post" as const),
  parameters: CarrierAccountCanadaPostCreateParameters$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountCanadaPostCreateRequest$ {
  /** @deprecated use `CarrierAccountCanadaPostCreateRequest$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountCanadaPostCreateRequest$inboundSchema;
  /** @deprecated use `CarrierAccountCanadaPostCreateRequest$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountCanadaPostCreateRequest$outboundSchema;
  /** @deprecated use `CarrierAccountCanadaPostCreateRequest$Outbound` instead. */
  export type Outbound = CarrierAccountCanadaPostCreateRequest$Outbound;
}

export function carrierAccountCanadaPostCreateRequestToJSON(
  carrierAccountCanadaPostCreateRequest: CarrierAccountCanadaPostCreateRequest,
): string {
  return JSON.stringify(
    CarrierAccountCanadaPostCreateRequest$outboundSchema.parse(
      carrierAccountCanadaPostCreateRequest,
    ),
  );
}

export function carrierAccountCanadaPostCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CarrierAccountCanadaPostCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CarrierAccountCanadaPostCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CarrierAccountCanadaPostCreateRequest' from JSON`,
  );
}
