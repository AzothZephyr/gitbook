# MarketsGet200ResponseResultSourcesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **int32** | The Cube-assigned source ID. | 
**Name** | **string** | A human-readable name for this source. | 
**TransactionExplorer** | Pointer to **NullableString** | The URL of a block explorer that can be used to view transactions.  The value is provided as a format string with a single &#x60;{}&#x60; placeholder for the transaction. e.g &#x60;https://etherscan.io/tx/{}&#x60; | [optional] 
**AddressExplorer** | Pointer to **NullableString** | The URL of a block explorer that can be used to view addresses.  The value is provided as a format string with a single &#x60;{}&#x60; placeholder for the address. e.g &#x60;https://etherscan.io/address/{}&#x60; | [optional] 
**Metadata** | **interface{}** | Additional metadata about this source. | 

## Methods

### NewMarketsGet200ResponseResultSourcesInner

`func NewMarketsGet200ResponseResultSourcesInner(sourceId int32, name string, metadata interface{}, ) *MarketsGet200ResponseResultSourcesInner`

NewMarketsGet200ResponseResultSourcesInner instantiates a new MarketsGet200ResponseResultSourcesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketsGet200ResponseResultSourcesInnerWithDefaults

`func NewMarketsGet200ResponseResultSourcesInnerWithDefaults() *MarketsGet200ResponseResultSourcesInner`

NewMarketsGet200ResponseResultSourcesInnerWithDefaults instantiates a new MarketsGet200ResponseResultSourcesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *MarketsGet200ResponseResultSourcesInner) GetSourceId() int32`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MarketsGet200ResponseResultSourcesInner) GetSourceIdOk() (*int32, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MarketsGet200ResponseResultSourcesInner) SetSourceId(v int32)`

SetSourceId sets SourceId field to given value.


### GetName

`func (o *MarketsGet200ResponseResultSourcesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MarketsGet200ResponseResultSourcesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MarketsGet200ResponseResultSourcesInner) SetName(v string)`

SetName sets Name field to given value.


### GetTransactionExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) GetTransactionExplorer() string`

GetTransactionExplorer returns the TransactionExplorer field if non-nil, zero value otherwise.

### GetTransactionExplorerOk

`func (o *MarketsGet200ResponseResultSourcesInner) GetTransactionExplorerOk() (*string, bool)`

GetTransactionExplorerOk returns a tuple with the TransactionExplorer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) SetTransactionExplorer(v string)`

SetTransactionExplorer sets TransactionExplorer field to given value.

### HasTransactionExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) HasTransactionExplorer() bool`

HasTransactionExplorer returns a boolean if a field has been set.

### SetTransactionExplorerNil

`func (o *MarketsGet200ResponseResultSourcesInner) SetTransactionExplorerNil(b bool)`

 SetTransactionExplorerNil sets the value for TransactionExplorer to be an explicit nil

### UnsetTransactionExplorer
`func (o *MarketsGet200ResponseResultSourcesInner) UnsetTransactionExplorer()`

UnsetTransactionExplorer ensures that no value is present for TransactionExplorer, not even an explicit nil
### GetAddressExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) GetAddressExplorer() string`

GetAddressExplorer returns the AddressExplorer field if non-nil, zero value otherwise.

### GetAddressExplorerOk

`func (o *MarketsGet200ResponseResultSourcesInner) GetAddressExplorerOk() (*string, bool)`

GetAddressExplorerOk returns a tuple with the AddressExplorer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) SetAddressExplorer(v string)`

SetAddressExplorer sets AddressExplorer field to given value.

### HasAddressExplorer

`func (o *MarketsGet200ResponseResultSourcesInner) HasAddressExplorer() bool`

HasAddressExplorer returns a boolean if a field has been set.

### SetAddressExplorerNil

`func (o *MarketsGet200ResponseResultSourcesInner) SetAddressExplorerNil(b bool)`

 SetAddressExplorerNil sets the value for AddressExplorer to be an explicit nil

### UnsetAddressExplorer
`func (o *MarketsGet200ResponseResultSourcesInner) UnsetAddressExplorer()`

UnsetAddressExplorer ensures that no value is present for AddressExplorer, not even an explicit nil
### GetMetadata

`func (o *MarketsGet200ResponseResultSourcesInner) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *MarketsGet200ResponseResultSourcesInner) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *MarketsGet200ResponseResultSourcesInner) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *MarketsGet200ResponseResultSourcesInner) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *MarketsGet200ResponseResultSourcesInner) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


