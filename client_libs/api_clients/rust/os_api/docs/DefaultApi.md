# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_delete**](DefaultApi.md#order_delete) | **DELETE** /order | 
[**order_patch**](DefaultApi.md#order_patch) | **PATCH** /order | 
[**order_post**](DefaultApi.md#order_post) | **POST** /order | 
[**orders_delete**](DefaultApi.md#orders_delete) | **DELETE** /orders | 
[**orders_get**](DefaultApi.md#orders_get) | **GET** /orders | 
[**positions_get**](DefaultApi.md#positions_get) | **GET** /positions | 



## order_delete

> models::OrderDelete200Response order_delete(order_delete_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_delete_request** | [**OrderDeleteRequest**](OrderDeleteRequest.md) | Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the `client_order_id`. | [required] |

### Return type

[**models::OrderDelete200Response**](_order_delete_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## order_patch

> models::OrderPatch200Response order_patch(order_patch_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_patch_request** | [**OrderPatchRequest**](OrderPatchRequest.md) | Modify a resting order. - If the `newPrice` and the current resting order's price is the same, and `newQuantity` is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from `newQuantity` to calculate the new resting quantity. For example:  ```text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 ```  The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.  Regardless of IFM, the invariant for order quantity is that `quantity = remaining_quantity + cumulative_quantity`. | [required] |

### Return type

[**models::OrderPatch200Response**](_order_patch_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## order_post

> models::OrderPost200Response order_post(order_post_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**order_post_request** | [**OrderPostRequest**](OrderPostRequest.md) | Place a new order. | [required] |

### Return type

[**models::OrderPost200Response**](_order_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## orders_delete

> models::OrdersDelete200Response orders_delete(orders_delete_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**orders_delete_request** | [**OrdersDeleteRequest**](OrdersDeleteRequest.md) | Cancel all resting orders, optionally limiting to a particular market and / or order book side. | [required] |

### Return type

[**models::OrdersDelete200Response**](_orders_delete_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## orders_get

> models::OrdersGet200Response orders_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i32** |  | [required] |

### Return type

[**models::OrdersGet200Response**](_orders_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## positions_get

> models::PositionsGet200Response positions_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i32** |  | [required] |

### Return type

[**models::PositionsGet200Response**](_positions_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

