import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { HistoryKlinesGet200Response } from '../models/HistoryKlinesGet200Response';
import { MarketsGet200Response } from '../models/MarketsGet200Response';
import { MarketsGet200ResponseResult } from '../models/MarketsGet200ResponseResult';
import { MarketsGet200ResponseResultAssetsInner } from '../models/MarketsGet200ResponseResultAssetsInner';
import { MarketsGet200ResponseResultFeeTablesInner } from '../models/MarketsGet200ResponseResultFeeTablesInner';
import { MarketsGet200ResponseResultFeeTablesInnerFeeTiersInner } from '../models/MarketsGet200ResponseResultFeeTablesInnerFeeTiersInner';
import { MarketsGet200ResponseResultMarketsInner } from '../models/MarketsGet200ResponseResultMarketsInner';
import { MarketsGet200ResponseResultSourcesInner } from '../models/MarketsGet200ResponseResultSourcesInner';
import { UsersAddressGet200Response } from '../models/UsersAddressGet200Response';
import { UsersAddressGet200ResponseResult } from '../models/UsersAddressGet200ResponseResult';
import { UsersAddressGet200ResponseResultAddressesInner } from '../models/UsersAddressGet200ResponseResultAddressesInner';
import { UsersAddressGet200ResponseResultSettings } from '../models/UsersAddressGet200ResponseResultSettings';
import { UsersAddressSettingsGet200Response } from '../models/UsersAddressSettingsGet200Response';
import { UsersCheckGet200Response } from '../models/UsersCheckGet200Response';
import { UsersCheckGet200ResponseResult } from '../models/UsersCheckGet200ResponseResult';
import { UsersCheckGet500Response } from '../models/UsersCheckGet500Response';
import { UsersFeeEstimateMarketIdGet200Response } from '../models/UsersFeeEstimateMarketIdGet200Response';
import { UsersFeeEstimateMarketIdGet200ResponseResult } from '../models/UsersFeeEstimateMarketIdGet200ResponseResult';
import { UsersInfoGet200Response } from '../models/UsersInfoGet200Response';
import { UsersInfoGet200ResponseResult } from '../models/UsersInfoGet200ResponseResult';
import { UsersInfoGet200ResponseResultApiKeysInner } from '../models/UsersInfoGet200ResponseResultApiKeysInner';
import { UsersInfoGet200ResponseResultGuardianHasKeyInner } from '../models/UsersInfoGet200ResponseResultGuardianHasKeyInner';
import { UsersInfoGet200ResponseResultKycStatusValue } from '../models/UsersInfoGet200ResponseResultKycStatusValue';
import { UsersInfoGet200ResponseResultRegistration } from '../models/UsersInfoGet200ResponseResultRegistration';
import { UsersInfoGet200ResponseResultSubaccountsInner } from '../models/UsersInfoGet200ResponseResultSubaccountsInner';
import { UsersSubaccountSubaccountIdFillsGet200Response } from '../models/UsersSubaccountSubaccountIdFillsGet200Response';
import { UsersSubaccountSubaccountIdFillsGet200ResponseResult } from '../models/UsersSubaccountSubaccountIdFillsGet200ResponseResult';
import { UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner } from '../models/UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner';
import { UsersSubaccountSubaccountIdGet200Response } from '../models/UsersSubaccountSubaccountIdGet200Response';
import { UsersSubaccountSubaccountIdOrdersGet200Response } from '../models/UsersSubaccountSubaccountIdOrdersGet200Response';
import { UsersSubaccountSubaccountIdOrdersGet200ResponseResult } from '../models/UsersSubaccountSubaccountIdOrdersGet200ResponseResult';
import { UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner } from '../models/UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner';
import { UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal } from '../models/UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal';
import { UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner } from '../models/UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner';
import { UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner } from '../models/UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner';
import { UsersSubaccountSubaccountIdPatchRequest } from '../models/UsersSubaccountSubaccountIdPatchRequest';
import { UsersSubaccountSubaccountIdPositionsGet200Response } from '../models/UsersSubaccountSubaccountIdPositionsGet200Response';
import { UsersSubaccountSubaccountIdPositionsGet200ResponseResultValue } from '../models/UsersSubaccountSubaccountIdPositionsGet200ResponseResultValue';
import { UsersSubaccountSubaccountIdPositionsGet200ResponseResultValueInnerInner } from '../models/UsersSubaccountSubaccountIdPositionsGet200ResponseResultValueInnerInner';
import { UsersSubaccountSubaccountIdTransfersGet200Response } from '../models/UsersSubaccountSubaccountIdTransfersGet200Response';
import { UsersSubaccountSubaccountIdTransfersGet200ResponseResult } from '../models/UsersSubaccountSubaccountIdTransfersGet200ResponseResult';
import { UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValue } from '../models/UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValue';
import { UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner } from '../models/UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner';
import { UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue } from '../models/UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue';
import { UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner } from '../models/UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner';
import { UsersSubaccountSubaccountIdWithdrawalsGet200Response } from '../models/UsersSubaccountSubaccountIdWithdrawalsGet200Response';
import { UsersSubaccountsGet200Response } from '../models/UsersSubaccountsGet200Response';
import { UsersSubaccountsGet200ResponseResult } from '../models/UsersSubaccountsGet200ResponseResult';
import { UsersSubaccountsPost200Response } from '../models/UsersSubaccountsPost200Response';
import { UsersSubaccountsPost200ResponseResult } from '../models/UsersSubaccountsPost200ResponseResult';
import { UsersSubaccountsPostRequest } from '../models/UsersSubaccountsPostRequest';
import { UsersWithdrawPost200Response } from '../models/UsersWithdrawPost200Response';
import { UsersWithdrawPost200ResponseResult } from '../models/UsersWithdrawPost200ResponseResult';
import { UsersWithdrawPostRequest } from '../models/UsersWithdrawPostRequest';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiHistoryKlinesGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApihistoryKlinesGet
     */
    marketId: number
    /**
     * 
     * @type &#39;1s&#39; | &#39;1m&#39; | &#39;15m&#39; | &#39;1h&#39; | &#39;4h&#39; | &#39;1d&#39;
     * @memberof DefaultApihistoryKlinesGet
     */
    interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d'
    /**
     * 
     * @type number
     * @memberof DefaultApihistoryKlinesGet
     */
    startTime?: number
    /**
     * 
     * @type number
     * @memberof DefaultApihistoryKlinesGet
     */
    endTime?: number
    /**
     * 
     * @type number
     * @memberof DefaultApihistoryKlinesGet
     */
    limit?: number
}

