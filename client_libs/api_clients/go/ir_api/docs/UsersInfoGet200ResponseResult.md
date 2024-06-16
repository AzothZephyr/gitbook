# UsersInfoGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKeys** | [**[]UsersInfoGet200ResponseResultApiKeysInner**](UsersInfoGet200ResponseResultApiKeysInner.md) |  | 
**Subaccounts** | [**[]UsersInfoGet200ResponseResultSubaccountsInner**](UsersInfoGet200ResponseResultSubaccountsInner.md) |  | 
**Id** | **string** |  | 
**Email** | **string** |  | 
**Status** | **string** |  | 
**VipLevel** | **int32** |  | 
**Points** | **int64** |  | 
**MpcKeyId** | Pointer to **NullableInt64** |  | [optional] 
**GuardianHasKey** | Pointer to [**[]UsersInfoGet200ResponseResultGuardianHasKeyInner**](UsersInfoGet200ResponseResultGuardianHasKeyInner.md) |  | [optional] 
**HasGuardianQuorum** | **bool** |  | 
**PhoneNumber** | Pointer to **NullableString** |  | [optional] 
**KycStatus** | [**map[string]UsersInfoGet200ResponseResultKycStatusValue**](UsersInfoGet200ResponseResultKycStatusValue.md) |  | 
**HasApprovedKyc** | **bool** |  | 
**Registration** | Pointer to [**NullableUsersInfoGet200ResponseResultRegistration**](UsersInfoGet200ResponseResultRegistration.md) |  | [optional] 
**FirstName** | Pointer to **NullableString** |  | [optional] 
**LastName** | Pointer to **NullableString** |  | [optional] 
**Country** | Pointer to **NullableString** |  | [optional] 
**InviteId** | Pointer to **NullableString** |  | [optional] 
**ReferralCode** | Pointer to **NullableString** |  | [optional] 
**MaxSubaccounts** | **int32** |  | 

## Methods

### NewUsersInfoGet200ResponseResult

`func NewUsersInfoGet200ResponseResult(apiKeys []UsersInfoGet200ResponseResultApiKeysInner, subaccounts []UsersInfoGet200ResponseResultSubaccountsInner, id string, email string, status string, vipLevel int32, points int64, hasGuardianQuorum bool, kycStatus map[string]UsersInfoGet200ResponseResultKycStatusValue, hasApprovedKyc bool, maxSubaccounts int32, ) *UsersInfoGet200ResponseResult`

NewUsersInfoGet200ResponseResult instantiates a new UsersInfoGet200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersInfoGet200ResponseResultWithDefaults

`func NewUsersInfoGet200ResponseResultWithDefaults() *UsersInfoGet200ResponseResult`

NewUsersInfoGet200ResponseResultWithDefaults instantiates a new UsersInfoGet200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKeys

`func (o *UsersInfoGet200ResponseResult) GetApiKeys() []UsersInfoGet200ResponseResultApiKeysInner`

GetApiKeys returns the ApiKeys field if non-nil, zero value otherwise.

### GetApiKeysOk

`func (o *UsersInfoGet200ResponseResult) GetApiKeysOk() (*[]UsersInfoGet200ResponseResultApiKeysInner, bool)`

GetApiKeysOk returns a tuple with the ApiKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKeys

`func (o *UsersInfoGet200ResponseResult) SetApiKeys(v []UsersInfoGet200ResponseResultApiKeysInner)`

SetApiKeys sets ApiKeys field to given value.


### GetSubaccounts

`func (o *UsersInfoGet200ResponseResult) GetSubaccounts() []UsersInfoGet200ResponseResultSubaccountsInner`

GetSubaccounts returns the Subaccounts field if non-nil, zero value otherwise.

### GetSubaccountsOk

`func (o *UsersInfoGet200ResponseResult) GetSubaccountsOk() (*[]UsersInfoGet200ResponseResultSubaccountsInner, bool)`

