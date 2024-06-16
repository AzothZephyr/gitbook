# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookMarketIdRecentTradesGet**](DefaultApi.md#bookMarketIdRecentTradesGet) | **GET** /book/{market_id}/recent-trades | 
[**bookMarketIdSnapshotGet**](DefaultApi.md#bookMarketIdSnapshotGet) | **GET** /book/{market_id}/snapshot | 
[**parsedBookMarketSymbolRecentTradesGet**](DefaultApi.md#parsedBookMarketSymbolRecentTradesGet) | **GET** /parsed/book/{market_symbol}/recent-trades | 
[**parsedBookMarketSymbolSnapshotGet**](DefaultApi.md#parsedBookMarketSymbolSnapshotGet) | **GET** /parsed/book/{market_symbol}/snapshot | 
[**parsedTickersGet**](DefaultApi.md#parsedTickersGet) | **GET** /parsed/tickers | 
[**tickersSnapshotGet**](DefaultApi.md#tickersSnapshotGet) | **GET** /tickers/snapshot | 


# **bookMarketIdRecentTradesGet**
> BookMarketIdRecentTradesGet200Response bookMarketIdRecentTradesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiBookMarketIdRecentTradesGetRequest = {
  // string
  marketId: "market_id_example",
};

apiInstance.bookMarketIdRecentTradesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined


### Return type

**BookMarketIdRecentTradesGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bookMarketIdSnapshotGet**
> BookMarketIdSnapshotGet200Response bookMarketIdSnapshotGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiBookMarketIdSnapshotGetRequest = {
  // string
  marketId: "market_id_example",
  // boolean (optional)
  mbp: false,
  // boolean (optional)
  mbo: false,
  // number (optional)
  levels: 0,
};

apiInstance.bookMarketIdSnapshotGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**string**] |  | defaults to undefined
 **mbp** | [**boolean**] |  | (optional) defaults to false
 **mbo** | [**boolean**] |  | (optional) defaults to false
 **levels** | [**number**] |  | (optional) defaults to undefined


### Return type

**BookMarketIdSnapshotGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **parsedBookMarketSymbolRecentTradesGet**
> ParsedBookMarketSymbolRecentTradesGet200Response parsedBookMarketSymbolRecentTradesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiParsedBookMarketSymbolRecentTradesGetRequest = {
  // string
  marketSymbol: "market_symbol_example",
};

apiInstance.parsedBookMarketSymbolRecentTradesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketSymbol** | [**string**] |  | defaults to undefined


### Return type

**ParsedBookMarketSymbolRecentTradesGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **parsedBookMarketSymbolSnapshotGet**
> ParsedBookMarketSymbolSnapshotGet200Response parsedBookMarketSymbolSnapshotGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiParsedBookMarketSymbolSnapshotGetRequest = {
  // string
  marketSymbol: "market_symbol_example",
  // number (optional)
  depth: 0,
};

apiInstance.parsedBookMarketSymbolSnapshotGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketSymbol** | [**string**] |  | defaults to undefined
 **depth** | [**number**] |  | (optional) defaults to undefined


### Return type

**ParsedBookMarketSymbolSnapshotGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **parsedTickersGet**
> ParsedTickersGet200Response parsedTickersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.parsedTickersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ParsedTickersGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tickersSnapshotGet**
> TickersSnapshotGet200Response tickersSnapshotGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.tickersSnapshotGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TickersSnapshotGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


