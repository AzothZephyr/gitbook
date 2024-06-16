# UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **i32** |  | 
**amount** | **String** |  | 
**txn_hash** | Option<**String**> | Deposits that are found on-chain will have a `txn_hash` and `txn_index`. If it is a pending deposit determined by some external payment system, these can be empty | [optional]
**txn_index** | Option<**i64**> |  | [optional]
**created_at** | **String** | When we first started tracking this deposit. Probably in the mempool. | 
**updated_at** | **String** | If `txn_state` is `Confirmed` and `KytStatus` is accepted, this is the time that the deposit is credited. Otherwise, it is the last update (e.g if a kyt external id was created, or transaction state updated). | 
**txn_state** | **String** | The deposit is credited when `Confirmed` and accepted. | 
**address** | Option<**String**> | The deposit source address | [optional]
**time_est** | **String** | The estimated time that this deposit will transition to `Confirmed`. This is currently only applicable for `Received` deposits | 
**fiat_to_crypto** | **bool** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


