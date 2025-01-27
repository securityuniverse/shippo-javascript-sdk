/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DefaultParcelTemplateUpdateRequest = {
  objectId?: string | undefined;
};

/** @internal */
export const DefaultParcelTemplateUpdateRequest$inboundSchema: z.ZodType<
  DefaultParcelTemplateUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  object_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "object_id": "objectId",
  });
});

/** @internal */
export type DefaultParcelTemplateUpdateRequest$Outbound = {
  object_id?: string | undefined;
};

/** @internal */
export const DefaultParcelTemplateUpdateRequest$outboundSchema: z.ZodType<
  DefaultParcelTemplateUpdateRequest$Outbound,
  z.ZodTypeDef,
  DefaultParcelTemplateUpdateRequest
> = z.object({
  objectId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    objectId: "object_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultParcelTemplateUpdateRequest$ {
  /** @deprecated use `DefaultParcelTemplateUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = DefaultParcelTemplateUpdateRequest$inboundSchema;
  /** @deprecated use `DefaultParcelTemplateUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    DefaultParcelTemplateUpdateRequest$outboundSchema;
  /** @deprecated use `DefaultParcelTemplateUpdateRequest$Outbound` instead. */
  export type Outbound = DefaultParcelTemplateUpdateRequest$Outbound;
}

export function defaultParcelTemplateUpdateRequestToJSON(
  defaultParcelTemplateUpdateRequest: DefaultParcelTemplateUpdateRequest,
): string {
  return JSON.stringify(
    DefaultParcelTemplateUpdateRequest$outboundSchema.parse(
      defaultParcelTemplateUpdateRequest,
    ),
  );
}

export function defaultParcelTemplateUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DefaultParcelTemplateUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DefaultParcelTemplateUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefaultParcelTemplateUpdateRequest' from JSON`,
  );
}
