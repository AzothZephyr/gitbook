# OrdersGet200ResponseResultOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientOrderId** | **int32** | The client order ID specified in the new-order request. | 
**ExchangeOrderId** | **int32** | [Exchange order ID](#exchange-order-id) | 
**MarketId** | **int32** |  | 
**Price** | **int32** |  | 
**OrderQuantity** | **int32** | The quantity submitted in the latest quantity-modifying request. If the order has not been modified, then it is the quantity on the new-order-ack. If it has been modified, then it is the quantity of the latest modify-order-ack. | 
**Side** | **int32** |  | 
**TimeInForce** | **int32** |  | 
**OrderType** | **int32** |  | 
**RemainingQuantity** | **int32** | The current remaining quantity on the book. | 
**RestTime** | **int32** | [Transact time](#transact-time) of the NewOrderAck | 
**SubaccountId** | **int32** |  | 
**CumulativeQuantity** | **int32** | The cumulative filled quantity for this order. | 
**CancelOnDisconnect** | **bool** |  | 

## Methods

### NewOrdersGet200ResponseResultOrdersInner

`func NewOrdersGet200ResponseResultOrdersInner(clientOrderId int32, exchangeOrderId int32, marketId int32, price int32, orderQuantity int32, side int32, timeInForce int32, orderType int32, remainingQuantity int32, restTime int32, subaccountId int32, cumulativeQuantity int32, cancelOnDisconnect bool, ) *OrdersGet200ResponseResultOrdersInner`

NewOrdersGet200ResponseResultOrdersInner instantiates a new OrdersGet200ResponseResultOrdersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrdersGet200ResponseResultOrdersInnerWithDefaults

`func NewOrdersGet200ResponseResultOrdersInnerWithDefaults() *OrdersGet200ResponseResultOrdersInner`

NewOrdersGet200ResponseResultOrdersInnerWithDefaults instantiates a new OrdersGet200ResponseResultOrdersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientOrderId

`func (o *OrdersGet200ResponseResultOrdersInner) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrdersGet200ResponseResultOrdersInner) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetExchangeOrderId

`func (o *OrdersGet200ResponseResultOrdersInner) GetExchangeOrderId() int32`

GetExchangeOrderId returns the ExchangeOrderId field if non-nil, zero value otherwise.

### GetExchangeOrderIdOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetExchangeOrderIdOk() (*int32, bool)`

GetExchangeOrderIdOk returns a tuple with the ExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeOrderId

`func (o *OrdersGet200ResponseResultOrdersInner) SetExchangeOrderId(v int32)`

SetExchangeOrderId sets ExchangeOrderId field to given value.


### GetMarketId

`func (o *OrdersGet200ResponseResultOrdersInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrdersGet200ResponseResultOrdersInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetPrice

`func (o *OrdersGet200ResponseResultOrdersInner) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *OrdersGet200ResponseResultOrdersInner) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetOrderQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) GetOrderQuantity() int32`

GetOrderQuantity returns the OrderQuantity field if non-nil, zero value otherwise.

### GetOrderQuantityOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetOrderQuantityOk() (*int32, bool)`

GetOrderQuantityOk returns a tuple with the OrderQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) SetOrderQuantity(v int32)`

SetOrderQuantity sets OrderQuantity field to given value.


### GetSide

`func (o *OrdersGet200ResponseResultOrdersInner) GetSide() int32`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetSideOk() (*int32, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *OrdersGet200ResponseResultOrdersInner) SetSide(v int32)`

SetSide sets Side field to given value.


### GetTimeInForce

`func (o *OrdersGet200ResponseResultOrdersInner) GetTimeInForce() int32`

GetTimeInForce returns the TimeInForce field if non-nil, zero value otherwise.

### GetTimeInForceOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetTimeInForceOk() (*int32, bool)`

GetTimeInForceOk returns a tuple with the TimeInForce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInForce

`func (o *OrdersGet200ResponseResultOrdersInner) SetTimeInForce(v int32)`

SetTimeInForce sets TimeInForce field to given value.


### GetOrderType

`func (o *OrdersGet200ResponseResultOrdersInner) GetOrderType() int32`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetOrderTypeOk() (*int32, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *OrdersGet200ResponseResultOrdersInner) SetOrderType(v int32)`

SetOrderType sets OrderType field to given value.


### GetRemainingQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) GetRemainingQuantity() int32`

GetRemainingQuantity returns the RemainingQuantity field if non-nil, zero value otherwise.

### GetRemainingQuantityOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetRemainingQuantityOk() (*int32, bool)`

GetRemainingQuantityOk returns a tuple with the RemainingQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemainingQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) SetRemainingQuantity(v int32)`

SetRemainingQuantity sets RemainingQuantity field to given value.


### GetRestTime

`func (o *OrdersGet200ResponseResultOrdersInner) GetRestTime() int32`

GetRestTime returns the RestTime field if non-nil, zero value otherwise.

### GetRestTimeOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetRestTimeOk() (*int32, bool)`

GetRestTimeOk returns a tuple with the RestTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestTime

`func (o *OrdersGet200ResponseResultOrdersInner) SetRestTime(v int32)`

SetRestTime sets RestTime field to given value.


### GetSubaccountId

`func (o *OrdersGet200ResponseResultOrdersInner) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrdersGet200ResponseResultOrdersInner) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetCumulativeQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) GetCumulativeQuantity() int32`

GetCumulativeQuantity returns the CumulativeQuantity field if non-nil, zero value otherwise.

### GetCumulativeQuantityOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetCumulativeQuantityOk() (*int32, bool)`

GetCumulativeQuantityOk returns a tuple with the CumulativeQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCumulativeQuantity

`func (o *OrdersGet200ResponseResultOrdersInner) SetCumulativeQuantity(v int32)`

SetCumulativeQuantity sets CumulativeQuantity field to given value.


### GetCancelOnDisconnect

`func (o *OrdersGet200ResponseResultOrdersInner) GetCancelOnDisconnect() bool`

GetCancelOnDisconnect returns the CancelOnDisconnect field if non-nil, zero value otherwise.

### GetCancelOnDisconnectOk

`func (o *OrdersGet200ResponseResultOrdersInner) GetCancelOnDisconnectOk() (*bool, bool)`

GetCancelOnDisconnectOk returns a tuple with the CancelOnDisconnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelOnDisconnect

`func (o *OrdersGet200ResponseResultOrdersInner) SetCancelOnDisconnect(v bool)`

SetCancelOnDisconnect sets CancelOnDisconnect field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


