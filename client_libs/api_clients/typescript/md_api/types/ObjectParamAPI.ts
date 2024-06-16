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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiBookMarketIdRecentTradesGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApibookMarketIdRecentTradesGet
     */
    marketId: string
}

export interface DefaultApiBookMarketIdSnapshotGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApibookMarketIdSnapshotGet
     */
    marketId: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApibookMarketIdSnapshotGet
     */
    mbp?: boolean
    /**
     * 
     * @type boolean
     * @memberof DefaultApibookMarketIdSnapshotGet
     */
    mbo?: boolean
    /**
     * 
     * @type number
     * @memberof DefaultApibookMarketIdSnapshotGet
     */
    levels?: number
}

export interface DefaultApiParsedBookMarketSymbolRecentTradesGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiparsedBookMarketSymbolRecentTradesGet
     */
    marketSymbol: string
}

export interface DefaultApiParsedBookMarketSymbolSnapshotGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiparsedBookMarketSymbolSnapshotGet
     */
    marketSymbol: string
    /**
     * 
     * @type number
     * @memberof DefaultApiparsedBookMarketSymbolSnapshotGet
     */
    depth?: number
}

export interface DefaultApiParsedTickersGetRequest {
}

export interface DefaultApiTickersSnapshotGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public bookMarketIdRecentTradesGetWithHttpInfo(param: DefaultApiBookMarketIdRecentTradesGetRequest, options?: Configuration): Promise<HttpInfo<BookMarketIdRecentTradesGet200Response>> {
        return this.api.bookMarketIdRecentTradesGetWithHttpInfo(param.marketId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookMarketIdRecentTradesGet(param: DefaultApiBookMarketIdRecentTradesGetRequest, options?: Configuration): Promise<BookMarketIdRecentTradesGet200Response> {
        return this.api.bookMarketIdRecentTradesGet(param.marketId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookMarketIdSnapshotGetWithHttpInfo(param: DefaultApiBookMarketIdSnapshotGetRequest, options?: Configuration): Promise<HttpInfo<BookMarketIdSnapshotGet200Response>> {
        return this.api.bookMarketIdSnapshotGetWithHttpInfo(param.marketId, param.mbp, param.mbo, param.levels,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookMarketIdSnapshotGet(param: DefaultApiBookMarketIdSnapshotGetRequest, options?: Configuration): Promise<BookMarketIdSnapshotGet200Response> {
        return this.api.bookMarketIdSnapshotGet(param.marketId, param.mbp, param.mbo, param.levels,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedBookMarketSymbolRecentTradesGetWithHttpInfo(param: DefaultApiParsedBookMarketSymbolRecentTradesGetRequest, options?: Configuration): Promise<HttpInfo<ParsedBookMarketSymbolRecentTradesGet200Response>> {
        return this.api.parsedBookMarketSymbolRecentTradesGetWithHttpInfo(param.marketSymbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedBookMarketSymbolRecentTradesGet(param: DefaultApiParsedBookMarketSymbolRecentTradesGetRequest, options?: Configuration): Promise<ParsedBookMarketSymbolRecentTradesGet200Response> {
        return this.api.parsedBookMarketSymbolRecentTradesGet(param.marketSymbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedBookMarketSymbolSnapshotGetWithHttpInfo(param: DefaultApiParsedBookMarketSymbolSnapshotGetRequest, options?: Configuration): Promise<HttpInfo<ParsedBookMarketSymbolSnapshotGet200Response>> {
        return this.api.parsedBookMarketSymbolSnapshotGetWithHttpInfo(param.marketSymbol, param.depth,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedBookMarketSymbolSnapshotGet(param: DefaultApiParsedBookMarketSymbolSnapshotGetRequest, options?: Configuration): Promise<ParsedBookMarketSymbolSnapshotGet200Response> {
        return this.api.parsedBookMarketSymbolSnapshotGet(param.marketSymbol, param.depth,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedTickersGetWithHttpInfo(param: DefaultApiParsedTickersGetRequest = {}, options?: Configuration): Promise<HttpInfo<ParsedTickersGet200Response>> {
        return this.api.parsedTickersGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public parsedTickersGet(param: DefaultApiParsedTickersGetRequest = {}, options?: Configuration): Promise<ParsedTickersGet200Response> {
        return this.api.parsedTickersGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public tickersSnapshotGetWithHttpInfo(param: DefaultApiTickersSnapshotGetRequest = {}, options?: Configuration): Promise<HttpInfo<TickersSnapshotGet200Response>> {
        return this.api.tickersSnapshotGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public tickersSnapshotGet(param: DefaultApiTickersSnapshotGetRequest = {}, options?: Configuration): Promise<TickersSnapshotGet200Response> {
        return this.api.tickersSnapshotGet( options).toPromise();
    }

}
