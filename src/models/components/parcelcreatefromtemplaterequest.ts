/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ParcelExtra,
  ParcelExtra$inboundSchema,
  ParcelExtra$Outbound,
  ParcelExtra$outboundSchema,
} from "./parcelextra.js";
import {
  ParcelTemplateEnumSet,
  ParcelTemplateEnumSet$inboundSchema,
  ParcelTemplateEnumSet$Outbound,
  ParcelTemplateEnumSet$outboundSchema,
} from "./parceltemplateenumset.js";
import {
  WeightUnitEnum,
  WeightUnitEnum$inboundSchema,
  WeightUnitEnum$outboundSchema,
} from "./weightunitenum.js";

export type ParcelCreateFromTemplateRequest = {
  /**
   * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
   *
   * @remarks
   * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
   */
  extra?: ParcelExtra | undefined;
  metadata?: string | undefined;
  /**
   * The unit used for weight.
   */
  massUnit: WeightUnitEnum;
  /**
   * Weight of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
   */
  weight: string;
  /**
   * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
   */
  template: ParcelTemplateEnumSet;
};

/** @internal */
export const ParcelCreateFromTemplateRequest$inboundSchema: z.ZodType<
  ParcelCreateFromTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  extra: ParcelExtra$inboundSchema.optional(),
  metadata: z.string().optional(),
  mass_unit: WeightUnitEnum$inboundSchema,
  weight: z.string(),
  template: ParcelTemplateEnumSet$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "mass_unit": "massUnit",
  });
});

/** @internal */
export type ParcelCreateFromTemplateRequest$Outbound = {
  extra?: ParcelExtra$Outbound | undefined;
  metadata?: string | undefined;
  mass_unit: string;
  weight: string;
  template: ParcelTemplateEnumSet$Outbound;
};

/** @internal */
export const ParcelCreateFromTemplateRequest$outboundSchema: z.ZodType<
  ParcelCreateFromTemplateRequest$Outbound,
  z.ZodTypeDef,
  ParcelCreateFromTemplateRequest
> = z.object({
  extra: ParcelExtra$outboundSchema.optional(),
  metadata: z.string().optional(),
  massUnit: WeightUnitEnum$outboundSchema,
  weight: z.string(),
  template: ParcelTemplateEnumSet$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    massUnit: "mass_unit",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParcelCreateFromTemplateRequest$ {
  /** @deprecated use `ParcelCreateFromTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = ParcelCreateFromTemplateRequest$inboundSchema;
  /** @deprecated use `ParcelCreateFromTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = ParcelCreateFromTemplateRequest$outboundSchema;
  /** @deprecated use `ParcelCreateFromTemplateRequest$Outbound` instead. */
  export type Outbound = ParcelCreateFromTemplateRequest$Outbound;
}

export function parcelCreateFromTemplateRequestToJSON(
  parcelCreateFromTemplateRequest: ParcelCreateFromTemplateRequest,
): string {
  return JSON.stringify(
    ParcelCreateFromTemplateRequest$outboundSchema.parse(
      parcelCreateFromTemplateRequest,
    ),
  );
}

export function parcelCreateFromTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<ParcelCreateFromTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ParcelCreateFromTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ParcelCreateFromTemplateRequest' from JSON`,
  );
}