GetSubaccountsOk returns a tuple with the Subaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccounts

`func (o *UsersInfoGet200ResponseResult) SetSubaccounts(v []UsersInfoGet200ResponseResultSubaccountsInner)`

SetSubaccounts sets Subaccounts field to given value.


### GetId

`func (o *UsersInfoGet200ResponseResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UsersInfoGet200ResponseResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UsersInfoGet200ResponseResult) SetId(v string)`

SetId sets Id field to given value.


### GetEmail

`func (o *UsersInfoGet200ResponseResult) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UsersInfoGet200ResponseResult) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UsersInfoGet200ResponseResult) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetStatus

`func (o *UsersInfoGet200ResponseResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UsersInfoGet200ResponseResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UsersInfoGet200ResponseResult) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetVipLevel

`func (o *UsersInfoGet200ResponseResult) GetVipLevel() int32`

GetVipLevel returns the VipLevel field if non-nil, zero value otherwise.

### GetVipLevelOk

`func (o *UsersInfoGet200ResponseResult) GetVipLevelOk() (*int32, bool)`

GetVipLevelOk returns a tuple with the VipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipLevel

`func (o *UsersInfoGet200ResponseResult) SetVipLevel(v int32)`

SetVipLevel sets VipLevel field to given value.


### GetPoints

`func (o *UsersInfoGet200ResponseResult) GetPoints() int64`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *UsersInfoGet200ResponseResult) GetPointsOk() (*int64, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *UsersInfoGet200ResponseResult) SetPoints(v int64)`

SetPoints sets Points field to given value.


### GetMpcKeyId

`func (o *UsersInfoGet200ResponseResult) GetMpcKeyId() int64`

GetMpcKeyId returns the MpcKeyId field if non-nil, zero value otherwise.

### GetMpcKeyIdOk

`func (o *UsersInfoGet200ResponseResult) GetMpcKeyIdOk() (*int64, bool)`

GetMpcKeyIdOk returns a tuple with the MpcKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMpcKeyId

`func (o *UsersInfoGet200ResponseResult) SetMpcKeyId(v int64)`

SetMpcKeyId sets MpcKeyId field to given value.

### HasMpcKeyId

`func (o *UsersInfoGet200ResponseResult) HasMpcKeyId() bool`

HasMpcKeyId returns a boolean if a field has been set.

### SetMpcKeyIdNil

`func (o *UsersInfoGet200ResponseResult) SetMpcKeyIdNil(b bool)`

 SetMpcKeyIdNil sets the value for MpcKeyId to be an explicit nil

### UnsetMpcKeyId
`func (o *UsersInfoGet200ResponseResult) UnsetMpcKeyId()`

UnsetMpcKeyId ensures that no value is present for MpcKeyId, not even an explicit nil
### GetGuardianHasKey

`func (o *UsersInfoGet200ResponseResult) GetGuardianHasKey() []UsersInfoGet200ResponseResultGuardianHasKeyInner`

GetGuardianHasKey returns the GuardianHasKey field if non-nil, zero value otherwise.

### GetGuardianHasKeyOk

`func (o *UsersInfoGet200ResponseResult) GetGuardianHasKeyOk() (*[]UsersInfoGet200ResponseResultGuardianHasKeyInner, bool)`

GetGuardianHasKeyOk returns a tuple with the GuardianHasKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuardianHasKey

`func (o *UsersInfoGet200ResponseResult) SetGuardianHasKey(v []UsersInfoGet200ResponseResultGuardianHasKeyInner)`

SetGuardianHasKey sets GuardianHasKey field to given value.

### HasGuardianHasKey

`func (o *UsersInfoGet200ResponseResult) HasGuardianHasKey() bool`

HasGuardianHasKey returns a boolean if a field has been set.

### SetGuardianHasKeyNil

`func (o *UsersInfoGet200ResponseResult) SetGuardianHasKeyNil(b bool)`

 SetGuardianHasKeyNil sets the value for GuardianHasKey to be an explicit nil

### UnsetGuardianHasKey
`func (o *UsersInfoGet200ResponseResult) UnsetGuardianHasKey()`

UnsetGuardianHasKey ensures that no value is present for GuardianHasKey, not even an explicit nil
### GetHasGuardianQuorum

`func (o *UsersInfoGet200ResponseResult) GetHasGuardianQuorum() bool`

GetHasGuardianQuorum returns the HasGuardianQuorum field if non-nil, zero value otherwise.

### GetHasGuardianQuorumOk

`func (o *UsersInfoGet200ResponseResult) GetHasGuardianQuorumOk() (*bool, bool)`

GetHasGuardianQuorumOk returns a tuple with the HasGuardianQuorum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasGuardianQuorum

`func (o *UsersInfoGet200ResponseResult) SetHasGuardianQuorum(v bool)`

SetHasGuardianQuorum sets HasGuardianQuorum field to given value.


### GetPhoneNumber

`func (o *UsersInfoGet200ResponseResult) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *UsersInfoGet200ResponseResult) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *UsersInfoGet200ResponseResult) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *UsersInfoGet200ResponseResult) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### SetPhoneNumberNil

