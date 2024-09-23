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
 * | dhl_ecommerce_marketing_parcel_expedited | Marketing Parcel Expedited|
 * | dhl_ecommerce_globalmail_business_ipa | GlobalMail Business IPA|
 * | dhl_ecommerce_parcel_international_direct | Parcel International Direct|
 * | dhl_ecommerce_parcels_expedited_max | Parcels Expedited Max|
 * | dhl_ecommerce_bpm_ground | Bounded Printed Matter Ground|
 * | dhl_ecommerce_priority_expedited | Priority Expedited|
 * | dhl_ecommerce_globalmail_packet_ipa | GlobalMail Packet IPA|
 * | dhl_ecommerce_globalmail_packet_isal | GlobalMail Packet ISAL|
 * | dhl_ecommerce_easy_return_plus | Easy Return Plus|
 * | dhl_ecommerce_marketing_parcel_ground | Marketing Parcel Ground|
 * | dhl_ecommerce_first_class_parcel_expedited | First Class Parcel Expedited|
 * | dhl_ecommerce_globalmail_business_priority | GlobalMail Business Priority|
 * | dhl_ecommerce_parcels_expedited | Parcels Expedited|
 * | dhl_ecommerce_globalmail_business_isal | GlobalMail Business ISAL|
 * | dhl_ecommerce_parcel_plus_expedited_max | Parcel Plus Expedited Max|
 * | dhl_ecommerce_globalmail_packet_plus | GlobalMail Packet Plus|
 * | dhl_ecommerce_parcels_ground | Parcels Ground|
 * | dhl_ecommerce_expedited | Expedited|
 * | dhl_ecommerce_parcel_plus_ground | Parcel Plus Ground|
 * | dhl_ecommerce_parcel_international_standard | Parcel International Standard|
 * | dhl_ecommerce_bpm_expedited | Bounded Printed Matter Expedited|
 * | dhl_ecommerce_parcel_international_expedited | Parcel International Expedited|
 * | dhl_ecommerce_globalmail_packet_priority | GlobalMail Packet Priority|
 * | dhl_ecommerce_easy_return_light | Easy Return Light|
 * | dhl_ecommerce_parcel_plus_expedited | Parcel Plus Expedited|
 * | dhl_ecommerce_globalmail_business_standard | GlobalMail Packet Standard|
 * | dhl_ecommerce_ground | Ground|
 * | dhl_ecommerce_globalmail_packet_standard | GlobalMail Business Standard|
 */
