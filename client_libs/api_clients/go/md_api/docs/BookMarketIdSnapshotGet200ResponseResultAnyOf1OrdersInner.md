# BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Price** | **int32** |  | 
**Quantity** | **int32** |  | 
**ExchangeOrderId** | **int32** | [Exchange order ID](./websocket-trade-api.md#exchange-order-id) | 
**Side** | **int32** |  | 
**Priority** | **int32** | Order priority for execution. Valid within a price level and side. That is, orders must first be sorted by side and price (in descending order for bids and ascending for asks), and then the OrderPriority within the level. A lower value is a higher priority. | 

## Methods

### NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner

`func NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner(price int32, quantity int32, exchangeOrderId int32, side int32, priority int32, ) *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner`

NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner instantiates a new BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInnerWithDefaults

`func NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInnerWithDefaults() *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner`

NewBookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInnerWithDefaults instantiates a new BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrice

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQuantity

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetExchangeOrderId

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetExchangeOrderId() int32`

GetExchangeOrderId returns the ExchangeOrderId field if non-nil, zero value otherwise.

### GetExchangeOrderIdOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetExchangeOrderIdOk() (*int32, bool)`

GetExchangeOrderIdOk returns a tuple with the ExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeOrderId

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) SetExchangeOrderId(v int32)`

SetExchangeOrderId sets ExchangeOrderId field to given value.


### GetSide

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetSide() int32`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetSideOk() (*int32, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) SetSide(v int32)`

SetSide sets Side field to given value.


### GetPriority

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner) SetPriority(v int32)`

SetPriority sets Priority field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


