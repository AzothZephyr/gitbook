# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**book_market_id_recent_trades_get**](DefaultApi.md#book_market_id_recent_trades_get) | **GET** /book/{market_id}/recent-trades | 
[**book_market_id_snapshot_get**](DefaultApi.md#book_market_id_snapshot_get) | **GET** /book/{market_id}/snapshot | 
[**parsed_book_market_symbol_recent_trades_get**](DefaultApi.md#parsed_book_market_symbol_recent_trades_get) | **GET** /parsed/book/{market_symbol}/recent-trades | 
[**parsed_book_market_symbol_snapshot_get**](DefaultApi.md#parsed_book_market_symbol_snapshot_get) | **GET** /parsed/book/{market_symbol}/snapshot | 
[**parsed_tickers_get**](DefaultApi.md#parsed_tickers_get) | **GET** /parsed/tickers | 
[**tickers_snapshot_get**](DefaultApi.md#tickers_snapshot_get) | **GET** /tickers/snapshot | 



## book_market_id_recent_trades_get

> models::BookMarketIdRecentTradesGet200Response book_market_id_recent_trades_get(market_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_id** | **String** |  | [required] |

### Return type

[**models::BookMarketIdRecentTradesGet200Response**](_book__market_id__recent_trades_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## book_market_id_snapshot_get

> models::BookMarketIdSnapshotGet200Response book_market_id_snapshot_get(market_id, mbp, mbo, levels)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_id** | **String** |  | [required] |
**mbp** | Option<**bool**> |  |  |[default to false]
**mbo** | Option<**bool**> |  |  |[default to false]
**levels** | Option<**i32**> |  |  |

### Return type

[**models::BookMarketIdSnapshotGet200Response**](_book__market_id__snapshot_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## parsed_book_market_symbol_recent_trades_get

> models::ParsedBookMarketSymbolRecentTradesGet200Response parsed_book_market_symbol_recent_trades_get(market_symbol)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_symbol** | **String** |  | [required] |

### Return type

[**models::ParsedBookMarketSymbolRecentTradesGet200Response**](_parsed_book__market_symbol__recent_trades_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## parsed_book_market_symbol_snapshot_get

> models::ParsedBookMarketSymbolSnapshotGet200Response parsed_book_market_symbol_snapshot_get(market_symbol, depth)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_symbol** | **String** |  | [required] |
**depth** | Option<**i32**> |  |  |

### Return type

[**models::ParsedBookMarketSymbolSnapshotGet200Response**](_parsed_book__market_symbol__snapshot_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## parsed_tickers_get

> models::ParsedTickersGet200Response parsed_tickers_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::ParsedTickersGet200Response**](_parsed_tickers_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## tickers_snapshot_get

> models::TickersSnapshotGet200Response tickers_snapshot_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::TickersSnapshotGet200Response**](_tickers_snapshot_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

