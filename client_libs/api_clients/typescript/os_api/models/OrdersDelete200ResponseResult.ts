/**
 * Cube Osmium HTTP API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@cube.exchange
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Mass-cancel-ack confirms a mass-cancel request. If `reason` is set, the mass cancel was not applied and there are no affected orders. Individual CancelOrderAck\'s will be sent for each order that was affected.
*/
export class OrdersDelete200ResponseResult {
    'msgSeqNum': number;
    'subaccountId': number;
    /**
    * The request ID specified in the mass-cancel request.
    */
    'requestId': number;
    /**
    * [Transact time](#transact-time)
    */
    'transactTime': number;
    'reason'?: number | null;
    /**
    * The total number of orders that were canceled.
    */
    'totalAffectedOrders': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "msgSeqNum",
            "baseName": "msgSeqNum",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "subaccountId",
            "baseName": "subaccountId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "transactTime",
            "baseName": "transactTime",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalAffectedOrders",
            "baseName": "totalAffectedOrders",
            "type": "number",
            "format": "uint32"
        }    ];

    static getAttributeTypeMap() {
        return OrdersDelete200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}

