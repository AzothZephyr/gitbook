# \DefaultAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HistoryKlinesGet**](DefaultAPI.md#HistoryKlinesGet) | **Get** /history/klines | Aggregated historical price data (klines)
[**MarketsGet**](DefaultAPI.md#MarketsGet) | **Get** /markets | Fetch all asset, market, and source definitions
[**UsersAddressGet**](DefaultAPI.md#UsersAddressGet) | **Get** /users/address | 
[**UsersAddressSettingsGet**](DefaultAPI.md#UsersAddressSettingsGet) | **Get** /users/address/settings | 
[**UsersCheckGet**](DefaultAPI.md#UsersCheckGet) | **Get** /users/check | 
[**UsersFeeEstimateMarketIdGet**](DefaultAPI.md#UsersFeeEstimateMarketIdGet) | **Get** /users/fee-estimate/{market-id} | 
[**UsersInfoGet**](DefaultAPI.md#UsersInfoGet) | **Get** /users/info | 
[**UsersSubaccountSubaccountIdFillsGet**](DefaultAPI.md#UsersSubaccountSubaccountIdFillsGet) | **Get** /users/subaccount/{subaccount_id}/fills | 
[**UsersSubaccountSubaccountIdGet**](DefaultAPI.md#UsersSubaccountSubaccountIdGet) | **Get** /users/subaccount/{subaccount_id} | 
[**UsersSubaccountSubaccountIdOrdersGet**](DefaultAPI.md#UsersSubaccountSubaccountIdOrdersGet) | **Get** /users/subaccount/{subaccount_id}/orders | 
[**UsersSubaccountSubaccountIdPatch**](DefaultAPI.md#UsersSubaccountSubaccountIdPatch) | **Patch** /users/subaccount/{subaccount_id} | 
[**UsersSubaccountSubaccountIdPositionsGet**](DefaultAPI.md#UsersSubaccountSubaccountIdPositionsGet) | **Get** /users/subaccount/{subaccount_id}/positions | 
[**UsersSubaccountSubaccountIdTransfersGet**](DefaultAPI.md#UsersSubaccountSubaccountIdTransfersGet) | **Get** /users/subaccount/{subaccount_id}/transfers | 
[**UsersSubaccountSubaccountIdWithdrawalsGet**](DefaultAPI.md#UsersSubaccountSubaccountIdWithdrawalsGet) | **Get** /users/subaccount/{subaccount_id}/withdrawals | 
[**UsersSubaccountsGet**](DefaultAPI.md#UsersSubaccountsGet) | **Get** /users/subaccounts | 
[**UsersSubaccountsPost**](DefaultAPI.md#UsersSubaccountsPost) | **Post** /users/subaccounts | 
[**UsersWithdrawPost**](DefaultAPI.md#UsersWithdrawPost) | **Post** /users/withdraw | 



## HistoryKlinesGet

> HistoryKlinesGet200Response HistoryKlinesGet(ctx).MarketId(marketId).Interval(interval).StartTime(startTime).EndTime(endTime).Limit(limit).Execute()

Aggregated historical price data (klines)



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
	marketId := int32(56) // int32 | 
	interval := "interval_example" // string | 
	startTime := int64(789) // int64 |  (optional)
	endTime := int64(789) // int64 |  (optional)
	limit := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.HistoryKlinesGet(context.Background()).MarketId(marketId).Interval(interval).StartTime(startTime).EndTime(endTime).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.HistoryKlinesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `HistoryKlinesGet`: HistoryKlinesGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.HistoryKlinesGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiHistoryKlinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | **int32** |  | 
 **interval** | **string** |  | 
 **startTime** | **int64** |  | 
 **endTime** | **int64** |  | 
 **limit** | **int32** |  | 

### Return type

[**HistoryKlinesGet200Response**](HistoryKlinesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MarketsGet

> MarketsGet200Response MarketsGet(ctx).Execute()

Fetch all asset, market, and source definitions

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.MarketsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.MarketsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `MarketsGet`: MarketsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.MarketsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiMarketsGetRequest struct via the builder pattern


### Return type

[**MarketsGet200Response**](MarketsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersAddressGet

> UsersAddressGet200Response UsersAddressGet(ctx).SourceIds(sourceIds).Names(names).Execute()



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
	sourceIds := "sourceIds_example" // string |  (optional)
	names := "names_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersAddressGet(context.Background()).SourceIds(sourceIds).Names(names).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersAddressGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersAddressGet`: UsersAddressGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersAddressGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUsersAddressGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceIds** | **string** |  | 
 **names** | **string** |  | 

### Return type

[**UsersAddressGet200Response**](UsersAddressGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersAddressSettingsGet

> UsersAddressSettingsGet200Response UsersAddressSettingsGet(ctx).Execute()



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersAddressSettingsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersAddressSettingsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersAddressSettingsGet`: UsersAddressSettingsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersAddressSettingsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiUsersAddressSettingsGetRequest struct via the builder pattern


### Return type

[**UsersAddressSettingsGet200Response**](UsersAddressSettingsGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersCheckGet

> UsersCheckGet200Response UsersCheckGet(ctx).Execute()



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersCheckGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersCheckGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersCheckGet`: UsersCheckGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersCheckGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiUsersCheckGetRequest struct via the builder pattern


### Return type

[**UsersCheckGet200Response**](UsersCheckGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersFeeEstimateMarketIdGet

> UsersFeeEstimateMarketIdGet200Response UsersFeeEstimateMarketIdGet(ctx, marketId).Execute()



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
	marketId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersFeeEstimateMarketIdGet(context.Background(), marketId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersFeeEstimateMarketIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersFeeEstimateMarketIdGet`: UsersFeeEstimateMarketIdGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersFeeEstimateMarketIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersFeeEstimateMarketIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UsersFeeEstimateMarketIdGet200Response**](UsersFeeEstimateMarketIdGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersInfoGet

> UsersInfoGet200Response UsersInfoGet(ctx).Execute()



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersInfoGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersInfoGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersInfoGet`: UsersInfoGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersInfoGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiUsersInfoGetRequest struct via the builder pattern


### Return type

[**UsersInfoGet200Response**](UsersInfoGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdFillsGet

> UsersSubaccountSubaccountIdFillsGet200Response UsersSubaccountSubaccountIdFillsGet(ctx, subaccountId).StartTime(startTime).EndTime(endTime).MarketIds(marketIds).OrderIds(orderIds).Execute()



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
	subaccountId := int64(789) // int64 | 
	startTime := int64(789) // int64 |  (optional)
	endTime := int64(789) // int64 |  (optional)
	marketIds := "marketIds_example" // string |  (optional)
	orderIds := "orderIds_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdFillsGet(context.Background(), subaccountId).StartTime(startTime).EndTime(endTime).MarketIds(marketIds).OrderIds(orderIds).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdFillsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdFillsGet`: UsersSubaccountSubaccountIdFillsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdFillsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdFillsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startTime** | **int64** |  | 
 **endTime** | **int64** |  | 
 **marketIds** | **string** |  | 
 **orderIds** | **string** |  | 

### Return type

[**UsersSubaccountSubaccountIdFillsGet200Response**](UsersSubaccountSubaccountIdFillsGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdGet

> UsersSubaccountSubaccountIdGet200Response UsersSubaccountSubaccountIdGet(ctx, subaccountId).Execute()



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
	subaccountId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdGet(context.Background(), subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdGet`: UsersSubaccountSubaccountIdGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UsersSubaccountSubaccountIdGet200Response**](UsersSubaccountSubaccountIdGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdOrdersGet

> UsersSubaccountSubaccountIdOrdersGet200Response UsersSubaccountSubaccountIdOrdersGet(ctx, subaccountId).CreatedBefore(createdBefore).Limit(limit).Execute()



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
	subaccountId := int64(789) // int64 | 
	createdBefore := int64(789) // int64 | Returns the most recent orders where `created_at < created_before`. If null, returns the most recent orders. (optional)
	limit := int32(56) // int32 | The maximum number of orders to return. If null, defaults to 100. The maximum is 1000. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdOrdersGet(context.Background(), subaccountId).CreatedBefore(createdBefore).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdOrdersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdOrdersGet`: UsersSubaccountSubaccountIdOrdersGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdOrdersGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdOrdersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createdBefore** | **int64** | Returns the most recent orders where &#x60;created_at &lt; created_before&#x60;. If null, returns the most recent orders. | 
 **limit** | **int32** | The maximum number of orders to return. If null, defaults to 100. The maximum is 1000. | 

### Return type

[**UsersSubaccountSubaccountIdOrdersGet200Response**](UsersSubaccountSubaccountIdOrdersGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdPatch

> UsersSubaccountsPost200Response UsersSubaccountSubaccountIdPatch(ctx, subaccountId).UsersSubaccountSubaccountIdPatchRequest(usersSubaccountSubaccountIdPatchRequest).Execute()



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
	subaccountId := int64(789) // int64 | 
	usersSubaccountSubaccountIdPatchRequest := *openapiclient.NewUsersSubaccountSubaccountIdPatchRequest("Name_example") // UsersSubaccountSubaccountIdPatchRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdPatch(context.Background(), subaccountId).UsersSubaccountSubaccountIdPatchRequest(usersSubaccountSubaccountIdPatchRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdPatch`: UsersSubaccountsPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **usersSubaccountSubaccountIdPatchRequest** | [**UsersSubaccountSubaccountIdPatchRequest**](UsersSubaccountSubaccountIdPatchRequest.md) |  | 

### Return type

[**UsersSubaccountsPost200Response**](UsersSubaccountsPost200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdPositionsGet

> UsersSubaccountSubaccountIdPositionsGet200Response UsersSubaccountSubaccountIdPositionsGet(ctx, subaccountId).Execute()



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
	subaccountId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdPositionsGet(context.Background(), subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdPositionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdPositionsGet`: UsersSubaccountSubaccountIdPositionsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdPositionsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdPositionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UsersSubaccountSubaccountIdPositionsGet200Response**](UsersSubaccountSubaccountIdPositionsGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdTransfersGet

> UsersSubaccountSubaccountIdTransfersGet200Response UsersSubaccountSubaccountIdTransfersGet(ctx, subaccountId).Execute()



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
	subaccountId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdTransfersGet(context.Background(), subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdTransfersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdTransfersGet`: UsersSubaccountSubaccountIdTransfersGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdTransfersGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdTransfersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UsersSubaccountSubaccountIdTransfersGet200Response**](UsersSubaccountSubaccountIdTransfersGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountSubaccountIdWithdrawalsGet

> UsersSubaccountSubaccountIdWithdrawalsGet200Response UsersSubaccountSubaccountIdWithdrawalsGet(ctx, subaccountId).Execute()



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
	subaccountId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountSubaccountIdWithdrawalsGet(context.Background(), subaccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountSubaccountIdWithdrawalsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountSubaccountIdWithdrawalsGet`: UsersSubaccountSubaccountIdWithdrawalsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountSubaccountIdWithdrawalsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subaccountId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountSubaccountIdWithdrawalsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UsersSubaccountSubaccountIdWithdrawalsGet200Response**](UsersSubaccountSubaccountIdWithdrawalsGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountsGet

> UsersSubaccountsGet200Response UsersSubaccountsGet(ctx).Execute()



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountsGet`: UsersSubaccountsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountsGetRequest struct via the builder pattern


### Return type

[**UsersSubaccountsGet200Response**](UsersSubaccountsGet200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersSubaccountsPost

> UsersSubaccountsPost200Response UsersSubaccountsPost(ctx).UsersSubaccountsPostRequest(usersSubaccountsPostRequest).Execute()



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
	usersSubaccountsPostRequest := *openapiclient.NewUsersSubaccountsPostRequest("Name_example", "AccountType_example") // UsersSubaccountsPostRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersSubaccountsPost(context.Background()).UsersSubaccountsPostRequest(usersSubaccountsPostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersSubaccountsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersSubaccountsPost`: UsersSubaccountsPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersSubaccountsPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUsersSubaccountsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersSubaccountsPostRequest** | [**UsersSubaccountsPostRequest**](UsersSubaccountsPostRequest.md) |  | 

### Return type

[**UsersSubaccountsPost200Response**](UsersSubaccountsPost200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UsersWithdrawPost

> UsersWithdrawPost200Response UsersWithdrawPost(ctx).UsersWithdrawPostRequest(usersWithdrawPostRequest).Execute()



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
	usersWithdrawPostRequest := *openapiclient.NewUsersWithdrawPostRequest(int32(123), int32(123), int32(123), "Destination_example") // UsersWithdrawPostRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UsersWithdrawPost(context.Background()).UsersWithdrawPostRequest(usersWithdrawPostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UsersWithdrawPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UsersWithdrawPost`: UsersWithdrawPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UsersWithdrawPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUsersWithdrawPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersWithdrawPostRequest** | [**UsersWithdrawPostRequest**](UsersWithdrawPostRequest.md) |  | 

### Return type

[**UsersWithdrawPost200Response**](UsersWithdrawPost200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

