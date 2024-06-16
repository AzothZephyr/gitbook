# OrderPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**market_id** | **i32** |  | 
**client_order_id** | **i32** | The order ID specified by the client on the NewOrder request. | 
**request_id** | **i32** | A request ID that is echoed back on the ModifyOrderAck or ModifyOrderReject | 
**new_price** | **i32** |  | 
**new_quantity** | **i32** |  | 
**subaccount_id** | **i32** | The subaccount that the NewOrder was placed on. | 
**self_trade_prevention** | Option<**i32**> |  | [optional]
**post_only** | **i32** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


