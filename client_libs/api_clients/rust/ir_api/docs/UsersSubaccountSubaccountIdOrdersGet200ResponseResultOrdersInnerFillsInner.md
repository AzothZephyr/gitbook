# UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trade_id** | **i64** |  | 
**base_batch_id** | Option<[**uuid::Uuid**](uuid::Uuid.md)> |  | [optional]
**quote_batch_id** | Option<[**uuid::Uuid**](uuid::Uuid.md)> |  | [optional]
**base_settled** | **bool** |  | 
**quote_settled** | **bool** |  | 
**base_amount** | [**models::Decimal**](decimal.md) |  | 
**quote_amount** | [**models::Decimal**](decimal.md) |  | 
**fee_amount** | [**models::Decimal**](decimal.md) |  | 
**fee_asset_id** | Option<**i32**> |  | [optional]
**filled_at** | **i64** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


