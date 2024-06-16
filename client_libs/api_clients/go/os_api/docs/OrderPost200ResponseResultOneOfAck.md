# OrderPost200ResponseResultOneOfAck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MsgSeqNum** | **int32** |  | 
**ClientOrderId** | **int32** | The client order ID specified in the new-order request. | 
**RequestId** | **int32** | The request ID specified in the new-order request. | 
**ExchangeOrderId** | **int32** | [Exchange order ID](#exchange-order-id) | 
**MarketId** | **int32** |  | 
**Price** | Pointer to **NullableInt32** | If the order ultimately rests, the &#x60;price&#x60; field will include the resting price. | [optional] 
**Quantity** | **int32** | The quantity submitted in the new-order request. | 
**Side** | **int32** |  | 
**TimeInForce** | **int32** |  | 
**OrderType** | **int32** |  | 
**TransactTime** | **int32** | [Transact time](#transact-time) | 
**SubaccountId** | **int32** |  | 
**CancelOnDisconnect** | **bool** |  | 

## Methods

### NewOrderPost200ResponseResultOneOfAck

`func NewOrderPost200ResponseResultOneOfAck(msgSeqNum int32, clientOrderId int32, requestId int32, exchangeOrderId int32, marketId int32, quantity int32, side int32, timeInForce int32, orderType int32, transactTime int32, subaccountId int32, cancelOnDisconnect bool, ) *OrderPost200ResponseResultOneOfAck`

NewOrderPost200ResponseResultOneOfAck instantiates a new OrderPost200ResponseResultOneOfAck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPost200ResponseResultOneOfAckWithDefaults

`func NewOrderPost200ResponseResultOneOfAckWithDefaults() *OrderPost200ResponseResultOneOfAck`

NewOrderPost200ResponseResultOneOfAckWithDefaults instantiates a new OrderPost200ResponseResultOneOfAck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMsgSeqNum

`func (o *OrderPost200ResponseResultOneOfAck) GetMsgSeqNum() int32`

GetMsgSeqNum returns the MsgSeqNum field if non-nil, zero value otherwise.

### GetMsgSeqNumOk

`func (o *OrderPost200ResponseResultOneOfAck) GetMsgSeqNumOk() (*int32, bool)`

GetMsgSeqNumOk returns a tuple with the MsgSeqNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsgSeqNum

`func (o *OrderPost200ResponseResultOneOfAck) SetMsgSeqNum(v int32)`

SetMsgSeqNum sets MsgSeqNum field to given value.


### GetClientOrderId

`func (o *OrderPost200ResponseResultOneOfAck) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderPost200ResponseResultOneOfAck) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderPost200ResponseResultOneOfAck) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderPost200ResponseResultOneOfAck) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderPost200ResponseResultOneOfAck) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderPost200ResponseResultOneOfAck) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetExchangeOrderId

`func (o *OrderPost200ResponseResultOneOfAck) GetExchangeOrderId() int32`

GetExchangeOrderId returns the ExchangeOrderId field if non-nil, zero value otherwise.

### GetExchangeOrderIdOk

`func (o *OrderPost200ResponseResultOneOfAck) GetExchangeOrderIdOk() (*int32, bool)`

GetExchangeOrderIdOk returns a tuple with the ExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeOrderId

`func (o *OrderPost200ResponseResultOneOfAck) SetExchangeOrderId(v int32)`

SetExchangeOrderId sets ExchangeOrderId field to given value.


### GetMarketId

`func (o *OrderPost200ResponseResultOneOfAck) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderPost200ResponseResultOneOfAck) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderPost200ResponseResultOneOfAck) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetPrice

`func (o *OrderPost200ResponseResultOneOfAck) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *OrderPost200ResponseResultOneOfAck) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *OrderPost200ResponseResultOneOfAck) SetPrice(v int32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *OrderPost200ResponseResultOneOfAck) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *OrderPost200ResponseResultOneOfAck) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *OrderPost200ResponseResultOneOfAck) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetQuantity

`func (o *OrderPost200ResponseResultOneOfAck) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OrderPost200ResponseResultOneOfAck) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OrderPost200ResponseResultOneOfAck) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetSide

`func (o *OrderPost200ResponseResultOneOfAck) GetSide() int32`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *OrderPost200ResponseResultOneOfAck) GetSideOk() (*int32, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *OrderPost200ResponseResultOneOfAck) SetSide(v int32)`

SetSide sets Side field to given value.


### GetTimeInForce

`func (o *OrderPost200ResponseResultOneOfAck) GetTimeInForce() int32`

GetTimeInForce returns the TimeInForce field if non-nil, zero value otherwise.

### GetTimeInForceOk

`func (o *OrderPost200ResponseResultOneOfAck) GetTimeInForceOk() (*int32, bool)`

GetTimeInForceOk returns a tuple with the TimeInForce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInForce

`func (o *OrderPost200ResponseResultOneOfAck) SetTimeInForce(v int32)`

SetTimeInForce sets TimeInForce field to given value.


### GetOrderType

`func (o *OrderPost200ResponseResultOneOfAck) GetOrderType() int32`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *OrderPost200ResponseResultOneOfAck) GetOrderTypeOk() (*int32, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *OrderPost200ResponseResultOneOfAck) SetOrderType(v int32)`

SetOrderType sets OrderType field to given value.


### GetTransactTime

`func (o *OrderPost200ResponseResultOneOfAck) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *OrderPost200ResponseResultOneOfAck) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *OrderPost200ResponseResultOneOfAck) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetSubaccountId

`func (o *OrderPost200ResponseResultOneOfAck) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderPost200ResponseResultOneOfAck) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderPost200ResponseResultOneOfAck) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetCancelOnDisconnect

`func (o *OrderPost200ResponseResultOneOfAck) GetCancelOnDisconnect() bool`

GetCancelOnDisconnect returns the CancelOnDisconnect field if non-nil, zero value otherwise.

### GetCancelOnDisconnectOk

`func (o *OrderPost200ResponseResultOneOfAck) GetCancelOnDisconnectOk() (*bool, bool)`

GetCancelOnDisconnectOk returns a tuple with the CancelOnDisconnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelOnDisconnect

`func (o *OrderPost200ResponseResultOneOfAck) SetCancelOnDisconnect(v bool)`

SetCancelOnDisconnect sets CancelOnDisconnect field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


