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

import { HttpFile } from '../http/http';

export class ParsedTickersGet200ResponseResultInner {
    'tickerId': string;
    'baseCurrency': string;
    'quoteCurrency': string;
    /**
    * The millisecond timestamp of the latest update.
    */
    'timestamp': number;
    /**
    * The last traded price. Also equal to the 24-hour closing price
    */
    'lastPrice'?: number | null;
    /**
    * The rolling 24-hour volume in the base currency.
    */
    'baseVolume': number;
    /**
    * The rolling 24-hour volume in the quote currency.
    */
    'quoteVolume': number;
    'bid'?: number | null;
    'ask'?: number | null;
    /**
    * The rolling 24-hour highest price.
    */
    'high'?: number | null;
    /**
    * The rolling 24-hour lowest price.
    */
    'low'?: number | null;
    /**
    * The rolling 24-hour opening price.
    */
    'open'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tickerId",
            "baseName": "ticker_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "baseCurrency",
            "baseName": "base_currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "quoteCurrency",
            "baseName": "quote_currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "uint64"
        },
        {
            "name": "lastPrice",
            "baseName": "last_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "baseVolume",
            "baseName": "base_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "quoteVolume",
            "baseName": "quote_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "bid",
            "baseName": "bid",
            "type": "number",
            "format": "double"
        },
        {
            "name": "ask",
            "baseName": "ask",
            "type": "number",
            "format": "double"
        },
        {
            "name": "high",
            "baseName": "high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return ParsedTickersGet200ResponseResultInner.attributeTypeMap;
    }

    public constructor() {
    }
}

