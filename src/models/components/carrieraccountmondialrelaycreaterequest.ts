/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountMondialRelayCreateRequestParameters = {};

export type CarrierAccountMondialRelayCreateRequest = {
  carrier: string;
  parameters: CarrierAccountMondialRelayCreateRequestParameters;
};

/** @internal */
export const CarrierAccountMondialRelayCreateRequestParameters$inboundSchema:
  z.ZodType<
    CarrierAccountMondialRelayCreateRequestParameters,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CarrierAccountMondialRelayCreateRequestParameters$Outbound = {};

/** @internal */
export const CarrierAccountMondialRelayCreateRequestParameters$outboundSchema:
  z.ZodType<
    CarrierAccountMondialRelayCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountMondialRelayCreateRequestParameters
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountMondialRelayCreateRequestParameters$ {
  /** @deprecated use `CarrierAccountMondialRelayCreateRequestParameters$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountMondialRelayCreateRequestParameters$inboundSchema;
  /** @deprecated use `CarrierAccountMondialRelayCreateRequestParameters$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountMondialRelayCreateRequestParameters$outboundSchema;
  /** @deprecated use `CarrierAccountMondialRelayCreateRequestParameters$Outbound` instead. */
  export type Outbound =
    CarrierAccountMondialRelayCreateRequestParameters$Outbound;
}

/** @internal */
export const CarrierAccountMondialRelayCreateRequest$inboundSchema: z.ZodType<
  CarrierAccountMondialRelayCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier: z.string(),
  parameters: z.lazy(() =>
    CarrierAccountMondialRelayCreateRequestParameters$inboundSchema
  ),
});

/** @internal */
export type CarrierAccountMondialRelayCreateRequest$Outbound = {
  carrier: string;
  parameters: CarrierAccountMondialRelayCreateRequestParameters$Outbound;
};

/** @internal */
export const CarrierAccountMondialRelayCreateRequest$outboundSchema: z.ZodType<
  CarrierAccountMondialRelayCreateRequest$Outbound,
  z.ZodTypeDef,
  CarrierAccountMondialRelayCreateRequest
> = z.object({
  carrier: z.string(),
  parameters: z.lazy(() =>
    CarrierAccountMondialRelayCreateRequestParameters$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountMondialRelayCreateRequest$ {
  /** @deprecated use `CarrierAccountMondialRelayCreateRequest$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountMondialRelayCreateRequest$inboundSchema;
  /** @deprecated use `CarrierAccountMondialRelayCreateRequest$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountMondialRelayCreateRequest$outboundSchema;
  /** @deprecated use `CarrierAccountMondialRelayCreateRequest$Outbound` instead. */
  export type Outbound = CarrierAccountMondialRelayCreateRequest$Outbound;
}
