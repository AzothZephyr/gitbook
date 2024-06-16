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

export class UsersWithdrawPostRequest {
    /**
    * The subaccount to withdraw from.
    */
    'subaccountId': number;
    /**
    * The asset to withdraw. The network is determined by the asset ID.
    */
    'assetId': number;
    /**
    * The amount to withdraw. This is denominated in the smallest unit of the asset (e.g. satoshis for BTC, wei for ETH, lamports for SOL). The amount must be greater than the dust limit for the asset.
    */
    'amount': number;
    /**
    * The destination address for the withdrawal.
    */
    'destination': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subaccountId",
            "baseName": "subaccountId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "uint128"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersWithdrawPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

