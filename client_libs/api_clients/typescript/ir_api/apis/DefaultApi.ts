// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HistoryKlinesGet200Response } from '../models/HistoryKlinesGet200Response';
import { MarketsGet200Response } from '../models/MarketsGet200Response';
import { UsersAddressGet200Response } from '../models/UsersAddressGet200Response';
import { UsersAddressSettingsGet200Response } from '../models/UsersAddressSettingsGet200Response';
import { UsersCheckGet200Response } from '../models/UsersCheckGet200Response';
import { UsersCheckGet500Response } from '../models/UsersCheckGet500Response';
import { UsersFeeEstimateMarketIdGet200Response } from '../models/UsersFeeEstimateMarketIdGet200Response';
import { UsersInfoGet200Response } from '../models/UsersInfoGet200Response';
import { UsersSubaccountSubaccountIdFillsGet200Response } from '../models/UsersSubaccountSubaccountIdFillsGet200Response';
import { UsersSubaccountSubaccountIdGet200Response } from '../models/UsersSubaccountSubaccountIdGet200Response';
import { UsersSubaccountSubaccountIdOrdersGet200Response } from '../models/UsersSubaccountSubaccountIdOrdersGet200Response';
import { UsersSubaccountSubaccountIdPatchRequest } from '../models/UsersSubaccountSubaccountIdPatchRequest';
import { UsersSubaccountSubaccountIdPositionsGet200Response } from '../models/UsersSubaccountSubaccountIdPositionsGet200Response';
import { UsersSubaccountSubaccountIdTransfersGet200Response } from '../models/UsersSubaccountSubaccountIdTransfersGet200Response';
import { UsersSubaccountSubaccountIdWithdrawalsGet200Response } from '../models/UsersSubaccountSubaccountIdWithdrawalsGet200Response';
import { UsersSubaccountsGet200Response } from '../models/UsersSubaccountsGet200Response';
import { UsersSubaccountsPost200Response } from '../models/UsersSubaccountsPost200Response';
import { UsersSubaccountsPostRequest } from '../models/UsersSubaccountsPostRequest';
import { UsersWithdrawPost200Response } from '../models/UsersWithdrawPost200Response';
import { UsersWithdrawPostRequest } from '../models/UsersWithdrawPostRequest';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]
     * Aggregated historical price data (klines)
     * @param marketId 
     * @param interval 
     * @param startTime 
     * @param endTime 
     * @param limit 
     */
    public async historyKlinesGet(marketId: number, interval: '1s' | '1m' | '15m' | '1h' | '4h' | '1d', startTime?: number, endTime?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("DefaultApi", "historyKlinesGet", "marketId");
        }


        // verify required parameter 'interval' is not null or undefined
        if (interval === null || interval === undefined) {
            throw new RequiredError("DefaultApi", "historyKlinesGet", "interval");
        }





        // Path Params
        const localVarPath = '/history/klines';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("marketId", ObjectSerializer.serialize(marketId, "number", "int32"));
        }

        // Query Params
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "'1s' | '1m' | '15m' | '1h' | '4h' | '1d'", ""));
        }

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("startTime", ObjectSerializer.serialize(startTime, "number", "int64"));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("endTime", ObjectSerializer.serialize(endTime, "number", "int64"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "uint16"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetch all asset, market, and source definitions
     */
    public async marketsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/markets';

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
     * @param sourceIds 
     * @param names 
     */
    public async usersAddressGet(sourceIds?: string, names?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/users/address';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sourceIds !== undefined) {
            requestContext.setQueryParam("sourceIds", ObjectSerializer.serialize(sourceIds, "string", ""));
        }

        // Query Params
        if (names !== undefined) {
            requestContext.setQueryParam("names", ObjectSerializer.serialize(names, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async usersAddressSettingsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/users/address/settings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async usersCheckGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/users/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marketId 
     */
    public async usersFeeEstimateMarketIdGet(marketId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError("DefaultApi", "usersFeeEstimateMarketIdGet", "marketId");
        }


        // Path Params
        const localVarPath = '/users/fee-estimate/{market-id}'
            .replace('{' + 'market-id' + '}', encodeURIComponent(String(marketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async usersInfoGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/users/info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param subaccountId 
     * @param startTime 
     * @param endTime 
     * @param marketIds 
     * @param orderIds 
     */
    public async usersSubaccountSubaccountIdFillsGet(subaccountId: number, startTime?: number, endTime?: number, marketIds?: string, orderIds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdFillsGet", "subaccountId");
        }






        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}/fills'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("startTime", ObjectSerializer.serialize(startTime, "number", "int64"));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("endTime", ObjectSerializer.serialize(endTime, "number", "int64"));
        }

        // Query Params
        if (marketIds !== undefined) {
            requestContext.setQueryParam("marketIds", ObjectSerializer.serialize(marketIds, "string", ""));
        }

        // Query Params
        if (orderIds !== undefined) {
            requestContext.setQueryParam("orderIds", ObjectSerializer.serialize(orderIds, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
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
    public async usersSubaccountSubaccountIdGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param subaccountId 
     * @param createdBefore Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders.
     * @param limit The maximum number of orders to return. If null, defaults to 100. The maximum is 1000.
     */
    public async usersSubaccountSubaccountIdOrdersGet(subaccountId: number, createdBefore?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdOrdersGet", "subaccountId");
        }




        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}/orders'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer.serialize(createdBefore, "number", "int64"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param subaccountId 
     * @param usersSubaccountSubaccountIdPatchRequest 
     */
    public async usersSubaccountSubaccountIdPatch(subaccountId: number, usersSubaccountSubaccountIdPatchRequest: UsersSubaccountSubaccountIdPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdPatch", "subaccountId");
        }


        // verify required parameter 'usersSubaccountSubaccountIdPatchRequest' is not null or undefined
        if (usersSubaccountSubaccountIdPatchRequest === null || usersSubaccountSubaccountIdPatchRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdPatch", "usersSubaccountSubaccountIdPatchRequest");
        }


        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(usersSubaccountSubaccountIdPatchRequest, "UsersSubaccountSubaccountIdPatchRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
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
    public async usersSubaccountSubaccountIdPositionsGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdPositionsGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}/positions'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
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
    public async usersSubaccountSubaccountIdTransfersGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdTransfersGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}/transfers'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
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
    public async usersSubaccountSubaccountIdWithdrawalsGet(subaccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subaccountId' is not null or undefined
        if (subaccountId === null || subaccountId === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountSubaccountIdWithdrawalsGet", "subaccountId");
        }


        // Path Params
        const localVarPath = '/users/subaccount/{subaccount_id}/withdrawals'
            .replace('{' + 'subaccount_id' + '}', encodeURIComponent(String(subaccountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async usersSubaccountsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/users/subaccounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param usersSubaccountsPostRequest 
     */
    public async usersSubaccountsPost(usersSubaccountsPostRequest: UsersSubaccountsPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usersSubaccountsPostRequest' is not null or undefined
        if (usersSubaccountsPostRequest === null || usersSubaccountsPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersSubaccountsPost", "usersSubaccountsPostRequest");
        }


        // Path Params
        const localVarPath = '/users/subaccounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(usersSubaccountsPostRequest, "UsersSubaccountsPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param usersWithdrawPostRequest 
     */
    public async usersWithdrawPost(usersWithdrawPostRequest: UsersWithdrawPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usersWithdrawPostRequest' is not null or undefined
        if (usersWithdrawPostRequest === null || usersWithdrawPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersWithdrawPost", "usersWithdrawPostRequest");
        }


        // Path Params
        const localVarPath = '/users/withdraw';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(usersWithdrawPostRequest, "UsersWithdrawPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiSignature"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiTimestamp"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
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
     * @params response Response returned by the server for a request to historyKlinesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async historyKlinesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HistoryKlinesGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HistoryKlinesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HistoryKlinesGet200Response", ""
            ) as HistoryKlinesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HistoryKlinesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HistoryKlinesGet200Response", ""
            ) as HistoryKlinesGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to marketsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async marketsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MarketsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MarketsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketsGet200Response", ""
            ) as MarketsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MarketsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketsGet200Response", ""
            ) as MarketsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersAddressGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersAddressGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersAddressGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersAddressGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersAddressGet200Response", ""
            ) as UsersAddressGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersAddressGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersAddressGet200Response", ""
            ) as UsersAddressGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersAddressSettingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersAddressSettingsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersAddressSettingsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersAddressSettingsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersAddressSettingsGet200Response", ""
            ) as UsersAddressSettingsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersAddressSettingsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersAddressSettingsGet200Response", ""
            ) as UsersAddressSettingsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersCheckGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersCheckGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersCheckGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersCheckGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet200Response", ""
            ) as UsersCheckGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersCheckGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet200Response", ""
            ) as UsersCheckGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersFeeEstimateMarketIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersFeeEstimateMarketIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersFeeEstimateMarketIdGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersFeeEstimateMarketIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersFeeEstimateMarketIdGet200Response", ""
            ) as UsersFeeEstimateMarketIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersFeeEstimateMarketIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersFeeEstimateMarketIdGet200Response", ""
            ) as UsersFeeEstimateMarketIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersInfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersInfoGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersInfoGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersInfoGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersInfoGet200Response", ""
            ) as UsersInfoGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersInfoGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersInfoGet200Response", ""
            ) as UsersInfoGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdFillsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdFillsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdFillsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdFillsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdFillsGet200Response", ""
            ) as UsersSubaccountSubaccountIdFillsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdFillsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdFillsGet200Response", ""
            ) as UsersSubaccountSubaccountIdFillsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdGet200Response", ""
            ) as UsersSubaccountSubaccountIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdGet200Response", ""
            ) as UsersSubaccountSubaccountIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdOrdersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdOrdersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdOrdersGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdOrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdOrdersGet200Response", ""
            ) as UsersSubaccountSubaccountIdOrdersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdOrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdOrdersGet200Response", ""
            ) as UsersSubaccountSubaccountIdOrdersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountsPost200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountsPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsPost200Response", ""
            ) as UsersSubaccountsPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountsPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsPost200Response", ""
            ) as UsersSubaccountsPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdPositionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdPositionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdPositionsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdPositionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdPositionsGet200Response", ""
            ) as UsersSubaccountSubaccountIdPositionsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdPositionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdPositionsGet200Response", ""
            ) as UsersSubaccountSubaccountIdPositionsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdTransfersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdTransfersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdTransfersGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdTransfersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdTransfersGet200Response", ""
            ) as UsersSubaccountSubaccountIdTransfersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdTransfersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdTransfersGet200Response", ""
            ) as UsersSubaccountSubaccountIdTransfersGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountSubaccountIdWithdrawalsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountSubaccountIdWithdrawalsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountSubaccountIdWithdrawalsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountSubaccountIdWithdrawalsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdWithdrawalsGet200Response", ""
            ) as UsersSubaccountSubaccountIdWithdrawalsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountSubaccountIdWithdrawalsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountSubaccountIdWithdrawalsGet200Response", ""
            ) as UsersSubaccountSubaccountIdWithdrawalsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountsGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsGet200Response", ""
            ) as UsersSubaccountsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsGet200Response", ""
            ) as UsersSubaccountsGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersSubaccountsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersSubaccountsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersSubaccountsPost200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersSubaccountsPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsPost200Response", ""
            ) as UsersSubaccountsPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersSubaccountsPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersSubaccountsPost200Response", ""
            ) as UsersSubaccountsPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersWithdrawPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersWithdrawPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UsersWithdrawPost200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersWithdrawPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersWithdrawPost200Response", ""
            ) as UsersWithdrawPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: UsersCheckGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersCheckGet500Response", ""
            ) as UsersCheckGet500Response;
            throw new ApiException<UsersCheckGet500Response>(response.httpStatusCode, "An error occurred while processing the request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersWithdrawPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersWithdrawPost200Response", ""
            ) as UsersWithdrawPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
