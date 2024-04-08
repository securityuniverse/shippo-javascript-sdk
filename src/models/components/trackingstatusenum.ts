/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Indicates the high level status of the shipment.
 */
export enum TrackingStatusEnum {
    Unknown = "UNKNOWN",
    PreTransit = "PRE_TRANSIT",
    Transit = "TRANSIT",
    Delivered = "DELIVERED",
    Returned = "RETURNED",
    Failure = "FAILURE",
}

/** @internal */
export const TrackingStatusEnum$ = z.nativeEnum(TrackingStatusEnum);
