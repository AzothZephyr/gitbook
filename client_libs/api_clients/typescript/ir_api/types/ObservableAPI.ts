import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param marketId 
     * @param interval 
     * @param startTime 
     * @param endTime 
     * @param limit 
     */
    public historyKlinesGetWithHttpInfo(marketId: number, interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d', startTime?: number, endTime?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<HistoryKlinesGet200Response>> {
        const requestContextPromise = this.requestFactory.historyKlinesGet(marketId, interval, startTime, endTime, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.historyKlinesGetWithHttpInfo(rsp)));
            }));
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
    public historyKlinesGet(marketId: number, interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d', startTime?: number, endTime?: number, limit?: number, _options?: Configuration): Observable<HistoryKlinesGet200Response> {
        return this.historyKlinesGetWithHttpInfo(marketId, interval, startTime, endTime, limit, _options).pipe(map((apiResponse: HttpInfo<HistoryKlinesGet200Response>) => apiResponse.data));
    }

    /**
     * Fetch all asset, market, and source definitions
     */
    public marketsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MarketsGet200Response>> {
        const requestContextPromise = this.requestFactory.marketsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.marketsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch all asset, market, and source definitions
     */
    public marketsGet(_options?: Configuration): Observable<MarketsGet200Response> {
        return this.marketsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MarketsGet200Response>) => apiResponse.data));
    }

    /**
     * @param sourceIds 
     * @param names 
     */
    public usersAddressGetWithHttpInfo(sourceIds?: string, names?: string, _options?: Configuration): Observable<HttpInfo<UsersAddressGet200Response>> {
        const requestContextPromise = this.requestFactory.usersAddressGet(sourceIds, names, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersAddressGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param sourceIds 
     * @param names 
     */
    public usersAddressGet(sourceIds?: string, names?: string, _options?: Configuration): Observable<UsersAddressGet200Response> {
        return this.usersAddressGetWithHttpInfo(sourceIds, names, _options).pipe(map((apiResponse: HttpInfo<UsersAddressGet200Response>) => apiResponse.data));
    }

    /**
     */
    public usersAddressSettingsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UsersAddressSettingsGet200Response>> {
        const requestContextPromise = this.requestFactory.usersAddressSettingsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersAddressSettingsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersAddressSettingsGet(_options?: Configuration): Observable<UsersAddressSettingsGet200Response> {
        return this.usersAddressSettingsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UsersAddressSettingsGet200Response>) => apiResponse.data));
    }

    /**
     */
    public usersCheckGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UsersCheckGet200Response>> {
        const requestContextPromise = this.requestFactory.usersCheckGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersCheckGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersCheckGet(_options?: Configuration): Observable<UsersCheckGet200Response> {
        return this.usersCheckGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UsersCheckGet200Response>) => apiResponse.data));
    }

    /**
     * @param marketId 
     */
    public usersFeeEstimateMarketIdGetWithHttpInfo(marketId: number, _options?: Configuration): Observable<HttpInfo<UsersFeeEstimateMarketIdGet200Response>> {
        const requestContextPromise = this.requestFactory.usersFeeEstimateMarketIdGet(marketId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersFeeEstimateMarketIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId 
     */
    public usersFeeEstimateMarketIdGet(marketId: number, _options?: Configuration): Observable<UsersFeeEstimateMarketIdGet200Response> {
        return this.usersFeeEstimateMarketIdGetWithHttpInfo(marketId, _options).pipe(map((apiResponse: HttpInfo<UsersFeeEstimateMarketIdGet200Response>) => apiResponse.data));
    }

    /**
     */
    public usersInfoGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UsersInfoGet200Response>> {
        const requestContextPromise = this.requestFactory.usersInfoGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersInfoGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersInfoGet(_options?: Configuration): Observable<UsersInfoGet200Response> {
        return this.usersInfoGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UsersInfoGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     * @param startTime 
     * @param endTime 
     * @param marketIds 
     * @param orderIds 
     */
    public usersSubaccountSubaccountIdFillsGetWithHttpInfo(subaccountId: number, startTime?: number, endTime?: number, marketIds?: string, orderIds?: string, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdFillsGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdFillsGet(subaccountId, startTime, endTime, marketIds, orderIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdFillsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     * @param startTime 
     * @param endTime 
     * @param marketIds 
     * @param orderIds 
     */
    public usersSubaccountSubaccountIdFillsGet(subaccountId: number, startTime?: number, endTime?: number, marketIds?: string, orderIds?: string, _options?: Configuration): Observable<UsersSubaccountSubaccountIdFillsGet200Response> {
        return this.usersSubaccountSubaccountIdFillsGetWithHttpInfo(subaccountId, startTime, endTime, marketIds, orderIds, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdFillsGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdGet(subaccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdGet(subaccountId: number, _options?: Configuration): Observable<UsersSubaccountSubaccountIdGet200Response> {
        return this.usersSubaccountSubaccountIdGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     * @param createdBefore Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @param limit The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     */
    public usersSubaccountSubaccountIdOrdersGetWithHttpInfo(subaccountId: number, createdBefore?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdOrdersGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdOrdersGet(subaccountId, createdBefore, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdOrdersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     * @param createdBefore Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @param limit The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     */
    public usersSubaccountSubaccountIdOrdersGet(subaccountId: number, createdBefore?: number, limit?: number, _options?: Configuration): Observable<UsersSubaccountSubaccountIdOrdersGet200Response> {
        return this.usersSubaccountSubaccountIdOrdersGetWithHttpInfo(subaccountId, createdBefore, limit, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdOrdersGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     * @param usersSubaccountSubaccountIdPatchRequest 
     */
    public usersSubaccountSubaccountIdPatchWithHttpInfo(subaccountId: number, usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest, _options?: Configuration): Observable<HttpInfo<UsersSubaccountsPost200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdPatch(subaccountId, usersSubaccountSubaccountIdPatchRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     * @param usersSubaccountSubaccountIdPatchRequest 
     */
    public usersSubaccountSubaccountIdPatch(subaccountId: number, usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest, _options?: Configuration): Observable<UsersSubaccountsPost200Response> {
        return this.usersSubaccountSubaccountIdPatchWithHttpInfo(subaccountId, usersSubaccountSubaccountIdPatchRequest, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountsPost200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdPositionsGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdPositionsGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdPositionsGet(subaccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdPositionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdPositionsGet(subaccountId: number, _options?: Configuration): Observable<UsersSubaccountSubaccountIdPositionsGet200Response> {
        return this.usersSubaccountSubaccountIdPositionsGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdPositionsGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdTransfersGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdTransfersGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdTransfersGet(subaccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdTransfersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdTransfersGet(subaccountId: number, _options?: Configuration): Observable<UsersSubaccountSubaccountIdTransfersGet200Response> {
        return this.usersSubaccountSubaccountIdTransfersGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdTransfersGet200Response>) => apiResponse.data));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(subaccountId: number, _options?: Configuration): Observable<HttpInfo<UsersSubaccountSubaccountIdWithdrawalsGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountSubaccountIdWithdrawalsGet(subaccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subaccountId 
     */
    public usersSubaccountSubaccountIdWithdrawalsGet(subaccountId: number, _options?: Configuration): Observable<UsersSubaccountSubaccountIdWithdrawalsGet200Response> {
        return this.usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(subaccountId, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountSubaccountIdWithdrawalsGet200Response>) => apiResponse.data));
    }

    /**
     */
    public usersSubaccountsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UsersSubaccountsGet200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersSubaccountsGet(_options?: Configuration): Observable<UsersSubaccountsGet200Response> {
        return this.usersSubaccountsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UsersSubaccountsGet200Response>) => apiResponse.data));
    }

    /**
     * @param usersSubaccountsPostRequest 
     */
    public usersSubaccountsPostWithHttpInfo(usersSubaccountsPostRequest: UsersSubaccountsPostRequest, _options?: Configuration): Observable<HttpInfo<UsersSubaccountsPost200Response>> {
        const requestContextPromise = this.requestFactory.usersSubaccountsPost(usersSubaccountsPostRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersSubaccountsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param usersSubaccountsPostRequest 
     */
    public usersSubaccountsPost(usersSubaccountsPostRequest: UsersSubaccountsPostRequest, _options?: Configuration): Observable<UsersSubaccountsPost200Response> {
        return this.usersSubaccountsPostWithHttpInfo(usersSubaccountsPostRequest, _options).pipe(map((apiResponse: HttpInfo<UsersSubaccountsPost200Response>) => apiResponse.data));
    }

    /**
     * @param usersWithdrawPostRequest 
     */
    public usersWithdrawPostWithHttpInfo(usersWithdrawPostRequest: UsersWithdrawPostRequest, _options?: Configuration): Observable<HttpInfo<UsersWithdrawPost200Response>> {
        const requestContextPromise = this.requestFactory.usersWithdrawPost(usersWithdrawPostRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersWithdrawPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param usersWithdrawPostRequest 
     */
    public usersWithdrawPost(usersWithdrawPostRequest: UsersWithdrawPostRequest, _options?: Configuration): Observable<UsersWithdrawPost200Response> {
        return this.usersWithdrawPostWithHttpInfo(usersWithdrawPostRequest, _options).pipe(map((apiResponse: HttpInfo<UsersWithdrawPost200Response>) => apiResponse.data));
    }

}
