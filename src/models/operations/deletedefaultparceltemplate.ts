/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteDefaultParcelTemplateGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type DeleteDefaultParcelTemplateRequest = {};

/** @internal */
export const DeleteDefaultParcelTemplateGlobals$inboundSchema: z.ZodType<
  DeleteDefaultParcelTemplateGlobals,
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
export type DeleteDefaultParcelTemplateGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const DeleteDefaultParcelTemplateGlobals$outboundSchema: z.ZodType<
  DeleteDefaultParcelTemplateGlobals$Outbound,
  z.ZodTypeDef,
  DeleteDefaultParcelTemplateGlobals
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
export namespace DeleteDefaultParcelTemplateGlobals$ {
  /** @deprecated use `DeleteDefaultParcelTemplateGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteDefaultParcelTemplateGlobals$inboundSchema;
  /** @deprecated use `DeleteDefaultParcelTemplateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    DeleteDefaultParcelTemplateGlobals$outboundSchema;
  /** @deprecated use `DeleteDefaultParcelTemplateGlobals$Outbound` instead. */
  export type Outbound = DeleteDefaultParcelTemplateGlobals$Outbound;
}

export function deleteDefaultParcelTemplateGlobalsToJSON(
  deleteDefaultParcelTemplateGlobals: DeleteDefaultParcelTemplateGlobals,
): string {
  return JSON.stringify(
    DeleteDefaultParcelTemplateGlobals$outboundSchema.parse(
      deleteDefaultParcelTemplateGlobals,
    ),
  );
}

export function deleteDefaultParcelTemplateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDefaultParcelTemplateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteDefaultParcelTemplateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDefaultParcelTemplateGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteDefaultParcelTemplateRequest$inboundSchema: z.ZodType<
  DeleteDefaultParcelTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DeleteDefaultParcelTemplateRequest$Outbound = {};

/** @internal */
export const DeleteDefaultParcelTemplateRequest$outboundSchema: z.ZodType<
  DeleteDefaultParcelTemplateRequest$Outbound,
  z.ZodTypeDef,
  DeleteDefaultParcelTemplateRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDefaultParcelTemplateRequest$ {
  /** @deprecated use `DeleteDefaultParcelTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteDefaultParcelTemplateRequest$inboundSchema;
  /** @deprecated use `DeleteDefaultParcelTemplateRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteDefaultParcelTemplateRequest$outboundSchema;
  /** @deprecated use `DeleteDefaultParcelTemplateRequest$Outbound` instead. */
  export type Outbound = DeleteDefaultParcelTemplateRequest$Outbound;
}

export function deleteDefaultParcelTemplateRequestToJSON(
  deleteDefaultParcelTemplateRequest: DeleteDefaultParcelTemplateRequest,
): string {
  return JSON.stringify(
    DeleteDefaultParcelTemplateRequest$outboundSchema.parse(
      deleteDefaultParcelTemplateRequest,
    ),
  );
}

export function deleteDefaultParcelTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDefaultParcelTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteDefaultParcelTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDefaultParcelTemplateRequest' from JSON`,
  );
}
