# BookMarketIdSnapshotGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Levels** | [**[]BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner**](BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner.md) |  | 
**LastTransactTime** | **int32** |  | 
**LastTradePrice** | Pointer to **NullableInt32** |  | [optional] 
**MarketState** | [**BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState**](BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState.md) |  | 
**Orders** | [**[]BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner**](BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner.md) |  | 

## Methods

### NewBookMarketIdSnapshotGet200ResponseResult

`func NewBookMarketIdSnapshotGet200ResponseResult(levels []BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner, lastTransactTime int32, marketState BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState, orders []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner, ) *BookMarketIdSnapshotGet200ResponseResult`

NewBookMarketIdSnapshotGet200ResponseResult instantiates a new BookMarketIdSnapshotGet200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookMarketIdSnapshotGet200ResponseResultWithDefaults

`func NewBookMarketIdSnapshotGet200ResponseResultWithDefaults() *BookMarketIdSnapshotGet200ResponseResult`

NewBookMarketIdSnapshotGet200ResponseResultWithDefaults instantiates a new BookMarketIdSnapshotGet200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLevels

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLevels() []BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner`

GetLevels returns the Levels field if non-nil, zero value otherwise.

### GetLevelsOk

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLevelsOk() (*[]BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner, bool)`

GetLevelsOk returns a tuple with the Levels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevels

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetLevels(v []BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner)`

SetLevels sets Levels field to given value.


### GetLastTransactTime

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLastTransactTime() int32`

GetLastTransactTime returns the LastTransactTime field if non-nil, zero value otherwise.

### GetLastTransactTimeOk

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLastTransactTimeOk() (*int32, bool)`

GetLastTransactTimeOk returns a tuple with the LastTransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastTransactTime

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetLastTransactTime(v int32)`

SetLastTransactTime sets LastTransactTime field to given value.


### GetLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLastTradePrice() int32`

GetLastTradePrice returns the LastTradePrice field if non-nil, zero value otherwise.

### GetLastTradePriceOk

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetLastTradePriceOk() (*int32, bool)`

GetLastTradePriceOk returns a tuple with the LastTradePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetLastTradePrice(v int32)`

SetLastTradePrice sets LastTradePrice field to given value.

### HasLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResult) HasLastTradePrice() bool`

HasLastTradePrice returns a boolean if a field has been set.

### SetLastTradePriceNil

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetLastTradePriceNil(b bool)`

 SetLastTradePriceNil sets the value for LastTradePrice to be an explicit nil

### UnsetLastTradePrice
`func (o *BookMarketIdSnapshotGet200ResponseResult) UnsetLastTradePrice()`

UnsetLastTradePrice ensures that no value is present for LastTradePrice, not even an explicit nil
### GetMarketState

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetMarketState() BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState`

GetMarketState returns the MarketState field if non-nil, zero value otherwise.

### GetMarketStateOk

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetMarketStateOk() (*BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState, bool)`

GetMarketStateOk returns a tuple with the MarketState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketState

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetMarketState(v BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState)`

SetMarketState sets MarketState field to given value.


### GetOrders

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetOrders() []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner`

GetOrders returns the Orders field if non-nil, zero value otherwise.

### GetOrdersOk

`func (o *BookMarketIdSnapshotGet200ResponseResult) GetOrdersOk() (*[]BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner, bool)`

GetOrdersOk returns a tuple with the Orders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrders

`func (o *BookMarketIdSnapshotGet200ResponseResult) SetOrders(v []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner)`

SetOrders sets Orders field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


