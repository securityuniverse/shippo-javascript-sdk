/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListRefundsGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type ListRefundsRequest = {};

/** @internal */
export const ListRefundsGlobals$inboundSchema: z.ZodType<
  ListRefundsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "SHIPPO-API-VERSION": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "SHIPPO-API-VERSION": "shippoApiVersion",
  });
});

/** @internal */
export type ListRefundsGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListRefundsGlobals$outboundSchema: z.ZodType<
  ListRefundsGlobals$Outbound,
  z.ZodTypeDef,
  ListRefundsGlobals
> = z.object({
  shippoApiVersion: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    shippoApiVersion: "SHIPPO-API-VERSION",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsGlobals$ {
  /** @deprecated use `ListRefundsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListRefundsGlobals$inboundSchema;
  /** @deprecated use `ListRefundsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListRefundsGlobals$outboundSchema;
  /** @deprecated use `ListRefundsGlobals$Outbound` instead. */
  export type Outbound = ListRefundsGlobals$Outbound;
}

/** @internal */
export const ListRefundsRequest$inboundSchema: z.ZodType<
  ListRefundsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListRefundsRequest$Outbound = {};

/** @internal */
export const ListRefundsRequest$outboundSchema: z.ZodType<
  ListRefundsRequest$Outbound,
  z.ZodTypeDef,
  ListRefundsRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsRequest$ {
  /** @deprecated use `ListRefundsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRefundsRequest$inboundSchema;
  /** @deprecated use `ListRefundsRequest$outboundSchema` instead. */
  export const outboundSchema = ListRefundsRequest$outboundSchema;
  /** @deprecated use `ListRefundsRequest$Outbound` instead. */
  export type Outbound = ListRefundsRequest$Outbound;
}
