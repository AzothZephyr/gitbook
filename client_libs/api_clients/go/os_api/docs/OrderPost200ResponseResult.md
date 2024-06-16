# OrderPost200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ack** | [**OrderPost200ResponseResultOneOfAck**](OrderPost200ResponseResultOneOfAck.md) |  | 
**Rej** | [**OrderPost200ResponseResultOneOf1Rej**](OrderPost200ResponseResultOneOf1Rej.md) |  | 

## Methods

### NewOrderPost200ResponseResult

`func NewOrderPost200ResponseResult(ack OrderPost200ResponseResultOneOfAck, rej OrderPost200ResponseResultOneOf1Rej, ) *OrderPost200ResponseResult`

NewOrderPost200ResponseResult instantiates a new OrderPost200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPost200ResponseResultWithDefaults

`func NewOrderPost200ResponseResultWithDefaults() *OrderPost200ResponseResult`

NewOrderPost200ResponseResultWithDefaults instantiates a new OrderPost200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAck

`func (o *OrderPost200ResponseResult) GetAck() OrderPost200ResponseResultOneOfAck`

GetAck returns the Ack field if non-nil, zero value otherwise.

### GetAckOk

`func (o *OrderPost200ResponseResult) GetAckOk() (*OrderPost200ResponseResultOneOfAck, bool)`

GetAckOk returns a tuple with the Ack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAck

`func (o *OrderPost200ResponseResult) SetAck(v OrderPost200ResponseResultOneOfAck)`

SetAck sets Ack field to given value.


### GetRej

`func (o *OrderPost200ResponseResult) GetRej() OrderPost200ResponseResultOneOf1Rej`

GetRej returns the Rej field if non-nil, zero value otherwise.

### GetRejOk

`func (o *OrderPost200ResponseResult) GetRejOk() (*OrderPost200ResponseResultOneOf1Rej, bool)`

GetRejOk returns a tuple with the Rej field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRej

`func (o *OrderPost200ResponseResult) SetRej(v OrderPost200ResponseResultOneOf1Rej)`

SetRej sets Rej field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


