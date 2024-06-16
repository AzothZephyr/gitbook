# UsersWithdrawPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subaccount_id** | **i32** | The subaccount to withdraw from. | 
**asset_id** | **i32** | The asset to withdraw. The network is determined by the asset ID. | 
**amount** | **i32** | The amount to withdraw. This is denominated in the smallest unit of the asset (e.g. satoshis for BTC, wei for ETH, lamports for SOL). The amount must be greater than the dust limit for the asset. | 
**destination** | **String** | The destination address for the withdrawal. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


