import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * @param orderDeleteRequest Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;.
     */
    public orderDeleteWithHttpInfo(orderDeleteRequest: OrderDeleteRequest, _options?: Configuration): Observable<HttpInfo<OrderDelete200Response>> {
        const requestContextPromise = this.requestFactory.orderDelete(orderDeleteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderDeleteRequest Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;.
     */
    public orderDelete(orderDeleteRequest: OrderDeleteRequest, _options?: Configuration): Observable<OrderDelete200Response> {
        return this.orderDeleteWithHttpInfo(orderDeleteRequest, _options).pipe(map((apiResponse: HttpInfo<OrderDelete200Response>) => apiResponse.data));
    }

    /**
     * @param orderPatchRequest Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order\&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;.
     */
    public orderPatchWithHttpInfo(orderPatchRequest: OrderPatchRequest, _options?: Configuration): Observable<HttpInfo<OrderPatch200Response>> {
        const requestContextPromise = this.requestFactory.orderPatch(orderPatchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderPatchRequest Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order\&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;.
     */
    public orderPatch(orderPatchRequest: OrderPatchRequest, _options?: Configuration): Observable<OrderPatch200Response> {
        return this.orderPatchWithHttpInfo(orderPatchRequest, _options).pipe(map((apiResponse: HttpInfo<OrderPatch200Response>) => apiResponse.data));
    }

    /**
     * @param orderPostRequest Place a new order.
     */
    public orderPostWithHttpInfo(orderPostRequest: OrderPostRequest, _options?: Configuration): Observable<HttpInfo<OrderPost200Response>> {
        const requestContextPromise = this.requestFactory.orderPost(orderPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderPostRequest Place a new order.
     */
    public orderPost(orderPostRequest: OrderPostRequest, _options?: Configuration): Observable<OrderPost200Response> {
        return this.orderPostWithHttpInfo(orderPostRequest, _options).pipe(map((apiResponse: HttpInfo<OrderPost200Response>) => apiResponse.data));
    }

    /**
     * @param ordersDeleteRequest Cancel all resting orders, optionally limiting to a particular market and / or order book side.
     */
    public ordersDeleteWithHttpInfo(ordersDeleteRequest: OrdersDeleteRequest, _options?: Configuration): Observable<HttpInfo<OrdersDelete200Response>> {
        const requestContextPromise = this.requestFactory.ordersDelete(ordersDeleteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ordersDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param ordersDeleteRequest Cancel all resting orders, optionally limiting to a particular market and / or order book side.
     */
    public ordersDelete(ordersDeleteRequest: OrdersDeleteRequest, _options?: Configuration): Observable<OrdersDelete200Response> {
        return this.ordersDeleteWithHttpInfo(ordersDeleteRequest, _options).pipe(map((apiResponse: HttpInfo<OrdersDelete200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public ordersGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<OrdersGet200Response>> {
        const requestContextPromise = this.requestFactory.ordersGet(subaccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ordersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public ordersGet(subaccountId: number, _options?: Configuration): Observable<OrdersGet200Response> {
        return this.ordersGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<OrdersGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public positionsGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<PositionsGet200Response>> {
        const requestContextPromise = this.requestFactory.positionsGet(subaccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.positionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public positionsGet(subaccountId: number, _options?: Configuration): Observable<PositionsGet200Response> {
        return this.positionsGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<PositionsGet200Response>) => apiResponse.data));
    }

}
