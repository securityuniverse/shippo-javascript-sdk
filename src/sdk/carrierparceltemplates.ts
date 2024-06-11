/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";

export class CarrierParcelTemplates extends ClientSDK {
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
     * List all carrier parcel templates
     *
     * @remarks
     * List all carrier parcel template objects. <br> Use the following query string params to filter the results as needed. <br> <ul> <li>`include=all` (the default). Includes templates from all carriers </li> <li>`include=user`. Includes templates only from carriers which the user has added (whether or not they're currently enabled) </li> <li>`include=enabled`. includes templates only for carriers which the user has added and enabled </li> <li>`carrier=*token*`. filter by specific carrier, e.g. fedex, usps </li> </ul>
     */
    async list(
        include?: operations.Include | undefined,
        carrier?: string | undefined,
        options?: RequestOptions
    ): Promise<components.CarrierParcelTemplateList> {
        const input$: operations.ListCarrierParcelTemplatesRequest = {
            include: include,
            carrier: carrier,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListCarrierParcelTemplatesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/parcel-templates")();

        const query$ = encodeFormQuery$({
            include: payload$.include,
            carrier: payload$.carrier,
        });

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
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
            operationID: "ListCarrierParcelTemplates",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierParcelTemplateList>()
            .json(200, components.CarrierParcelTemplateList$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Retrieve a carrier parcel templates
     *
     * @remarks
     * Fetches the parcel template information for a specific carrier parcel template, identified by the token.
     */
    async get(
        carrierParcelTemplateToken: string,
        options?: RequestOptions
    ): Promise<components.CarrierParcelTemplate> {
        const input$: operations.GetCarrierParcelTemplateRequest = {
            carrierParcelTemplateToken: carrierParcelTemplateToken,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCarrierParcelTemplateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            CarrierParcelTemplateToken: encodeSimple$(
                "CarrierParcelTemplateToken",
                payload$.CarrierParcelTemplateToken,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent("/parcel-templates/{CarrierParcelTemplateToken}")(
            pathParams$
        );

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
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
            operationID: "GetCarrierParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierParcelTemplate>()
            .json(200, components.CarrierParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
