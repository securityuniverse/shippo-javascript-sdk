/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateAddressGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateAddressGlobals$inboundSchema: z.ZodType<
  CreateAddressGlobals,
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
export type CreateAddressGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateAddressGlobals$outboundSchema: z.ZodType<
  CreateAddressGlobals$Outbound,
  z.ZodTypeDef,
  CreateAddressGlobals
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
export namespace CreateAddressGlobals$ {
  /** @deprecated use `CreateAddressGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateAddressGlobals$inboundSchema;
  /** @deprecated use `CreateAddressGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateAddressGlobals$outboundSchema;
  /** @deprecated use `CreateAddressGlobals$Outbound` instead. */
  export type Outbound = CreateAddressGlobals$Outbound;
}

export function createAddressGlobalsToJSON(
  createAddressGlobals: CreateAddressGlobals,
): string {
  return JSON.stringify(
    CreateAddressGlobals$outboundSchema.parse(createAddressGlobals),
  );
}

export function createAddressGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateAddressGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAddressGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAddressGlobals' from JSON`,
  );
}