export const ServiceLevelDHLeCommerceEnum = {
  DhlEcommerceMarketingParcelExpedited:
    "dhl_ecommerce_marketing_parcel_expedited",
  DhlEcommerceGlobalmailBusinessIpa: "dhl_ecommerce_globalmail_business_ipa",
  DhlEcommerceParcelInternationalDirect:
    "dhl_ecommerce_parcel_international_direct",
  DhlEcommerceParcelsExpeditedMax: "dhl_ecommerce_parcels_expedited_max",
  DhlEcommerceBpmGround: "dhl_ecommerce_bpm_ground",
  DhlEcommercePriorityExpedited: "dhl_ecommerce_priority_expedited",
  DhlEcommerceGlobalmailPacketIpa: "dhl_ecommerce_globalmail_packet_ipa",
  DhlEcommerceGlobalmailPacketIsal: "dhl_ecommerce_globalmail_packet_isal",
  DhlEcommerceEasyReturnPlus: "dhl_ecommerce_easy_return_plus",
  DhlEcommerceMarketingParcelGround: "dhl_ecommerce_marketing_parcel_ground",
  DhlEcommerceFirstClassParcelExpedited:
    "dhl_ecommerce_first_class_parcel_expedited",
  DhlEcommerceGlobalmailBusinessPriority:
    "dhl_ecommerce_globalmail_business_priority",
  DhlEcommerceParcelsExpedited: "dhl_ecommerce_parcels_expedited",
  DhlEcommerceGlobalmailBusinessIsal: "dhl_ecommerce_globalmail_business_isal",
  DhlEcommerceParcelPlusExpeditedMax: "dhl_ecommerce_parcel_plus_expedited_max",
  DhlEcommerceGlobalmailPacketPlus: "dhl_ecommerce_globalmail_packet_plus",
  DhlEcommerceParcelsGround: "dhl_ecommerce_parcels_ground",
  DhlEcommerceExpedited: "dhl_ecommerce_expedited",
  DhlEcommerceParcelPlusGround: "dhl_ecommerce_parcel_plus_ground",
  DhlEcommerceParcelInternationalStandard:
    "dhl_ecommerce_parcel_international_standard",
  DhlEcommerceBpmExpedited: "dhl_ecommerce_bpm_expedited",
  DhlEcommerceParcelInternationalExpedited:
    "dhl_ecommerce_parcel_international_expedited",
  DhlEcommerceGlobalmailPacketPriority:
    "dhl_ecommerce_globalmail_packet_priority",
  DhlEcommerceEasyReturnLight: "dhl_ecommerce_easy_return_light",
  DhlEcommerceParcelPlusExpedited: "dhl_ecommerce_parcel_plus_expedited",
  DhlEcommerceGlobalmailBusinessStandard:
    "dhl_ecommerce_globalmail_business_standard",
  DhlEcommerceGround: "dhl_ecommerce_ground",
  DhlEcommerceGlobalmailPacketStandard:
    "dhl_ecommerce_globalmail_packet_standard",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | dhl_ecommerce_marketing_parcel_expedited | Marketing Parcel Expedited|
 * | dhl_ecommerce_globalmail_business_ipa | GlobalMail Business IPA|
 * | dhl_ecommerce_parcel_international_direct | Parcel International Direct|
 * | dhl_ecommerce_parcels_expedited_max | Parcels Expedited Max|
 * | dhl_ecommerce_bpm_ground | Bounded Printed Matter Ground|
 * | dhl_ecommerce_priority_expedited | Priority Expedited|
 * | dhl_ecommerce_globalmail_packet_ipa | GlobalMail Packet IPA|
 * | dhl_ecommerce_globalmail_packet_isal | GlobalMail Packet ISAL|
 * | dhl_ecommerce_easy_return_plus | Easy Return Plus|
 * | dhl_ecommerce_marketing_parcel_ground | Marketing Parcel Ground|
 * | dhl_ecommerce_first_class_parcel_expedited | First Class Parcel Expedited|
 * | dhl_ecommerce_globalmail_business_priority | GlobalMail Business Priority|
 * | dhl_ecommerce_parcels_expedited | Parcels Expedited|
 * | dhl_ecommerce_globalmail_business_isal | GlobalMail Business ISAL|
 * | dhl_ecommerce_parcel_plus_expedited_max | Parcel Plus Expedited Max|
 * | dhl_ecommerce_globalmail_packet_plus | GlobalMail Packet Plus|
 * | dhl_ecommerce_parcels_ground | Parcels Ground|
 * | dhl_ecommerce_expedited | Expedited|
 * | dhl_ecommerce_parcel_plus_ground | Parcel Plus Ground|
 * | dhl_ecommerce_parcel_international_standard | Parcel International Standard|
 * | dhl_ecommerce_bpm_expedited | Bounded Printed Matter Expedited|
 * | dhl_ecommerce_parcel_international_expedited | Parcel International Expedited|
 * | dhl_ecommerce_globalmail_packet_priority | GlobalMail Packet Priority|
 * | dhl_ecommerce_easy_return_light | Easy Return Light|
 * | dhl_ecommerce_parcel_plus_expedited | Parcel Plus Expedited|
 * | dhl_ecommerce_globalmail_business_standard | GlobalMail Packet Standard|
 * | dhl_ecommerce_ground | Ground|
 * | dhl_ecommerce_globalmail_packet_standard | GlobalMail Business Standard|
 */
export type ServiceLevelDHLeCommerceEnum = ClosedEnum<
  typeof ServiceLevelDHLeCommerceEnum
>;

/** @internal */
export const ServiceLevelDHLeCommerceEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDHLeCommerceEnum
> = z.nativeEnum(ServiceLevelDHLeCommerceEnum);

/** @internal */
export const ServiceLevelDHLeCommerceEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDHLeCommerceEnum
> = ServiceLevelDHLeCommerceEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelDHLeCommerceEnum$ {
  /** @deprecated use `ServiceLevelDHLeCommerceEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelDHLeCommerceEnum$inboundSchema;
  /** @deprecated use `ServiceLevelDHLeCommerceEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelDHLeCommerceEnum$outboundSchema;
}
