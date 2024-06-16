# TickersSnapshotGet200ResponseResultTopsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**market_id** | **i32** |  | 
**transact_time** | **i32** | The [transact time](./websocket-trade-api.md#transact-time) of the latest book update on this market. | 
**bid_price** | Option<**i32**> | The best bid price. | [optional]
**bid_quantity** | Option<**i32**> | The total bid quantity at the best bid price. | [optional]
**ask_price** | Option<**i32**> | The best ask price. | [optional]
**ask_quantity** | Option<**i32**> | The total ask quantity at the best ask price. | [optional]
**last_price** | Option<**i32**> | The last trade price. | [optional]
**rolling24h_price** | Option<**i32**> | The 24h open price. | [optional]
**implied_bid_price** | Option<**i32**> |  | [optional]
**implied_bid_quantity** | Option<**i32**> |  | [optional]
**implied_ask_price** | Option<**i32**> |  | [optional]
**implied_ask_quantity** | Option<**i32**> |  | [optional]
**market_state** | **i32** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


