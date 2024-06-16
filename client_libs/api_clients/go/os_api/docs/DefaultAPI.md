# \DefaultAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**OrderDelete**](DefaultAPI.md#OrderDelete) | **Delete** /order | 
[**OrderPatch**](DefaultAPI.md#OrderPatch) | **Patch** /order | 
[**OrderPost**](DefaultAPI.md#OrderPost) | **Post** /order | 
[**OrdersDelete**](DefaultAPI.md#OrdersDelete) | **Delete** /orders | 
[**OrdersGet**](DefaultAPI.md#OrdersGet) | **Get** /orders | 
[**PositionsGet**](DefaultAPI.md#PositionsGet) | **Get** /positions | 



## OrderDelete

> OrderDelete200Response OrderDelete(ctx).OrderDeleteRequest(orderDeleteRequest).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	orderDeleteRequest := *openapiclient.NewOrderDeleteRequest(int32(123), int32(123), int32(123), int32(123)) // OrderDeleteRequest | Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the `client_order_id`.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.OrderDelete(context.Background()).OrderDeleteRequest(orderDeleteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.OrderDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderDelete`: OrderDelete200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.OrderDelete`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrderDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderDeleteRequest** | [**OrderDeleteRequest**](OrderDeleteRequest.md) | Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the &#x60;client_order_id&#x60;. | 

### Return type

[**OrderDelete200Response**](OrderDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderPatch

> OrderPatch200Response OrderPatch(ctx).OrderPatchRequest(orderPatchRequest).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	orderPatchRequest := *openapiclient.NewOrderPatchRequest(int32(123), int32(123), int32(123), int32(123), int32(123), int32(123), int32(123)) // OrderPatchRequest | Modify a resting order. - If the `newPrice` and the current resting order's price is the same, and `newQuantity` is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from `newQuantity` to calculate the new resting quantity. For example:  ```text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 ```  The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.  Regardless of IFM, the invariant for order quantity is that `quantity = remaining_quantity + cumulative_quantity`.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.OrderPatch(context.Background()).OrderPatchRequest(orderPatchRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.OrderPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderPatch`: OrderPatch200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.OrderPatch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrderPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPatchRequest** | [**OrderPatchRequest**](OrderPatchRequest.md) | Modify a resting order. - If the &#x60;newPrice&#x60; and the current resting order&#39;s price is the same, and &#x60;newQuantity&#x60; is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from &#x60;newQuantity&#x60; to calculate the new resting quantity. For example:  &#x60;&#x60;&#x60;text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 &#x60;&#x60;&#x60;  The post-modify quantity will be &#x60;newQuantity - filled &#x3D; 4 - 2 &#x3D; 2&#x60;.  Regardless of IFM, the invariant for order quantity is that &#x60;quantity &#x3D; remaining_quantity + cumulative_quantity&#x60;. | 

### Return type

[**OrderPatch200Response**](OrderPatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderPost

> OrderPost200Response OrderPost(ctx).OrderPostRequest(orderPostRequest).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	orderPostRequest := *openapiclient.NewOrderPostRequest(int32(123), int32(123), int32(123), int32(123), int32(123), int32(123), int32(123), int32(123), int32(123), false) // OrderPostRequest | Place a new order.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.OrderPost(context.Background()).OrderPostRequest(orderPostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.OrderPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderPost`: OrderPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.OrderPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrderPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPostRequest** | [**OrderPostRequest**](OrderPostRequest.md) | Place a new order. | 

### Return type

[**OrderPost200Response**](OrderPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrdersDelete

> OrdersDelete200Response OrdersDelete(ctx).OrdersDeleteRequest(ordersDeleteRequest).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	ordersDeleteRequest := *openapiclient.NewOrdersDeleteRequest(int32(123), int32(123)) // OrdersDeleteRequest | Cancel all resting orders, optionally limiting to a particular market and / or order book side.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.OrdersDelete(context.Background()).OrdersDeleteRequest(ordersDeleteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.OrdersDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrdersDelete`: OrdersDelete200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.OrdersDelete`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrdersDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersDeleteRequest** | [**OrdersDeleteRequest**](OrdersDeleteRequest.md) | Cancel all resting orders, optionally limiting to a particular market and / or order book side. | 

### Return type

[**OrdersDelete200Response**](OrdersDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrdersGet

> OrdersGet200Response OrdersGet(ctx).SubaccountId(subaccountId).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	subaccountId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.OrdersGet(context.Background()).SubaccountId(subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.OrdersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrdersGet`: OrdersGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.OrdersGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiOrdersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | **int32** |  | 

### Return type

[**OrdersGet200Response**](OrdersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PositionsGet

> PositionsGet200Response PositionsGet(ctx).SubaccountId(subaccountId).Execute()



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	subaccountId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.PositionsGet(context.Background()).SubaccountId(subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.PositionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PositionsGet`: PositionsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.PositionsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPositionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subaccountId** | **int32** |  | 

### Return type

[**PositionsGet200Response**](PositionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

