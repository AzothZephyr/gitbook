# OrderPatch200ResponseResultOneOfAck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MsgSeqNum** | **int32** |  | 
**ClientOrderId** | **int32** |  | 
**RequestId** | **int32** | The request ID specified in the modify request. | 
**TransactTime** | **int32** | [Transact time](#transact-time) | 
**RemainingQuantity** | **int32** | The quantity remaining on the book after applying the modify request. | 
**SubaccountId** | **int32** |  | 
**MarketId** | **int32** |  | 
**Price** | **int32** |  | 
**Quantity** | **int32** | The quantity submitted in the modify request. | 
**CumulativeQuantity** | **int32** | The cumulative filled quantity for this order. | 
**ExchangeOrderId** | **int32** | [Exchange order ID](#exchange-order-id) | 

## Methods

### NewOrderPatch200ResponseResultOneOfAck

`func NewOrderPatch200ResponseResultOneOfAck(msgSeqNum int32, clientOrderId int32, requestId int32, transactTime int32, remainingQuantity int32, subaccountId int32, marketId int32, price int32, quantity int32, cumulativeQuantity int32, exchangeOrderId int32, ) *OrderPatch200ResponseResultOneOfAck`

NewOrderPatch200ResponseResultOneOfAck instantiates a new OrderPatch200ResponseResultOneOfAck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPatch200ResponseResultOneOfAckWithDefaults

`func NewOrderPatch200ResponseResultOneOfAckWithDefaults() *OrderPatch200ResponseResultOneOfAck`

NewOrderPatch200ResponseResultOneOfAckWithDefaults instantiates a new OrderPatch200ResponseResultOneOfAck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMsgSeqNum

`func (o *OrderPatch200ResponseResultOneOfAck) GetMsgSeqNum() int32`

GetMsgSeqNum returns the MsgSeqNum field if non-nil, zero value otherwise.

### GetMsgSeqNumOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetMsgSeqNumOk() (*int32, bool)`

GetMsgSeqNumOk returns a tuple with the MsgSeqNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsgSeqNum

`func (o *OrderPatch200ResponseResultOneOfAck) SetMsgSeqNum(v int32)`

SetMsgSeqNum sets MsgSeqNum field to given value.


### GetClientOrderId

`func (o *OrderPatch200ResponseResultOneOfAck) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderPatch200ResponseResultOneOfAck) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderPatch200ResponseResultOneOfAck) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderPatch200ResponseResultOneOfAck) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetTransactTime

`func (o *OrderPatch200ResponseResultOneOfAck) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *OrderPatch200ResponseResultOneOfAck) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetRemainingQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) GetRemainingQuantity() int32`

GetRemainingQuantity returns the RemainingQuantity field if non-nil, zero value otherwise.

### GetRemainingQuantityOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetRemainingQuantityOk() (*int32, bool)`

GetRemainingQuantityOk returns a tuple with the RemainingQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemainingQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) SetRemainingQuantity(v int32)`

SetRemainingQuantity sets RemainingQuantity field to given value.


### GetSubaccountId

`func (o *OrderPatch200ResponseResultOneOfAck) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderPatch200ResponseResultOneOfAck) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetMarketId

`func (o *OrderPatch200ResponseResultOneOfAck) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderPatch200ResponseResultOneOfAck) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetPrice

`func (o *OrderPatch200ResponseResultOneOfAck) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *OrderPatch200ResponseResultOneOfAck) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetCumulativeQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) GetCumulativeQuantity() int32`

GetCumulativeQuantity returns the CumulativeQuantity field if non-nil, zero value otherwise.

### GetCumulativeQuantityOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetCumulativeQuantityOk() (*int32, bool)`

GetCumulativeQuantityOk returns a tuple with the CumulativeQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCumulativeQuantity

`func (o *OrderPatch200ResponseResultOneOfAck) SetCumulativeQuantity(v int32)`

SetCumulativeQuantity sets CumulativeQuantity field to given value.


### GetExchangeOrderId

`func (o *OrderPatch200ResponseResultOneOfAck) GetExchangeOrderId() int32`

GetExchangeOrderId returns the ExchangeOrderId field if non-nil, zero value otherwise.

### GetExchangeOrderIdOk

`func (o *OrderPatch200ResponseResultOneOfAck) GetExchangeOrderIdOk() (*int32, bool)`

GetExchangeOrderIdOk returns a tuple with the ExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeOrderId

`func (o *OrderPatch200ResponseResultOneOfAck) SetExchangeOrderId(v int32)`

SetExchangeOrderId sets ExchangeOrderId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


