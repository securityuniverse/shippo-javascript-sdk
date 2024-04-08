/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountBase = {
    /**
     * Unique identifier of the account. Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a>
     *
     * @remarks
     * page for the `account_id` per carrier.<br>
     * To protect account information, this field will be masked in any API response.
     */
    accountId: string;
    /**
     * Determines whether the account is active. When creating a shipment, if no `carrier_accounts` are explicitly
     *
     * @remarks
     * passed Shippo will query all carrier accounts that have this field set. By default, this is set to True.
     */
    active?: boolean | undefined;
    /**
     * Carrier token, see <a href="#tag/Carriers">Carriers</a><br>
     *
     * @remarks
     * Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a> page for all supported carriers.
     */
    carrier: string;
    /**
     * An array of additional parameters for the account, such as e.g. password or token.
     *
     * @remarks
     * Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a> page for the parameters per carrier.<br>
     * To protect account information, this field will be masked in any API response.
     */
    parameters?: Record<string, any> | undefined;
};

/** @internal */
export namespace CarrierAccountBase$ {
    export type Inbound = {
        account_id: string;
        active?: boolean | undefined;
        carrier: string;
        parameters?: Record<string, any> | undefined;
    };

    export const inboundSchema: z.ZodType<CarrierAccountBase, z.ZodTypeDef, Inbound> = z
        .object({
            account_id: z.string(),
            active: z.boolean().optional(),
            carrier: z.string(),
            parameters: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                accountId: v.account_id,
                ...(v.active === undefined ? null : { active: v.active }),
                carrier: v.carrier,
                ...(v.parameters === undefined ? null : { parameters: v.parameters }),
            };
        });

    export type Outbound = {
        account_id: string;
        active?: boolean | undefined;
        carrier: string;
        parameters?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountBase> = z
        .object({
            accountId: z.string(),
            active: z.boolean().optional(),
            carrier: z.string(),
            parameters: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                account_id: v.accountId,
                ...(v.active === undefined ? null : { active: v.active }),
                carrier: v.carrier,
                ...(v.parameters === undefined ? null : { parameters: v.parameters }),
            };
        });
}