export interface DefaultApiMarketsGetRequest {
}

export interface DefaultApiUsersAddressGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiusersAddressGet
     */
    sourceIds?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiusersAddressGet
     */
    names?: string
}

export interface DefaultApiUsersAddressSettingsGetRequest {
}

export interface DefaultApiUsersCheckGetRequest {
}

export interface DefaultApiUsersFeeEstimateMarketIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersFeeEstimateMarketIdGet
     */
    marketId: number
}

export interface DefaultApiUsersInfoGetRequest {
}

export interface DefaultApiUsersSubaccountSubaccountIdFillsGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdFillsGet
     */
    subaccountId: number
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdFillsGet
     */
    startTime?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdFillsGet
     */
    endTime?: number
    /**
     * 
     * @type string
     * @memberof DefaultApiusersSubaccountSubaccountIdFillsGet
     */
    marketIds?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiusersSubaccountSubaccountIdFillsGet
     */
    orderIds?: string
}

export interface DefaultApiUsersSubaccountSubaccountIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdGet
     */
    subaccountId: number
}

export interface DefaultApiUsersSubaccountSubaccountIdOrdersGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdOrdersGet
     */
    subaccountId: number
    /**
     * Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdOrdersGet
     */
    createdBefore?: number
    /**
     * The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdOrdersGet
     */
    limit?: number
}

export interface DefaultApiUsersSubaccountSubaccountIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdPatch
     */
    subaccountId: number
    /**
     * 
     * @type UsersSubaccountSubaccountIdPatchRequest
     * @memberof DefaultApiusersSubaccountSubaccountIdPatch
     */
    usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest
}

export interface DefaultApiUsersSubaccountSubaccountIdPositionsGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdPositionsGet
     */
    subaccountId: number
}

export interface DefaultApiUsersSubaccountSubaccountIdTransfersGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdTransfersGet
     */
    subaccountId: number
}

