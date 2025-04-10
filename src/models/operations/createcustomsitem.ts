/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCustomsItemGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateCustomsItemGlobals$inboundSchema: z.ZodType<
  CreateCustomsItemGlobals,
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
export type CreateCustomsItemGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateCustomsItemGlobals$outboundSchema: z.ZodType<
  CreateCustomsItemGlobals$Outbound,
  z.ZodTypeDef,
  CreateCustomsItemGlobals
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
export namespace CreateCustomsItemGlobals$ {
  /** @deprecated use `CreateCustomsItemGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateCustomsItemGlobals$inboundSchema;
  /** @deprecated use `CreateCustomsItemGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateCustomsItemGlobals$outboundSchema;
  /** @deprecated use `CreateCustomsItemGlobals$Outbound` instead. */
  export type Outbound = CreateCustomsItemGlobals$Outbound;
}

export function createCustomsItemGlobalsToJSON(
  createCustomsItemGlobals: CreateCustomsItemGlobals,
): string {
  return JSON.stringify(
    CreateCustomsItemGlobals$outboundSchema.parse(createCustomsItemGlobals),
  );
}

export function createCustomsItemGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomsItemGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomsItemGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomsItemGlobals' from JSON`,
  );
}
