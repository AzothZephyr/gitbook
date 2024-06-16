# UsersWithdrawPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubaccountId** | **int32** | The subaccount to withdraw from. | 
**AssetId** | **int32** | The asset to withdraw. The network is determined by the asset ID. | 
**Amount** | **int32** | The amount to withdraw. This is denominated in the smallest unit of the asset (e.g. satoshis for BTC, wei for ETH, lamports for SOL). The amount must be greater than the dust limit for the asset. | 
**Destination** | **string** | The destination address for the withdrawal. | 

## Methods

### NewUsersWithdrawPostRequest

`func NewUsersWithdrawPostRequest(subaccountId int32, assetId int32, amount int32, destination string, ) *UsersWithdrawPostRequest`

NewUsersWithdrawPostRequest instantiates a new UsersWithdrawPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersWithdrawPostRequestWithDefaults

`func NewUsersWithdrawPostRequestWithDefaults() *UsersWithdrawPostRequest`

NewUsersWithdrawPostRequestWithDefaults instantiates a new UsersWithdrawPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubaccountId

`func (o *UsersWithdrawPostRequest) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *UsersWithdrawPostRequest) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *UsersWithdrawPostRequest) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetAssetId

`func (o *UsersWithdrawPostRequest) GetAssetId() int32`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *UsersWithdrawPostRequest) GetAssetIdOk() (*int32, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *UsersWithdrawPostRequest) SetAssetId(v int32)`

SetAssetId sets AssetId field to given value.


### GetAmount

`func (o *UsersWithdrawPostRequest) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *UsersWithdrawPostRequest) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *UsersWithdrawPostRequest) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetDestination

`func (o *UsersWithdrawPostRequest) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *UsersWithdrawPostRequest) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *UsersWithdrawPostRequest) SetDestination(v string)`

SetDestination sets Destination field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


