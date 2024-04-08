/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AddressCompleteCreateRequest,
    AddressCompleteCreateRequest$,
} from "./addresscompletecreaterequest";
import { LineItem, LineItem$ } from "./lineitem";
import { Parcel, Parcel$ } from "./parcel";
import * as z from "zod";

/**
 * The sender address, which includes your name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressFrom = AddressCompleteCreateRequest | string;

/**
 * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressTo = AddressCompleteCreateRequest | string;

/**
 * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
 */
export type LiveRateCreateRequestParcel = Parcel | string;

export type LiveRateCreateRequest = {
    /**
     * The sender address, which includes your name, company name, street address, city, state, zip code,
     *
     * @remarks
     * country, phone number, and email address (strings). Special characters should not be included in
     * any address element, especially name, company, and email.
     */
    addressFrom?: AddressCompleteCreateRequest | string | undefined;
    /**
     * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
     *
     * @remarks
     * country, phone number, and email address (strings). Special characters should not be included in
     * any address element, especially name, company, and email.
     */
    addressTo: AddressCompleteCreateRequest | string;
    /**
     * Array of Line Item objects
     */
    lineItems: Array<LineItem>;
    /**
     * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
     */
    parcel?: Parcel | string | undefined;
};

/** @internal */
export namespace LiveRateCreateRequestAddressFrom$ {
    export type Inbound = AddressCompleteCreateRequest$.Inbound | string;

    export type Outbound = AddressCompleteCreateRequest$.Outbound | string;
    export const inboundSchema: z.ZodType<LiveRateCreateRequestAddressFrom, z.ZodTypeDef, Inbound> =
        z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]);
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LiveRateCreateRequestAddressFrom
    > = z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequestAddressTo$ {
    export type Inbound = AddressCompleteCreateRequest$.Inbound | string;

    export type Outbound = AddressCompleteCreateRequest$.Outbound | string;
    export const inboundSchema: z.ZodType<LiveRateCreateRequestAddressTo, z.ZodTypeDef, Inbound> =
        z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequestAddressTo> =
        z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequestParcel$ {
    export type Inbound = Parcel$.Inbound | string;

    export type Outbound = Parcel$.Outbound | string;
    export const inboundSchema: z.ZodType<LiveRateCreateRequestParcel, z.ZodTypeDef, Inbound> =
        z.union([Parcel$.inboundSchema, z.string()]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequestParcel> =
        z.union([Parcel$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequest$ {
    export type Inbound = {
        address_from?: AddressCompleteCreateRequest$.Inbound | string | undefined;
        address_to: AddressCompleteCreateRequest$.Inbound | string;
        line_items: Array<LineItem$.Inbound>;
        parcel?: Parcel$.Inbound | string | undefined;
    };

    export const inboundSchema: z.ZodType<LiveRateCreateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address_from: z
                .union([AddressCompleteCreateRequest$.inboundSchema, z.string()])
                .optional(),
            address_to: z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]),
            line_items: z.array(LineItem$.inboundSchema),
            parcel: z.union([Parcel$.inboundSchema, z.string()]).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address_from === undefined ? null : { addressFrom: v.address_from }),
                addressTo: v.address_to,
                lineItems: v.line_items,
                ...(v.parcel === undefined ? null : { parcel: v.parcel }),
            };
        });

    export type Outbound = {
        address_from?: AddressCompleteCreateRequest$.Outbound | string | undefined;
        address_to: AddressCompleteCreateRequest$.Outbound | string;
        line_items: Array<LineItem$.Outbound>;
        parcel?: Parcel$.Outbound | string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequest> = z
        .object({
            addressFrom: z
                .union([AddressCompleteCreateRequest$.outboundSchema, z.string()])
                .optional(),
            addressTo: z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]),
            lineItems: z.array(LineItem$.outboundSchema),
            parcel: z.union([Parcel$.outboundSchema, z.string()]).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressFrom === undefined ? null : { address_from: v.addressFrom }),
                address_to: v.addressTo,
                line_items: v.lineItems,
                ...(v.parcel === undefined ? null : { parcel: v.parcel }),
            };
        });
}
