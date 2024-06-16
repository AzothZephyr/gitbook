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

export class UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner {
    'price': number;
    'quantity': number;
    'modifiedAt': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner.attributeTypeMap;
    }

    public constructor() {
    }
}
