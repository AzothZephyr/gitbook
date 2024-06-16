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

import { UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner } from '../models/UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner';
import { HttpFile } from '../http/http';

export class UsersSubaccountSubaccountIdFillsGet200ResponseResult {
    'name': string;
    'fills': Array<UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fills",
            "baseName": "fills",
            "type": "Array<UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersSubaccountSubaccountIdFillsGet200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}

