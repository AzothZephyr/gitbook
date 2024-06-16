import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiOrderDeleteRequest {
    /**
     * Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;.
     * @type OrderDeleteRequest
     * @memberof DefaultApiorderDelete
     */
    orderDeleteRequest: OrderDeleteRequest
}

export interface DefaultApiOrderPatchRequest {
    /**
     * Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order\&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;.
     * @type OrderPatchRequest
     * @memberof DefaultApiorderPatch
     */
    orderPatchRequest: OrderPatchRequest
}

export interface DefaultApiOrderPostRequest {
    /**
     * Place a new order.
     * @type OrderPostRequest
     * @memberof DefaultApiorderPost
     */
    orderPostRequest: OrderPostRequest
}

export interface DefaultApiOrdersDeleteRequest {
    /**
     * Cancel all resting orders, optionally limiting to a particular market and / or order book side.
     * @type OrdersDeleteRequest
     * @memberof DefaultApiordersDelete
     */
    ordersDeleteRequest: OrdersDeleteRequest
}

export interface DefaultApiOrdersGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiordersGet
     */
    subaccountId: number
}

export interface DefaultApiPositionsGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApipositionsGet
     */
    subaccountId: number
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public orderDeleteWithHttpInfo(param: DefaultApiOrderDeleteRequest, options?: Configuration): Promise<HttpInfo<OrderDelete200Response>> {
        return this.api.orderDeleteWithHttpInfo(param.orderDeleteRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderDelete(param: DefaultApiOrderDeleteRequest, options?: Configuration): Promise<OrderDelete200Response> {
        return this.api.orderDelete(param.orderDeleteRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderPatchWithHttpInfo(param: DefaultApiOrderPatchRequest, options?: Configuration): Promise<HttpInfo<OrderPatch200Response>> {
        return this.api.orderPatchWithHttpInfo(param.orderPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderPatch(param: DefaultApiOrderPatchRequest, options?: Configuration): Promise<OrderPatch200Response> {
        return this.api.orderPatch(param.orderPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderPostWithHttpInfo(param: DefaultApiOrderPostRequest, options?: Configuration): Promise<HttpInfo<OrderPost200Response>> {
        return this.api.orderPostWithHttpInfo(param.orderPostRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public orderPost(param: DefaultApiOrderPostRequest, options?: Configuration): Promise<OrderPost200Response> {
        return this.api.orderPost(param.orderPostRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ordersDeleteWithHttpInfo(param: DefaultApiOrdersDeleteRequest, options?: Configuration): Promise<HttpInfo<OrdersDelete200Response>> {
        return this.api.ordersDeleteWithHttpInfo(param.ordersDeleteRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ordersDelete(param: DefaultApiOrdersDeleteRequest, options?: Configuration): Promise<OrdersDelete200Response> {
        return this.api.ordersDelete(param.ordersDeleteRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ordersGetWithHttpInfo(param: DefaultApiOrdersGetRequest, options?: Configuration): Promise<HttpInfo<OrdersGet200Response>> {
        return this.api.ordersGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ordersGet(param: DefaultApiOrdersGetRequest, options?: Configuration): Promise<OrdersGet200Response> {
        return this.api.ordersGet(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public positionsGetWithHttpInfo(param: DefaultApiPositionsGetRequest, options?: Configuration): Promise<HttpInfo<PositionsGet200Response>> {
        return this.api.positionsGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public positionsGet(param: DefaultApiPositionsGetRequest, options?: Configuration): Promise<PositionsGet200Response> {
        return this.api.positionsGet(param.subaccountId,  options).toPromise();
    }

}
