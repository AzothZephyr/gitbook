# OrderDelete200ResponseResultOneOfAck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MsgSeqNum** | **int32** |  | 
**ClientOrderId** | **int32** |  | 
**RequestId** | **int32** | If the Reason is &#x60;DISCONNECT&#x60;, &#x60;IOC&#x60;, &#x60;STP_RESTING&#x60;, or &#x60;STP_AGGRESSING&#x60;, this request ID will be &#x60;u64::MAX&#x60;. Otherwise, it will be the request ID of the initiated cancel action. For a mass cancel, each cancel order ack will have the MassCancel&#39;s request_id. | 
**TransactTime** | **int32** | [Transact time](#transact-time) | 
**SubaccountId** | **int32** |  | 
**Reason** | **int32** |  | 
**MarketId** | **int32** |  | 
**ExchangeOrderId** | **int32** | [Exchange order ID](#exchange-order-id) | 

## Methods

### NewOrderDelete200ResponseResultOneOfAck

`func NewOrderDelete200ResponseResultOneOfAck(msgSeqNum int32, clientOrderId int32, requestId int32, transactTime int32, subaccountId int32, reason int32, marketId int32, exchangeOrderId int32, ) *OrderDelete200ResponseResultOneOfAck`

NewOrderDelete200ResponseResultOneOfAck instantiates a new OrderDelete200ResponseResultOneOfAck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderDelete200ResponseResultOneOfAckWithDefaults

`func NewOrderDelete200ResponseResultOneOfAckWithDefaults() *OrderDelete200ResponseResultOneOfAck`

NewOrderDelete200ResponseResultOneOfAckWithDefaults instantiates a new OrderDelete200ResponseResultOneOfAck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMsgSeqNum

`func (o *OrderDelete200ResponseResultOneOfAck) GetMsgSeqNum() int32`

GetMsgSeqNum returns the MsgSeqNum field if non-nil, zero value otherwise.

### GetMsgSeqNumOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetMsgSeqNumOk() (*int32, bool)`

GetMsgSeqNumOk returns a tuple with the MsgSeqNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsgSeqNum

`func (o *OrderDelete200ResponseResultOneOfAck) SetMsgSeqNum(v int32)`

SetMsgSeqNum sets MsgSeqNum field to given value.


### GetClientOrderId

`func (o *OrderDelete200ResponseResultOneOfAck) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderDelete200ResponseResultOneOfAck) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderDelete200ResponseResultOneOfAck) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderDelete200ResponseResultOneOfAck) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetTransactTime

`func (o *OrderDelete200ResponseResultOneOfAck) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *OrderDelete200ResponseResultOneOfAck) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetSubaccountId

`func (o *OrderDelete200ResponseResultOneOfAck) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderDelete200ResponseResultOneOfAck) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetReason

`func (o *OrderDelete200ResponseResultOneOfAck) GetReason() int32`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetReasonOk() (*int32, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *OrderDelete200ResponseResultOneOfAck) SetReason(v int32)`

SetReason sets Reason field to given value.


### GetMarketId

`func (o *OrderDelete200ResponseResultOneOfAck) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderDelete200ResponseResultOneOfAck) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetExchangeOrderId

`func (o *OrderDelete200ResponseResultOneOfAck) GetExchangeOrderId() int32`

GetExchangeOrderId returns the ExchangeOrderId field if non-nil, zero value otherwise.

### GetExchangeOrderIdOk

`func (o *OrderDelete200ResponseResultOneOfAck) GetExchangeOrderIdOk() (*int32, bool)`

GetExchangeOrderIdOk returns a tuple with the ExchangeOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeOrderId

`func (o *OrderDelete200ResponseResultOneOfAck) SetExchangeOrderId(v int32)`

SetExchangeOrderId sets ExchangeOrderId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


