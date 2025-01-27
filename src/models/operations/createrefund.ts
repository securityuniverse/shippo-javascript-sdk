/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateRefundGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateRefundGlobals$inboundSchema: z.ZodType<
  CreateRefundGlobals,
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
export type CreateRefundGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateRefundGlobals$outboundSchema: z.ZodType<
  CreateRefundGlobals$Outbound,
  z.ZodTypeDef,
  CreateRefundGlobals
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
export namespace CreateRefundGlobals$ {
  /** @deprecated use `CreateRefundGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateRefundGlobals$inboundSchema;
  /** @deprecated use `CreateRefundGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateRefundGlobals$outboundSchema;
  /** @deprecated use `CreateRefundGlobals$Outbound` instead. */
  export type Outbound = CreateRefundGlobals$Outbound;
}

export function createRefundGlobalsToJSON(
  createRefundGlobals: CreateRefundGlobals,
): string {
  return JSON.stringify(
    CreateRefundGlobals$outboundSchema.parse(createRefundGlobals),
  );
}

export function createRefundGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateRefundGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRefundGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRefundGlobals' from JSON`,
  );
}
