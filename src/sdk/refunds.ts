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

export class Refunds extends ClientSDK {
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
     * Create a refund
     *
     * @remarks
     * Creates a new refund object.
     */
    async create(
        shippoApiVersion?: string | undefined,
        refundRequestBody?: components.RefundRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateRefundResponse> {
        const input$: operations.CreateRefundRequest = {
            shippoApiVersion: shippoApiVersion,
            refundRequestBody: refundRequestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateRefundRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RefundRequestBody, { explode: true });

        const path$ = this.templateURLComponent("/refunds")();

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
            operationID: "CreateRefund",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
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
                    return operations.CreateRefundResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Refund: val$,
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
     * List all refunds
     *
     * @remarks
     * Returns a list all refund objects.
     */
    async list(
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.ListRefundsResponse> {
        const input$: operations.ListRefundsRequest = {
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListRefundsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/refunds/")();

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
            operationID: "ListRefunds",
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
                    return operations.ListRefundsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        RefundPaginatedList: val$,
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
     * Retrieve a refund
     *
     * @remarks
     * Returns an existing rate using a rate object ID.
     */
    async get(
        refundId: string,
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetRefundResponse> {
        const input$: operations.GetRefundRequest = {
            refundId: refundId,
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetRefundRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            RefundId: enc$.encodeSimple("RefundId", payload$.RefundId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/refunds/{RefundId}")(pathParams$);

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
            operationID: "GetRefund",
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
                    return operations.GetRefundResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Refund: val$,
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
