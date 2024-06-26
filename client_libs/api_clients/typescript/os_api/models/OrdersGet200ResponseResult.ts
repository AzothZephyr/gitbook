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

import { OrdersGet200ResponseResultOrdersInner } from '../models/OrdersGet200ResponseResultOrdersInner';
import { HttpFile } from '../http/http';

export class OrdersGet200ResponseResult {
    'orders': Array<OrdersGet200ResponseResultOrdersInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orders",
            "baseName": "orders",
            "type": "Array<OrdersGet200ResponseResultOrdersInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrdersGet200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}

