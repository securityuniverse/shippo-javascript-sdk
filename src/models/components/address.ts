/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressValidationResults, AddressValidationResults$ } from "./addressvalidationresults";
import * as z from "zod";

/**
 * Address represents the address as retrieved from the database
 */
export type Address = {
    /**
     * **required for purchase**<br>
     *
     * @remarks
     * First and Last Name of the addressee
     */
    name?: string | undefined;
    /**
     * Company Name
     */
    company?: string | undefined;
    /**
     * **required for purchase**<br>
     *
     * @remarks
     * First street line, 35 character limit. Usually street number and street name (except for DHL Germany, see street_no).
     */
    street1?: string | undefined;
    /**
     * Second street line, 35 character limit.
     */
    street2?: string | undefined;
    /**
     * Third street line, 35 character limit.
     *
     * @remarks
     * Only accepted for USPS international shipments, UPS domestic and UPS international shipments.
     */
    street3?: string | undefined;
    /**
     * Street number of the addressed building.
     *
     * @remarks
     * This field can be included in street1 for all carriers except for DHL Germany.
     */
    streetNo?: string | undefined;
    /**
     * **required for purchase**<br>
     *
     * @remarks
     * Name of a city. When creating a Quote Address, sending a city is optional but will yield more accurate Rates.
     * Please bear in mind that city names may be ambiguous (there are 34 Springfields in the US). Pass in a state
     * or a ZIP code (see below), if known, it will yield more accurate results.
     */
    city?: string | undefined;
    /**
     * **required for purchase for some countries**<br>
     *
     * @remarks
     * State/Province values are required for shipments from/to the US, AU, and CA. UPS requires province for some
     * countries (i.e Ireland). To receive more accurate quotes, passing this field is recommended. Most carriers
     * only accept two or three character state abbreviations.
     */
    state?: string | undefined;
    /**
     * **required for purchase**<br>
     *
     * @remarks
     * Postal code of an Address. When creating a Quote Addresses, sending a ZIP is optional but will yield more
     * accurate Rates.
     */
    zip?: string | undefined;
    /**
     * Example: `US` or `DE`. All accepted values can be found on the
     *
     * @remarks
     * <a href="http://www.iso.org/" target="blank">Official ISO Website</a>.
     * Sending a country is always required.
     */
    country: string;
    /**
     * Addresses containing a phone number allow carriers to call the recipient when delivering the Parcel. This
     *
     * @remarks
     * increases the probability of delivery and helps to avoid accessorial charges after a Parcel has been shipped.
     */
    phone?: string | undefined;
    /**
     * E-mail address of the contact person, RFC3696/5321-compliant.
     */
    email?: string | undefined;
    isResidential?: boolean | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want
     *
     * @remarks
     * to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Latitude of address
     */
    latitude?: number | undefined;
    /**
     * Longitude of address
     */
    longitude?: number | undefined;
    /**
     * Complete addresses contain all required values.<br><br>Incomplete addresses have failed one or multiple
     *
     * @remarks
     * validations.<br>Incomplete Addresses are eligible for requesting rates but lack at least one required
     * value for purchasing labels.
     */
    isComplete?: boolean | undefined;
    /**
     * Date and time of Address creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Address object.
     *
     * @remarks
     * This ID is required to create a Shipment object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the Address object.
     */
    objectOwner?: string | undefined;
    /**
     * Date and time of last Address update. Since you cannot update Addresses after they were created, this time
     *
     * @remarks
     * stamp reflects the time when the Address was changed by Shippo's systems for the last time, e.g., during the
     * approximation of one or more values.
     */
    objectUpdated?: Date | undefined;
    /**
     * Object that contains information regarding if an address had been validated or not. Also contains any messages
     *
     * @remarks
     * generated during validation. Children keys are <code>is_valid</code>(boolean) and <code>messages</code>(array).
     */
    validationResults?: AddressValidationResults | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
};

