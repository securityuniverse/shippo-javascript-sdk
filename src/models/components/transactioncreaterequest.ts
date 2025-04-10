/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LabelFileTypeEnum,
  LabelFileTypeEnum$inboundSchema,
  LabelFileTypeEnum$outboundSchema,
} from "./labelfiletypeenum.js";

export type TransactionCreateRequest = {
  async?: boolean | undefined;
  /**
   * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
   *
   * @remarks
   * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
   */
  labelFileType?: LabelFileTypeEnum | undefined;
  metadata?: string | undefined;
  rate: string;
  order?: string | undefined;
};

/** @internal */
export const TransactionCreateRequest$inboundSchema: z.ZodType<
  TransactionCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  async: z.boolean().default(true),
  label_file_type: LabelFileTypeEnum$inboundSchema.optional(),
  metadata: z.string().optional(),
  rate: z.string(),
  order: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "label_file_type": "labelFileType",
  });
});

/** @internal */
export type TransactionCreateRequest$Outbound = {
  async: boolean;
  label_file_type?: string | undefined;
  metadata?: string | undefined;
  rate: string;
  order?: string | undefined;
};

/** @internal */
export const TransactionCreateRequest$outboundSchema: z.ZodType<
  TransactionCreateRequest$Outbound,
  z.ZodTypeDef,
  TransactionCreateRequest
> = z.object({
  async: z.boolean().default(true),
  labelFileType: LabelFileTypeEnum$outboundSchema.optional(),
  metadata: z.string().optional(),
  rate: z.string(),
  order: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    labelFileType: "label_file_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionCreateRequest$ {
  /** @deprecated use `TransactionCreateRequest$inboundSchema` instead. */
  export const inboundSchema = TransactionCreateRequest$inboundSchema;
  /** @deprecated use `TransactionCreateRequest$outboundSchema` instead. */
  export const outboundSchema = TransactionCreateRequest$outboundSchema;
  /** @deprecated use `TransactionCreateRequest$Outbound` instead. */
  export type Outbound = TransactionCreateRequest$Outbound;
}

export function transactionCreateRequestToJSON(
  transactionCreateRequest: TransactionCreateRequest,
): string {
  return JSON.stringify(
    TransactionCreateRequest$outboundSchema.parse(transactionCreateRequest),
  );
}

export function transactionCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<TransactionCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionCreateRequest' from JSON`,
  );
}
