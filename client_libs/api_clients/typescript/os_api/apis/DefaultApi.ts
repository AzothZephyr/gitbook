// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { OrderDelete200Response } from '../models/OrderDelete200Response';
import { OrderDeleteRequest } from '../models/OrderDeleteRequest';
import { OrderPatch200Response } from '../models/OrderPatch200Response';
import { OrderPatchRequest } from '../models/OrderPatchRequest';
import { OrderPost200Response } from '../models/OrderPost200Response';
import { OrderPostRequest } from '../models/OrderPostRequest';
import { OrdersDelete200Response } from '../models/OrdersDelete200Response';
import { OrdersDeleteRequest } from '../models/OrdersDeleteRequest';
import { OrdersGet200Response } from '../models/OrdersGet200Response';
import { OrdersGet500Response } from '../models/OrdersGet500Response';
import { PositionsGet200Response } from '../models/PositionsGet200Response';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param orderDeleteRequest Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;.
     */
    public async orderDelete(orderDeleteRequest: OrderDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderDeleteRequest' is not null or undefined
        if (orderDeleteRequest === null || orderDeleteRequest === undefined) {
            throw new RequiredError("DefaultApi", "orderDelete", "orderDeleteRequest");
        }


        // Path Params
        const localVarPath = '/order';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderDeleteRequest, "OrderDeleteRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param orderPatchRequest Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order\&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;.
     */
    public async orderPatch(orderPatchRequest: OrderPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderPatchRequest' is not null or undefined
        if (orderPatchRequest === null || orderPatchRequest === undefined) {
            throw new RequiredError("DefaultApi", "orderPatch", "orderPatchRequest");
        }


        // Path Params
        const localVarPath = '/order';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderPatchRequest, "OrderPatchRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param orderPostRequest Place a new order.
     */
    public async orderPost(orderPostRequest: OrderPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderPostRequest' is not null or undefined
        if (orderPostRequest === null || orderPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "orderPost", "orderPostRequest");
        }


        // Path Params
        const localVarPath = '/order';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderPostRequest, "OrderPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param ordersDeleteRequest Cancel all resting orders, optionally limiting to a particular market and / or order book side.
     */
    public async ordersDelete(ordersDeleteRequest: OrdersDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ordersDeleteRequest' is not null or undefined
        if (ordersDeleteRequest === null || ordersDeleteRequest === undefined) {
            throw new RequiredError("DefaultApi", "ordersDelete", "ordersDeleteRequest");
        }


        // Path Params
        const localVarPath = '/orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(ordersDeleteRequest, "OrdersDeleteRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param subaccountId 
     */
    public async ordersGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "ordersGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subaccountId !== undefined) {
            requestContext.setQueryParam("subaccountId", ObjectSerializer.serialize(subaccountId, "number", "uint64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param subaccountId 
     */
    public async positionsGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "positionsGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/positions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subaccountId !== undefined) {
            requestContext.setQueryParam("subaccountId", ObjectSerializer.serialize(subaccountId, "number", "uint64"));
        }


        
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
     * @params response Response returned by the server for a request to orderDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderDelete200Response", ""
            ) as OrderDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderDelete200Response", ""
            ) as OrderDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderPatch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderPatch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderPatch200Response", ""
            ) as OrderPatch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderPatch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderPatch200Response", ""
            ) as OrderPatch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderPost200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderPost200Response", ""
            ) as OrderPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderPost200Response", ""
            ) as OrderPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ordersDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ordersDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrdersDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrdersDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersDelete200Response", ""
            ) as OrdersDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrdersDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersDelete200Response", ""
            ) as OrdersDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ordersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ordersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrdersGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet200Response", ""
            ) as OrdersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet200Response", ""
            ) as OrdersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to positionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async positionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PositionsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PositionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PositionsGet200Response", ""
            ) as PositionsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: OrdersGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrdersGet500Response", ""
            ) as OrdersGet500Response;
            throw new ApiException<OrdersGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PositionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PositionsGet200Response", ""
            ) as PositionsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
