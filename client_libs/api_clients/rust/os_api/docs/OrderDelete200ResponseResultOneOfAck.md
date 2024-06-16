# OrderDelete200ResponseResultOneOfAck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msg_seq_num** | **i32** |  | 
**client_order_id** | **i32** |  | 
**request_id** | **i32** | If the Reason is `DISCONNECT`, `IOC`, `STP_RESTING`, or `STP_AGGRESSING`, this request ID will be `u64::MAX`. Otherwise, it will be the request ID of the initiated cancel action. For a mass cancel, each cancel order ack will have the MassCancel's request_id. | 
**transact_time** | **i32** | [Transact time](#transact-time) | 
**subaccount_id** | **i32** |  | 
**reason** | **i32** |  | 
**market_id** | **i32** |  | 
**exchange_order_id** | **i32** | [Exchange order ID](#exchange-order-id) | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


