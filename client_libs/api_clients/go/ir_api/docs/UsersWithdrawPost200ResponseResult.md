# UsersWithdrawPost200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | The status of the external KYT check | 
**Approved** | Pointer to **NullableBool** | Whether the withdrawal was approved by the system | [optional] 
**Reason** | Pointer to **NullableString** | The reason for the withdrawal being rejected | [optional] 

## Methods

### NewUsersWithdrawPost200ResponseResult

`func NewUsersWithdrawPost200ResponseResult(status string, ) *UsersWithdrawPost200ResponseResult`

NewUsersWithdrawPost200ResponseResult instantiates a new UsersWithdrawPost200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersWithdrawPost200ResponseResultWithDefaults

`func NewUsersWithdrawPost200ResponseResultWithDefaults() *UsersWithdrawPost200ResponseResult`

NewUsersWithdrawPost200ResponseResultWithDefaults instantiates a new UsersWithdrawPost200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *UsersWithdrawPost200ResponseResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UsersWithdrawPost200ResponseResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UsersWithdrawPost200ResponseResult) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetApproved

`func (o *UsersWithdrawPost200ResponseResult) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *UsersWithdrawPost200ResponseResult) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *UsersWithdrawPost200ResponseResult) SetApproved(v bool)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *UsersWithdrawPost200ResponseResult) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### SetApprovedNil

`func (o *UsersWithdrawPost200ResponseResult) SetApprovedNil(b bool)`

 SetApprovedNil sets the value for Approved to be an explicit nil

### UnsetApproved
`func (o *UsersWithdrawPost200ResponseResult) UnsetApproved()`

UnsetApproved ensures that no value is present for Approved, not even an explicit nil
### GetReason

`func (o *UsersWithdrawPost200ResponseResult) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *UsersWithdrawPost200ResponseResult) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *UsersWithdrawPost200ResponseResult) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *UsersWithdrawPost200ResponseResult) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *UsersWithdrawPost200ResponseResult) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *UsersWithdrawPost200ResponseResult) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


