/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateManifestGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateManifestGlobals$inboundSchema: z.ZodType<
  CreateManifestGlobals,
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
export type CreateManifestGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateManifestGlobals$outboundSchema: z.ZodType<
  CreateManifestGlobals$Outbound,
  z.ZodTypeDef,
  CreateManifestGlobals
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
export namespace CreateManifestGlobals$ {
  /** @deprecated use `CreateManifestGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateManifestGlobals$inboundSchema;
  /** @deprecated use `CreateManifestGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateManifestGlobals$outboundSchema;
  /** @deprecated use `CreateManifestGlobals$Outbound` instead. */
  export type Outbound = CreateManifestGlobals$Outbound;
}

export function createManifestGlobalsToJSON(
  createManifestGlobals: CreateManifestGlobals,
): string {
  return JSON.stringify(
    CreateManifestGlobals$outboundSchema.parse(createManifestGlobals),
  );
}

export function createManifestGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateManifestGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateManifestGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateManifestGlobals' from JSON`,
  );
}
