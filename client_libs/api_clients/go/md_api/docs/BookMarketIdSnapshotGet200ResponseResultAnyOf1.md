# BookMarketIdSnapshotGet200ResponseResultAnyOf1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Orders** | [**[]BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner**](BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner.md) |  | 
**LastTransactTime** | **int32** |  | 
**LastTradePrice** | Pointer to **NullableInt32** |  | [optional] 
**MarketState** | [**BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState**](BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState.md) |  | 

## Methods

### NewBookMarketIdSnapshotGet200ResponseResultAnyOf1

`func NewBookMarketIdSnapshotGet200ResponseResultAnyOf1(orders []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner, lastTransactTime int32, marketState BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState, ) *BookMarketIdSnapshotGet200ResponseResultAnyOf1`

NewBookMarketIdSnapshotGet200ResponseResultAnyOf1 instantiates a new BookMarketIdSnapshotGet200ResponseResultAnyOf1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookMarketIdSnapshotGet200ResponseResultAnyOf1WithDefaults

`func NewBookMarketIdSnapshotGet200ResponseResultAnyOf1WithDefaults() *BookMarketIdSnapshotGet200ResponseResultAnyOf1`

NewBookMarketIdSnapshotGet200ResponseResultAnyOf1WithDefaults instantiates a new BookMarketIdSnapshotGet200ResponseResultAnyOf1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrders

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetOrders() []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner`

GetOrders returns the Orders field if non-nil, zero value otherwise.

### GetOrdersOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetOrdersOk() (*[]BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner, bool)`

GetOrdersOk returns a tuple with the Orders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrders

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) SetOrders(v []BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner)`

SetOrders sets Orders field to given value.


### GetLastTransactTime

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetLastTransactTime() int32`

GetLastTransactTime returns the LastTransactTime field if non-nil, zero value otherwise.

### GetLastTransactTimeOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetLastTransactTimeOk() (*int32, bool)`

GetLastTransactTimeOk returns a tuple with the LastTransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastTransactTime

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) SetLastTransactTime(v int32)`

SetLastTransactTime sets LastTransactTime field to given value.


### GetLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetLastTradePrice() int32`

GetLastTradePrice returns the LastTradePrice field if non-nil, zero value otherwise.

### GetLastTradePriceOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetLastTradePriceOk() (*int32, bool)`

GetLastTradePriceOk returns a tuple with the LastTradePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) SetLastTradePrice(v int32)`

SetLastTradePrice sets LastTradePrice field to given value.

### HasLastTradePrice

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) HasLastTradePrice() bool`

HasLastTradePrice returns a boolean if a field has been set.

### SetLastTradePriceNil

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) SetLastTradePriceNil(b bool)`

 SetLastTradePriceNil sets the value for LastTradePrice to be an explicit nil

### UnsetLastTradePrice
`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) UnsetLastTradePrice()`

UnsetLastTradePrice ensures that no value is present for LastTradePrice, not even an explicit nil
### GetMarketState

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetMarketState() BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState`

GetMarketState returns the MarketState field if non-nil, zero value otherwise.

### GetMarketStateOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) GetMarketStateOk() (*BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState, bool)`

GetMarketStateOk returns a tuple with the MarketState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketState

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1) SetMarketState(v BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState)`

SetMarketState sets MarketState field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


