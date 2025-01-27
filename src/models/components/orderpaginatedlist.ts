/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Order,
  Order$inboundSchema,
  Order$Outbound,
  Order$outboundSchema,
} from "./order.js";

export type OrderPaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Order> | undefined;
};

/** @internal */
export const OrderPaginatedList$inboundSchema: z.ZodType<
  OrderPaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Order$inboundSchema).optional(),
});

/** @internal */
export type OrderPaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Order$Outbound> | undefined;
};

/** @internal */
export const OrderPaginatedList$outboundSchema: z.ZodType<
  OrderPaginatedList$Outbound,
  z.ZodTypeDef,
  OrderPaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Order$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderPaginatedList$ {
  /** @deprecated use `OrderPaginatedList$inboundSchema` instead. */
  export const inboundSchema = OrderPaginatedList$inboundSchema;
  /** @deprecated use `OrderPaginatedList$outboundSchema` instead. */
  export const outboundSchema = OrderPaginatedList$outboundSchema;
  /** @deprecated use `OrderPaginatedList$Outbound` instead. */
  export type Outbound = OrderPaginatedList$Outbound;
}

export function orderPaginatedListToJSON(
  orderPaginatedList: OrderPaginatedList,
): string {
  return JSON.stringify(
    OrderPaginatedList$outboundSchema.parse(orderPaginatedList),
  );
}

export function orderPaginatedListFromJSON(
  jsonString: string,
): SafeParseResult<OrderPaginatedList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderPaginatedList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderPaginatedList' from JSON`,
  );
}
