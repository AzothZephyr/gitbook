/**
 * Cube Mendelev HTTP API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@cube.exchange
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner';
import { BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState';
import { HttpFile } from '../http/http';

export class BookMarketIdSnapshotGet200ResponseResultAnyOf {
    'levels': Array<BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner>;
    'lastTransactTime': number;
    'lastTradePrice'?: number | null;
    'marketState': BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "levels",
            "baseName": "levels",
            "type": "Array<BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner>",
            "format": ""
        },
        {
            "name": "lastTransactTime",
            "baseName": "lastTransactTime",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "lastTradePrice",
            "baseName": "lastTradePrice",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "marketState",
            "baseName": "marketState",
            "type": "BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BookMarketIdSnapshotGet200ResponseResultAnyOf.attributeTypeMap;
    }

    public constructor() {
    }
}
