# TickersSnapshotGet200ResponseResultSummariesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** |  | 
**Open** | Pointer to **NullableInt32** | 24h open price | [optional] 
**Close** | Pointer to **NullableInt32** | Latest price | [optional] 
**Low** | Pointer to **NullableInt32** | 24h low price | [optional] 
**High** | Pointer to **NullableInt32** | 24h high price | [optional] 
**BaseVolumeLo** | **int32** | Low 64-bits of the base quantity traded | 
**BaseVolumeHi** | **int32** | High 64-bits of the base quantity traded | 
**QuoteVolumeLo** | **int32** | Low 64-bits of the quote quantity traded | 
**QuoteVolumeHi** | **int32** | High 64-bits of the quote quantity traded | 

## Methods

### NewTickersSnapshotGet200ResponseResultSummariesInner

`func NewTickersSnapshotGet200ResponseResultSummariesInner(marketId int32, baseVolumeLo int32, baseVolumeHi int32, quoteVolumeLo int32, quoteVolumeHi int32, ) *TickersSnapshotGet200ResponseResultSummariesInner`

NewTickersSnapshotGet200ResponseResultSummariesInner instantiates a new TickersSnapshotGet200ResponseResultSummariesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTickersSnapshotGet200ResponseResultSummariesInnerWithDefaults

`func NewTickersSnapshotGet200ResponseResultSummariesInnerWithDefaults() *TickersSnapshotGet200ResponseResultSummariesInner`

NewTickersSnapshotGet200ResponseResultSummariesInnerWithDefaults instantiates a new TickersSnapshotGet200ResponseResultSummariesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetOpen

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetOpen() int32`

GetOpen returns the Open field if non-nil, zero value otherwise.

### GetOpenOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetOpenOk() (*int32, bool)`

GetOpenOk returns a tuple with the Open field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpen

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetOpen(v int32)`

SetOpen sets Open field to given value.

### HasOpen

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) HasOpen() bool`

HasOpen returns a boolean if a field has been set.

### SetOpenNil

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetOpenNil(b bool)`

 SetOpenNil sets the value for Open to be an explicit nil

### UnsetOpen
`func (o *TickersSnapshotGet200ResponseResultSummariesInner) UnsetOpen()`

UnsetOpen ensures that no value is present for Open, not even an explicit nil
### GetClose

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetClose() int32`

GetClose returns the Close field if non-nil, zero value otherwise.

### GetCloseOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetCloseOk() (*int32, bool)`

GetCloseOk returns a tuple with the Close field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClose

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetClose(v int32)`

SetClose sets Close field to given value.

### HasClose

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) HasClose() bool`

HasClose returns a boolean if a field has been set.

### SetCloseNil

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetCloseNil(b bool)`

 SetCloseNil sets the value for Close to be an explicit nil

### UnsetClose
`func (o *TickersSnapshotGet200ResponseResultSummariesInner) UnsetClose()`

UnsetClose ensures that no value is present for Close, not even an explicit nil
### GetLow

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetLow() int32`

GetLow returns the Low field if non-nil, zero value otherwise.

### GetLowOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetLowOk() (*int32, bool)`

GetLowOk returns a tuple with the Low field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLow

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetLow(v int32)`

SetLow sets Low field to given value.

### HasLow

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) HasLow() bool`

HasLow returns a boolean if a field has been set.

### SetLowNil

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetLowNil(b bool)`

 SetLowNil sets the value for Low to be an explicit nil

### UnsetLow
`func (o *TickersSnapshotGet200ResponseResultSummariesInner) UnsetLow()`

UnsetLow ensures that no value is present for Low, not even an explicit nil
### GetHigh

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetHigh() int32`

GetHigh returns the High field if non-nil, zero value otherwise.

### GetHighOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetHighOk() (*int32, bool)`

GetHighOk returns a tuple with the High field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHigh

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetHigh(v int32)`

SetHigh sets High field to given value.

### HasHigh

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) HasHigh() bool`

HasHigh returns a boolean if a field has been set.

### SetHighNil

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetHighNil(b bool)`

 SetHighNil sets the value for High to be an explicit nil

### UnsetHigh
`func (o *TickersSnapshotGet200ResponseResultSummariesInner) UnsetHigh()`

UnsetHigh ensures that no value is present for High, not even an explicit nil
### GetBaseVolumeLo

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetBaseVolumeLo() int32`

GetBaseVolumeLo returns the BaseVolumeLo field if non-nil, zero value otherwise.

### GetBaseVolumeLoOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetBaseVolumeLoOk() (*int32, bool)`

GetBaseVolumeLoOk returns a tuple with the BaseVolumeLo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseVolumeLo

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetBaseVolumeLo(v int32)`

SetBaseVolumeLo sets BaseVolumeLo field to given value.


### GetBaseVolumeHi

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetBaseVolumeHi() int32`

GetBaseVolumeHi returns the BaseVolumeHi field if non-nil, zero value otherwise.

### GetBaseVolumeHiOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetBaseVolumeHiOk() (*int32, bool)`

GetBaseVolumeHiOk returns a tuple with the BaseVolumeHi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseVolumeHi

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetBaseVolumeHi(v int32)`

SetBaseVolumeHi sets BaseVolumeHi field to given value.


### GetQuoteVolumeLo

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetQuoteVolumeLo() int32`

GetQuoteVolumeLo returns the QuoteVolumeLo field if non-nil, zero value otherwise.

### GetQuoteVolumeLoOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetQuoteVolumeLoOk() (*int32, bool)`

GetQuoteVolumeLoOk returns a tuple with the QuoteVolumeLo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteVolumeLo

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetQuoteVolumeLo(v int32)`

SetQuoteVolumeLo sets QuoteVolumeLo field to given value.


### GetQuoteVolumeHi

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetQuoteVolumeHi() int32`

GetQuoteVolumeHi returns the QuoteVolumeHi field if non-nil, zero value otherwise.

### GetQuoteVolumeHiOk

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) GetQuoteVolumeHiOk() (*int32, bool)`

GetQuoteVolumeHiOk returns a tuple with the QuoteVolumeHi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteVolumeHi

`func (o *TickersSnapshotGet200ResponseResultSummariesInner) SetQuoteVolumeHi(v int32)`

SetQuoteVolumeHi sets QuoteVolumeHi field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


