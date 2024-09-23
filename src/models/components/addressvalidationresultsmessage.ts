/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AddressValidationResultsMessage = {
  /**
   * See <a href="#tag/Address-Validation-Codes">Address Validation Codes</a>
   */
  code?: string | undefined;
  /**
   * See <a href="#tag/Address-Validation-Source">Address Validation Source</a>
   */
  source?: string | undefined;
  text?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const AddressValidationResultsMessage$inboundSchema: z.ZodType<
  AddressValidationResultsMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  source: z.string().optional(),
  text: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type AddressValidationResultsMessage$Outbound = {
  code?: string | undefined;
  source?: string | undefined;
  text?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const AddressValidationResultsMessage$outboundSchema: z.ZodType<
  AddressValidationResultsMessage$Outbound,
  z.ZodTypeDef,
  AddressValidationResultsMessage
> = z.object({
  code: z.string().optional(),
  source: z.string().optional(),
  text: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressValidationResultsMessage$ {
  /** @deprecated use `AddressValidationResultsMessage$inboundSchema` instead. */
  export const inboundSchema = AddressValidationResultsMessage$inboundSchema;
  /** @deprecated use `AddressValidationResultsMessage$outboundSchema` instead. */
  export const outboundSchema = AddressValidationResultsMessage$outboundSchema;
  /** @deprecated use `AddressValidationResultsMessage$Outbound` instead. */
  export type Outbound = AddressValidationResultsMessage$Outbound;
}
