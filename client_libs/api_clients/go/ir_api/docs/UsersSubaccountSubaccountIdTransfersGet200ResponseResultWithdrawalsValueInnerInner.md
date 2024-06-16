# UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetId** | **int32** |  | 
**Amount** | **float64** |  | 
**TxnHash** | Pointer to **NullableString** | Once the transaction has been determined / sent, &#x60;txn_hash&#x60;, &#x60;txn_index&#x60;, and &#x60;txn_state&#x60; will be populated | [optional] 
**TxnIndex** | Pointer to **NullableInt64** |  | [optional] 
**TxnState** | Pointer to **NullableString** |  | [optional] 
**CreatedAt** | **time.Time** | When the withdrawal request was created. | 
**UpdatedAt** | **time.Time** | When the withdrawal was sent out. | 
**AttemptId** | **int64** | A unique identifier for this withdrawal request. | 
**Address** | **string** | The withdrawal destination address | 
**Approved** | Pointer to **NullableBool** |  | [optional] 
**Reason** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner

`func NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner(assetId int32, amount float64, createdAt time.Time, updatedAt time.Time, attemptId int64, address string, ) *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner`

NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner instantiates a new UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInnerWithDefaults

`func NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInnerWithDefaults() *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner`

NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInnerWithDefaults instantiates a new UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAssetId() int32`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAssetIdOk() (*int32, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetAssetId(v int32)`

SetAssetId sets AssetId field to given value.


### GetAmount

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnHash() string`

GetTxnHash returns the TxnHash field if non-nil, zero value otherwise.

### GetTxnHashOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnHashOk() (*string, bool)`

GetTxnHashOk returns a tuple with the TxnHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnHash(v string)`

SetTxnHash sets TxnHash field to given value.

### HasTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) HasTxnHash() bool`

HasTxnHash returns a boolean if a field has been set.

### SetTxnHashNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnHashNil(b bool)`

 SetTxnHashNil sets the value for TxnHash to be an explicit nil

### UnsetTxnHash
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) UnsetTxnHash()`

UnsetTxnHash ensures that no value is present for TxnHash, not even an explicit nil
### GetTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnIndex() int64`

GetTxnIndex returns the TxnIndex field if non-nil, zero value otherwise.

### GetTxnIndexOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnIndexOk() (*int64, bool)`

GetTxnIndexOk returns a tuple with the TxnIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnIndex(v int64)`

SetTxnIndex sets TxnIndex field to given value.

### HasTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) HasTxnIndex() bool`

HasTxnIndex returns a boolean if a field has been set.

### SetTxnIndexNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnIndexNil(b bool)`

 SetTxnIndexNil sets the value for TxnIndex to be an explicit nil

### UnsetTxnIndex
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) UnsetTxnIndex()`

UnsetTxnIndex ensures that no value is present for TxnIndex, not even an explicit nil
### GetTxnState

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnState() string`

GetTxnState returns the TxnState field if non-nil, zero value otherwise.

### GetTxnStateOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetTxnStateOk() (*string, bool)`

GetTxnStateOk returns a tuple with the TxnState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnState

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnState(v string)`

SetTxnState sets TxnState field to given value.

### HasTxnState

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) HasTxnState() bool`

HasTxnState returns a boolean if a field has been set.

### SetTxnStateNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetTxnStateNil(b bool)`

 SetTxnStateNil sets the value for TxnState to be an explicit nil

### UnsetTxnState
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) UnsetTxnState()`

UnsetTxnState ensures that no value is present for TxnState, not even an explicit nil
### GetCreatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetAttemptId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAttemptId() int64`

GetAttemptId returns the AttemptId field if non-nil, zero value otherwise.

### GetAttemptIdOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAttemptIdOk() (*int64, bool)`

GetAttemptIdOk returns a tuple with the AttemptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttemptId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetAttemptId(v int64)`

SetAttemptId sets AttemptId field to given value.


### GetAddress

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetApproved

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetApproved(v bool)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### SetApprovedNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetApprovedNil(b bool)`

 SetApprovedNil sets the value for Approved to be an explicit nil

### UnsetApproved
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) UnsetApproved()`

UnsetApproved ensures that no value is present for Approved, not even an explicit nil
### GetReason

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


