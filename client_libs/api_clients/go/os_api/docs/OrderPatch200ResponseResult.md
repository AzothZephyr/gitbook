# OrderPatch200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ack** | [**OrderPatch200ResponseResultOneOfAck**](OrderPatch200ResponseResultOneOfAck.md) |  | 
**Rej** | [**OrderPatch200ResponseResultOneOf1Rej**](OrderPatch200ResponseResultOneOf1Rej.md) |  | 

## Methods

### NewOrderPatch200ResponseResult

`func NewOrderPatch200ResponseResult(ack OrderPatch200ResponseResultOneOfAck, rej OrderPatch200ResponseResultOneOf1Rej, ) *OrderPatch200ResponseResult`

NewOrderPatch200ResponseResult instantiates a new OrderPatch200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPatch200ResponseResultWithDefaults

`func NewOrderPatch200ResponseResultWithDefaults() *OrderPatch200ResponseResult`

NewOrderPatch200ResponseResultWithDefaults instantiates a new OrderPatch200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAck

`func (o *OrderPatch200ResponseResult) GetAck() OrderPatch200ResponseResultOneOfAck`

GetAck returns the Ack field if non-nil, zero value otherwise.

### GetAckOk

`func (o *OrderPatch200ResponseResult) GetAckOk() (*OrderPatch200ResponseResultOneOfAck, bool)`

GetAckOk returns a tuple with the Ack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAck

`func (o *OrderPatch200ResponseResult) SetAck(v OrderPatch200ResponseResultOneOfAck)`

SetAck sets Ack field to given value.


### GetRej

`func (o *OrderPatch200ResponseResult) GetRej() OrderPatch200ResponseResultOneOf1Rej`

GetRej returns the Rej field if non-nil, zero value otherwise.

### GetRejOk

`func (o *OrderPatch200ResponseResult) GetRejOk() (*OrderPatch200ResponseResultOneOf1Rej, bool)`

GetRejOk returns a tuple with the Rej field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRej

`func (o *OrderPatch200ResponseResult) SetRej(v OrderPatch200ResponseResultOneOf1Rej)`

SetRej sets Rej field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


