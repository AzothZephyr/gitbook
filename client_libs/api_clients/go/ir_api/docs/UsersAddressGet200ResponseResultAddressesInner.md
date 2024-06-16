# UsersAddressGet200ResponseResultAddressesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**SourceId** | **int32** |  | 
**AssetId** | Pointer to **NullableInt32** |  | [optional] 
**Address** | **string** |  | 
**Status** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**ApprovedAt** | **time.Time** |  | 
**ActiveSince** | **time.Time** |  | 

## Methods

### NewUsersAddressGet200ResponseResultAddressesInner

`func NewUsersAddressGet200ResponseResultAddressesInner(id string, name string, sourceId int32, address string, status string, createdAt time.Time, approvedAt time.Time, activeSince time.Time, ) *UsersAddressGet200ResponseResultAddressesInner`

NewUsersAddressGet200ResponseResultAddressesInner instantiates a new UsersAddressGet200ResponseResultAddressesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersAddressGet200ResponseResultAddressesInnerWithDefaults

`func NewUsersAddressGet200ResponseResultAddressesInnerWithDefaults() *UsersAddressGet200ResponseResultAddressesInner`

NewUsersAddressGet200ResponseResultAddressesInnerWithDefaults instantiates a new UsersAddressGet200ResponseResultAddressesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetName(v string)`

SetName sets Name field to given value.


### GetSourceId

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetSourceId() int32`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetSourceIdOk() (*int32, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetSourceId(v int32)`

SetSourceId sets SourceId field to given value.


### GetAssetId

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetAssetId() int32`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetAssetIdOk() (*int32, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetAssetId(v int32)`

SetAssetId sets AssetId field to given value.

### HasAssetId

`func (o *UsersAddressGet200ResponseResultAddressesInner) HasAssetId() bool`

HasAssetId returns a boolean if a field has been set.

### SetAssetIdNil

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetAssetIdNil(b bool)`

 SetAssetIdNil sets the value for AssetId to be an explicit nil

### UnsetAssetId
`func (o *UsersAddressGet200ResponseResultAddressesInner) UnsetAssetId()`

UnsetAssetId ensures that no value is present for AssetId, not even an explicit nil
### GetAddress

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetStatus

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetCreatedAt

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetApprovedAt

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetApprovedAt() time.Time`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetApprovedAtOk() (*time.Time, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetApprovedAt(v time.Time)`

SetApprovedAt sets ApprovedAt field to given value.


### GetActiveSince

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetActiveSince() time.Time`

GetActiveSince returns the ActiveSince field if non-nil, zero value otherwise.

### GetActiveSinceOk

`func (o *UsersAddressGet200ResponseResultAddressesInner) GetActiveSinceOk() (*time.Time, bool)`

GetActiveSinceOk returns a tuple with the ActiveSince field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveSince

`func (o *UsersAddressGet200ResponseResultAddressesInner) SetActiveSince(v time.Time)`

SetActiveSince sets ActiveSince field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


