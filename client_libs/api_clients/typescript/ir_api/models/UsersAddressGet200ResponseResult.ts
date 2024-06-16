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

import { UsersAddressGet200ResponseResultAddressesInner } from '../models/UsersAddressGet200ResponseResultAddressesInner';
import { UsersAddressGet200ResponseResultSettings } from '../models/UsersAddressGet200ResponseResultSettings';
import { HttpFile } from '../http/http';

export class UsersAddressGet200ResponseResult {
    'addresses': Array<UsersAddressGet200ResponseResultAddressesInner>;
    'settings': UsersAddressGet200ResponseResultSettings;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<UsersAddressGet200ResponseResultAddressesInner>",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "UsersAddressGet200ResponseResultSettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersAddressGet200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