`func (o *UsersInfoGet200ResponseResult) SetPhoneNumberNil(b bool)`

 SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil

### UnsetPhoneNumber
`func (o *UsersInfoGet200ResponseResult) UnsetPhoneNumber()`

UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil
### GetKycStatus

`func (o *UsersInfoGet200ResponseResult) GetKycStatus() map[string]UsersInfoGet200ResponseResultKycStatusValue`

GetKycStatus returns the KycStatus field if non-nil, zero value otherwise.

### GetKycStatusOk

`func (o *UsersInfoGet200ResponseResult) GetKycStatusOk() (*map[string]UsersInfoGet200ResponseResultKycStatusValue, bool)`

GetKycStatusOk returns a tuple with the KycStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKycStatus

`func (o *UsersInfoGet200ResponseResult) SetKycStatus(v map[string]UsersInfoGet200ResponseResultKycStatusValue)`

SetKycStatus sets KycStatus field to given value.


### GetHasApprovedKyc

`func (o *UsersInfoGet200ResponseResult) GetHasApprovedKyc() bool`

GetHasApprovedKyc returns the HasApprovedKyc field if non-nil, zero value otherwise.

### GetHasApprovedKycOk

`func (o *UsersInfoGet200ResponseResult) GetHasApprovedKycOk() (*bool, bool)`

GetHasApprovedKycOk returns a tuple with the HasApprovedKyc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasApprovedKyc

`func (o *UsersInfoGet200ResponseResult) SetHasApprovedKyc(v bool)`

SetHasApprovedKyc sets HasApprovedKyc field to given value.


### GetRegistration

`func (o *UsersInfoGet200ResponseResult) GetRegistration() UsersInfoGet200ResponseResultRegistration`

GetRegistration returns the Registration field if non-nil, zero value otherwise.

### GetRegistrationOk

`func (o *UsersInfoGet200ResponseResult) GetRegistrationOk() (*UsersInfoGet200ResponseResultRegistration, bool)`

GetRegistrationOk returns a tuple with the Registration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistration

`func (o *UsersInfoGet200ResponseResult) SetRegistration(v UsersInfoGet200ResponseResultRegistration)`

SetRegistration sets Registration field to given value.

### HasRegistration

`func (o *UsersInfoGet200ResponseResult) HasRegistration() bool`

HasRegistration returns a boolean if a field has been set.

### SetRegistrationNil

`func (o *UsersInfoGet200ResponseResult) SetRegistrationNil(b bool)`

 SetRegistrationNil sets the value for Registration to be an explicit nil

### UnsetRegistration
`func (o *UsersInfoGet200ResponseResult) UnsetRegistration()`

