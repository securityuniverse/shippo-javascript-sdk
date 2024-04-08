/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class CarrierAccounts extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List all carrier accounts
     *
     * @remarks
     * Returns a list of all carrier accounts connected to your Shippo account. These carrier accounts include both Shippo carrier accounts and your own carrier accounts that you have connected to your Shippo account.
     *
     * Additionally, you can get information about the service levels associated with each carrier account by passing in the `?service_levels=true` query parameter. <br>
     * Using it appends the property `service_levels` to each carrier account. <br>
     * By default, if the query parameter is omitted, the `service_levels` property will not be included in the response.
     */
    async list(
        input: operations.ListCarrierAccountsRequest,
        options?: RequestOptions
    ): Promise<operations.ListCarrierAccountsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ListCarrierAccountsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/carrier_accounts")();

        const query$ = [
            enc$.encodeForm("account_id", payload$.account_id, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("carrier", payload$.carrier, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("results", payload$.results, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("service_levels", payload$.service_levels, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListCarrierAccounts",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListCarrierAccountsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccountPaginatedList: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Create a new carrier account
     *
     * @remarks
     * Creates a new carrier account or connects an existing carrier account to the Shippo account.
     */
    async create(
        shippoApiVersion?: string | undefined,
        connectExistingOwnUPSAccountRequest?:
            | components.ConnectExistingOwnUPSAccountRequest
            | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateCarrierAccountResponse> {
        const input$: operations.CreateCarrierAccountRequest = {
            shippoApiVersion: shippoApiVersion,
            connectExistingOwnUPSAccountRequest: connectExistingOwnUPSAccountRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.ConnectExistingOwnUPSAccountRequest, {
            explode: true,
        });

        const path$ = this.templateURLComponent("/carrier_accounts")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateCarrierAccountResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccount: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.BadRequestWithDetail$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Retrieve a carrier account
     *
     * @remarks
     * Returns an existing carrier account using an object ID.
     */
    async get(
        carrierAccountId: string,
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetCarrierAccountResponse> {
        const input$: operations.GetCarrierAccountRequest = {
            carrierAccountId: carrierAccountId,
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            CarrierAccountId: enc$.encodeSimple("CarrierAccountId", payload$.CarrierAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/carrier_accounts/{CarrierAccountId}")(
            pathParams$
        );

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCarrierAccountResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccountWithExtraInfo: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Update a carrier account
     *
     * @remarks
     * Updates an existing carrier account object. The account_id and carrier can't be updated. This is because they form the unique identifier together.
     */
    async update(
        carrierAccountId: string,
        shippoApiVersion?: string | undefined,
        carrierAccountBase?: components.CarrierAccountBase | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdateCarrierAccountResponse> {
        const input$: operations.UpdateCarrierAccountRequest = {
            carrierAccountId: carrierAccountId,
            shippoApiVersion: shippoApiVersion,
            carrierAccountBase: carrierAccountBase,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.CarrierAccountBase, { explode: true });

        const pathParams$ = {
            CarrierAccountId: enc$.encodeSimple("CarrierAccountId", payload$.CarrierAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/carrier_accounts/{CarrierAccountId}")(
            pathParams$
        );

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "UpdateCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.UpdateCarrierAccountResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccount: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Connect an existing carrier account using OAuth 2.0
     *
     * @remarks
     * Used by client applications to setup or reconnect an existing carrier account with carriers that support OAuth 2.0
     */
    async initiateOauth2Signin(
        carrierAccountObjectId: string,
        redirectUri: string,
        state?: string | undefined,
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.InitiateOauth2SigninResponse> {
        const input$: operations.InitiateOauth2SigninRequest = {
            carrierAccountObjectId: carrierAccountObjectId,
            redirectUri: redirectUri,
            state: state,
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.InitiateOauth2SigninRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            CarrierAccountObjectId: enc$.encodeSimple(
                "CarrierAccountObjectId",
                payload$.CarrierAccountObjectId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/carrier_accounts/{CarrierAccountObjectId}/signin/initiate"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("redirect_uri", payload$.redirect_uri, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("state", payload$.state, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "InitiateOauth2Signin",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "422", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchStatusCode(response, 302)) {
            return schemas$.parse(
                this.unpackHeaders(response.headers),
                (val$) =>
                    operations.InitiateOauth2SigninResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Headers: val$,
                    }),
                "Response validation failed"
            );
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.InitiateOauth2SigninResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.InitiateOauth2SigninCarrierAccountsResponseBody$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            ...val$,
                        }
                    );
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 422, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.InitiateOauth2SigninCarrierAccountsResponseResponseBody$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            ...val$,
                        }
                    );
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Add a Shippo carrier account
     *
     * @remarks
     * Adds a Shippo carrier account
     */
    async register(
        shippoApiVersion?: string | undefined,
        requestBody?: operations.RegisterCarrierAccountRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.RegisterCarrierAccountResponse> {
        const input$: operations.RegisterCarrierAccountRequest = {
            shippoApiVersion: shippoApiVersion,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RegisterCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/carrier_accounts/register/new")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "RegisterCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.RegisterCarrierAccountResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccount: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.BadRequestWithError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Get Carrier Registration status
     *
     * @remarks
     * Returns the registration status for the given account for the given carrier
     */
    async getRegistrationStatus(
        carrier: operations.Carrier,
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetCarrierRegistrationStatusResponse> {
        const input$: operations.GetCarrierRegistrationStatusRequest = {
            carrier: carrier,
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetCarrierRegistrationStatusRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/carrier_accounts/reg-status")();

        const query$ = [
            enc$.encodeForm("carrier", payload$.carrier, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple(
                "SHIPPO-API-VERSION",
                payload$["SHIPPO-API-VERSION"] ?? this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetCarrierRegistrationStatus",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCarrierRegistrationStatusResponse$.inboundSchema.parse({
                        ...responseFields$,
                        CarrierAccountRegistrationStatus: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }
}
