# UsersInfoGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | [**Vec<models::UsersInfoGet200ResponseResultApiKeysInner>**](_users_info_get_200_response_result_apiKeys_inner.md) |  | 
**subaccounts** | [**Vec<models::UsersInfoGet200ResponseResultSubaccountsInner>**](_users_info_get_200_response_result_subaccounts_inner.md) |  | 
**id** | [**uuid::Uuid**](uuid::Uuid.md) |  | 
**email** | **String** |  | 
**status** | **String** |  | 
**vip_level** | **i32** |  | 
**points** | **i64** |  | 
**mpc_key_id** | Option<**i64**> |  | [optional]
**guardian_has_key** | Option<[**Vec<models::UsersInfoGet200ResponseResultGuardianHasKeyInner>**](_users_info_get_200_response_result_guardianHasKey_inner.md)> |  | [optional]
**has_guardian_quorum** | **bool** |  | 
**phone_number** | Option<**String**> |  | [optional]
**kyc_status** | [**std::collections::HashMap<String, models::UsersInfoGet200ResponseResultKycStatusValue>**](_users_info_get_200_response_result_kycStatus_value.md) |  | 
**has_approved_kyc** | **bool** |  | 
**registration** | Option<[**models::UsersInfoGet200ResponseResultRegistration**](_users_info_get_200_response_result_registration.md)> |  | [optional]
**first_name** | Option<**String**> |  | [optional]
**last_name** | Option<**String**> |  | [optional]
**country** | Option<**String**> |  | [optional]
**invite_id** | Option<[**uuid::Uuid**](uuid::Uuid.md)> |  | [optional]
**referral_code** | Option<**String**> |  | [optional]
**max_subaccounts** | **i32** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


