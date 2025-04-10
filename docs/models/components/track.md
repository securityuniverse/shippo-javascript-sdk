# Track

## Example Usage

```typescript
import { Track } from "shippo/models/components";

let value: Track = {
  addressFrom: {
    city: "Las Vegas",
    country: "US",
    state: "NV",
    zip: "89101",
  },
  addressTo: {
    city: "Las Vegas",
    country: "US",
    state: "NV",
    zip: "89101",
  },
  carrier: "usps",
  messages: [
    "<value>",
  ],
  metadata: "Order 000123",
  originalEta: new Date("2021-07-23T00:00:00Z"),
  servicelevel: {
    name: "Priority Mail Express",
    token: "usps_priority_express",
    parentServicelevel: {
      name: "Priority Mail Express",
      token: "usps_priority_express",
    },
  },
  trackingHistory: [
    {
      location: {
        city: "Las Vegas",
        country: "US",
        state: "NV",
        zip: "89101",
      },
      objectCreated: new Date("2024-12-08T21:35:55.501Z"),
      objectId: "<id>",
      objectUpdated: new Date("2024-04-24T14:17:38.418Z"),
      status: "DELIVERED",
      substatus: {
        code: "information_received",
        text: "Information about the package received.",
        actionRequired: false,
      },
      statusDate: new Date("2016-07-23T00:00:00Z"),
      statusDetails:
        "Your shipment has been delivered at the destination mailbox.",
    },
  ],
  trackingNumber: "9205590164917312751089",
  trackingStatus: {
    location: {
      city: "Las Vegas",
      country: "US",
      state: "NV",
      zip: "89101",
    },
    objectCreated: new Date("2025-09-04T09:11:49.246Z"),
    objectId: "<id>",
    objectUpdated: new Date("2025-11-22T04:11:06.908Z"),
    status: "DELIVERED",
    substatus: {
      code: "information_received",
      text: "Information about the package received.",
      actionRequired: false,
    },
    statusDate: new Date("2016-07-23T00:00:00Z"),
    statusDetails:
      "Your shipment has been delivered at the destination mailbox.",
  },
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    | Example                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addressFrom`                                                                                                                                                                                  | [components.TrackingStatusLocationBase](../../models/components/trackingstatuslocationbase.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | The sender address with city, state, zip and country information.                                                                                                                              |                                                                                                                                                                                                |
| `addressTo`                                                                                                                                                                                    | [components.TrackingStatusLocationBase](../../models/components/trackingstatuslocationbase.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | The recipient address with city, state, zip and country information.                                                                                                                           |                                                                                                                                                                                                |
| `carrier`                                                                                                                                                                                      | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | Name of the carrier of the shipment to track. See <a href="#tag/Carriers">Carriers</a>.                                                                                                        | usps                                                                                                                                                                                           |
| `eta`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | The estimated time of arrival according to the carrier, this might be updated by carriers during the life of the shipment.                                                                     |                                                                                                                                                                                                |
| `messages`                                                                                                                                                                                     | *string*[]                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |                                                                                                                                                                                                |
| `metadata`                                                                                                                                                                                     | *string*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | A string of up to 100 characters that can be filled with any additional information you want to attach to the object.                                                                          | Order 000123                                                                                                                                                                                   |
| `originalEta`                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | The estimated time of arrival according to the carrier at the time the shipment first entered the system.                                                                                      | 2021-07-23T00:00:00Z                                                                                                                                                                           |
| `servicelevel`                                                                                                                                                                                 | [components.ServiceLevelWithParent](../../models/components/servicelevelwithparent.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                             | N/A                                                                                                                                                                                            |                                                                                                                                                                                                |
| `trackingHistory`                                                                                                                                                                              | [components.TrackingStatus](../../models/components/trackingstatus.md)[]                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | A list of tracking events, following the same structure as <code>tracking_status</code>. <br/>It contains a full history of all tracking statuses, starting with the earlier tracking event first. |                                                                                                                                                                                                |
| `trackingNumber`                                                                                                                                                                               | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | Tracking number to track.                                                                                                                                                                      | 9205590164917312751089                                                                                                                                                                         |
| `trackingStatus`                                                                                                                                                                               | [components.TrackingStatus](../../models/components/trackingstatus.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                             | The latest tracking information of this shipment.                                                                                                                                              |                                                                                                                                                                                                |
| `transaction`                                                                                                                                                                                  | *string*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | The <code>object_id</code> of the transaction associated with this tracking object. <br/>This field is visible only to the object owner of the transaction.                                    |                                                                                                                                                                                                |