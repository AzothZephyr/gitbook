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

import { OrderDelete200ResponseResultOneOf } from '../models/OrderDelete200ResponseResultOneOf';
import { OrderDelete200ResponseResultOneOf1 } from '../models/OrderDelete200ResponseResultOneOf1';
import { OrderDelete200ResponseResultOneOf1Rej } from '../models/OrderDelete200ResponseResultOneOf1Rej';
import { OrderDelete200ResponseResultOneOfAck } from '../models/OrderDelete200ResponseResultOneOfAck';
import { HttpFile } from '../http/http';

export class OrderDelete200ResponseResult {
    'ack': OrderDelete200ResponseResultOneOfAck;
    'rej': OrderDelete200ResponseResultOneOf1Rej;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ack",
            "baseName": "Ack",
            "type": "OrderDelete200ResponseResultOneOfAck",
            "format": ""
        },
        {
            "name": "rej",
            "baseName": "Rej",
            "type": "OrderDelete200ResponseResultOneOf1Rej",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderDelete200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
