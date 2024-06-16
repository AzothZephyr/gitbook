# \DefaultAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BookMarketIdRecentTradesGet**](DefaultAPI.md#BookMarketIdRecentTradesGet) | **Get** /book/{market_id}/recent-trades | 
[**BookMarketIdSnapshotGet**](DefaultAPI.md#BookMarketIdSnapshotGet) | **Get** /book/{market_id}/snapshot | 
[**ParsedBookMarketSymbolRecentTradesGet**](DefaultAPI.md#ParsedBookMarketSymbolRecentTradesGet) | **Get** /parsed/book/{market_symbol}/recent-trades | 
[**ParsedBookMarketSymbolSnapshotGet**](DefaultAPI.md#ParsedBookMarketSymbolSnapshotGet) | **Get** /parsed/book/{market_symbol}/snapshot | 
[**ParsedTickersGet**](DefaultAPI.md#ParsedTickersGet) | **Get** /parsed/tickers | 
[**TickersSnapshotGet**](DefaultAPI.md#TickersSnapshotGet) | **Get** /tickers/snapshot | 



## BookMarketIdRecentTradesGet

> BookMarketIdRecentTradesGet200Response BookMarketIdRecentTradesGet(ctx).Execute()



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
	resp, r, err := apiClient.DefaultAPI.BookMarketIdRecentTradesGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.BookMarketIdRecentTradesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BookMarketIdRecentTradesGet`: BookMarketIdRecentTradesGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.BookMarketIdRecentTradesGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiBookMarketIdRecentTradesGetRequest struct via the builder pattern


### Return type

[**BookMarketIdRecentTradesGet200Response**](BookMarketIdRecentTradesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BookMarketIdSnapshotGet

> BookMarketIdSnapshotGet200Response BookMarketIdSnapshotGet(ctx).Mbp(mbp).Mbo(mbo).Levels(levels).Execute()



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
	mbp := true // bool |  (optional) (default to false)
	mbo := true // bool |  (optional) (default to false)
	levels := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.BookMarketIdSnapshotGet(context.Background()).Mbp(mbp).Mbo(mbo).Levels(levels).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.BookMarketIdSnapshotGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BookMarketIdSnapshotGet`: BookMarketIdSnapshotGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.BookMarketIdSnapshotGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBookMarketIdSnapshotGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mbp** | **bool** |  | [default to false]
 **mbo** | **bool** |  | [default to false]
 **levels** | **int32** |  | 

### Return type

[**BookMarketIdSnapshotGet200Response**](BookMarketIdSnapshotGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ParsedBookMarketSymbolRecentTradesGet

> ParsedBookMarketSymbolRecentTradesGet200Response ParsedBookMarketSymbolRecentTradesGet(ctx).Execute()



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
	resp, r, err := apiClient.DefaultAPI.ParsedBookMarketSymbolRecentTradesGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ParsedBookMarketSymbolRecentTradesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ParsedBookMarketSymbolRecentTradesGet`: ParsedBookMarketSymbolRecentTradesGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ParsedBookMarketSymbolRecentTradesGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiParsedBookMarketSymbolRecentTradesGetRequest struct via the builder pattern


### Return type

[**ParsedBookMarketSymbolRecentTradesGet200Response**](ParsedBookMarketSymbolRecentTradesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ParsedBookMarketSymbolSnapshotGet

> ParsedBookMarketSymbolSnapshotGet200Response ParsedBookMarketSymbolSnapshotGet(ctx).Depth(depth).Execute()



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
	depth := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ParsedBookMarketSymbolSnapshotGet(context.Background()).Depth(depth).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ParsedBookMarketSymbolSnapshotGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ParsedBookMarketSymbolSnapshotGet`: ParsedBookMarketSymbolSnapshotGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ParsedBookMarketSymbolSnapshotGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiParsedBookMarketSymbolSnapshotGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depth** | **int32** |  | 

### Return type

[**ParsedBookMarketSymbolSnapshotGet200Response**](ParsedBookMarketSymbolSnapshotGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ParsedTickersGet

> ParsedTickersGet200Response ParsedTickersGet(ctx).Execute()



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
	resp, r, err := apiClient.DefaultAPI.ParsedTickersGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ParsedTickersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ParsedTickersGet`: ParsedTickersGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ParsedTickersGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiParsedTickersGetRequest struct via the builder pattern


### Return type

[**ParsedTickersGet200Response**](ParsedTickersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TickersSnapshotGet

> TickersSnapshotGet200Response TickersSnapshotGet(ctx).Execute()



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
	resp, r, err := apiClient.DefaultAPI.TickersSnapshotGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.TickersSnapshotGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TickersSnapshotGet`: TickersSnapshotGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.TickersSnapshotGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiTickersSnapshotGetRequest struct via the builder pattern


### Return type

[**TickersSnapshotGet200Response**](TickersSnapshotGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

