# BookMarketIdRecentTradesGet200ResponseResultTradesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TradeId** | **int32** | The ID assigned to this trade. All trades that occur from the same event will be assigned the same ID, and are considered to be an atomic batch. | 
**Price** | **int32** | The price that this trade occurred at. | 
**AggressingSide** | **int32** | The side of the aggressing order. | 
**RestingExchangeOrderId** | **int32** | The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the resting order. | 
**FillQuantity** | **int32** |  | 
**TransactTime** | **int32** | The [transact time](./websocket-trade-api.md#transact-time) assigned by the matching engine for this trade. All trades that occur from the same event will be assigned the same transact time. | 
**AggressingExchangeOrderId** | **int32** | The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the aggressing order. | 

## Methods

### NewBookMarketIdRecentTradesGet200ResponseResultTradesInner

`func NewBookMarketIdRecentTradesGet200ResponseResultTradesInner(tradeId int32, price int32, aggressingSide int32, restingExchangeOrderId int32, fillQuantity int32, transactTime int32, aggressingExchangeOrderId int32, ) *BookMarketIdRecentTradesGet200ResponseResultTradesInner`

NewBookMarketIdRecentTradesGet200ResponseResultTradesInner instantiates a new BookMarketIdRecentTradesGet200ResponseResultTradesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookMarketIdRecentTradesGet200ResponseResultTradesInnerWithDefaults

`func NewBookMarketIdRecentTradesGet200ResponseResultTradesInnerWithDefaults() *BookMarketIdRecentTradesGet200ResponseResultTradesInner`

NewBookMarketIdRecentTradesGet200ResponseResultTradesInnerWithDefaults instantiates a new BookMarketIdRecentTradesGet200ResponseResultTradesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTradeId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTradeId() int32`

GetTradeId returns the TradeId field if non-nil, zero value otherwise.

### GetTradeIdOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTradeIdOk() (*int32, bool)`

GetTradeIdOk returns a tuple with the TradeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetTradeId(v int32)`

SetTradeId sets TradeId field to given value.


### GetPrice

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetAggressingSide

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingSide() int32`

GetAggressingSide returns the AggressingSide field if non-nil, zero value otherwise.

### GetAggressingSideOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingSideOk() (*int32, bool)`

GetAggressingSideOk returns a tuple with the AggressingSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggressingSide

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetAggressingSide(v int32)`

SetAggressingSide sets AggressingSide field to given value.


### GetRestingExchangeOrderId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetRestingExchangeOrderId() int32`

GetRestingExchangeOrderId returns the RestingExchangeOrderId field if non-nil, zero value otherwise.

### GetRestingExchangeOrderIdOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetRestingExchangeOrderIdOk() (*int32, bool)`

GetRestingExchangeOrderIdOk returns a tuple with the RestingExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestingExchangeOrderId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetRestingExchangeOrderId(v int32)`

SetRestingExchangeOrderId sets RestingExchangeOrderId field to given value.


### GetFillQuantity

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetFillQuantity() int32`

GetFillQuantity returns the FillQuantity field if non-nil, zero value otherwise.

### GetFillQuantityOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetFillQuantityOk() (*int32, bool)`

GetFillQuantityOk returns a tuple with the FillQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillQuantity

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetFillQuantity(v int32)`

SetFillQuantity sets FillQuantity field to given value.


### GetTransactTime

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetAggressingExchangeOrderId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingExchangeOrderId() int32`

GetAggressingExchangeOrderId returns the AggressingExchangeOrderId field if non-nil, zero value otherwise.

### GetAggressingExchangeOrderIdOk

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingExchangeOrderIdOk() (*int32, bool)`

GetAggressingExchangeOrderIdOk returns a tuple with the AggressingExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggressingExchangeOrderId

`func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetAggressingExchangeOrderId(v int32)`

SetAggressingExchangeOrderId sets AggressingExchangeOrderId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


