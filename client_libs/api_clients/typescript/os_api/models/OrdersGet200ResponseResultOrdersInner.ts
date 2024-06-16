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
* A resting order. Sent on bootstrap in `RestingOrders`.
*/
export class OrdersGet200ResponseResultOrdersInner {
    /**
    * The client order ID specified in the new-order request.
    */
    'clientOrderId': number;
    /**
    * [Exchange order ID](#exchange-order-id)
    */
    'exchangeOrderId': number;
    'marketId': number;
    'price': number;
    /**
    * The quantity submitted in the latest quantity-modifying request. If the order has not been modified, then it is the quantity on the new-order-ack. If it has been modified, then it is the quantity of the latest modify-order-ack.
    */
    'orderQuantity': number;
    'side': number;
    'timeInForce': number;
    'orderType': number;
    /**
    * The current remaining quantity on the book.
    */
    'remainingQuantity': number;
    /**
    * [Transact time](#transact-time) of the NewOrderAck
    */
    'restTime': number;
    'subaccountId': number;
    /**
    * The cumulative filled quantity for this order.
    */
    'cumulativeQuantity': number;
    'cancelOnDisconnect': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientOrderId",
            "baseName": "clientOrderId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "exchangeOrderId",
            "baseName": "exchangeOrderId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "marketId",
            "baseName": "marketId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "orderQuantity",
            "baseName": "orderQuantity",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timeInForce",
            "baseName": "timeInForce",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderType",
            "baseName": "orderType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "remainingQuantity",
            "baseName": "remainingQuantity",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "restTime",
            "baseName": "restTime",
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
            "name": "cumulativeQuantity",
            "baseName": "cumulativeQuantity",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "cancelOnDisconnect",
            "baseName": "cancelOnDisconnect",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrdersGet200ResponseResultOrdersInner.attributeTypeMap;
    }

    public constructor() {
    }
}
