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
* Cancel-order-ack confirms a cancel request, or that an order has been canceled as the result of a different user-initiated reason.
*/
export class OrderDelete200ResponseResultOneOfAck {
    'msgSeqNum': number;
    'clientOrderId': number;
    /**
    * If the Reason is `DISCONNECT`, `IOC`, `STP_RESTING`, or `STP_AGGRESSING`, this request ID will be `u64::MAX`. Otherwise, it will be the request ID of the initiated cancel action. For a mass cancel, each cancel order ack will have the MassCancel\'s request_id.
    */
    'requestId': number;
    /**
    * [Transact time](#transact-time)
    */
    'transactTime': number;
    'subaccountId': number;
    'reason': number;
    'marketId': number;
    /**
    * [Exchange order ID](#exchange-order-id)
    */
    'exchangeOrderId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "msgSeqNum",
            "baseName": "msgSeqNum",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "clientOrderId",
            "baseName": "clientOrderId",
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
            "name": "subaccountId",
            "baseName": "subaccountId",
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
            "name": "marketId",
            "baseName": "marketId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "exchangeOrderId",
            "baseName": "exchangeOrderId",
            "type": "number",
            "format": "uint64"
        }    ];

    static getAttributeTypeMap() {
        return OrderDelete200ResponseResultOneOfAck.attributeTypeMap;
    }

    public constructor() {
    }
}

