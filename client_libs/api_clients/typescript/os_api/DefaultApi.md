# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderDelete**](DefaultApi.md#orderDelete) | **DELETE** /order | 
[**orderPatch**](DefaultApi.md#orderPatch) | **PATCH** /order | 
[**orderPost**](DefaultApi.md#orderPost) | **POST** /order | 
[**ordersDelete**](DefaultApi.md#ordersDelete) | **DELETE** /orders | 
[**ordersGet**](DefaultApi.md#ordersGet) | **GET** /orders | 
[**positionsGet**](DefaultApi.md#positionsGet) | **GET** /positions | 


# **orderDelete**
> OrderDelete200Response orderDelete(orderDeleteRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiOrderDeleteRequest = {
  // OrderDeleteRequest | Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the `client_order_id`.
  orderDeleteRequest: {
    marketId: 0,
    clientOrderId: 0,
    requestId: 0,
    subaccountId: 0,
  },
};

apiInstance.orderDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderDeleteRequest** | **OrderDeleteRequest**| Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;. |


### Return type

**OrderDelete200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderPatch**
> OrderPatch200Response orderPatch(orderPatchRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiOrderPatchRequest = {
  // OrderPatchRequest | Modify a resting order. - If the `newPrice` and the current resting order\'s price is the same, and `newQuantity` is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from `newQuantity` to calculate the new resting quantity. For example:  ```text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 ```  The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.  Regardless of IFM, the invariant for order quantity is that `quantity = remaining_quantity + cumulative_quantity`.
  orderPatchRequest: {
    marketId: 0,
    clientOrderId: 0,
    requestId: 0,
    newPrice: 0,
    newQuantity: 0,
    subaccountId: 0,
    selfTradePrevention: 1,
    postOnly: 1,
  },
};

apiInstance.orderPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPatchRequest** | **OrderPatchRequest**| Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order\&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;. |


### Return type

**OrderPatch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderPost**
> OrderPost200Response orderPost(orderPostRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiOrderPostRequest = {
  // OrderPostRequest | Place a new order.
  orderPostRequest: {
    clientOrderId: 0,
    requestId: 0,
    marketId: 0,
    price: 0,
    quantity: 0,
    side: 1,
    timeInForce: 1,
    orderType: 1,
    subaccountId: 0,
    selfTradePrevention: 1,
    postOnly: 1,
    cancelOnDisconnect: true,
  },
};

apiInstance.orderPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPostRequest** | **OrderPostRequest**| Place a new order. |


### Return type

**OrderPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ordersDelete**
> OrdersDelete200Response ordersDelete(ordersDeleteRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiOrdersDeleteRequest = {
  // OrdersDeleteRequest | Cancel all resting orders, optionally limiting to a particular market and / or order book side.
  ordersDeleteRequest: {
    subaccountId: 0,
    requestId: 0,
    marketId: 0,
    side: 1,
  },
};

apiInstance.ordersDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersDeleteRequest** | **OrdersDeleteRequest**| Cancel all resting orders, optionally limiting to a particular market and / or order book side. |


### Return type

**OrdersDelete200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | An error occurred while processing the request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ordersGet**
> OrdersGet200Response ordersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiOrdersGetRequest = {
  // number
  subaccountId: 0,
};

apiInstance.ordersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**OrdersGet200Response**

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

# **positionsGet**
> PositionsGet200Response positionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPositionsGetRequest = {
  // number
  subaccountId: 0,
};

apiInstance.positionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | [**number**] |  | defaults to undefined


### Return type

**PositionsGet200Response**

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


