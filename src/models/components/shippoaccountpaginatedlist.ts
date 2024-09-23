/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ShippoAccount,
  ShippoAccount$inboundSchema,
  ShippoAccount$Outbound,
  ShippoAccount$outboundSchema,
} from "./shippoaccount.js";

export type ShippoAccountPaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<ShippoAccount> | undefined;
};

/** @internal */
export const ShippoAccountPaginatedList$inboundSchema: z.ZodType<
  ShippoAccountPaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(ShippoAccount$inboundSchema).optional(),
});

/** @internal */
export type ShippoAccountPaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<ShippoAccount$Outbound> | undefined;
};

/** @internal */
export const ShippoAccountPaginatedList$outboundSchema: z.ZodType<
  ShippoAccountPaginatedList$Outbound,
  z.ZodTypeDef,
  ShippoAccountPaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(ShippoAccount$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShippoAccountPaginatedList$ {
  /** @deprecated use `ShippoAccountPaginatedList$inboundSchema` instead. */
  export const inboundSchema = ShippoAccountPaginatedList$inboundSchema;
  /** @deprecated use `ShippoAccountPaginatedList$outboundSchema` instead. */
  export const outboundSchema = ShippoAccountPaginatedList$outboundSchema;
  /** @deprecated use `ShippoAccountPaginatedList$Outbound` instead. */
  export type Outbound = ShippoAccountPaginatedList$Outbound;
}
