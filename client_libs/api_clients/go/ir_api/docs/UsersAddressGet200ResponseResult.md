# UsersAddressGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | [**[]UsersAddressGet200ResponseResultAddressesInner**](UsersAddressGet200ResponseResultAddressesInner.md) |  | 
**Settings** | [**UsersAddressGet200ResponseResultSettings**](UsersAddressGet200ResponseResultSettings.md) |  | 

## Methods

### NewUsersAddressGet200ResponseResult

`func NewUsersAddressGet200ResponseResult(addresses []UsersAddressGet200ResponseResultAddressesInner, settings UsersAddressGet200ResponseResultSettings, ) *UsersAddressGet200ResponseResult`

NewUsersAddressGet200ResponseResult instantiates a new UsersAddressGet200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersAddressGet200ResponseResultWithDefaults

`func NewUsersAddressGet200ResponseResultWithDefaults() *UsersAddressGet200ResponseResult`

NewUsersAddressGet200ResponseResultWithDefaults instantiates a new UsersAddressGet200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *UsersAddressGet200ResponseResult) GetAddresses() []UsersAddressGet200ResponseResultAddressesInner`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *UsersAddressGet200ResponseResult) GetAddressesOk() (*[]UsersAddressGet200ResponseResultAddressesInner, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *UsersAddressGet200ResponseResult) SetAddresses(v []UsersAddressGet200ResponseResultAddressesInner)`

SetAddresses sets Addresses field to given value.


### GetSettings

`func (o *UsersAddressGet200ResponseResult) GetSettings() UsersAddressGet200ResponseResultSettings`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *UsersAddressGet200ResponseResult) GetSettingsOk() (*UsersAddressGet200ResponseResultSettings, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *UsersAddressGet200ResponseResult) SetSettings(v UsersAddressGet200ResponseResultSettings)`

SetSettings sets Settings field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


