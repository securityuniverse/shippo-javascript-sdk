/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Location,
  Location$inboundSchema,
  Location$Outbound,
  Location$outboundSchema,
} from "./location.js";

export type PickupBase = {
  /**
   * The object ID of your USPS or DHL Express carrier account.
   *
   * @remarks
   * You can retrieve this from your Rate requests or our <a href="#tag/Carrier-Accounts/">Carrier Accounts</a> endpoint.
   */
  carrierAccount: string;
  /**
   * Location where the parcel(s) will be picked up.
   */
  location: Location;
  /**
   * A string of up to 100 characters that can be filled with any additional information you
   *
   * @remarks
   * want to attach to the object.
   */
  metadata?: string | undefined;
  /**
   * The latest that you requested your parcels to be available for pickup.
   *
   * @remarks
   * Expressed in the timezone specified in the response.
   */
  requestedEndTime: Date;
  /**
   * The earliest that you requested your parcels to be ready for pickup.
   *
   * @remarks
   * Expressed in the timezone specified in the response.
   */
  requestedStartTime: Date;
  /**
   * The transaction(s) object ID(s) for the parcel(s) that need to be picked up.
   */
  transactions: Array<string>;
};

/** @internal */
export const PickupBase$inboundSchema: z.ZodType<
  PickupBase,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier_account: z.string(),
  location: Location$inboundSchema,
  metadata: z.string().optional(),
  requested_end_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  requested_start_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  transactions: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "carrier_account": "carrierAccount",
    "requested_end_time": "requestedEndTime",
    "requested_start_time": "requestedStartTime",
  });
});

/** @internal */
export type PickupBase$Outbound = {
  carrier_account: string;
  location: Location$Outbound;
  metadata?: string | undefined;
  requested_end_time: string;
  requested_start_time: string;
  transactions: Array<string>;
};

/** @internal */
export const PickupBase$outboundSchema: z.ZodType<
  PickupBase$Outbound,
  z.ZodTypeDef,
  PickupBase
> = z.object({
  carrierAccount: z.string(),
  location: Location$outboundSchema,
  metadata: z.string().optional(),
  requestedEndTime: z.date().transform(v => v.toISOString()),
  requestedStartTime: z.date().transform(v => v.toISOString()),
  transactions: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    carrierAccount: "carrier_account",
    requestedEndTime: "requested_end_time",
    requestedStartTime: "requested_start_time",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PickupBase$ {
  /** @deprecated use `PickupBase$inboundSchema` instead. */
  export const inboundSchema = PickupBase$inboundSchema;
  /** @deprecated use `PickupBase$outboundSchema` instead. */
  export const outboundSchema = PickupBase$outboundSchema;
  /** @deprecated use `PickupBase$Outbound` instead. */
  export type Outbound = PickupBase$Outbound;
}

export function pickupBaseToJSON(pickupBase: PickupBase): string {
  return JSON.stringify(PickupBase$outboundSchema.parse(pickupBase));
}

export function pickupBaseFromJSON(
  jsonString: string,
): SafeParseResult<PickupBase, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PickupBase$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PickupBase' from JSON`,
  );
}
