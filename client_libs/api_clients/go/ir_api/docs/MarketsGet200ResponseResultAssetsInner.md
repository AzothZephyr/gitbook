# MarketsGet200ResponseResultAssetsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetId** | **int32** | The Cube-assigned asset ID. | 
**Symbol** | **string** | The canonical symbol for this asset. | 
**Decimals** | **int32** | The maximum precision of this asset.  e.g &#x60;18&#x60; for ETH (&#x60;10^18&#x60; WEI per ETH), &#x60;8&#x60; for BTC (&#x60;10^8&#x60; SAT per BTC) | 
**DisplayDecimals** | **int32** | The default number of decimal places to display for human-readable quantities for this asset. | 
**Settles** | **bool** | Whether this asset settles to the blockchain. | 
**AssetType** | **string** | The type of this asset. | 
**SourceId** | **int32** | The source ID of this asset. | 
**Metadata** | **interface{}** | Additional metadata about this asset. | 

## Methods

### NewMarketsGet200ResponseResultAssetsInner

`func NewMarketsGet200ResponseResultAssetsInner(assetId int32, symbol string, decimals int32, displayDecimals int32, settles bool, assetType string, sourceId int32, metadata interface{}, ) *MarketsGet200ResponseResultAssetsInner`

NewMarketsGet200ResponseResultAssetsInner instantiates a new MarketsGet200ResponseResultAssetsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketsGet200ResponseResultAssetsInnerWithDefaults

`func NewMarketsGet200ResponseResultAssetsInnerWithDefaults() *MarketsGet200ResponseResultAssetsInner`

NewMarketsGet200ResponseResultAssetsInnerWithDefaults instantiates a new MarketsGet200ResponseResultAssetsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetId

`func (o *MarketsGet200ResponseResultAssetsInner) GetAssetId() int32`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetAssetIdOk() (*int32, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *MarketsGet200ResponseResultAssetsInner) SetAssetId(v int32)`

SetAssetId sets AssetId field to given value.


### GetSymbol

`func (o *MarketsGet200ResponseResultAssetsInner) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *MarketsGet200ResponseResultAssetsInner) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.


### GetDecimals

`func (o *MarketsGet200ResponseResultAssetsInner) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *MarketsGet200ResponseResultAssetsInner) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.


### GetDisplayDecimals

`func (o *MarketsGet200ResponseResultAssetsInner) GetDisplayDecimals() int32`

GetDisplayDecimals returns the DisplayDecimals field if non-nil, zero value otherwise.

### GetDisplayDecimalsOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetDisplayDecimalsOk() (*int32, bool)`

GetDisplayDecimalsOk returns a tuple with the DisplayDecimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayDecimals

`func (o *MarketsGet200ResponseResultAssetsInner) SetDisplayDecimals(v int32)`

SetDisplayDecimals sets DisplayDecimals field to given value.


### GetSettles

`func (o *MarketsGet200ResponseResultAssetsInner) GetSettles() bool`

GetSettles returns the Settles field if non-nil, zero value otherwise.

### GetSettlesOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetSettlesOk() (*bool, bool)`

GetSettlesOk returns a tuple with the Settles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettles

`func (o *MarketsGet200ResponseResultAssetsInner) SetSettles(v bool)`

SetSettles sets Settles field to given value.


### GetAssetType

`func (o *MarketsGet200ResponseResultAssetsInner) GetAssetType() string`

GetAssetType returns the AssetType field if non-nil, zero value otherwise.

### GetAssetTypeOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetAssetTypeOk() (*string, bool)`

GetAssetTypeOk returns a tuple with the AssetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetType

`func (o *MarketsGet200ResponseResultAssetsInner) SetAssetType(v string)`

SetAssetType sets AssetType field to given value.


### GetSourceId

`func (o *MarketsGet200ResponseResultAssetsInner) GetSourceId() int32`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetSourceIdOk() (*int32, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MarketsGet200ResponseResultAssetsInner) SetSourceId(v int32)`

SetSourceId sets SourceId field to given value.


### GetMetadata

`func (o *MarketsGet200ResponseResultAssetsInner) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *MarketsGet200ResponseResultAssetsInner) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *MarketsGet200ResponseResultAssetsInner) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *MarketsGet200ResponseResultAssetsInner) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *MarketsGet200ResponseResultAssetsInner) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


