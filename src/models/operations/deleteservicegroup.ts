/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteServiceGroupGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type DeleteServiceGroupRequest = {
  /**
   * Object ID of the service group
   */
  serviceGroupId: string;
};

/** @internal */
export const DeleteServiceGroupGlobals$inboundSchema: z.ZodType<
  DeleteServiceGroupGlobals,
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
export type DeleteServiceGroupGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const DeleteServiceGroupGlobals$outboundSchema: z.ZodType<
  DeleteServiceGroupGlobals$Outbound,
  z.ZodTypeDef,
  DeleteServiceGroupGlobals
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
export namespace DeleteServiceGroupGlobals$ {
  /** @deprecated use `DeleteServiceGroupGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteServiceGroupGlobals$inboundSchema;
  /** @deprecated use `DeleteServiceGroupGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteServiceGroupGlobals$outboundSchema;
  /** @deprecated use `DeleteServiceGroupGlobals$Outbound` instead. */
  export type Outbound = DeleteServiceGroupGlobals$Outbound;
}

export function deleteServiceGroupGlobalsToJSON(
  deleteServiceGroupGlobals: DeleteServiceGroupGlobals,
): string {
  return JSON.stringify(
    DeleteServiceGroupGlobals$outboundSchema.parse(deleteServiceGroupGlobals),
  );
}

export function deleteServiceGroupGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteServiceGroupGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteServiceGroupGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteServiceGroupGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteServiceGroupRequest$inboundSchema: z.ZodType<
  DeleteServiceGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ServiceGroupId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ServiceGroupId": "serviceGroupId",
  });
});

/** @internal */
export type DeleteServiceGroupRequest$Outbound = {
  ServiceGroupId: string;
};

/** @internal */
export const DeleteServiceGroupRequest$outboundSchema: z.ZodType<
  DeleteServiceGroupRequest$Outbound,
  z.ZodTypeDef,
  DeleteServiceGroupRequest
> = z.object({
  serviceGroupId: z.string(),
}).transform((v) => {
  return remap$(v, {
    serviceGroupId: "ServiceGroupId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteServiceGroupRequest$ {
  /** @deprecated use `DeleteServiceGroupRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteServiceGroupRequest$inboundSchema;
  /** @deprecated use `DeleteServiceGroupRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteServiceGroupRequest$outboundSchema;
  /** @deprecated use `DeleteServiceGroupRequest$Outbound` instead. */
  export type Outbound = DeleteServiceGroupRequest$Outbound;
}

export function deleteServiceGroupRequestToJSON(
  deleteServiceGroupRequest: DeleteServiceGroupRequest,
): string {
  return JSON.stringify(
    DeleteServiceGroupRequest$outboundSchema.parse(deleteServiceGroupRequest),
  );
}

export function deleteServiceGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteServiceGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteServiceGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteServiceGroupRequest' from JSON`,
  );
}
