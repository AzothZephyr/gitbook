import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BookMarketIdRecentTradesGet200Response } from '../models/BookMarketIdRecentTradesGet200Response';
import { BookMarketIdRecentTradesGet200ResponseResult } from '../models/BookMarketIdRecentTradesGet200ResponseResult';
import { BookMarketIdRecentTradesGet200ResponseResultTradesInner } from '../models/BookMarketIdRecentTradesGet200ResponseResultTradesInner';
import { BookMarketIdSnapshotGet200Response } from '../models/BookMarketIdSnapshotGet200Response';
import { BookMarketIdSnapshotGet200ResponseResult } from '../models/BookMarketIdSnapshotGet200ResponseResult';
import { BookMarketIdSnapshotGet200ResponseResultAnyOf } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOf';
import { BookMarketIdSnapshotGet200ResponseResultAnyOf1 } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOf1';
import { BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner';
import { BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner';
import { BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState } from '../models/BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState';
import { BookMarketIdSnapshotGet500Response } from '../models/BookMarketIdSnapshotGet500Response';
import { ParsedBookMarketSymbolRecentTradesGet200Response } from '../models/ParsedBookMarketSymbolRecentTradesGet200Response';
import { ParsedBookMarketSymbolRecentTradesGet200ResponseResult } from '../models/ParsedBookMarketSymbolRecentTradesGet200ResponseResult';
import { ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner } from '../models/ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner';
import { ParsedBookMarketSymbolSnapshotGet200Response } from '../models/ParsedBookMarketSymbolSnapshotGet200Response';
import { ParsedBookMarketSymbolSnapshotGet200ResponseResult } from '../models/ParsedBookMarketSymbolSnapshotGet200ResponseResult';
import { ParsedTickersGet200Response } from '../models/ParsedTickersGet200Response';
import { ParsedTickersGet200ResponseResultInner } from '../models/ParsedTickersGet200ResponseResultInner';
import { TickersSnapshotGet200Response } from '../models/TickersSnapshotGet200Response';
import { TickersSnapshotGet200ResponseResult } from '../models/TickersSnapshotGet200ResponseResult';
import { TickersSnapshotGet200ResponseResultSummariesInner } from '../models/TickersSnapshotGet200ResponseResultSummariesInner';
import { TickersSnapshotGet200ResponseResultTopsInner } from '../models/TickersSnapshotGet200ResponseResultTopsInner';
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
     * @param marketId 
     */
    public bookMarketIdRecentTradesGetWithHttpInfo(marketId: string, _options?: Configuration): Promise<HttpInfo<BookMarketIdRecentTradesGet200Response>> {
        const result = this.api.bookMarketIdRecentTradesGetWithHttpInfo(marketId, _options);
        return result.toPromise();
    }

    /**
     * @param marketId 
     */
    public bookMarketIdRecentTradesGet(marketId: string, _options?: Configuration): Promise<BookMarketIdRecentTradesGet200Response> {
        const result = this.api.bookMarketIdRecentTradesGet(marketId, _options);
        return result.toPromise();
    }

    /**
     * @param marketId 
     * @param mbp 
     * @param mbo 
     * @param levels 
     */
    public bookMarketIdSnapshotGetWithHttpInfo(marketId: string, mbp?: boolean, mbo?: boolean, levels?: number, _options?: Configuration): Promise<HttpInfo<BookMarketIdSnapshotGet200Response>> {
        const result = this.api.bookMarketIdSnapshotGetWithHttpInfo(marketId, mbp, mbo, levels, _options);
        return result.toPromise();
    }

    /**
     * @param marketId 
     * @param mbp 
     * @param mbo 
     * @param levels 
     */
    public bookMarketIdSnapshotGet(marketId: string, mbp?: boolean, mbo?: boolean, levels?: number, _options?: Configuration): Promise<BookMarketIdSnapshotGet200Response> {
        const result = this.api.bookMarketIdSnapshotGet(marketId, mbp, mbo, levels, _options);
        return result.toPromise();
    }

    /**
     * @param marketSymbol 
     */
    public parsedBookMarketSymbolRecentTradesGetWithHttpInfo(marketSymbol: string, _options?: Configuration): Promise<HttpInfo<ParsedBookMarketSymbolRecentTradesGet200Response>> {
        const result = this.api.parsedBookMarketSymbolRecentTradesGetWithHttpInfo(marketSymbol, _options);
        return result.toPromise();
    }

    /**
     * @param marketSymbol 
     */
    public parsedBookMarketSymbolRecentTradesGet(marketSymbol: string, _options?: Configuration): Promise<ParsedBookMarketSymbolRecentTradesGet200Response> {
        const result = this.api.parsedBookMarketSymbolRecentTradesGet(marketSymbol, _options);
        return result.toPromise();
    }

    /**
     * @param marketSymbol 
     * @param depth 
     */
    public parsedBookMarketSymbolSnapshotGetWithHttpInfo(marketSymbol: string, depth?: number, _options?: Configuration): Promise<HttpInfo<ParsedBookMarketSymbolSnapshotGet200Response>> {
        const result = this.api.parsedBookMarketSymbolSnapshotGetWithHttpInfo(marketSymbol, depth, _options);
        return result.toPromise();
    }

    /**
     * @param marketSymbol 
     * @param depth 
     */
    public parsedBookMarketSymbolSnapshotGet(marketSymbol: string, depth?: number, _options?: Configuration): Promise<ParsedBookMarketSymbolSnapshotGet200Response> {
        const result = this.api.parsedBookMarketSymbolSnapshotGet(marketSymbol, depth, _options);
        return result.toPromise();
    }

    /**
     */
    public parsedTickersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ParsedTickersGet200Response>> {
        const result = this.api.parsedTickersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public parsedTickersGet(_options?: Configuration): Promise<ParsedTickersGet200Response> {
        const result = this.api.parsedTickersGet(_options);
        return result.toPromise();
    }

    /**
     */
    public tickersSnapshotGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TickersSnapshotGet200Response>> {
        const result = this.api.tickersSnapshotGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public tickersSnapshotGet(_options?: Configuration): Promise<TickersSnapshotGet200Response> {
        const result = this.api.tickersSnapshotGet(_options);
        return result.toPromise();
    }


}



