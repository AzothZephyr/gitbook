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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param marketId 
     * @param interval 
     * @param startTime 
     * @param endTime 
     * @param limit 
     */
    public historyKlinesGetWithHttpInfo(marketId: number, interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d', startTime?: number, endTime?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<HistoryKlinesGet200Response>> {
        const result = this.api.historyKlinesGetWithHttpInfo(marketId, interval, startTime, endTime, limit, _options);
        return result.toPromise();
    }

    /**
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param marketId 
     * @param interval 
     * @param startTime 
     * @param endTime 
     * @param limit 
     */
    public historyKlinesGet(marketId: number, interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d', startTime?: number, endTime?: number, limit?: number, _options?: Configuration): Promise<HistoryKlinesGet200Response> {
        const result = this.api.historyKlinesGet(marketId, interval, startTime, endTime, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch all asset, market, and source definitions
     */
    public marketsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MarketsGet200Response>> {
        const result = this.api.marketsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Fetch all asset, market, and source definitions
     */
    public marketsGet(_options?: Configuration): Promise<MarketsGet200Response> {
        const result = this.api.marketsGet(_options);
        return result.toPromise();
    }

    /**
     * @param sourceIds 
     * @param names 
     */
    public usersAddressGetWithHttpInfo(sourceIds?: string, names?: string, _options?: Configuration): Promise<HttpInfo<UsersAddressGet200Response>> {
        const result = this.api.usersAddressGetWithHttpInfo(sourceIds, names, _options);
        return result.toPromise();
    }

    /**
     * @param sourceIds 
     * @param names 
     */
    public usersAddressGet(sourceIds?: string, names?: string, _options?: Configuration): Promise<UsersAddressGet200Response> {
        const result = this.api.usersAddressGet(sourceIds, names, _options);
        return result.toPromise();
    }

    /**
     */
    public usersAddressSettingsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UsersAddressSettingsGet200Response>> {
        const result = this.api.usersAddressSettingsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersAddressSettingsGet(_options?: Configuration): Promise<UsersAddressSettingsGet200Response> {
        const result = this.api.usersAddressSettingsGet(_options);
        return result.toPromise();
    }

    /**
     */
    public usersCheckGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UsersCheckGet200Response>> {
        const result = this.api.usersCheckGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersCheckGet(_options?: Configuration): Promise<UsersCheckGet200Response> {
        const result = this.api.usersCheckGet(_options);
        return result.toPromise();
    }

    /**
     * @param marketId 
     */
    public usersFeeEstimateMarketIdGetWithHttpInfo(marketId: number, _options?: Configuration): Promise<HttpInfo<UsersFeeEstimateMarketIdGet200Response>> {
        const result = this.api.usersFeeEstimateMarketIdGetWithHttpInfo(marketId, _options);
        return result.toPromise();
    }

    /**
     * @param marketId 
     */
    public usersFeeEstimateMarketIdGet(marketId: number, _options?: Configuration): Promise<UsersFeeEstimateMarketIdGet200Response> {
        const result = this.api.usersFeeEstimateMarketIdGet(marketId, _options);
        return result.toPromise();
    }

    /**
     */
    public usersInfoGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UsersInfoGet200Response>> {
        const result = this.api.usersInfoGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersInfoGet(_options?: Configuration): Promise<UsersInfoGet200Response> {
        const result = this.api.usersInfoGet(_options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param startTime 
     * @param endTime 
     * @param marketIds 
     * @param orderIds 
     */
    public usersSubaccountSubaccountIdFillsGetWithHttpInfo(subaccountId: number, startTime?: number, endTime?: number, marketIds?: string, orderIds?: string, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdFillsGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdFillsGetWithHttpInfo(subaccountId, startTime, endTime, marketIds, orderIds, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param startTime 
     * @param endTime 
     * @param marketIds 
     * @param orderIds 
     */
    public usersSubaccountSubaccountIdFillsGet(subaccountId: number, startTime?: number, endTime?: number, marketIds?: string, orderIds?: string, _options?: Configuration): Promise<UsersSubaccountSubaccountIdFillsGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdFillsGet(subaccountId, startTime, endTime, marketIds, orderIds, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdGetWithHttpInfo(subaccountId: number, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdGetWithHttpInfo(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdGet(subaccountId: number, _options?: Configuration): Promise<UsersSubaccountSubaccountIdGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdGet(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param createdBefore Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @param limit The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     */
    public usersSubaccountSubaccountIdOrdersGetWithHttpInfo(subaccountId: number, createdBefore?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdOrdersGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdOrdersGetWithHttpInfo(subaccountId, createdBefore, limit, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param createdBefore Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @param limit The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     */
    public usersSubaccountSubaccountIdOrdersGet(subaccountId: number, createdBefore?: number, limit?: number, _options?: Configuration): Promise<UsersSubaccountSubaccountIdOrdersGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdOrdersGet(subaccountId, createdBefore, limit, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param usersSubaccountSubaccountIdPatchRequest 
     */
    public usersSubaccountSubaccountIdPatchWithHttpInfo(subaccountId: number, usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest, _options?: Configuration): Promise<HttpInfo<UsersSubaccountsPost200Response>> {
        const result = this.api.usersSubaccountSubaccountIdPatchWithHttpInfo(subaccountId, usersSubaccountSubaccountIdPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     * @param usersSubaccountSubaccountIdPatchRequest 
     */
    public usersSubaccountSubaccountIdPatch(subaccountId: number, usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest, _options?: Configuration): Promise<UsersSubaccountsPost200Response> {
        const result = this.api.usersSubaccountSubaccountIdPatch(subaccountId, usersSubaccountSubaccountIdPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdPositionsGetWithHttpInfo(subaccountId: number, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdPositionsGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdPositionsGetWithHttpInfo(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdPositionsGet(subaccountId: number, _options?: Configuration): Promise<UsersSubaccountSubaccountIdPositionsGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdPositionsGet(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdTransfersGetWithHttpInfo(subaccountId: number, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdTransfersGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdTransfersGetWithHttpInfo(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdTransfersGet(subaccountId: number, _options?: Configuration): Promise<UsersSubaccountSubaccountIdTransfersGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdTransfersGet(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(subaccountId: number, _options?: Configuration): Promise<HttpInfo<UsersSubaccountSubaccountIdWithdrawalsGet200Response>> {
        const result = this.api.usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(subaccountId, _options);
        return result.toPromise();
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdWithdrawalsGet(subaccountId: number, _options?: Configuration): Promise<UsersSubaccountSubaccountIdWithdrawalsGet200Response> {
        const result = this.api.usersSubaccountSubaccountIdWithdrawalsGet(subaccountId, _options);
        return result.toPromise();
    }

    /**
     */
    public usersSubaccountsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UsersSubaccountsGet200Response>> {
        const result = this.api.usersSubaccountsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersSubaccountsGet(_options?: Configuration): Promise<UsersSubaccountsGet200Response> {
        const result = this.api.usersSubaccountsGet(_options);
        return result.toPromise();
    }

    /**
     * @param usersSubaccountsPostRequest 
     */
    public usersSubaccountsPostWithHttpInfo(usersSubaccountsPostRequest: UsersSubaccountsPostRequest, _options?: Configuration): Promise<HttpInfo<UsersSubaccountsPost200Response>> {
        const result = this.api.usersSubaccountsPostWithHttpInfo(usersSubaccountsPostRequest, _options);
        return result.toPromise();
    }

    /**
     * @param usersSubaccountsPostRequest 
     */
    public usersSubaccountsPost(usersSubaccountsPostRequest: UsersSubaccountsPostRequest, _options?: Configuration): Promise<UsersSubaccountsPost200Response> {
        const result = this.api.usersSubaccountsPost(usersSubaccountsPostRequest, _options);
        return result.toPromise();
    }

    /**
     * @param usersWithdrawPostRequest 
     */
    public usersWithdrawPostWithHttpInfo(usersWithdrawPostRequest: UsersWithdrawPostRequest, _options?: Configuration): Promise<HttpInfo<UsersWithdrawPost200Response>> {
        const result = this.api.usersWithdrawPostWithHttpInfo(usersWithdrawPostRequest, _options);
        return result.toPromise();
    }

    /**
     * @param usersWithdrawPostRequest 
     */
    public usersWithdrawPost(usersWithdrawPostRequest: UsersWithdrawPostRequest, _options?: Configuration): Promise<UsersWithdrawPost200Response> {
        const result = this.api.usersWithdrawPost(usersWithdrawPostRequest, _options);
        return result.toPromise();
    }


}



