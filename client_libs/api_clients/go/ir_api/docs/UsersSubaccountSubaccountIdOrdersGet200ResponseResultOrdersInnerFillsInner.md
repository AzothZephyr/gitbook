# UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TradeId** | **int64** |  | 
**BaseBatchId** | Pointer to **NullableString** |  | [optional] 
**QuoteBatchId** | Pointer to **NullableString** |  | [optional] 
**BaseSettled** | **bool** |  | 
**QuoteSettled** | **bool** |  | 
**BaseAmount** | **float64** |  | 
**QuoteAmount** | **float64** |  | 
**FeeAmount** | **float64** |  | 
**FeeAssetId** | Pointer to **NullableInt32** |  | [optional] 
**FilledAt** | **int64** |  | 

## Methods

### NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner

`func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner(tradeId int64, baseSettled bool, quoteSettled bool, baseAmount float64, quoteAmount float64, feeAmount float64, filledAt int64, ) *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner`

NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInnerWithDefaults

`func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInnerWithDefaults() *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner`

NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInnerWithDefaults instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTradeId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetTradeId() int64`

GetTradeId returns the TradeId field if non-nil, zero value otherwise.

### GetTradeIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetTradeIdOk() (*int64, bool)`

GetTradeIdOk returns a tuple with the TradeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetTradeId(v int64)`

SetTradeId sets TradeId field to given value.


### GetBaseBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseBatchId() string`

GetBaseBatchId returns the BaseBatchId field if non-nil, zero value otherwise.

### GetBaseBatchIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseBatchIdOk() (*string, bool)`

GetBaseBatchIdOk returns a tuple with the BaseBatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetBaseBatchId(v string)`

SetBaseBatchId sets BaseBatchId field to given value.

### HasBaseBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) HasBaseBatchId() bool`

HasBaseBatchId returns a boolean if a field has been set.

### SetBaseBatchIdNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetBaseBatchIdNil(b bool)`

 SetBaseBatchIdNil sets the value for BaseBatchId to be an explicit nil

### UnsetBaseBatchId
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) UnsetBaseBatchId()`

UnsetBaseBatchId ensures that no value is present for BaseBatchId, not even an explicit nil
### GetQuoteBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteBatchId() string`

GetQuoteBatchId returns the QuoteBatchId field if non-nil, zero value otherwise.

### GetQuoteBatchIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteBatchIdOk() (*string, bool)`

GetQuoteBatchIdOk returns a tuple with the QuoteBatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetQuoteBatchId(v string)`

SetQuoteBatchId sets QuoteBatchId field to given value.

### HasQuoteBatchId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) HasQuoteBatchId() bool`

HasQuoteBatchId returns a boolean if a field has been set.

### SetQuoteBatchIdNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetQuoteBatchIdNil(b bool)`

 SetQuoteBatchIdNil sets the value for QuoteBatchId to be an explicit nil

### UnsetQuoteBatchId
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) UnsetQuoteBatchId()`

UnsetQuoteBatchId ensures that no value is present for QuoteBatchId, not even an explicit nil
### GetBaseSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseSettled() bool`

GetBaseSettled returns the BaseSettled field if non-nil, zero value otherwise.

### GetBaseSettledOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseSettledOk() (*bool, bool)`

GetBaseSettledOk returns a tuple with the BaseSettled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetBaseSettled(v bool)`

SetBaseSettled sets BaseSettled field to given value.


### GetQuoteSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteSettled() bool`

GetQuoteSettled returns the QuoteSettled field if non-nil, zero value otherwise.

### GetQuoteSettledOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteSettledOk() (*bool, bool)`

GetQuoteSettledOk returns a tuple with the QuoteSettled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetQuoteSettled(v bool)`

SetQuoteSettled sets QuoteSettled field to given value.


### GetBaseAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseAmount() float64`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetBaseAmountOk() (*float64, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetBaseAmount(v float64)`

SetBaseAmount sets BaseAmount field to given value.


### GetQuoteAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteAmount() float64`

GetQuoteAmount returns the QuoteAmount field if non-nil, zero value otherwise.

### GetQuoteAmountOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetQuoteAmountOk() (*float64, bool)`

GetQuoteAmountOk returns a tuple with the QuoteAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetQuoteAmount(v float64)`

SetQuoteAmount sets QuoteAmount field to given value.


### GetFeeAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFeeAmount() float64`

GetFeeAmount returns the FeeAmount field if non-nil, zero value otherwise.

### GetFeeAmountOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFeeAmountOk() (*float64, bool)`

GetFeeAmountOk returns a tuple with the FeeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeAmount

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetFeeAmount(v float64)`

SetFeeAmount sets FeeAmount field to given value.


### GetFeeAssetId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFeeAssetId() int32`

GetFeeAssetId returns the FeeAssetId field if non-nil, zero value otherwise.

### GetFeeAssetIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFeeAssetIdOk() (*int32, bool)`

GetFeeAssetIdOk returns a tuple with the FeeAssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeAssetId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetFeeAssetId(v int32)`

SetFeeAssetId sets FeeAssetId field to given value.

### HasFeeAssetId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) HasFeeAssetId() bool`

HasFeeAssetId returns a boolean if a field has been set.

### SetFeeAssetIdNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetFeeAssetIdNil(b bool)`

 SetFeeAssetIdNil sets the value for FeeAssetId to be an explicit nil

### UnsetFeeAssetId
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) UnsetFeeAssetId()`

UnsetFeeAssetId ensures that no value is present for FeeAssetId, not even an explicit nil
### GetFilledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFilledAt() int64`

GetFilledAt returns the FilledAt field if non-nil, zero value otherwise.

### GetFilledAtOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) GetFilledAtOk() (*int64, bool)`

GetFilledAtOk returns a tuple with the FilledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner) SetFilledAt(v int64)`

SetFilledAt sets FilledAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


