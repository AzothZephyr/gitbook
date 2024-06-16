# BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **i32** |  | 
**quantity** | **i32** |  | 
**exchange_order_id** | **i32** | [Exchange order ID](./websocket-trade-api.md#exchange-order-id) | 
**side** | **i32** |  | 
**priority** | **i32** | Order priority for execution. Valid within a price level and side. That is, orders must first be sorted by side and price (in descending order for bids and ascending for asks), and then the OrderPriority within the level. A lower value is a higher priority. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


