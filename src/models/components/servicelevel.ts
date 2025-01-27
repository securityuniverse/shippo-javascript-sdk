/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Used for some Service Levels to link to the more "generic" version of this Service Level - for example,
 *
 * @remarks
 * if this Service Level is a variation specific to shipments to Europe("ups_saver_eu"), the "parent" is
 * the fully generic version ("ups_saver"). Helpful when displaying Service Levels to users. Has the same
 * structure of the servicelevel - "name", "token", "terms", and "extended_token", or it is otherwise null.
 */
export type ServiceLevel = {
  /**
   * Name of the Rate's servicelevel, e.g. `International Priority` or `Standard Post`.
   *
   * @remarks
   * A servicelevel commonly defines the transit time of a Shipment (e.g., Express vs. Standard), along with other properties.
   * These names vary depending on the provider.
   */
  name?: string | undefined;
  /**
   * Further clarification of the service.
   */
  terms?: string | undefined;
  /**
   * Token of the Rate's servicelevel, e.g. `usps_priority` or `fedex_ground`.
   *
   * @remarks
   * See <a href="#tag/Service-Levels">servicelevels</a>.
   */
  token?: string | undefined;
  /**
   * Unique, extended version of the Service Level "token".
   *
   * @remarks
   * Guaranteed to be unique across all Service Levels, and may help offer insight into the specific Service Level it describes.
   */
  extendedToken?: string | undefined;
};

/** @internal */
export const ServiceLevel$inboundSchema: z.ZodType<
  ServiceLevel,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  terms: z.string().optional(),
  token: z.string().optional(),
  extended_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "extended_token": "extendedToken",
  });
});

/** @internal */
export type ServiceLevel$Outbound = {
  name?: string | undefined;
  terms?: string | undefined;
  token?: string | undefined;
  extended_token?: string | undefined;
};

/** @internal */
export const ServiceLevel$outboundSchema: z.ZodType<
  ServiceLevel$Outbound,
  z.ZodTypeDef,
  ServiceLevel
> = z.object({
  name: z.string().optional(),
  terms: z.string().optional(),
  token: z.string().optional(),
  extendedToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    extendedToken: "extended_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevel$ {
  /** @deprecated use `ServiceLevel$inboundSchema` instead. */
  export const inboundSchema = ServiceLevel$inboundSchema;
  /** @deprecated use `ServiceLevel$outboundSchema` instead. */
  export const outboundSchema = ServiceLevel$outboundSchema;
  /** @deprecated use `ServiceLevel$Outbound` instead. */
  export type Outbound = ServiceLevel$Outbound;
}

export function serviceLevelToJSON(serviceLevel: ServiceLevel): string {
  return JSON.stringify(ServiceLevel$outboundSchema.parse(serviceLevel));
}

export function serviceLevelFromJSON(
  jsonString: string,
): SafeParseResult<ServiceLevel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceLevel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceLevel' from JSON`,
  );
}
