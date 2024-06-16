/**
 * Cube Iridium HTTP API
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

export class UsersInfoGet200ResponseResultSubaccountsInner {
    'id': number;
    'name': string;
    /**
    * Deposit address by source id
    */
    'addresses': Array<Array<string>>;
    'hasOrderHistory': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<Array<string>>",
            "format": ""
        },
        {
            "name": "hasOrderHistory",
            "baseName": "hasOrderHistory",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersInfoGet200ResponseResultSubaccountsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
