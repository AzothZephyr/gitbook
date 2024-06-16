# UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **i32** |  | 
**amount** | [**models::Decimal**](decimal.md) |  | 
**txn_hash** | Option<**String**> | Once the transaction has been determined / sent, `txn_hash`, `txn_index`, and `txn_state` will be populated | [optional]
**txn_index** | Option<**i64**> |  | [optional]
**txn_state** | Option<**String**> |  | [optional]
**created_at** | **String** | When the withdrawal request was created. | 
**updated_at** | **String** | When the withdrawal was sent out. | 
**attempt_id** | **i64** | A unique identifier for this withdrawal request. | 
**address** | **String** | The withdrawal destination address | 
**approved** | Option<**bool**> |  | [optional]
**reason** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


