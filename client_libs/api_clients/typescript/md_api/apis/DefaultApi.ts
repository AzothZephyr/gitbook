// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BookMarketIdRecentTradesGet200Response } from '../models/BookMarketIdRecentTradesGet200Response';
import { BookMarketIdSnapshotGet200Response } from '../models/BookMarketIdSnapshotGet200Response';
import { BookMarketIdSnapshotGet500Response } from '../models/BookMarketIdSnapshotGet500Response';
import { ParsedBookMarketSymbolRecentTradesGet200Response } from '../models/ParsedBookMarketSymbolRecentTradesGet200Response';
import { ParsedBookMarketSymbolSnapshotGet200Response } from '../models/ParsedBookMarketSymbolSnapshotGet200Response';
import { ParsedTickersGet200Response } from '../models/ParsedTickersGet200Response';
import { TickersSnapshotGet200Response } from '../models/TickersSnapshotGet200Response';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param marketId 
     */
    public async bookMarketIdRecentTradesGet(marketId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("DefaultApi", "bookMarketIdRecentTradesGet", "marketId");
        }


        // Path Params
        const localVarPath = '/book/{market_id}/recent-trades'
            .replace('{' + 'market_id' + '}', encodeURIComponent(String(marketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketId 
     * @param mbp 
     * @param mbo 
     * @param levels 
     */
    public async bookMarketIdSnapshotGet(marketId: string, mbp?: boolean, mbo?: boolean, levels?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("DefaultApi", "bookMarketIdSnapshotGet", "marketId");
        }





        // Path Params
        const localVarPath = '/book/{market_id}/snapshot'
            .replace('{' + 'market_id' + '}', encodeURIComponent(String(marketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mbp !== undefined) {
            requestContext.setQueryParam("mbp", ObjectSerializer.serialize(mbp, "boolean", ""));
        }

        // Query Params
        if (mbo !== undefined) {
            requestContext.setQueryParam("mbo", ObjectSerializer.serialize(mbo, "boolean", ""));
        }

        // Query Params
        if (levels !== undefined) {
            requestContext.setQueryParam("levels", ObjectSerializer.serialize(levels, "number", "uint"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketSymbol 
     */
    public async parsedBookMarketSymbolRecentTradesGet(marketSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketSymbol' is not null or undefined
        if (marketSymbol === null || marketSymbol === undefined) {
            throw new RequiredError("DefaultApi", "parsedBookMarketSymbolRecentTradesGet", "marketSymbol");
        }


        // Path Params
        const localVarPath = '/parsed/book/{market_symbol}/recent-trades'
            .replace('{' + 'market_symbol' + '}', encodeURIComponent(String(marketSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketSymbol 
     * @param depth 
     */
    public async parsedBookMarketSymbolSnapshotGet(marketSymbol: string, depth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketSymbol' is not null or undefined
        if (marketSymbol === null || marketSymbol === undefined) {
            throw new RequiredError("DefaultApi", "parsedBookMarketSymbolSnapshotGet", "marketSymbol");
        }



        // Path Params
        const localVarPath = '/parsed/book/{market_symbol}/snapshot'
            .replace('{' + 'market_symbol' + '}', encodeURIComponent(String(marketSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (depth !== undefined) {
            requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "number", "uint"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async parsedTickersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/parsed/tickers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async tickersSnapshotGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/tickers/snapshot';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bookMarketIdRecentTradesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bookMarketIdRecentTradesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookMarketIdRecentTradesGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BookMarketIdRecentTradesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdRecentTradesGet200Response", ""
            ) as BookMarketIdRecentTradesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BookMarketIdRecentTradesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdRecentTradesGet200Response", ""
            ) as BookMarketIdRecentTradesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bookMarketIdSnapshotGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bookMarketIdSnapshotGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookMarketIdSnapshotGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet200Response", ""
            ) as BookMarketIdSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BookMarketIdSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet200Response", ""
            ) as BookMarketIdSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to parsedBookMarketSymbolRecentTradesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async parsedBookMarketSymbolRecentTradesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ParsedBookMarketSymbolRecentTradesGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ParsedBookMarketSymbolRecentTradesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedBookMarketSymbolRecentTradesGet200Response", ""
            ) as ParsedBookMarketSymbolRecentTradesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ParsedBookMarketSymbolRecentTradesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedBookMarketSymbolRecentTradesGet200Response", ""
            ) as ParsedBookMarketSymbolRecentTradesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to parsedBookMarketSymbolSnapshotGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async parsedBookMarketSymbolSnapshotGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ParsedBookMarketSymbolSnapshotGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ParsedBookMarketSymbolSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedBookMarketSymbolSnapshotGet200Response", ""
            ) as ParsedBookMarketSymbolSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ParsedBookMarketSymbolSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedBookMarketSymbolSnapshotGet200Response", ""
            ) as ParsedBookMarketSymbolSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to parsedTickersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async parsedTickersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ParsedTickersGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ParsedTickersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedTickersGet200Response", ""
            ) as ParsedTickersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ParsedTickersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ParsedTickersGet200Response", ""
            ) as ParsedTickersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tickersSnapshotGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tickersSnapshotGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TickersSnapshotGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TickersSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TickersSnapshotGet200Response", ""
            ) as TickersSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: BookMarketIdSnapshotGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BookMarketIdSnapshotGet500Response", ""
            ) as BookMarketIdSnapshotGet500Response;
            throw new ApiException<BookMarketIdSnapshotGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TickersSnapshotGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TickersSnapshotGet200Response", ""
            ) as TickersSnapshotGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
