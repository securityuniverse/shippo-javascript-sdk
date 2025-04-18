/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ShipmentCreateRequest,
  ShipmentCreateRequest$inboundSchema,
  ShipmentCreateRequest$Outbound,
  ShipmentCreateRequest$outboundSchema,
} from "./shipmentcreaterequest.js";

export type BatchShipmentCreateRequest = {
  /**
   * Object ID of the carrier account to be used for this shipment (will override batch default)
   */
  carrierAccount?: string | undefined;
  /**
   * A string of up to 100 characters that can be filled with any additional information you want
   *
   * @remarks
   * to attach to the object.
   */
  metadata?: string | undefined;
  /**
   * A token that sets the shipping method for the batch, overriding the batch default.
   *
   * @remarks
   * Servicelevel tokens can be found <a href="#tag/Service-Levels">in this list</a>
   * or <a href="#operation/ListCarrierAccounts">at this endpoint</a>.
   */
  servicelevelToken?: string | undefined;
  shipment: ShipmentCreateRequest;
};

/** @internal */
export const BatchShipmentCreateRequest$inboundSchema: z.ZodType<
  BatchShipmentCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier_account: z.string().optional(),
  metadata: z.string().optional(),
  servicelevel_token: z.string().optional(),
  shipment: ShipmentCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "carrier_account": "carrierAccount",
    "servicelevel_token": "servicelevelToken",
  });
});

/** @internal */
export type BatchShipmentCreateRequest$Outbound = {
  carrier_account?: string | undefined;
  metadata?: string | undefined;
  servicelevel_token?: string | undefined;
  shipment: ShipmentCreateRequest$Outbound;
};

/** @internal */
export const BatchShipmentCreateRequest$outboundSchema: z.ZodType<
  BatchShipmentCreateRequest$Outbound,
  z.ZodTypeDef,
  BatchShipmentCreateRequest
> = z.object({
  carrierAccount: z.string().optional(),
  metadata: z.string().optional(),
  servicelevelToken: z.string().optional(),
  shipment: ShipmentCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    carrierAccount: "carrier_account",
    servicelevelToken: "servicelevel_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BatchShipmentCreateRequest$ {
  /** @deprecated use `BatchShipmentCreateRequest$inboundSchema` instead. */
  export const inboundSchema = BatchShipmentCreateRequest$inboundSchema;
  /** @deprecated use `BatchShipmentCreateRequest$outboundSchema` instead. */
  export const outboundSchema = BatchShipmentCreateRequest$outboundSchema;
  /** @deprecated use `BatchShipmentCreateRequest$Outbound` instead. */
  export type Outbound = BatchShipmentCreateRequest$Outbound;
}

export function batchShipmentCreateRequestToJSON(
  batchShipmentCreateRequest: BatchShipmentCreateRequest,
): string {
  return JSON.stringify(
    BatchShipmentCreateRequest$outboundSchema.parse(batchShipmentCreateRequest),
  );
}

export function batchShipmentCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<BatchShipmentCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BatchShipmentCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BatchShipmentCreateRequest' from JSON`,
  );
}
