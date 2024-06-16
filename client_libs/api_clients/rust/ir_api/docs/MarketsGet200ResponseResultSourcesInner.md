# MarketsGet200ResponseResultSourcesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **i32** | The Cube-assigned source ID. | 
**name** | **String** | A human-readable name for this source. | 
**transaction_explorer** | Option<**String**> | The URL of a block explorer that can be used to view transactions.  The value is provided as a format string with a single `{}` placeholder for the transaction. e.g `https://etherscan.io/tx/{}` | [optional]
**address_explorer** | Option<**String**> | The URL of a block explorer that can be used to view addresses.  The value is provided as a format string with a single `{}` placeholder for the address. e.g `https://etherscan.io/address/{}` | [optional]
**metadata** | Option<[**serde_json::Value**](.md)> | Additional metadata about this source. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


