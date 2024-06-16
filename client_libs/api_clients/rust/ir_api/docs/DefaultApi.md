# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history_klines_get**](DefaultApi.md#history_klines_get) | **GET** /history/klines | Aggregated historical price data (klines)
[**markets_get**](DefaultApi.md#markets_get) | **GET** /markets | Fetch all asset, market, and source definitions
[**users_address_get**](DefaultApi.md#users_address_get) | **GET** /users/address | 
[**users_address_settings_get**](DefaultApi.md#users_address_settings_get) | **GET** /users/address/settings | 
[**users_check_get**](DefaultApi.md#users_check_get) | **GET** /users/check | 
[**users_fee_estimate_market_id_get**](DefaultApi.md#users_fee_estimate_market_id_get) | **GET** /users/fee-estimate/{market-id} | 
[**users_info_get**](DefaultApi.md#users_info_get) | **GET** /users/info | 
[**users_subaccount_subaccount_id_fills_get**](DefaultApi.md#users_subaccount_subaccount_id_fills_get) | **GET** /users/subaccount/{subaccount_id}/fills | 
[**users_subaccount_subaccount_id_get**](DefaultApi.md#users_subaccount_subaccount_id_get) | **GET** /users/subaccount/{subaccount_id} | 
[**users_subaccount_subaccount_id_orders_get**](DefaultApi.md#users_subaccount_subaccount_id_orders_get) | **GET** /users/subaccount/{subaccount_id}/orders | 
[**users_subaccount_subaccount_id_patch**](DefaultApi.md#users_subaccount_subaccount_id_patch) | **PATCH** /users/subaccount/{subaccount_id} | 
[**users_subaccount_subaccount_id_positions_get**](DefaultApi.md#users_subaccount_subaccount_id_positions_get) | **GET** /users/subaccount/{subaccount_id}/positions | 
[**users_subaccount_subaccount_id_transfers_get**](DefaultApi.md#users_subaccount_subaccount_id_transfers_get) | **GET** /users/subaccount/{subaccount_id}/transfers | 
[**users_subaccount_subaccount_id_withdrawals_get**](DefaultApi.md#users_subaccount_subaccount_id_withdrawals_get) | **GET** /users/subaccount/{subaccount_id}/withdrawals | 
[**users_subaccounts_get**](DefaultApi.md#users_subaccounts_get) | **GET** /users/subaccounts | 
[**users_subaccounts_post**](DefaultApi.md#users_subaccounts_post) | **POST** /users/subaccounts | 
[**users_withdraw_post**](DefaultApi.md#users_withdraw_post) | **POST** /users/withdraw | 



## history_klines_get

> models::HistoryKlinesGet200Response history_klines_get(market_id, interval, start_time, end_time, limit)
Aggregated historical price data (klines)

Statistics about the price of an asset during a specific time interval. Fields are: [     time (in seconds since epoch),     open price,     high price,     low price,     close price,     volume (in RawUnits) ]

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_id** | **i32** |  | [required] |
**interval** | **String** |  | [required] |
**start_time** | Option<**i64**> |  |  |
**end_time** | Option<**i64**> |  |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**models::HistoryKlinesGet200Response**](_history_klines_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## markets_get

> models::MarketsGet200Response markets_get()
Fetch all asset, market, and source definitions

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::MarketsGet200Response**](_markets_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_address_get

> models::UsersAddressGet200Response users_address_get(source_ids, names)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**source_ids** | Option<**String**> |  |  |
**names** | Option<**String**> |  |  |

### Return type

[**models::UsersAddressGet200Response**](_users_address_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_address_settings_get

> models::UsersAddressSettingsGet200Response users_address_settings_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::UsersAddressSettingsGet200Response**](_users_address_settings_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_check_get

> models::UsersCheckGet200Response users_check_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::UsersCheckGet200Response**](_users_check_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_fee_estimate_market_id_get

> models::UsersFeeEstimateMarketIdGet200Response users_fee_estimate_market_id_get(market_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**market_id** | **i32** |  | [required] |

### Return type

[**models::UsersFeeEstimateMarketIdGet200Response**](_users_fee_estimate__market_id__get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_info_get

> models::UsersInfoGet200Response users_info_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::UsersInfoGet200Response**](_users_info_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_fills_get

> models::UsersSubaccountSubaccountIdFillsGet200Response users_subaccount_subaccount_id_fills_get(subaccount_id, start_time, end_time, market_ids, order_ids)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |
**start_time** | Option<**i64**> |  |  |
**end_time** | Option<**i64**> |  |  |
**market_ids** | Option<**String**> |  |  |
**order_ids** | Option<**String**> |  |  |

### Return type

[**models::UsersSubaccountSubaccountIdFillsGet200Response**](_users_subaccount__subaccount_id__fills_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_get

> models::UsersSubaccountSubaccountIdGet200Response users_subaccount_subaccount_id_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |

### Return type

[**models::UsersSubaccountSubaccountIdGet200Response**](_users_subaccount__subaccount_id__get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_orders_get

> models::UsersSubaccountSubaccountIdOrdersGet200Response users_subaccount_subaccount_id_orders_get(subaccount_id, created_before, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |
**created_before** | Option<**i64**> | Returns the most recent orders where `created_at < created_before`. If null, returns the most recent orders. |  |
**limit** | Option<**i32**> | The maximum number of orders to return. If null, defaults to 100. The maximum is 1000. |  |

### Return type

[**models::UsersSubaccountSubaccountIdOrdersGet200Response**](_users_subaccount__subaccount_id__orders_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_patch

> models::UsersSubaccountsPost200Response users_subaccount_subaccount_id_patch(subaccount_id, users_subaccount_subaccount_id_patch_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |
**users_subaccount_subaccount_id_patch_request** | [**UsersSubaccountSubaccountIdPatchRequest**](UsersSubaccountSubaccountIdPatchRequest.md) |  | [required] |

### Return type

[**models::UsersSubaccountsPost200Response**](_users_subaccounts_post_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_positions_get

> models::UsersSubaccountSubaccountIdPositionsGet200Response users_subaccount_subaccount_id_positions_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |

### Return type

[**models::UsersSubaccountSubaccountIdPositionsGet200Response**](_users_subaccount__subaccount_id__positions_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_transfers_get

> models::UsersSubaccountSubaccountIdTransfersGet200Response users_subaccount_subaccount_id_transfers_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |

### Return type

[**models::UsersSubaccountSubaccountIdTransfersGet200Response**](_users_subaccount__subaccount_id__transfers_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccount_subaccount_id_withdrawals_get

> models::UsersSubaccountSubaccountIdWithdrawalsGet200Response users_subaccount_subaccount_id_withdrawals_get(subaccount_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**subaccount_id** | **i64** |  | [required] |

### Return type

[**models::UsersSubaccountSubaccountIdWithdrawalsGet200Response**](_users_subaccount__subaccount_id__withdrawals_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccounts_get

> models::UsersSubaccountsGet200Response users_subaccounts_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::UsersSubaccountsGet200Response**](_users_subaccounts_get_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_subaccounts_post

> models::UsersSubaccountsPost200Response users_subaccounts_post(users_subaccounts_post_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**users_subaccounts_post_request** | [**UsersSubaccountsPostRequest**](UsersSubaccountsPostRequest.md) |  | [required] |

### Return type

[**models::UsersSubaccountsPost200Response**](_users_subaccounts_post_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## users_withdraw_post

> models::UsersWithdrawPost200Response users_withdraw_post(users_withdraw_post_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**users_withdraw_post_request** | [**UsersWithdrawPostRequest**](UsersWithdrawPostRequest.md) |  | [required] |

### Return type

[**models::UsersWithdrawPost200Response**](_users_withdraw_post_200_response.md)

### Authorization

[ApiKey](../README.md#ApiKey), [ApiSignature](../README.md#ApiSignature), [ApiTimestamp](../README.md#ApiTimestamp)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

