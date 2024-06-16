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

export class UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner {
    'assetId': number;
    'amount': string;
    /**
    * Deposits that are found on-chain will have a `txn_hash` and `txn_index`. If it is a pending deposit determined by some external payment system, these can be empty
    */
    'txnHash'?: string | null;
    'txnIndex'?: number | null;
    /**
    * When we first started tracking this deposit. Probably in the mempool.
    */
    'createdAt': Date;
    /**
    * If `txn_state` is `Confirmed` and `KytStatus` is accepted, this is the time that the deposit is credited. Otherwise, it is the last update (e.g if a kyt external id was created, or transaction state updated).
    */
    'updatedAt': Date;
    /**
    * The deposit is credited when `Confirmed` and accepted.
    */
    'txnState': UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerTxnStateEnum;
    /**
    * The deposit source address
    */
    'address'?: string | null;
    /**
    * The estimated time that this deposit will transition to `Confirmed`. This is currently only applicable for `Received` deposits
    */
    'timeEst': Date;
    'fiatToCrypto': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "txnHash",
            "baseName": "txnHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "txnIndex",
            "baseName": "txnIndex",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "txnState",
            "baseName": "txnState",
            "type": "UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerTxnStateEnum",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeEst",
            "baseName": "timeEst",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fiatToCrypto",
            "baseName": "fiatToCrypto",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerTxnStateEnum {
    Pending = 'pending',
    Received = 'received',
    Confirmed = 'confirmed',
    Dropped = 'dropped',
    Failed = 'failed'
}