export interface DefaultApiUsersSubaccountSubaccountIdWithdrawalsGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiusersSubaccountSubaccountIdWithdrawalsGet
     */
    subaccountId: number
}

export interface DefaultApiUsersSubaccountsGetRequest {
}

export interface DefaultApiUsersSubaccountsPostRequest {
    /**
     * 
     * @type UsersSubaccountsPostRequest
     * @memberof DefaultApiusersSubaccountsPost
     */
    usersSubaccountsPostRequest: UsersSubaccountsPostRequest
}

export interface DefaultApiUsersWithdrawPostRequest {
    /**
     * 
     * @type UsersWithdrawPostRequest
     * @memberof DefaultApiusersWithdrawPost
     */
    usersWithdrawPostRequest: UsersWithdrawPostRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param param the request object
     */
    public historyKlinesGetWithHttpInfo(param: DefaultApiHistoryKlinesGetRequest, options?: Configuration): Promise<HttpInfo<HistoryKlinesGet200Response>> {
        return this.api.historyKlinesGetWithHttpInfo(param.marketId, param.interval, param.startTime, param.endTime, param.limit,  options).toPromise();
    }

    /**
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param param the request object
     */
    public historyKlinesGet(param: DefaultApiHistoryKlinesGetRequest, options?: Configuration): Promise<HistoryKlinesGet200Response> {
        return this.api.historyKlinesGet(param.marketId, param.interval, param.startTime, param.endTime, param.limit,  options).toPromise();
    }