UnsetRegistration ensures that no value is present for Registration, not even an explicit nil
### GetFirstName

`func (o *UsersInfoGet200ResponseResult) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *UsersInfoGet200ResponseResult) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *UsersInfoGet200ResponseResult) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *UsersInfoGet200ResponseResult) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *UsersInfoGet200ResponseResult) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *UsersInfoGet200ResponseResult) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *UsersInfoGet200ResponseResult) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *UsersInfoGet200ResponseResult) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *UsersInfoGet200ResponseResult) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *UsersInfoGet200ResponseResult) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *UsersInfoGet200ResponseResult) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *UsersInfoGet200ResponseResult) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetCountry

`func (o *UsersInfoGet200ResponseResult) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *UsersInfoGet200ResponseResult) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *UsersInfoGet200ResponseResult) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *UsersInfoGet200ResponseResult) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### SetCountryNil

`func (o *UsersInfoGet200ResponseResult) SetCountryNil(b bool)`

 SetCountryNil sets the value for Country to be an explicit nil

### UnsetCountry
`func (o *UsersInfoGet200ResponseResult) UnsetCountry()`

UnsetCountry ensures that no value is present for Country, not even an explicit nil
### GetInviteId

`func (o *UsersInfoGet200ResponseResult) GetInviteId() string`

GetInviteId returns the InviteId field if non-nil, zero value otherwise.

### GetInviteIdOk

`func (o *UsersInfoGet200ResponseResult) GetInviteIdOk() (*string, bool)`

GetInviteIdOk returns a tuple with the InviteId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteId

`func (o *UsersInfoGet200ResponseResult) SetInviteId(v string)`

SetInviteId sets InviteId field to given value.

### HasInviteId

`func (o *UsersInfoGet200ResponseResult) HasInviteId() bool`

HasInviteId returns a boolean if a field has been set.

### SetInviteIdNil

`func (o *UsersInfoGet200ResponseResult) SetInviteIdNil(b bool)`

 SetInviteIdNil sets the value for InviteId to be an explicit nil

### UnsetInviteId
`func (o *UsersInfoGet200ResponseResult) UnsetInviteId()`

UnsetInviteId ensures that no value is present for InviteId, not even an explicit nil
### GetReferralCode

`func (o *UsersInfoGet200ResponseResult) GetReferralCode() string`

GetReferralCode returns the ReferralCode field if non-nil, zero value otherwise.

### GetReferralCodeOk

`func (o *UsersInfoGet200ResponseResult) GetReferralCodeOk() (*string, bool)`

GetReferralCodeOk returns a tuple with the ReferralCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferralCode

`func (o *UsersInfoGet200ResponseResult) SetReferralCode(v string)`

SetReferralCode sets ReferralCode field to given value.

### HasReferralCode

`func (o *UsersInfoGet200ResponseResult) HasReferralCode() bool`

HasReferralCode returns a boolean if a field has been set.

### SetReferralCodeNil

`func (o *UsersInfoGet200ResponseResult) SetReferralCodeNil(b bool)`

 SetReferralCodeNil sets the value for ReferralCode to be an explicit nil

### UnsetReferralCode
`func (o *UsersInfoGet200ResponseResult) UnsetReferralCode()`

UnsetReferralCode ensures that no value is present for ReferralCode, not even an explicit nil
### GetMaxSubaccounts

`func (o *UsersInfoGet200ResponseResult) GetMaxSubaccounts() int32`

GetMaxSubaccounts returns the MaxSubaccounts field if non-nil, zero value otherwise.

### GetMaxSubaccountsOk

`func (o *UsersInfoGet200ResponseResult) GetMaxSubaccountsOk() (*int32, bool)`

GetMaxSubaccountsOk returns a tuple with the MaxSubaccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSubaccounts

`func (o *UsersInfoGet200ResponseResult) SetMaxSubaccounts(v int32)`

SetMaxSubaccounts sets MaxSubaccounts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


