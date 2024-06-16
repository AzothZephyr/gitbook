# OrderDelete200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ack** | [**OrderDelete200ResponseResultOneOfAck**](OrderDelete200ResponseResultOneOfAck.md) |  | 
**Rej** | [**OrderDelete200ResponseResultOneOf1Rej**](OrderDelete200ResponseResultOneOf1Rej.md) |  | 

## Methods

### NewOrderDelete200ResponseResult

`func NewOrderDelete200ResponseResult(ack OrderDelete200ResponseResultOneOfAck, rej OrderDelete200ResponseResultOneOf1Rej, ) *OrderDelete200ResponseResult`

NewOrderDelete200ResponseResult instantiates a new OrderDelete200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderDelete200ResponseResultWithDefaults

`func NewOrderDelete200ResponseResultWithDefaults() *OrderDelete200ResponseResult`

NewOrderDelete200ResponseResultWithDefaults instantiates a new OrderDelete200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAck

`func (o *OrderDelete200ResponseResult) GetAck() OrderDelete200ResponseResultOneOfAck`

GetAck returns the Ack field if non-nil, zero value otherwise.

### GetAckOk

`func (o *OrderDelete200ResponseResult) GetAckOk() (*OrderDelete200ResponseResultOneOfAck, bool)`

GetAckOk returns a tuple with the Ack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAck

`func (o *OrderDelete200ResponseResult) SetAck(v OrderDelete200ResponseResultOneOfAck)`

SetAck sets Ack field to given value.


### GetRej

`func (o *OrderDelete200ResponseResult) GetRej() OrderDelete200ResponseResultOneOf1Rej`

GetRej returns the Rej field if non-nil, zero value otherwise.

### GetRejOk

`func (o *OrderDelete200ResponseResult) GetRejOk() (*OrderDelete200ResponseResultOneOf1Rej, bool)`

GetRejOk returns a tuple with the Rej field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRej

`func (o *OrderDelete200ResponseResult) SetRej(v OrderDelete200ResponseResultOneOf1Rej)`

SetRej sets Rej field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


