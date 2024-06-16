# OrdersDelete200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MsgSeqNum** | **int32** |  | 
**SubaccountId** | **int32** |  | 
**RequestId** | **int32** | The request ID specified in the mass-cancel request. | 
**TransactTime** | **int32** | [Transact time](#transact-time) | 
**Reason** | Pointer to **NullableInt32** |  | [optional] 
**TotalAffectedOrders** | **int32** | The total number of orders that were canceled. | 

## Methods

### NewOrdersDelete200ResponseResult

`func NewOrdersDelete200ResponseResult(msgSeqNum int32, subaccountId int32, requestId int32, transactTime int32, totalAffectedOrders int32, ) *OrdersDelete200ResponseResult`

NewOrdersDelete200ResponseResult instantiates a new OrdersDelete200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrdersDelete200ResponseResultWithDefaults

`func NewOrdersDelete200ResponseResultWithDefaults() *OrdersDelete200ResponseResult`

NewOrdersDelete200ResponseResultWithDefaults instantiates a new OrdersDelete200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMsgSeqNum

`func (o *OrdersDelete200ResponseResult) GetMsgSeqNum() int32`

GetMsgSeqNum returns the MsgSeqNum field if non-nil, zero value otherwise.

### GetMsgSeqNumOk

`func (o *OrdersDelete200ResponseResult) GetMsgSeqNumOk() (*int32, bool)`

GetMsgSeqNumOk returns a tuple with the MsgSeqNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsgSeqNum

`func (o *OrdersDelete200ResponseResult) SetMsgSeqNum(v int32)`

SetMsgSeqNum sets MsgSeqNum field to given value.


### GetSubaccountId

`func (o *OrdersDelete200ResponseResult) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrdersDelete200ResponseResult) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrdersDelete200ResponseResult) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetRequestId

`func (o *OrdersDelete200ResponseResult) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrdersDelete200ResponseResult) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrdersDelete200ResponseResult) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetTransactTime

`func (o *OrdersDelete200ResponseResult) GetTransactTime() int32`

GetTransactTime returns the TransactTime field if non-nil, zero value otherwise.

### GetTransactTimeOk

`func (o *OrdersDelete200ResponseResult) GetTransactTimeOk() (*int32, bool)`

GetTransactTimeOk returns a tuple with the TransactTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactTime

`func (o *OrdersDelete200ResponseResult) SetTransactTime(v int32)`

SetTransactTime sets TransactTime field to given value.


### GetReason

`func (o *OrdersDelete200ResponseResult) GetReason() int32`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *OrdersDelete200ResponseResult) GetReasonOk() (*int32, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *OrdersDelete200ResponseResult) SetReason(v int32)`

SetReason sets Reason field to given value.

### HasReason

`func (o *OrdersDelete200ResponseResult) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *OrdersDelete200ResponseResult) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *OrdersDelete200ResponseResult) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil
### GetTotalAffectedOrders

`func (o *OrdersDelete200ResponseResult) GetTotalAffectedOrders() int32`

GetTotalAffectedOrders returns the TotalAffectedOrders field if non-nil, zero value otherwise.

### GetTotalAffectedOrdersOk

`func (o *OrdersDelete200ResponseResult) GetTotalAffectedOrdersOk() (*int32, bool)`

GetTotalAffectedOrdersOk returns a tuple with the TotalAffectedOrders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAffectedOrders

`func (o *OrdersDelete200ResponseResult) SetTotalAffectedOrders(v int32)`

SetTotalAffectedOrders sets TotalAffectedOrders field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


