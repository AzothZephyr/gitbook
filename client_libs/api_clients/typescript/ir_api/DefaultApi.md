# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**historyKlinesGet**](DefaultApi.md#historyKlinesGet) | **GET** /history/klines | Aggregated historical price data (klines)
[**marketsGet**](DefaultApi.md#marketsGet) | **GET** /markets | Fetch all asset, market, and source definitions
[**usersAddressGet**](DefaultApi.md#usersAddressGet) | **GET** /users/address | 
[**usersAddressSettingsGet**](DefaultApi.md#usersAddressSettingsGet) | **GET** /users/address/settings | 
[**usersCheckGet**](DefaultApi.md#usersCheckGet) | **GET** /users/check | 
[**usersFeeEstimateMarketIdGet**](DefaultApi.md#usersFeeEstimateMarketIdGet) | **GET** /users/fee-estimate/{market-id} | 
[**usersInfoGet**](DefaultApi.md#usersInfoGet) | **GET** /users/info | 
[**usersSubaccountSubaccountIdFillsGet**](DefaultApi.md#usersSubaccountSubaccountIdFillsGet) | **GET** /users/subaccount/{subaccount_id}/fills | 
[**usersSubaccountSubaccountIdGet**](DefaultApi.md#usersSubaccountSubaccountIdGet) | **GET** /users/subaccount/{subaccount_id} | 
[**usersSubaccountSubaccountIdOrdersGet**](DefaultApi.md#usersSubaccountSubaccountIdOrdersGet) | **GET** /users/subaccount/{subaccount_id}/orders | 
[**usersSubaccountSubaccountIdPatch**](DefaultApi.md#usersSubaccountSubaccountIdPatch) | **PATCH** /users/subaccount/{subaccount_id} | 
[**usersSubaccountSubaccountIdPositionsGet**](DefaultApi.md#usersSubaccountSubaccountIdPositionsGet) | **GET** /users/subaccount/{subaccount_id}/positions | 
[**usersSubaccountSubaccountIdTransfersGet**](DefaultApi.md#usersSubaccountSubaccountIdTransfersGet) | **GET** /users/subaccount/{subaccount_id}/transfers | 
[**usersSubaccountSubaccountIdWithdrawalsGet**](DefaultApi.md#usersSubaccountSubaccountIdWithdrawalsGet) | **GET** /users/subaccount/{subaccount_id}/withdrawals | 
[**usersSubaccountsGet**](DefaultApi.md#usersSubaccountsGet) | **GET** /users/subaccounts | 
[**usersSubaccountsPost**](DefaultApi.md#usersSubaccountsPost) | **POST** /users/subaccounts | 
[**usersWithdrawPost**](DefaultApi.md#usersWithdrawPost) | **POST** /users/withdraw | 


# **historyKlinesGet**
> HistoryKlinesGet200Response historyKlinesGet()

Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiHistoryKlinesGetRequest = {
  // number
  marketId: 1,
  // '1s' | '1m' | '15m' | '1h' | '4h' | '1d'
  interval: "1s",
  // number (optional)
  startTime: 1,
  // number (optional)
  endTime: 1,
  // number (optional)
  limit: 0,
};

apiInstance.historyKlinesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**number**] |  | defaults to undefined
 **interval** | [**&#39;1s&#39; | &#39;1m&#39; | &#39;15m&#39; | &#39;1h&#39; | &#39;4h&#39; | &#39;1d&#39;**]**Array<&#39;1s&#39; &#124; &#39;1m&#39; &#124; &#39;15m&#39; &#124; &#39;1h&#39; &#124; &#39;4h&#39; &#124; &#39;1d&#39;>** |  | defaults to undefined
 **startTime** | [**number**] |  | (optional) defaults to undefined
 **endTime** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**HistoryKlinesGet200Response**

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

# **marketsGet**
> MarketsGet200Response marketsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.marketsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MarketsGet200Response**

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

# **usersAddressGet**
> UsersAddressGet200Response usersAddressGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersAddressGetRequest = {
  // string (optional)
  sourceIds: "sourceIds_example",
  // string (optional)
  names: "names_example",
};

apiInstance.usersAddressGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceIds** | [**string**] |  | (optional) defaults to undefined
 **names** | [**string**] |  | (optional) defaults to undefined


### Return type

**UsersAddressGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersAddressSettingsGet**
> UsersAddressSettingsGet200Response usersAddressSettingsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.usersAddressSettingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UsersAddressSettingsGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersCheckGet**
> UsersCheckGet200Response usersCheckGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.usersCheckGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UsersCheckGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersFeeEstimateMarketIdGet**
> UsersFeeEstimateMarketIdGet200Response usersFeeEstimateMarketIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersFeeEstimateMarketIdGetRequest = {
  // number
  marketId: 1,
};

apiInstance.usersFeeEstimateMarketIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | [**number**] |  | defaults to undefined


### Return type

**UsersFeeEstimateMarketIdGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersInfoGet**
> UsersInfoGet200Response usersInfoGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.usersInfoGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UsersInfoGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdFillsGet**
> UsersSubaccountSubaccountIdFillsGet200Response usersSubaccountSubaccountIdFillsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdFillsGetRequest = {
  // number
  subaccountId: 1,
  // number (optional)
  startTime: 1,
  // number (optional)
  endTime: 1,
  // string (optional)
  marketIds: "marketIds_example",
  // string (optional)
  orderIds: "orderIds_example",
};

apiInstance.usersSubaccountSubaccountIdFillsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined
 **startTime** | [**number**] |  | (optional) defaults to undefined
 **endTime** | [**number**] |  | (optional) defaults to undefined
 **marketIds** | [**string**] |  | (optional) defaults to undefined
 **orderIds** | [**string**] |  | (optional) defaults to undefined


### Return type

**UsersSubaccountSubaccountIdFillsGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdGet**
> UsersSubaccountSubaccountIdGet200Response usersSubaccountSubaccountIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdGetRequest = {
  // number
  subaccountId: 1,
};

apiInstance.usersSubaccountSubaccountIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**UsersSubaccountSubaccountIdGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdOrdersGet**
> UsersSubaccountSubaccountIdOrdersGet200Response usersSubaccountSubaccountIdOrdersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdOrdersGetRequest = {
  // number
  subaccountId: 1,
  // number | Returns the most recent orders where `created_at < created_before`. If null, returns the most recent orders. (optional)
  createdBefore: 1,
  // number | The maximum number of orders to return. If null, defaults to 100. The maximum is 1000. (optional)
  limit: 1,
};

apiInstance.usersSubaccountSubaccountIdOrdersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined
 **createdBefore** | [**number**] | Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders. | (optional) defaults to undefined
 **limit** | [**number**] | The maximum number of orders to return. If null, defaults to 100. The maximum is 1000. | (optional) defaults to undefined


### Return type

**UsersSubaccountSubaccountIdOrdersGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdPatch**
> UsersSubaccountsPost200Response usersSubaccountSubaccountIdPatch(usersSubaccountSubaccountIdPatchRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdPatchRequest = {
  // number
  subaccountId: 1,
  // UsersSubaccountSubaccountIdPatchRequest
  usersSubaccountSubaccountIdPatchRequest: {
    name: "name_example",
  },
};

apiInstance.usersSubaccountSubaccountIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersSubaccountSubaccountIdPatchRequest** | **UsersSubaccountSubaccountIdPatchRequest**|  |
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**UsersSubaccountsPost200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdPositionsGet**
> UsersSubaccountSubaccountIdPositionsGet200Response usersSubaccountSubaccountIdPositionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdPositionsGetRequest = {
  // number
  subaccountId: 1,
};

apiInstance.usersSubaccountSubaccountIdPositionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**UsersSubaccountSubaccountIdPositionsGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdTransfersGet**
> UsersSubaccountSubaccountIdTransfersGet200Response usersSubaccountSubaccountIdTransfersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdTransfersGetRequest = {
  // number
  subaccountId: 1,
};

apiInstance.usersSubaccountSubaccountIdTransfersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**UsersSubaccountSubaccountIdTransfersGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountSubaccountIdWithdrawalsGet**
> UsersSubaccountSubaccountIdWithdrawalsGet200Response usersSubaccountSubaccountIdWithdrawalsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountSubaccountIdWithdrawalsGetRequest = {
  // number
  subaccountId: 1,
};

apiInstance.usersSubaccountSubaccountIdWithdrawalsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**UsersSubaccountSubaccountIdWithdrawalsGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountsGet**
> UsersSubaccountsGet200Response usersSubaccountsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.usersSubaccountsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UsersSubaccountsGet200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersSubaccountsPost**
> UsersSubaccountsPost200Response usersSubaccountsPost(usersSubaccountsPostRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersSubaccountsPostRequest = {
  // UsersSubaccountsPostRequest
  usersSubaccountsPostRequest: {
    name: "name_example",
    accountType: "spot",
  },
};

apiInstance.usersSubaccountsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersSubaccountsPostRequest** | **UsersSubaccountsPostRequest**|  |


### Return type

**UsersSubaccountsPost200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersWithdrawPost**
> UsersWithdrawPost200Response usersWithdrawPost(usersWithdrawPostRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersWithdrawPostRequest = {
  // UsersWithdrawPostRequest
  usersWithdrawPostRequest: {
    subaccountId: 0,
    assetId: 0,
    amount: 0,
    destination: "destination_example",
  },
};

apiInstance.usersWithdrawPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersWithdrawPostRequest** | **UsersWithdrawPostRequest**|  |


### Return type

**UsersWithdrawPost200Response**

### Authorization

[ApiKey](README.md#ApiKey), [ApiSignature](README.md#ApiSignature), [ApiTimestamp](README.md#ApiTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


