/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | asendia_us_priority_tracked | Asendia USA Priority Tracked|
 * | asendia_us_international_express | Asendia USA International Express|
 * | asendia_us_international_priority_airmail | Asendia USA International Priority Airmail|
 * | asendia_us_international_surface_airlift | Asendia USA International Surface Air Lift|
 * | asendia_us_priority_mail_international | Asendia USA Priority Mail International|
 * | asendia_us_priority_mail_express_international | Asendia USA Priority Mail Express International|
 * | asendia_us_epacket | Asendia USA International ePacket|
 * | asendia_us_other | Asendia USA Other Services (custom)|
 */
export const ServiceLevelAsendiaEnum = {
  AsendiaUsPriorityTracked: "asendia_us_priority_tracked",
  AsendiaUsInternationalExpress: "asendia_us_international_express",
  AsendiaUsInternationalPriorityAirmail:
    "asendia_us_international_priority_airmail",
  AsendiaUsInternationalSurfaceAirlift:
    "asendia_us_international_surface_airlift",
  AsendiaUsPriorityMailInternational: "asendia_us_priority_mail_international",
  AsendiaUsPriorityMailExpressInternational:
    "asendia_us_priority_mail_express_international",
  AsendiaUsEpacket: "asendia_us_epacket",
  AsendiaUsOther: "asendia_us_other",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | asendia_us_priority_tracked | Asendia USA Priority Tracked|
 * | asendia_us_international_express | Asendia USA International Express|
 * | asendia_us_international_priority_airmail | Asendia USA International Priority Airmail|
 * | asendia_us_international_surface_airlift | Asendia USA International Surface Air Lift|
 * | asendia_us_priority_mail_international | Asendia USA Priority Mail International|
 * | asendia_us_priority_mail_express_international | Asendia USA Priority Mail Express International|
 * | asendia_us_epacket | Asendia USA International ePacket|
 * | asendia_us_other | Asendia USA Other Services (custom)|
 */
export type ServiceLevelAsendiaEnum = ClosedEnum<
  typeof ServiceLevelAsendiaEnum
>;

/** @internal */
export const ServiceLevelAsendiaEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAsendiaEnum
> = z.nativeEnum(ServiceLevelAsendiaEnum);

/** @internal */
export const ServiceLevelAsendiaEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAsendiaEnum
> = ServiceLevelAsendiaEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelAsendiaEnum$ {
  /** @deprecated use `ServiceLevelAsendiaEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelAsendiaEnum$inboundSchema;
  /** @deprecated use `ServiceLevelAsendiaEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelAsendiaEnum$outboundSchema;
}
