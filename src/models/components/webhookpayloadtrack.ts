/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Track,
  Track$inboundSchema,
  Track$Outbound,
  Track$outboundSchema,
} from "./track.js";
import {
  WebhookEventTypeEnum,
  WebhookEventTypeEnum$inboundSchema,
  WebhookEventTypeEnum$outboundSchema,
} from "./webhookeventtypeenum.js";

/**
 * Content of the webhook posted to the external URL
 */
export type WebhookPayloadTrack = {
  /**
   * Type of event that triggered the webhook.
   */
  event?: WebhookEventTypeEnum | undefined;
  /**
   * Determines whether the webhook is a test webhook or not.
   */
  test?: boolean | undefined;
  data?: Track | undefined;
};

/** @internal */
export const WebhookPayloadTrack$inboundSchema: z.ZodType<
  WebhookPayloadTrack,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: WebhookEventTypeEnum$inboundSchema.optional(),
  test: z.boolean().optional(),
  data: Track$inboundSchema.optional(),
});

/** @internal */
export type WebhookPayloadTrack$Outbound = {
  event?: string | undefined;
  test?: boolean | undefined;
  data?: Track$Outbound | undefined;
};

/** @internal */
export const WebhookPayloadTrack$outboundSchema: z.ZodType<
  WebhookPayloadTrack$Outbound,
  z.ZodTypeDef,
  WebhookPayloadTrack
> = z.object({
  event: WebhookEventTypeEnum$outboundSchema.optional(),
  test: z.boolean().optional(),
  data: Track$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookPayloadTrack$ {
  /** @deprecated use `WebhookPayloadTrack$inboundSchema` instead. */
  export const inboundSchema = WebhookPayloadTrack$inboundSchema;
  /** @deprecated use `WebhookPayloadTrack$outboundSchema` instead. */
  export const outboundSchema = WebhookPayloadTrack$outboundSchema;
  /** @deprecated use `WebhookPayloadTrack$Outbound` instead. */
  export type Outbound = WebhookPayloadTrack$Outbound;
}

export function webhookPayloadTrackToJSON(
  webhookPayloadTrack: WebhookPayloadTrack,
): string {
  return JSON.stringify(
    WebhookPayloadTrack$outboundSchema.parse(webhookPayloadTrack),
  );
}

export function webhookPayloadTrackFromJSON(
  jsonString: string,
): SafeParseResult<WebhookPayloadTrack, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookPayloadTrack$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookPayloadTrack' from JSON`,
  );
}
