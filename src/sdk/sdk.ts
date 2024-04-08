/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Addresses } from "./addresses";
import { Batches } from "./batches";
import { CarrierAccounts } from "./carrieraccounts";
import { CarrierParcelTemplates } from "./carrierparceltemplates";
import { CustomsDeclarations } from "./customsdeclarations";
import { CustomsItems } from "./customsitems";
import { Manifests } from "./manifests";
import { Orders } from "./orders";
import { Parcels } from "./parcels";
import { Pickups } from "./pickups";
import { Rates } from "./rates";
import { RatesAtCheckout } from "./ratesatcheckout";
import { Refunds } from "./refunds";
import { ServiceGroups } from "./servicegroups";
import { Shipments } from "./shipments";
import { ShippoAccounts } from "./shippoaccounts";
import { TrackingStatus } from "./trackingstatus";
import { Transactions } from "./transactions";
import { UserParcelTemplates } from "./userparceltemplates";

export class Shippo extends ClientSDK {
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

    private _addresses?: Addresses;
    get addresses() {
        return (this._addresses ??= new Addresses(this.options$));
    }

    private _batches?: Batches;
    get batches() {
        return (this._batches ??= new Batches(this.options$));
    }

    private _carrierAccounts?: CarrierAccounts;
    get carrierAccounts() {
        return (this._carrierAccounts ??= new CarrierAccounts(this.options$));
    }

    private _customsDeclarations?: CustomsDeclarations;
    get customsDeclarations() {
        return (this._customsDeclarations ??= new CustomsDeclarations(this.options$));
    }

    private _customsItems?: CustomsItems;
    get customsItems() {
        return (this._customsItems ??= new CustomsItems(this.options$));
    }

    private _ratesAtCheckout?: RatesAtCheckout;
    get ratesAtCheckout() {
        return (this._ratesAtCheckout ??= new RatesAtCheckout(this.options$));
    }

    private _manifests?: Manifests;
    get manifests() {
        return (this._manifests ??= new Manifests(this.options$));
    }

    private _orders?: Orders;
    get orders() {
        return (this._orders ??= new Orders(this.options$));
    }

    private _carrierParcelTemplates?: CarrierParcelTemplates;
    get carrierParcelTemplates() {
        return (this._carrierParcelTemplates ??= new CarrierParcelTemplates(this.options$));
    }

    private _parcels?: Parcels;
    get parcels() {
        return (this._parcels ??= new Parcels(this.options$));
    }

    private _pickups?: Pickups;
    get pickups() {
        return (this._pickups ??= new Pickups(this.options$));
    }

    private _rates?: Rates;
    get rates() {
        return (this._rates ??= new Rates(this.options$));
    }

    private _refunds?: Refunds;
    get refunds() {
        return (this._refunds ??= new Refunds(this.options$));
    }

    private _serviceGroups?: ServiceGroups;
    get serviceGroups() {
        return (this._serviceGroups ??= new ServiceGroups(this.options$));
    }

    private _shipments?: Shipments;
    get shipments() {
        return (this._shipments ??= new Shipments(this.options$));
    }

    private _trackingStatus?: TrackingStatus;
    get trackingStatus() {
        return (this._trackingStatus ??= new TrackingStatus(this.options$));
    }

    private _transactions?: Transactions;
    get transactions() {
        return (this._transactions ??= new Transactions(this.options$));
    }

    private _userParcelTemplates?: UserParcelTemplates;
    get userParcelTemplates() {
        return (this._userParcelTemplates ??= new UserParcelTemplates(this.options$));
    }

    private _shippoAccounts?: ShippoAccounts;
    get shippoAccounts() {
        return (this._shippoAccounts ??= new ShippoAccounts(this.options$));
    }
}
