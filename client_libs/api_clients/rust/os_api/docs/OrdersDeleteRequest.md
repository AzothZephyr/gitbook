# OrdersDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subaccount_id** | **i32** | The subaccount to cancel orders for. | 
**request_id** | **i32** | A request ID that is echoed back on the MassCancelAck and individual CancelOrderAck's. | 
**market_id** | Option<**i32**> | If specified, only orders on the corresponding market will be canceled. | [optional]
**side** | Option<**i32**> | If specified, only orders with this side will be canceled. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


