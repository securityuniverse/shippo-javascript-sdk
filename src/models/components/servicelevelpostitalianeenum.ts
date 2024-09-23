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
 * | poste_italiane_delivery_business_express | Poste Delivery Business Express|
 */
export const ServiceLevelPostItalianeEnum = {
  PosteItalianeDeliveryBusinessExpress:
    "poste_italiane_delivery_business_express",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | poste_italiane_delivery_business_express | Poste Delivery Business Express|
 */
export type ServiceLevelPostItalianeEnum = ClosedEnum<
  typeof ServiceLevelPostItalianeEnum
>;

/** @internal */
export const ServiceLevelPostItalianeEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelPostItalianeEnum
> = z.nativeEnum(ServiceLevelPostItalianeEnum);

/** @internal */
export const ServiceLevelPostItalianeEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelPostItalianeEnum
> = ServiceLevelPostItalianeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelPostItalianeEnum$ {
  /** @deprecated use `ServiceLevelPostItalianeEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelPostItalianeEnum$inboundSchema;
  /** @deprecated use `ServiceLevelPostItalianeEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelPostItalianeEnum$outboundSchema;
}
