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

import { UsersInfoGet200ResponseResultSubaccountsInner } from '../models/UsersInfoGet200ResponseResultSubaccountsInner';
import { HttpFile } from '../http/http';

export class UsersSubaccountSubaccountIdGet200Response {
    'result': UsersInfoGet200ResponseResultSubaccountsInner;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "UsersInfoGet200ResponseResultSubaccountsInner",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersSubaccountSubaccountIdGet200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