/** @internal */
export namespace Address$ {
    export type Inbound = {
        name?: string | undefined;
        company?: string | undefined;
        street1?: string | undefined;
        street2?: string | undefined;
        street3?: string | undefined;
        street_no?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        zip?: string | undefined;
        country: string;
        phone?: string | undefined;
        email?: string | undefined;
        is_residential?: boolean | undefined;
        metadata?: string | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        is_complete?: boolean | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_updated?: string | undefined;
        validation_results?: AddressValidationResults$.Inbound | undefined;
        test?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Address, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            company: z.string().optional(),
            street1: z.string().optional(),
            street2: z.string().optional(),
            street3: z.string().optional(),
            street_no: z.string().optional(),
            city: z.string().optional(),
            state: z.string().optional(),
            zip: z.string().optional(),
            country: z.string(),
            phone: z.string().optional(),
            email: z.string().optional(),
            is_residential: z.boolean().optional(),
            metadata: z.string().optional(),
            latitude: z.number().optional(),
            longitude: z.number().optional(),
            is_complete: z.boolean().optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            validation_results: AddressValidationResults$.inboundSchema.optional(),
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.street1 === undefined ? null : { street1: v.street1 }),
                ...(v.street2 === undefined ? null : { street2: v.street2 }),
                ...(v.street3 === undefined ? null : { street3: v.street3 }),
                ...(v.street_no === undefined ? null : { streetNo: v.street_no }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.zip === undefined ? null : { zip: v.zip }),
                country: v.country,
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.is_residential === undefined ? null : { isResidential: v.is_residential }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.latitude === undefined ? null : { latitude: v.latitude }),
                ...(v.longitude === undefined ? null : { longitude: v.longitude }),
                ...(v.is_complete === undefined ? null : { isComplete: v.is_complete }),
                ...(v.object_created === undefined ? null : { objectCreated: v.object_created }),
                ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                ...(v.object_owner === undefined ? null : { objectOwner: v.object_owner }),
                ...(v.object_updated === undefined ? null : { objectUpdated: v.object_updated }),
                ...(v.validation_results === undefined
                    ? null
                    : { validationResults: v.validation_results }),
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        company?: string | undefined;
        street1?: string | undefined;
        street2?: string | undefined;
        street3?: string | undefined;
        street_no?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        zip?: string | undefined;
        country: string;
        phone?: string | undefined;
        email?: string | undefined;
        is_residential?: boolean | undefined;
        metadata?: string | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        is_complete?: boolean | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_updated?: string | undefined;
        validation_results?: AddressValidationResults$.Outbound | undefined;
        test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Address> = z
        .object({
            name: z.string().optional(),
            company: z.string().optional(),
            street1: z.string().optional(),
            street2: z.string().optional(),
            street3: z.string().optional(),
            streetNo: z.string().optional(),
            city: z.string().optional(),
            state: z.string().optional(),
            zip: z.string().optional(),
            country: z.string(),
            phone: z.string().optional(),
            email: z.string().optional(),
            isResidential: z.boolean().optional(),
            metadata: z.string().optional(),
            latitude: z.number().optional(),
            longitude: z.number().optional(),
            isComplete: z.boolean().optional(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            validationResults: AddressValidationResults$.outboundSchema.optional(),
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.street1 === undefined ? null : { street1: v.street1 }),
                ...(v.street2 === undefined ? null : { street2: v.street2 }),
                ...(v.street3 === undefined ? null : { street3: v.street3 }),
                ...(v.streetNo === undefined ? null : { street_no: v.streetNo }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.zip === undefined ? null : { zip: v.zip }),
                country: v.country,
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.isResidential === undefined ? null : { is_residential: v.isResidential }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.latitude === undefined ? null : { latitude: v.latitude }),
                ...(v.longitude === undefined ? null : { longitude: v.longitude }),
                ...(v.isComplete === undefined ? null : { is_complete: v.isComplete }),
                ...(v.objectCreated === undefined ? null : { object_created: v.objectCreated }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.objectOwner === undefined ? null : { object_owner: v.objectOwner }),
                ...(v.objectUpdated === undefined ? null : { object_updated: v.objectUpdated }),
                ...(v.validationResults === undefined
                    ? null
                    : { validation_results: v.validationResults }),
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });
}
