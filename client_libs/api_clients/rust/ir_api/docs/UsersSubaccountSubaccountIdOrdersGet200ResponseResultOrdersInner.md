# UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | Option<**i64**> | The cube-assigned order ID, also known as `ExchangeOrderId`. Unique per order. | [optional]
**market_id** | **i32** |  | 
**side** | **String** |  | 
**price** | **i32** | Most recent price, including modifies | 
**qty** | **i32** | Most recent quantity, including modifies | 
**created_at** | **i64** | The matching-engine transact-time in nanoseconds that this order was created. | 
**modified_at** | Option<**i64**> | The matching-engine transact-time in nanoseconds of the most recent modify event. Empty if the order was never modified. | [optional]
**canceled_at** | Option<**i64**> | The matching-engine transact-time in nanoseconds when this order was cancelled. Empty if the order was never cancelled, e.g. is open or filled. | [optional]
**filled_at** | Option<**i64**> |  | [optional]
**filled_total** | Option<[**models::UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal**](_users_subaccount__subaccount_id__orders_get_200_response_result_orders_inner_filledTotal.md)> |  | [optional]
**fills** | [**Vec<models::UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner>**](_users_subaccount__subaccount_id__orders_get_200_response_result_orders_inner_fills_inner.md) |  | 
**modifies** | [**Vec<models::UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner>**](_users_subaccount__subaccount_id__orders_get_200_response_result_orders_inner_modifies_inner.md) | Any previous states of price/quantity associated with this order due to modifies. If the order has been modified, the original price/quantity will appear in this list. | 
**reason** | Option<**String**> | Reject reason if rejected. Cancel reason if canceled. | [optional]
**settled** | Option<**bool**> | The settlement status for this order's fills.  If the order has no fills, or none of the fills have been assigned to a settlement batch, then this will be `None`. This can be derived from `fills`. | [optional]
**status** | **String** | The current status of this order. Note that if the order is `Open`, this is a best-effort estimation, and the order service has the most correct status. | 
**client_order_id** | Option<**i32**> |  | [optional]
**time_in_force** | Option<**i32**> |  | [optional]
**order_type** | Option<**i32**> |  | [optional]
**self_trade_prevention** | Option<**i32**> |  | [optional]
**cancel_on_disconnect** | Option<**bool**> |  | [optional]
**post_only** | Option<**bool**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


