export * from '../models/OrderDelete200Response';
export * from '../models/OrderDelete200ResponseResult';
export * from '../models/OrderDelete200ResponseResultOneOf';
export * from '../models/OrderDelete200ResponseResultOneOf1';
export * from '../models/OrderDelete200ResponseResultOneOf1Rej';
export * from '../models/OrderDelete200ResponseResultOneOfAck';
export * from '../models/OrderDeleteRequest';
export * from '../models/OrderPatch200Response';
export * from '../models/OrderPatch200ResponseResult';
export * from '../models/OrderPatch200ResponseResultOneOf';
export * from '../models/OrderPatch200ResponseResultOneOf1';
export * from '../models/OrderPatch200ResponseResultOneOf1Rej';
export * from '../models/OrderPatch200ResponseResultOneOfAck';
export * from '../models/OrderPatchRequest';
export * from '../models/OrderPost200Response';
export * from '../models/OrderPost200ResponseResult';
export * from '../models/OrderPost200ResponseResultOneOf';
export * from '../models/OrderPost200ResponseResultOneOf1';
export * from '../models/OrderPost200ResponseResultOneOf1Rej';
export * from '../models/OrderPost200ResponseResultOneOfAck';
export * from '../models/OrderPostRequest';
export * from '../models/OrdersDelete200Response';
export * from '../models/OrdersDelete200ResponseResult';
export * from '../models/OrdersDeleteRequest';
export * from '../models/OrdersGet200Response';
export * from '../models/OrdersGet200ResponseResult';
export * from '../models/OrdersGet200ResponseResultOrdersInner';
export * from '../models/OrdersGet500Response';
export * from '../models/PositionsGet200Response';
export * from '../models/PositionsGet200ResponseResultInner';

import { OrderDelete200Response } from '../models/OrderDelete200Response';
import { OrderDelete200ResponseResult } from '../models/OrderDelete200ResponseResult';
import { OrderDelete200ResponseResultOneOf } from '../models/OrderDelete200ResponseResultOneOf';
import { OrderDelete200ResponseResultOneOf1 } from '../models/OrderDelete200ResponseResultOneOf1';
import { OrderDelete200ResponseResultOneOf1Rej } from '../models/OrderDelete200ResponseResultOneOf1Rej';
import { OrderDelete200ResponseResultOneOfAck } from '../models/OrderDelete200ResponseResultOneOfAck';
import { OrderDeleteRequest } from '../models/OrderDeleteRequest';
import { OrderPatch200Response } from '../models/OrderPatch200Response';
import { OrderPatch200ResponseResult } from '../models/OrderPatch200ResponseResult';
import { OrderPatch200ResponseResultOneOf } from '../models/OrderPatch200ResponseResultOneOf';
import { OrderPatch200ResponseResultOneOf1 } from '../models/OrderPatch200ResponseResultOneOf1';
import { OrderPatch200ResponseResultOneOf1Rej } from '../models/OrderPatch200ResponseResultOneOf1Rej';
import { OrderPatch200ResponseResultOneOfAck } from '../models/OrderPatch200ResponseResultOneOfAck';
import { OrderPatchRequest } from '../models/OrderPatchRequest';
import { OrderPost200Response } from '../models/OrderPost200Response';
import { OrderPost200ResponseResult } from '../models/OrderPost200ResponseResult';
import { OrderPost200ResponseResultOneOf } from '../models/OrderPost200ResponseResultOneOf';
import { OrderPost200ResponseResultOneOf1 } from '../models/OrderPost200ResponseResultOneOf1';
import { OrderPost200ResponseResultOneOf1Rej } from '../models/OrderPost200ResponseResultOneOf1Rej';
import { OrderPost200ResponseResultOneOfAck } from '../models/OrderPost200ResponseResultOneOfAck';
import { OrderPostRequest } from '../models/OrderPostRequest';
import { OrdersDelete200Response } from '../models/OrdersDelete200Response';
import { OrdersDelete200ResponseResult } from '../models/OrdersDelete200ResponseResult';
import { OrdersDeleteRequest } from '../models/OrdersDeleteRequest';
import { OrdersGet200Response } from '../models/OrdersGet200Response';
import { OrdersGet200ResponseResult } from '../models/OrdersGet200ResponseResult';
import { OrdersGet200ResponseResultOrdersInner } from '../models/OrdersGet200ResponseResultOrdersInner';
import { OrdersGet500Response } from '../models/OrdersGet500Response';
import { PositionsGet200Response } from '../models/PositionsGet200Response';
import { PositionsGet200ResponseResultInner } from '../models/PositionsGet200ResponseResultInner';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "OrderDelete200Response": OrderDelete200Response,
    "OrderDelete200ResponseResult": OrderDelete200ResponseResult,
    "OrderDelete200ResponseResultOneOf": OrderDelete200ResponseResultOneOf,
    "OrderDelete200ResponseResultOneOf1": OrderDelete200ResponseResultOneOf1,
    "OrderDelete200ResponseResultOneOf1Rej": OrderDelete200ResponseResultOneOf1Rej,
    "OrderDelete200ResponseResultOneOfAck": OrderDelete200ResponseResultOneOfAck,
    "OrderDeleteRequest": OrderDeleteRequest,
    "OrderPatch200Response": OrderPatch200Response,
    "OrderPatch200ResponseResult": OrderPatch200ResponseResult,
    "OrderPatch200ResponseResultOneOf": OrderPatch200ResponseResultOneOf,
    "OrderPatch200ResponseResultOneOf1": OrderPatch200ResponseResultOneOf1,
    "OrderPatch200ResponseResultOneOf1Rej": OrderPatch200ResponseResultOneOf1Rej,
    "OrderPatch200ResponseResultOneOfAck": OrderPatch200ResponseResultOneOfAck,
    "OrderPatchRequest": OrderPatchRequest,
    "OrderPost200Response": OrderPost200Response,
    "OrderPost200ResponseResult": OrderPost200ResponseResult,
    "OrderPost200ResponseResultOneOf": OrderPost200ResponseResultOneOf,
    "OrderPost200ResponseResultOneOf1": OrderPost200ResponseResultOneOf1,
    "OrderPost200ResponseResultOneOf1Rej": OrderPost200ResponseResultOneOf1Rej,
    "OrderPost200ResponseResultOneOfAck": OrderPost200ResponseResultOneOfAck,
    "OrderPostRequest": OrderPostRequest,
    "OrdersDelete200Response": OrdersDelete200Response,
    "OrdersDelete200ResponseResult": OrdersDelete200ResponseResult,
    "OrdersDeleteRequest": OrdersDeleteRequest,
    "OrdersGet200Response": OrdersGet200Response,
    "OrdersGet200ResponseResult": OrdersGet200ResponseResult,
    "OrdersGet200ResponseResultOrdersInner": OrdersGet200ResponseResultOrdersInner,
    "OrdersGet500Response": OrdersGet500Response,
    "PositionsGet200Response": PositionsGet200Response,
    "PositionsGet200ResponseResultInner": PositionsGet200ResponseResultInner,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
