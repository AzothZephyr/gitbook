# OrderPost200ResponseResultOneOfAck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msg_seq_num** | **i32** |  | 
**client_order_id** | **i32** | The client order ID specified in the new-order request. | 
**request_id** | **i32** | The request ID specified in the new-order request. | 
**exchange_order_id** | **i32** | [Exchange order ID](#exchange-order-id) | 
**market_id** | **i32** |  | 
**price** | Option<**i32**> | If the order ultimately rests, the `price` field will include the resting price. | [optional]
**quantity** | **i32** | The quantity submitted in the new-order request. | 
**side** | **i32** |  | 
**time_in_force** | **i32** |  | 
**order_type** | **i32** |  | 
**transact_time** | **i32** | [Transact time](#transact-time) | 
**subaccount_id** | **i32** |  | 
**cancel_on_disconnect** | **bool** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


