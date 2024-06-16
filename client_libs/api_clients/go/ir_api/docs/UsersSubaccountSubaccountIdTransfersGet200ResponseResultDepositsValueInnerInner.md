# UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetId** | **int32** |  | 
**Amount** | **string** |  | 
**TxnHash** | Pointer to **NullableString** | Deposits that are found on-chain will have a &#x60;txn_hash&#x60; and &#x60;txn_index&#x60;. If it is a pending deposit determined by some external payment system, these can be empty | [optional] 
**TxnIndex** | Pointer to **NullableInt64** |  | [optional] 
**CreatedAt** | **time.Time** | When we first started tracking this deposit. Probably in the mempool. | 
**UpdatedAt** | **time.Time** | If &#x60;txn_state&#x60; is &#x60;Confirmed&#x60; and &#x60;KytStatus&#x60; is accepted, this is the time that the deposit is credited. Otherwise, it is the last update (e.g if a kyt external id was created, or transaction state updated). | 
**TxnState** | **string** | The deposit is credited when &#x60;Confirmed&#x60; and accepted. | 
**Address** | Pointer to **NullableString** | The deposit source address | [optional] 
**TimeEst** | **time.Time** | The estimated time that this deposit will transition to &#x60;Confirmed&#x60;. This is currently only applicable for &#x60;Received&#x60; deposits | 
**FiatToCrypto** | **bool** |  | 

## Methods

### NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner

`func NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner(assetId int32, amount string, createdAt time.Time, updatedAt time.Time, txnState string, timeEst time.Time, fiatToCrypto bool, ) *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner`

NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner instantiates a new UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerWithDefaults

`func NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerWithDefaults() *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner`

NewUsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInnerWithDefaults instantiates a new UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAssetId() int32`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAssetIdOk() (*int32, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetAssetId(v int32)`

SetAssetId sets AssetId field to given value.


### GetAmount

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnHash() string`

GetTxnHash returns the TxnHash field if non-nil, zero value otherwise.

### GetTxnHashOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnHashOk() (*string, bool)`

GetTxnHashOk returns a tuple with the TxnHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTxnHash(v string)`

SetTxnHash sets TxnHash field to given value.

### HasTxnHash

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) HasTxnHash() bool`

HasTxnHash returns a boolean if a field has been set.

### SetTxnHashNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTxnHashNil(b bool)`

 SetTxnHashNil sets the value for TxnHash to be an explicit nil

### UnsetTxnHash
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) UnsetTxnHash()`

UnsetTxnHash ensures that no value is present for TxnHash, not even an explicit nil
### GetTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnIndex() int64`

GetTxnIndex returns the TxnIndex field if non-nil, zero value otherwise.

### GetTxnIndexOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnIndexOk() (*int64, bool)`

GetTxnIndexOk returns a tuple with the TxnIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTxnIndex(v int64)`

SetTxnIndex sets TxnIndex field to given value.

### HasTxnIndex

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) HasTxnIndex() bool`

HasTxnIndex returns a boolean if a field has been set.

### SetTxnIndexNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTxnIndexNil(b bool)`

 SetTxnIndexNil sets the value for TxnIndex to be an explicit nil

### UnsetTxnIndex
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) UnsetTxnIndex()`

UnsetTxnIndex ensures that no value is present for TxnIndex, not even an explicit nil
### GetCreatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetTxnState

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnState() string`

GetTxnState returns the TxnState field if non-nil, zero value otherwise.

### GetTxnStateOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTxnStateOk() (*string, bool)`

GetTxnStateOk returns a tuple with the TxnState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxnState

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTxnState(v string)`

SetTxnState sets TxnState field to given value.


### GetAddress

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetTimeEst

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTimeEst() time.Time`

GetTimeEst returns the TimeEst field if non-nil, zero value otherwise.

### GetTimeEstOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetTimeEstOk() (*time.Time, bool)`

GetTimeEstOk returns a tuple with the TimeEst field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeEst

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetTimeEst(v time.Time)`

SetTimeEst sets TimeEst field to given value.


### GetFiatToCrypto

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetFiatToCrypto() bool`

GetFiatToCrypto returns the FiatToCrypto field if non-nil, zero value otherwise.

### GetFiatToCryptoOk

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) GetFiatToCryptoOk() (*bool, bool)`

GetFiatToCryptoOk returns a tuple with the FiatToCrypto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiatToCrypto

`func (o *UsersSubaccountSubaccountIdTransfersGet200ResponseResultDepositsValueInnerInner) SetFiatToCrypto(v bool)`

SetFiatToCrypto sets FiatToCrypto field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


