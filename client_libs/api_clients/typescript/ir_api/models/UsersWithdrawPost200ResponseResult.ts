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

export class UsersWithdrawPost200ResponseResult {
    /**
    * The status of the external KYT check
    */
    'status': UsersWithdrawPost200ResponseResultStatusEnum;
    /**
    * Whether the withdrawal was approved by the system
    */
    'approved'?: boolean | null;
    /**
    * The reason for the withdrawal being rejected
    */
    'reason'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UsersWithdrawPost200ResponseResultStatusEnum",
            "format": ""
        },
        {
            "name": "approved",
            "baseName": "approved",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersWithdrawPost200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UsersWithdrawPost200ResponseResultStatusEnum {
    Pending = 'pending',
    Reject = 'reject',
    Failed = 'failed',
    PendingReview = 'pendingReview',
    AutomaticAccept = 'automaticAccept',
    AutomaticReject = 'automaticReject',
    ManualAccept = 'manualAccept',
    ManualReject = 'manualReject'
}

