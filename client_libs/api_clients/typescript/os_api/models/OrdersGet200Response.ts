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

import { OrdersGet200ResponseResult } from '../models/OrdersGet200ResponseResult';
import { HttpFile } from '../http/http';

export class OrdersGet200Response {
    'result': OrdersGet200ResponseResult;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "OrdersGet200ResponseResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrdersGet200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

