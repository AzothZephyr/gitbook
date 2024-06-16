# UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** |  | 
**TradeId** | **int64** |  | 
**OrderId** | **int64** |  | 
**Side** | **string** |  | 
**AggressingSide** | Pointer to **NullableString** |  | [optional] 
**Price** | Pointer to **NullableInt64** |  | [optional] 
**Quantity** | Pointer to **NullableInt64** |  | [optional] 
**BaseAmount** | **float64** |  | 
**QuoteAmount** | **float64** |  | 
**FeeAmount** | **float64** |  | 
**FeeAssetId** | Pointer to **NullableInt32** |  | [optional] 
**FilledAt** | **int64** |  | 

## Methods

### NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner

`func NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner(marketId int32, tradeId int64, orderId int64, side string, baseAmount float64, quoteAmount float64, feeAmount float64, filledAt int64, ) *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner`

NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner instantiates a new UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInnerWithDefaults

`func NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInnerWithDefaults() *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner`

NewUsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInnerWithDefaults instantiates a new UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetTradeId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetTradeId() int64`

GetTradeId returns the TradeId field if non-nil, zero value otherwise.

### GetTradeIdOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetTradeIdOk() (*int64, bool)`

GetTradeIdOk returns a tuple with the TradeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetTradeId(v int64)`

SetTradeId sets TradeId field to given value.


### GetOrderId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetOrderId() int64`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetOrderIdOk() (*int64, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetOrderId(v int64)`

SetOrderId sets OrderId field to given value.


### GetSide

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetSide() string`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetSideOk() (*string, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetSide(v string)`

SetSide sets Side field to given value.


### GetAggressingSide

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetAggressingSide() string`

GetAggressingSide returns the AggressingSide field if non-nil, zero value otherwise.

### GetAggressingSideOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetAggressingSideOk() (*string, bool)`

GetAggressingSideOk returns a tuple with the AggressingSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggressingSide

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetAggressingSide(v string)`

SetAggressingSide sets AggressingSide field to given value.

### HasAggressingSide

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) HasAggressingSide() bool`

HasAggressingSide returns a boolean if a field has been set.

### SetAggressingSideNil

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetAggressingSideNil(b bool)`

 SetAggressingSideNil sets the value for AggressingSide to be an explicit nil

### UnsetAggressingSide
`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) UnsetAggressingSide()`

UnsetAggressingSide ensures that no value is present for AggressingSide, not even an explicit nil
### GetPrice

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetPrice() int64`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetPriceOk() (*int64, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetPrice(v int64)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetQuantity

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetQuantity() int64`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetQuantityOk() (*int64, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetQuantity(v int64)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### SetQuantityNil

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetQuantityNil(b bool)`

 SetQuantityNil sets the value for Quantity to be an explicit nil

### UnsetQuantity
`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) UnsetQuantity()`

UnsetQuantity ensures that no value is present for Quantity, not even an explicit nil
### GetBaseAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetBaseAmount() float64`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetBaseAmountOk() (*float64, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetBaseAmount(v float64)`

SetBaseAmount sets BaseAmount field to given value.


### GetQuoteAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetQuoteAmount() float64`

GetQuoteAmount returns the QuoteAmount field if non-nil, zero value otherwise.

### GetQuoteAmountOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetQuoteAmountOk() (*float64, bool)`

GetQuoteAmountOk returns a tuple with the QuoteAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetQuoteAmount(v float64)`

SetQuoteAmount sets QuoteAmount field to given value.


### GetFeeAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFeeAmount() float64`

GetFeeAmount returns the FeeAmount field if non-nil, zero value otherwise.

### GetFeeAmountOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFeeAmountOk() (*float64, bool)`

GetFeeAmountOk returns a tuple with the FeeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeAmount

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetFeeAmount(v float64)`

SetFeeAmount sets FeeAmount field to given value.


### GetFeeAssetId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFeeAssetId() int32`

GetFeeAssetId returns the FeeAssetId field if non-nil, zero value otherwise.

### GetFeeAssetIdOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFeeAssetIdOk() (*int32, bool)`

GetFeeAssetIdOk returns a tuple with the FeeAssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeAssetId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetFeeAssetId(v int32)`

SetFeeAssetId sets FeeAssetId field to given value.

### HasFeeAssetId

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) HasFeeAssetId() bool`

HasFeeAssetId returns a boolean if a field has been set.

### SetFeeAssetIdNil

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetFeeAssetIdNil(b bool)`

 SetFeeAssetIdNil sets the value for FeeAssetId to be an explicit nil

### UnsetFeeAssetId
`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) UnsetFeeAssetId()`

UnsetFeeAssetId ensures that no value is present for FeeAssetId, not even an explicit nil
### GetFilledAt

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFilledAt() int64`

GetFilledAt returns the FilledAt field if non-nil, zero value otherwise.

### GetFilledAtOk

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) GetFilledAtOk() (*int64, bool)`

GetFilledAtOk returns a tuple with the FilledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilledAt

`func (o *UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner) SetFilledAt(v int64)`

SetFilledAt sets FilledAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