    /**
     * Fetch all asset, market, and source definitions
     * @param param the request object
     */
    public marketsGetWithHttpInfo(param: DefaultApiMarketsGetRequest = {}, options?: Configuration): Promise<HttpInfo<MarketsGet200Response>> {
        return this.api.marketsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Fetch all asset, market, and source definitions
     * @param param the request object
     */
    public marketsGet(param: DefaultApiMarketsGetRequest = {}, options?: Configuration): Promise<MarketsGet200Response> {
        return this.api.marketsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersAddressGetWithHttpInfo(param: DefaultApiUsersAddressGetRequest = {}, options?: Configuration): Promise<HttpInfo<UsersAddressGet200Response>> {
        return this.api.usersAddressGetWithHttpInfo(param.sourceIds, param.names,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersAddressGet(param: DefaultApiUsersAddressGetRequest = {}, options?: Configuration): Promise<UsersAddressGet200Response> {
        return this.api.usersAddressGet(param.sourceIds, param.names,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersAddressSettingsGetWithHttpInfo(param: DefaultApiUsersAddressSettingsGetRequest = {}, options?: Configuration): Promise<HttpInfo<UsersAddressSettingsGet200Response>> {
        return this.api.usersAddressSettingsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersAddressSettingsGet(param: DefaultApiUsersAddressSettingsGetRequest = {}, options?: Configuration): Promise<UsersAddressSettingsGet200Response> {
        return this.api.usersAddressSettingsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersCheckGetWithHttpInfo(param: DefaultApiUsersCheckGetRequest = {}, options?: Configuration): Promise<HttpInfo<UsersCheckGet200Response>> {
        return this.api.usersCheckGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersCheckGet(param: DefaultApiUsersCheckGetRequest = {}, options?: Configuration): Promise<UsersCheckGet200Response> {
        return this.api.usersCheckGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersFeeEstimateMarketIdGetWithHttpInfo(param: DefaultApiUsersFeeEstimateMarketIdGetRequest, options?: Configuration): Promise<HttpInfo<UsersFeeEstimateMarketIdGet200Response>> {
        return this.api.usersFeeEstimateMarketIdGetWithHttpInfo(param.marketId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersFeeEstimateMarketIdGet(param: DefaultApiUsersFeeEstimateMarketIdGetRequest, options?: Configuration): Promise<UsersFeeEstimateMarketIdGet200Response> {
        return this.api.usersFeeEstimateMarketIdGet(param.marketId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersInfoGetWithHttpInfo(param: DefaultApiUsersInfoGetRequest = {}, options?: Configuration): Promise<HttpInfo<UsersInfoGet200Response>> {
        return this.api.usersInfoGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersInfoGet(param: DefaultApiUsersInfoGetRequest = {}, options?: Configuration): Promise<UsersInfoGet200Response> {
        return this.api.usersInfoGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdFillsGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdFillsGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdFillsGet200Response>> {
        return this.api.usersSubaccountSubaccountIdFillsGetWithHttpInfo(param.subaccountId, param.startTime, param.endTime, param.marketIds, param.orderIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdFillsGet(param: DefaultApiUsersSubaccountSubaccountIdFillsGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdFillsGet200Response> {
        return this.api.usersSubaccountSubaccountIdFillsGet(param.subaccountId, param.startTime, param.endTime, param.marketIds, param.orderIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdGet200Response>> {
        return this.api.usersSubaccountSubaccountIdGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdGet(param: DefaultApiUsersSubaccountSubaccountIdGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdGet200Response> {
        return this.api.usersSubaccountSubaccountIdGet(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdOrdersGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdOrdersGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdOrdersGet200Response>> {
        return this.api.usersSubaccountSubaccountIdOrdersGetWithHttpInfo(param.subaccountId, param.createdBefore, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdOrdersGet(param: DefaultApiUsersSubaccountSubaccountIdOrdersGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdOrdersGet200Response> {
        return this.api.usersSubaccountSubaccountIdOrdersGet(param.subaccountId, param.createdBefore, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdPatchWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdPatchRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountsPost200Response>> {
        return this.api.usersSubaccountSubaccountIdPatchWithHttpInfo(param.subaccountId, param.usersSubaccountSubaccountIdPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdPatch(param: DefaultApiUsersSubaccountSubaccountIdPatchRequest, options?: Configuration): Promise<UsersSubaccountsPost200Response> {
        return this.api.usersSubaccountSubaccountIdPatch(param.subaccountId, param.usersSubaccountSubaccountIdPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdPositionsGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdPositionsGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdPositionsGet200Response>> {
        return this.api.usersSubaccountSubaccountIdPositionsGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdPositionsGet(param: DefaultApiUsersSubaccountSubaccountIdPositionsGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdPositionsGet200Response> {
        return this.api.usersSubaccountSubaccountIdPositionsGet(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdTransfersGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdTransfersGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdTransfersGet200Response>> {
        return this.api.usersSubaccountSubaccountIdTransfersGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdTransfersGet(param: DefaultApiUsersSubaccountSubaccountIdTransfersGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdTransfersGet200Response> {
        return this.api.usersSubaccountSubaccountIdTransfersGet(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(param: DefaultApiUsersSubaccountSubaccountIdWithdrawalsGetRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdWithdrawalsGet200Response>> {
        return this.api.usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountSubaccountIdWithdrawalsGet(param: DefaultApiUsersSubaccountSubaccountIdWithdrawalsGetRequest, options?: Configuration): Promise<UsersSubaccountSubaccountIdWithdrawalsGet200Response> {
        return this.api.usersSubaccountSubaccountIdWithdrawalsGet(param.subaccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountsGetWithHttpInfo(param: DefaultApiUsersSubaccountsGetRequest = {}, options?: Configuration): Promise<HttpInfo<UsersSubaccountsGet200Response>> {
        return this.api.usersSubaccountsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountsGet(param: DefaultApiUsersSubaccountsGetRequest = {}, options?: Configuration): Promise<UsersSubaccountsGet200Response> {
        return this.api.usersSubaccountsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountsPostWithHttpInfo(param: DefaultApiUsersSubaccountsPostRequest, options?: Configuration): Promise<HttpInfo<UsersSubaccountsPost200Response>> {
        return this.api.usersSubaccountsPostWithHttpInfo(param.usersSubaccountsPostRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersSubaccountsPost(param: DefaultApiUsersSubaccountsPostRequest, options?: Configuration): Promise<UsersSubaccountsPost200Response> {
        return this.api.usersSubaccountsPost(param.usersSubaccountsPostRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersWithdrawPostWithHttpInfo(param: DefaultApiUsersWithdrawPostRequest, options?: Configuration): Promise<HttpInfo<UsersWithdrawPost200Response>> {
        return this.api.usersWithdrawPostWithHttpInfo(param.usersWithdrawPostRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersWithdrawPost(param: DefaultApiUsersWithdrawPostRequest, options?: Configuration): Promise<UsersWithdrawPost200Response> {
        return this.api.usersWithdrawPost(param.usersWithdrawPostRequest,  options).toPromise();
    }

}
