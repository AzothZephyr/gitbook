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

/**
* The per-market matching engine state. Affects order-entry.
*/
export class BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState {

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
    ];

    static getAttributeTypeMap() {
        return BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState.attributeTypeMap;
    }

    public constructor() {
    }
}
