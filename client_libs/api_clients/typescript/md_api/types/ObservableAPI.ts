import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * @param marketId 
     */
    public bookMarketIdRecentTradesGetWithHttpInfo(marketId: string, _options?: Configuration): Observable<HttpInfo<BookMarketIdRecentTradesGet200Response>> {
        const requestContextPromise = this.requestFactory.bookMarketIdRecentTradesGet(marketId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookMarketIdRecentTradesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId 
     */
    public bookMarketIdRecentTradesGet(marketId: string, _options?: Configuration): Observable<BookMarketIdRecentTradesGet200Response> {
        return this.bookMarketIdRecentTradesGetWithHttpInfo(marketId, _options).pipe(map((apiResponse: HttpInfo<BookMarketIdRecentTradesGet200Response>) => apiResponse.data));
    }

    /**
     * @param marketId 
     * @param mbp 
     * @param mbo 
     * @param levels 
     */
    public bookMarketIdSnapshotGetWithHttpInfo(marketId: string, mbp?: boolean, mbo?: boolean, levels?: number, _options?: Configuration): Observable<HttpInfo<BookMarketIdSnapshotGet200Response>> {
        const requestContextPromise = this.requestFactory.bookMarketIdSnapshotGet(marketId, mbp, mbo, levels, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookMarketIdSnapshotGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketId 
     * @param mbp 
     * @param mbo 
     * @param levels 
     */
    public bookMarketIdSnapshotGet(marketId: string, mbp?: boolean, mbo?: boolean, levels?: number, _options?: Configuration): Observable<BookMarketIdSnapshotGet200Response> {
        return this.bookMarketIdSnapshotGetWithHttpInfo(marketId, mbp, mbo, levels, _options).pipe(map((apiResponse: HttpInfo<BookMarketIdSnapshotGet200Response>) => apiResponse.data));
    }

    /**
     * @param marketSymbol 
     */
    public parsedBookMarketSymbolRecentTradesGetWithHttpInfo(marketSymbol: string, _options?: Configuration): Observable<HttpInfo<ParsedBookMarketSymbolRecentTradesGet200Response>> {
        const requestContextPromise = this.requestFactory.parsedBookMarketSymbolRecentTradesGet(marketSymbol, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parsedBookMarketSymbolRecentTradesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketSymbol 
     */
    public parsedBookMarketSymbolRecentTradesGet(marketSymbol: string, _options?: Configuration): Observable<ParsedBookMarketSymbolRecentTradesGet200Response> {
        return this.parsedBookMarketSymbolRecentTradesGetWithHttpInfo(marketSymbol, _options).pipe(map((apiResponse: HttpInfo<ParsedBookMarketSymbolRecentTradesGet200Response>) => apiResponse.data));
    }

    /**
     * @param marketSymbol 
     * @param depth 
     */
    public parsedBookMarketSymbolSnapshotGetWithHttpInfo(marketSymbol: string, depth?: number, _options?: Configuration): Observable<HttpInfo<ParsedBookMarketSymbolSnapshotGet200Response>> {
        const requestContextPromise = this.requestFactory.parsedBookMarketSymbolSnapshotGet(marketSymbol, depth, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parsedBookMarketSymbolSnapshotGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param marketSymbol 
     * @param depth 
     */
    public parsedBookMarketSymbolSnapshotGet(marketSymbol: string, depth?: number, _options?: Configuration): Observable<ParsedBookMarketSymbolSnapshotGet200Response> {
        return this.parsedBookMarketSymbolSnapshotGetWithHttpInfo(marketSymbol, depth, _options).pipe(map((apiResponse: HttpInfo<ParsedBookMarketSymbolSnapshotGet200Response>) => apiResponse.data));
    }

    /**
     */
    public parsedTickersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ParsedTickersGet200Response>> {
        const requestContextPromise = this.requestFactory.parsedTickersGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parsedTickersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public parsedTickersGet(_options?: Configuration): Observable<ParsedTickersGet200Response> {
        return this.parsedTickersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ParsedTickersGet200Response>) => apiResponse.data));
    }

    /**
     */
    public tickersSnapshotGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TickersSnapshotGet200Response>> {
        const requestContextPromise = this.requestFactory.tickersSnapshotGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tickersSnapshotGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public tickersSnapshotGet(_options?: Configuration): Observable<TickersSnapshotGet200Response> {
        return this.tickersSnapshotGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TickersSnapshotGet200Response>) => apiResponse.data));
    }

}
