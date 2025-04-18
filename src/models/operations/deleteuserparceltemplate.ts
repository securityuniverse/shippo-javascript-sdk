/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteUserParcelTemplateGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type DeleteUserParcelTemplateRequest = {
  /**
   * Object ID of the user parcel template
   */
  userParcelTemplateObjectId: string;
};

/** @internal */
export const DeleteUserParcelTemplateGlobals$inboundSchema: z.ZodType<
  DeleteUserParcelTemplateGlobals,
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
export type DeleteUserParcelTemplateGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const DeleteUserParcelTemplateGlobals$outboundSchema: z.ZodType<
  DeleteUserParcelTemplateGlobals$Outbound,
  z.ZodTypeDef,
  DeleteUserParcelTemplateGlobals
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
export namespace DeleteUserParcelTemplateGlobals$ {
  /** @deprecated use `DeleteUserParcelTemplateGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteUserParcelTemplateGlobals$inboundSchema;
  /** @deprecated use `DeleteUserParcelTemplateGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteUserParcelTemplateGlobals$outboundSchema;
  /** @deprecated use `DeleteUserParcelTemplateGlobals$Outbound` instead. */
  export type Outbound = DeleteUserParcelTemplateGlobals$Outbound;
}

export function deleteUserParcelTemplateGlobalsToJSON(
  deleteUserParcelTemplateGlobals: DeleteUserParcelTemplateGlobals,
): string {
  return JSON.stringify(
    DeleteUserParcelTemplateGlobals$outboundSchema.parse(
      deleteUserParcelTemplateGlobals,
    ),
  );
}

export function deleteUserParcelTemplateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteUserParcelTemplateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteUserParcelTemplateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteUserParcelTemplateGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteUserParcelTemplateRequest$inboundSchema: z.ZodType<
  DeleteUserParcelTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UserParcelTemplateObjectId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UserParcelTemplateObjectId": "userParcelTemplateObjectId",
  });
});

/** @internal */
export type DeleteUserParcelTemplateRequest$Outbound = {
  UserParcelTemplateObjectId: string;
};

/** @internal */
export const DeleteUserParcelTemplateRequest$outboundSchema: z.ZodType<
  DeleteUserParcelTemplateRequest$Outbound,
  z.ZodTypeDef,
  DeleteUserParcelTemplateRequest
> = z.object({
  userParcelTemplateObjectId: z.string(),
}).transform((v) => {
  return remap$(v, {
    userParcelTemplateObjectId: "UserParcelTemplateObjectId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteUserParcelTemplateRequest$ {
  /** @deprecated use `DeleteUserParcelTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteUserParcelTemplateRequest$inboundSchema;
  /** @deprecated use `DeleteUserParcelTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteUserParcelTemplateRequest$outboundSchema;
  /** @deprecated use `DeleteUserParcelTemplateRequest$Outbound` instead. */
  export type Outbound = DeleteUserParcelTemplateRequest$Outbound;
}

export function deleteUserParcelTemplateRequestToJSON(
  deleteUserParcelTemplateRequest: DeleteUserParcelTemplateRequest,
): string {
  return JSON.stringify(
    DeleteUserParcelTemplateRequest$outboundSchema.parse(
      deleteUserParcelTemplateRequest,
    ),
  );
}

export function deleteUserParcelTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteUserParcelTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteUserParcelTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteUserParcelTemplateRequest' from JSON`,
  );
}
