# TickersSnapshotGet200ResponseResultTopsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** |  | 
**TransactTime** | **int32** | The [transact time](./websocket-trade-api.md#transact-time) of the latest book update on this market. | 
**BidPrice** | Pointer to **NullableInt32** | The best bid price. | [optional] 
**BidQuantity** | Pointer to **NullableInt32** | The total bid quantity at the best bid price. | [optional] 
**AskPrice** | Pointer to **NullableInt32** | The best ask price. | [optional] 
**AskQuantity** | Pointer to **NullableInt32** | The total ask quantity at the best ask price. | [optional] 
**LastPrice** | Pointer to **NullableInt32** | The last trade price. | [optional] 
**Rolling24hPrice** | Pointer to **NullableInt32** | The 24h open price. | [optional] 
**ImpliedBidPrice** | Pointer to **NullableInt32** |  | [optional] 
**ImpliedBidQuantity** | Pointer to **NullableInt32** |  | [optional] 
**ImpliedAskPrice** | Pointer to **NullableInt32** |  | [optional] 
**ImpliedAskQuantity** | Pointer to **NullableInt32** |  | [optional] 
**MarketState** | **int32** |  | 

## Methods

### NewTickersSnapshotGet200ResponseResultTopsInner

`func NewTickersSnapshotGet200ResponseResultTopsInner(marketId int32, transactTime int32, marketState int32, ) *TickersSnapshotGet200ResponseResultTopsInner`

NewTickersSnapshotGet200ResponseResultTopsInner instantiates a new TickersSnapshotGet200ResponseResultTopsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTickersSnapshotGet200ResponseResultTopsInnerWithDefaults

`func NewTickersSnapshotGet200ResponseResultTopsInnerWithDefaults() *TickersSnapshotGet200ResponseResultTopsInner`

NewTickersSnapshotGet200ResponseResultTopsInnerWithDefaults instantiates a new TickersSnapshotGet200ResponseResultTopsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetTransactTime

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetBidPrice() int32`

GetBidPrice returns the BidPrice field if non-nil, zero value otherwise.

### GetBidPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetBidPriceOk() (*int32, bool)`

GetBidPriceOk returns a tuple with the BidPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetBidPrice(v int32)`

SetBidPrice sets BidPrice field to given value.

### HasBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasBidPrice() bool`

HasBidPrice returns a boolean if a field has been set.

### SetBidPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetBidPriceNil(b bool)`

 SetBidPriceNil sets the value for BidPrice to be an explicit nil

### UnsetBidPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetBidPrice()`

UnsetBidPrice ensures that no value is present for BidPrice, not even an explicit nil
### GetBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetBidQuantity() int32`

GetBidQuantity returns the BidQuantity field if non-nil, zero value otherwise.

### GetBidQuantityOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetBidQuantityOk() (*int32, bool)`

GetBidQuantityOk returns a tuple with the BidQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetBidQuantity(v int32)`

SetBidQuantity sets BidQuantity field to given value.

### HasBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasBidQuantity() bool`

HasBidQuantity returns a boolean if a field has been set.

### SetBidQuantityNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetBidQuantityNil(b bool)`

 SetBidQuantityNil sets the value for BidQuantity to be an explicit nil

### UnsetBidQuantity
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetBidQuantity()`

UnsetBidQuantity ensures that no value is present for BidQuantity, not even an explicit nil
### GetAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetAskPrice() int32`

GetAskPrice returns the AskPrice field if non-nil, zero value otherwise.

### GetAskPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetAskPriceOk() (*int32, bool)`

GetAskPriceOk returns a tuple with the AskPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetAskPrice(v int32)`

SetAskPrice sets AskPrice field to given value.

### HasAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasAskPrice() bool`

HasAskPrice returns a boolean if a field has been set.

### SetAskPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetAskPriceNil(b bool)`

 SetAskPriceNil sets the value for AskPrice to be an explicit nil

### UnsetAskPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetAskPrice()`

UnsetAskPrice ensures that no value is present for AskPrice, not even an explicit nil
### GetAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetAskQuantity() int32`

GetAskQuantity returns the AskQuantity field if non-nil, zero value otherwise.

### GetAskQuantityOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetAskQuantityOk() (*int32, bool)`

GetAskQuantityOk returns a tuple with the AskQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetAskQuantity(v int32)`

SetAskQuantity sets AskQuantity field to given value.

### HasAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasAskQuantity() bool`

HasAskQuantity returns a boolean if a field has been set.

### SetAskQuantityNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetAskQuantityNil(b bool)`

 SetAskQuantityNil sets the value for AskQuantity to be an explicit nil

### UnsetAskQuantity
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetAskQuantity()`

UnsetAskQuantity ensures that no value is present for AskQuantity, not even an explicit nil
### GetLastPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetLastPrice() int32`

GetLastPrice returns the LastPrice field if non-nil, zero value otherwise.

### GetLastPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetLastPriceOk() (*int32, bool)`

GetLastPriceOk returns a tuple with the LastPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetLastPrice(v int32)`

SetLastPrice sets LastPrice field to given value.

### HasLastPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasLastPrice() bool`

HasLastPrice returns a boolean if a field has been set.

### SetLastPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetLastPriceNil(b bool)`

 SetLastPriceNil sets the value for LastPrice to be an explicit nil

### UnsetLastPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetLastPrice()`

UnsetLastPrice ensures that no value is present for LastPrice, not even an explicit nil
### GetRolling24hPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetRolling24hPrice() int32`

GetRolling24hPrice returns the Rolling24hPrice field if non-nil, zero value otherwise.

### GetRolling24hPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetRolling24hPriceOk() (*int32, bool)`

GetRolling24hPriceOk returns a tuple with the Rolling24hPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolling24hPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetRolling24hPrice(v int32)`

SetRolling24hPrice sets Rolling24hPrice field to given value.

### HasRolling24hPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasRolling24hPrice() bool`

HasRolling24hPrice returns a boolean if a field has been set.

### SetRolling24hPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetRolling24hPriceNil(b bool)`

 SetRolling24hPriceNil sets the value for Rolling24hPrice to be an explicit nil

### UnsetRolling24hPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetRolling24hPrice()`

UnsetRolling24hPrice ensures that no value is present for Rolling24hPrice, not even an explicit nil
### GetImpliedBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedBidPrice() int32`

GetImpliedBidPrice returns the ImpliedBidPrice field if non-nil, zero value otherwise.

### GetImpliedBidPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedBidPriceOk() (*int32, bool)`

GetImpliedBidPriceOk returns a tuple with the ImpliedBidPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpliedBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedBidPrice(v int32)`

SetImpliedBidPrice sets ImpliedBidPrice field to given value.

### HasImpliedBidPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasImpliedBidPrice() bool`

HasImpliedBidPrice returns a boolean if a field has been set.

### SetImpliedBidPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedBidPriceNil(b bool)`

 SetImpliedBidPriceNil sets the value for ImpliedBidPrice to be an explicit nil

### UnsetImpliedBidPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetImpliedBidPrice()`

UnsetImpliedBidPrice ensures that no value is present for ImpliedBidPrice, not even an explicit nil
### GetImpliedBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedBidQuantity() int32`

GetImpliedBidQuantity returns the ImpliedBidQuantity field if non-nil, zero value otherwise.

### GetImpliedBidQuantityOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedBidQuantityOk() (*int32, bool)`

GetImpliedBidQuantityOk returns a tuple with the ImpliedBidQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpliedBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedBidQuantity(v int32)`

SetImpliedBidQuantity sets ImpliedBidQuantity field to given value.

### HasImpliedBidQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasImpliedBidQuantity() bool`

HasImpliedBidQuantity returns a boolean if a field has been set.

### SetImpliedBidQuantityNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedBidQuantityNil(b bool)`

 SetImpliedBidQuantityNil sets the value for ImpliedBidQuantity to be an explicit nil

### UnsetImpliedBidQuantity
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetImpliedBidQuantity()`

UnsetImpliedBidQuantity ensures that no value is present for ImpliedBidQuantity, not even an explicit nil
### GetImpliedAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedAskPrice() int32`

GetImpliedAskPrice returns the ImpliedAskPrice field if non-nil, zero value otherwise.

### GetImpliedAskPriceOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedAskPriceOk() (*int32, bool)`

GetImpliedAskPriceOk returns a tuple with the ImpliedAskPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpliedAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedAskPrice(v int32)`

SetImpliedAskPrice sets ImpliedAskPrice field to given value.

### HasImpliedAskPrice

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasImpliedAskPrice() bool`

HasImpliedAskPrice returns a boolean if a field has been set.

### SetImpliedAskPriceNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedAskPriceNil(b bool)`

 SetImpliedAskPriceNil sets the value for ImpliedAskPrice to be an explicit nil

### UnsetImpliedAskPrice
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetImpliedAskPrice()`

UnsetImpliedAskPrice ensures that no value is present for ImpliedAskPrice, not even an explicit nil
### GetImpliedAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedAskQuantity() int32`

GetImpliedAskQuantity returns the ImpliedAskQuantity field if non-nil, zero value otherwise.

### GetImpliedAskQuantityOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetImpliedAskQuantityOk() (*int32, bool)`

GetImpliedAskQuantityOk returns a tuple with the ImpliedAskQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpliedAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedAskQuantity(v int32)`

SetImpliedAskQuantity sets ImpliedAskQuantity field to given value.

### HasImpliedAskQuantity

`func (o *TickersSnapshotGet200ResponseResultTopsInner) HasImpliedAskQuantity() bool`

HasImpliedAskQuantity returns a boolean if a field has been set.

### SetImpliedAskQuantityNil

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetImpliedAskQuantityNil(b bool)`

 SetImpliedAskQuantityNil sets the value for ImpliedAskQuantity to be an explicit nil

### UnsetImpliedAskQuantity
`func (o *TickersSnapshotGet200ResponseResultTopsInner) UnsetImpliedAskQuantity()`

UnsetImpliedAskQuantity ensures that no value is present for ImpliedAskQuantity, not even an explicit nil
### GetMarketState

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetMarketState() int32`

GetMarketState returns the MarketState field if non-nil, zero value otherwise.

### GetMarketStateOk

`func (o *TickersSnapshotGet200ResponseResultTopsInner) GetMarketStateOk() (*int32, bool)`

GetMarketStateOk returns a tuple with the MarketState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketState

`func (o *TickersSnapshotGet200ResponseResultTopsInner) SetMarketState(v int32)`

SetMarketState sets MarketState field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


