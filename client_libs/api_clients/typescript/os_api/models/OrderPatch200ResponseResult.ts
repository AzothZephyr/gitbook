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

import { OrderPatch200ResponseResultOneOf } from '../models/OrderPatch200ResponseResultOneOf';
import { OrderPatch200ResponseResultOneOf1 } from '../models/OrderPatch200ResponseResultOneOf1';
import { OrderPatch200ResponseResultOneOf1Rej } from '../models/OrderPatch200ResponseResultOneOf1Rej';
import { OrderPatch200ResponseResultOneOfAck } from '../models/OrderPatch200ResponseResultOneOfAck';
import { HttpFile } from '../http/http';

export class OrderPatch200ResponseResult {
    'ack': OrderPatch200ResponseResultOneOfAck;
    'rej': OrderPatch200ResponseResultOneOf1Rej;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ack",
            "baseName": "Ack",
            "type": "OrderPatch200ResponseResultOneOfAck",
            "format": ""
        },
        {
            "name": "rej",
            "baseName": "Rej",
            "type": "OrderPatch200ResponseResultOneOf1Rej",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderPatch200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
