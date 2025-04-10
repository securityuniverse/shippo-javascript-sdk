/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Cod,
  Cod$inboundSchema,
  Cod$Outbound,
  Cod$outboundSchema,
} from "./cod.js";
import {
  ParcelInsurance,
  ParcelInsurance$inboundSchema,
  ParcelInsurance$Outbound,
  ParcelInsurance$outboundSchema,
} from "./parcelinsurance.js";

/**
 * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
 *
 * @remarks
 * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
 */
export type ParcelExtra = {
  /**
   * Specify collection on delivery details (UPS only).
   */
  cod?: Cod | undefined;
  /**
   * To add insurace to your parcel, specify `amount`, `content` and `currency`. <br><br>If you do not want to add insurance to you parcel, do not set these parameters.
   */
  insurance?: ParcelInsurance | undefined;
  /**
   * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.
   */
  reference1?: string | undefined;
  /**
   * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.
   */
  reference2?: string | undefined;
};

/** @internal */
export const ParcelExtra$inboundSchema: z.ZodType<
  ParcelExtra,
  z.ZodTypeDef,
  unknown
> = z.object({
  COD: Cod$inboundSchema.optional(),
  insurance: ParcelInsurance$inboundSchema.optional(),
  reference_1: z.string().optional(),
  reference_2: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "COD": "cod",
    "reference_1": "reference1",
    "reference_2": "reference2",
  });
});

/** @internal */
export type ParcelExtra$Outbound = {
  COD?: Cod$Outbound | undefined;
  insurance?: ParcelInsurance$Outbound | undefined;
  reference_1?: string | undefined;
  reference_2?: string | undefined;
};

/** @internal */
export const ParcelExtra$outboundSchema: z.ZodType<
  ParcelExtra$Outbound,
  z.ZodTypeDef,
  ParcelExtra
> = z.object({
  cod: Cod$outboundSchema.optional(),
  insurance: ParcelInsurance$outboundSchema.optional(),
  reference1: z.string().optional(),
  reference2: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    cod: "COD",
    reference1: "reference_1",
    reference2: "reference_2",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParcelExtra$ {
  /** @deprecated use `ParcelExtra$inboundSchema` instead. */
  export const inboundSchema = ParcelExtra$inboundSchema;
  /** @deprecated use `ParcelExtra$outboundSchema` instead. */
  export const outboundSchema = ParcelExtra$outboundSchema;
  /** @deprecated use `ParcelExtra$Outbound` instead. */
  export type Outbound = ParcelExtra$Outbound;
}

export function parcelExtraToJSON(parcelExtra: ParcelExtra): string {
  return JSON.stringify(ParcelExtra$outboundSchema.parse(parcelExtra));
}

export function parcelExtraFromJSON(
  jsonString: string,
): SafeParseResult<ParcelExtra, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ParcelExtra$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ParcelExtra' from JSON`,
  );
}
