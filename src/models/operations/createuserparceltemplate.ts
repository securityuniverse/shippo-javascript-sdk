/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateUserParcelTemplateGlobals = {
  /**
   * String used to pick a non-default API version to use
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateUserParcelTemplateGlobals$inboundSchema: z.ZodType<
  CreateUserParcelTemplateGlobals,
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
export type CreateUserParcelTemplateGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateUserParcelTemplateGlobals$outboundSchema: z.ZodType<
  CreateUserParcelTemplateGlobals$Outbound,
  z.ZodTypeDef,
  CreateUserParcelTemplateGlobals
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
export namespace CreateUserParcelTemplateGlobals$ {
  /** @deprecated use `CreateUserParcelTemplateGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateUserParcelTemplateGlobals$inboundSchema;
  /** @deprecated use `CreateUserParcelTemplateGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateUserParcelTemplateGlobals$outboundSchema;
  /** @deprecated use `CreateUserParcelTemplateGlobals$Outbound` instead. */
  export type Outbound = CreateUserParcelTemplateGlobals$Outbound;
}
