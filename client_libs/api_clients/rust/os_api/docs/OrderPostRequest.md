# OrderPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_order_id** | **i32** | A unique order ID assigned by the client for this order. The ID must be unique among open orders by this subaccount. | 
**request_id** | **i32** | A request ID that is echoed back on the NewOrderAck or NewOrderReject | 
**market_id** | **i32** |  | 
**price** | Option<**i32**> |  | [optional]
**quantity** | **i32** |  | 
**side** | **i32** |  | 
**time_in_force** | **i32** |  | 
**order_type** | **i32** |  | 
**subaccount_id** | **i32** | The subaccount to place this order on. This subaccount must be writable by the API key specified in the Credentials message. | 
**self_trade_prevention** | Option<**i32**> |  | [optional]
**post_only** | **i32** |  | 
**cancel_on_disconnect** | **bool** | If true, this order will be automatically cancelled after the closure of the network connection between Cube's servers and the client that placed the order.  If the client initiates the disconnect or network instability drops the connection, the order will be cancelled when Cube's servers recognize the disconnection.  In the event of a server-side disconnect that causes a halt in trading, such as scheduled downtime, the order will be cancelled before trading resumes. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


