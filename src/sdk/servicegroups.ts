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

export class ServiceGroups extends ClientSDK {
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
     * List all service groups
     *
     * @remarks
     * Returns a list of service group objects.
     */
    async list(
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.ListServiceGroupsResponse> {
        const input$: operations.ListServiceGroupsRequest = {
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListServiceGroupsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/service-groups")();

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
            operationID: "ListServiceGroups",
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
                    return operations.ListServiceGroupsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        serviceGroupListResponse: val$,
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
     * Create a new service group
     *
     * @remarks
     * Creates a new service group.
     */
    async create(
        shippoApiVersion?: string | undefined,
        serviceGroupCreateRequest?: components.ServiceGroupCreateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateServiceGroupResponse> {
        const input$: operations.CreateServiceGroupRequest = {
            shippoApiVersion: shippoApiVersion,
            serviceGroupCreateRequest: serviceGroupCreateRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateServiceGroupRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.ServiceGroupCreateRequest, {
            explode: true,
        });

        const path$ = this.templateURLComponent("/service-groups")();

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
            operationID: "CreateServiceGroup",
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
                    return operations.CreateServiceGroupResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ServiceGroup: val$,
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
     * Update an existing service group
     *
     * @remarks
     * Updates an existing service group object. <br>The object_id cannot be updated as it is the unique identifier for the object.
     */
    async update(
        shippoApiVersion?: string | undefined,
        serviceGroupUpdateRequest?: components.ServiceGroupUpdateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdateServiceGroupResponse> {
        const input$: operations.UpdateServiceGroupRequest = {
            shippoApiVersion: shippoApiVersion,
            serviceGroupUpdateRequest: serviceGroupUpdateRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateServiceGroupRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.ServiceGroupUpdateRequest, {
            explode: true,
        });

        const path$ = this.templateURLComponent("/service-groups")();

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
            operationID: "UpdateServiceGroup",
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
                    return operations.UpdateServiceGroupResponse$.inboundSchema.parse({
                        ...responseFields$,
                        ServiceGroup: val$,
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
     * Delete a service group
     *
     * @remarks
     * Deletes an existing service group using an object ID.
     */
    async delete(
        serviceGroupId: string,
        shippoApiVersion?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.DeleteServiceGroupResponse> {
        const input$: operations.DeleteServiceGroupRequest = {
            serviceGroupId: serviceGroupId,
            shippoApiVersion: shippoApiVersion,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteServiceGroupRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ServiceGroupId: enc$.encodeSimple("ServiceGroupId", payload$.ServiceGroupId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/service-groups/{ServiceGroupId}")(pathParams$);

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
            operationID: "DeleteServiceGroup",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }

        return schemas$.parse(
            undefined,
            () => operations.DeleteServiceGroupResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }
}
