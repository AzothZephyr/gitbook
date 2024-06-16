# BookMarketIdRecentTradesGet200ResponseResultTradesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trade_id** | **i32** | The ID assigned to this trade. All trades that occur from the same event will be assigned the same ID, and are considered to be an atomic batch. | 
**price** | **i32** | The price that this trade occurred at. | 
**aggressing_side** | **i32** | The side of the aggressing order. | 
**resting_exchange_order_id** | **i32** | The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the resting order. | 
**fill_quantity** | **i32** |  | 
**transact_time** | **i32** | The [transact time](./websocket-trade-api.md#transact-time) assigned by the matching engine for this trade. All trades that occur from the same event will be assigned the same transact time. | 
**aggressing_exchange_order_id** | **i32** | The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the aggressing order. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


