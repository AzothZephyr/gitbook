# MarketsGet200ResponseResultAssetsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **i32** | The Cube-assigned asset ID. | 
**symbol** | **String** | The canonical symbol for this asset. | 
**decimals** | **i32** | The maximum precision of this asset.  e.g `18` for ETH (`10^18` WEI per ETH), `8` for BTC (`10^8` SAT per BTC) | 
**display_decimals** | **i32** | The default number of decimal places to display for human-readable quantities for this asset. | 
**settles** | **bool** | Whether this asset settles to the blockchain. | 
**asset_type** | **String** | The type of this asset. | 
**source_id** | **i32** | The source ID of this asset. | 
**metadata** | Option<[**serde_json::Value**](.md)> | Additional metadata about this asset. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


