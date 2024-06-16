# OrdersGet200ResponseResultOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_order_id** | **i32** | The client order ID specified in the new-order request. | 
**exchange_order_id** | **i32** | [Exchange order ID](#exchange-order-id) | 
**market_id** | **i32** |  | 
**price** | **i32** |  | 
**order_quantity** | **i32** | The quantity submitted in the latest quantity-modifying request. If the order has not been modified, then it is the quantity on the new-order-ack. If it has been modified, then it is the quantity of the latest modify-order-ack. | 
**side** | **i32** |  | 
**time_in_force** | **i32** |  | 
**order_type** | **i32** |  | 
**remaining_quantity** | **i32** | The current remaining quantity on the book. | 
**rest_time** | **i32** | [Transact time](#transact-time) of the NewOrderAck | 
**subaccount_id** | **i32** |  | 
**cumulative_quantity** | **i32** | The cumulative filled quantity for this order. | 
**cancel_on_disconnect** | **bool** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


