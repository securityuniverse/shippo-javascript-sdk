/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ServiceGroupAccountAndServiceLevel,
  ServiceGroupAccountAndServiceLevel$inboundSchema,
  ServiceGroupAccountAndServiceLevel$Outbound,
  ServiceGroupAccountAndServiceLevel$outboundSchema,
} from "./servicegroupaccountandservicelevel.js";
import {
  ServiceGroupTypeEnum,
  ServiceGroupTypeEnum$inboundSchema,
  ServiceGroupTypeEnum$outboundSchema,
} from "./servicegrouptypeenum.js";

export type ServiceGroup = {
  /**
   * Description for the service group
   */
  description: string;
  /**
   * String representation of an amount to be returned as the flat rate
   *
   * @remarks
   * if 1. The service group is of type `LIVE_RATE` and no matching rates
   * were found; or 2. The service group is of type `FLAT_RATE`. Either
   * integers or decimals are accepted. Required unless type is
   * `FREE_SHIPPING`
   */
  flatRate?: string | undefined;
  /**
   * required unless type is `FREE_SHIPPING`. (ISO 4217 currency)
   */
  flatRateCurrency?: string | undefined;
  /**
   * optional unless type is `FREE_SHIPPING`. (ISO 4217 currency)
   */
  freeShippingThresholdCurrency?: string | undefined;
  /**
   * For service groups of type `FREE_SHIPPING`, this field must be required to configure the minimum
   *
   * @remarks
   * cart total (total cost of items in the cart) for this service group to be returned for rates at
   * checkout. Optional unless type is `FREE_SHIPPING`
   */
  freeShippingThresholdMin?: string | undefined;
  /**
   * Name for the service group that will be shown to customers in the response
   */
  name: string;
  /**
   * The amount in percent (%) that the service group's returned rate should be adjusted. For example, if this field is set to 5 and the matched rate price is $5.00, the returned value of the service group will be $5.25. Negative integers are also accepted and will discount the rate price by the defined percentage amount.
   */
  rateAdjustment?: number | undefined;
  /**
   * The type of the service group.<br>
   *
   * @remarks
   * `LIVE_RATE` - Shippo will make a rating request and return real-time rates for the shipping group, only falling back to the specified flat rate amount if no rates match a service level in the service group.<br>
   * `FLAT_RATE` - Returns a shipping option with the specified flat rate amount.<br>
   * `FREE_SHIPPING` - Returns a shipping option with a price of $0 only if the total cost of items exceeds the amount defined by `free_shipping_threshold_min`
   */
  type: ServiceGroupTypeEnum;
  /**
   * The unique identifier of the given Service Group object.
   */
  objectId: string;
  /**
   * True if the service group is enabled, false otherwise.
   */
  isActive?: boolean | undefined;
  serviceLevels: Array<ServiceGroupAccountAndServiceLevel>;
};

/** @internal */
export const ServiceGroup$inboundSchema: z.ZodType<
  ServiceGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  flat_rate: z.string().optional(),
  flat_rate_currency: z.string().optional(),
  free_shipping_threshold_currency: z.string().optional(),
  free_shipping_threshold_min: z.string().optional(),
  name: z.string(),
  rate_adjustment: z.number().int().optional(),
  type: ServiceGroupTypeEnum$inboundSchema,
  object_id: z.string(),
  is_active: z.boolean().optional(),
  service_levels: z.array(ServiceGroupAccountAndServiceLevel$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "flat_rate": "flatRate",
    "flat_rate_currency": "flatRateCurrency",
    "free_shipping_threshold_currency": "freeShippingThresholdCurrency",
    "free_shipping_threshold_min": "freeShippingThresholdMin",
    "rate_adjustment": "rateAdjustment",
    "object_id": "objectId",
    "is_active": "isActive",
    "service_levels": "serviceLevels",
  });
});

/** @internal */
export type ServiceGroup$Outbound = {
  description: string;
  flat_rate?: string | undefined;
  flat_rate_currency?: string | undefined;
  free_shipping_threshold_currency?: string | undefined;
  free_shipping_threshold_min?: string | undefined;
  name: string;
  rate_adjustment?: number | undefined;
  type: string;
  object_id: string;
  is_active?: boolean | undefined;
  service_levels: Array<ServiceGroupAccountAndServiceLevel$Outbound>;
};

/** @internal */
export const ServiceGroup$outboundSchema: z.ZodType<
  ServiceGroup$Outbound,
  z.ZodTypeDef,
  ServiceGroup
> = z.object({
  description: z.string(),
  flatRate: z.string().optional(),
  flatRateCurrency: z.string().optional(),
  freeShippingThresholdCurrency: z.string().optional(),
  freeShippingThresholdMin: z.string().optional(),
  name: z.string(),
  rateAdjustment: z.number().int().optional(),
  type: ServiceGroupTypeEnum$outboundSchema,
  objectId: z.string(),
  isActive: z.boolean().optional(),
  serviceLevels: z.array(ServiceGroupAccountAndServiceLevel$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    flatRate: "flat_rate",
    flatRateCurrency: "flat_rate_currency",
    freeShippingThresholdCurrency: "free_shipping_threshold_currency",
    freeShippingThresholdMin: "free_shipping_threshold_min",
    rateAdjustment: "rate_adjustment",
    objectId: "object_id",
    isActive: "is_active",
    serviceLevels: "service_levels",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceGroup$ {
  /** @deprecated use `ServiceGroup$inboundSchema` instead. */
  export const inboundSchema = ServiceGroup$inboundSchema;
  /** @deprecated use `ServiceGroup$outboundSchema` instead. */
  export const outboundSchema = ServiceGroup$outboundSchema;
  /** @deprecated use `ServiceGroup$Outbound` instead. */
  export type Outbound = ServiceGroup$Outbound;
}
