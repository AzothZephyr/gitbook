/*
Cube Iridium HTTP API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 0.1.0
Contact: support@cube.exchange
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the UsersSubaccountsPostRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountsPostRequest{}

// UsersSubaccountsPostRequest struct for UsersSubaccountsPostRequest
type UsersSubaccountsPostRequest struct {
	Name string `json:"name"`
	AccountType string `json:"accountType"`
}

type _UsersSubaccountsPostRequest UsersSubaccountsPostRequest

// NewUsersSubaccountsPostRequest instantiates a new UsersSubaccountsPostRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountsPostRequest(name string, accountType string) *UsersSubaccountsPostRequest {
	this := UsersSubaccountsPostRequest{}
	this.Name = name
	this.AccountType = accountType
	return &this
}

// NewUsersSubaccountsPostRequestWithDefaults instantiates a new UsersSubaccountsPostRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountsPostRequestWithDefaults() *UsersSubaccountsPostRequest {
	this := UsersSubaccountsPostRequest{}
	return &this
}

// GetName returns the Name field value
func (o *UsersSubaccountsPostRequest) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountsPostRequest) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *UsersSubaccountsPostRequest) SetName(v string) {
	o.Name = v
}

// GetAccountType returns the AccountType field value
func (o *UsersSubaccountsPostRequest) GetAccountType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AccountType
}

// GetAccountTypeOk returns a tuple with the AccountType field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountsPostRequest) GetAccountTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AccountType, true
}

// SetAccountType sets field value
func (o *UsersSubaccountsPostRequest) SetAccountType(v string) {
	o.AccountType = v
}

func (o UsersSubaccountsPostRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountsPostRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["name"] = o.Name
	toSerialize["accountType"] = o.AccountType
	return toSerialize, nil
}

func (o *UsersSubaccountsPostRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"name",
		"accountType",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varUsersSubaccountsPostRequest := _UsersSubaccountsPostRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountsPostRequest)

	if err != nil {
		return err
	}

	*o = UsersSubaccountsPostRequest(varUsersSubaccountsPostRequest)

	return err
}

type NullableUsersSubaccountsPostRequest struct {
	value *UsersSubaccountsPostRequest
	isSet bool
}

func (v NullableUsersSubaccountsPostRequest) Get() *UsersSubaccountsPostRequest {
	return v.value
}

func (v *NullableUsersSubaccountsPostRequest) Set(val *UsersSubaccountsPostRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountsPostRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountsPostRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountsPostRequest(val *UsersSubaccountsPostRequest) *NullableUsersSubaccountsPostRequest {
	return &NullableUsersSubaccountsPostRequest{value: val, isSet: true}
}

func (v NullableUsersSubaccountsPostRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountsPostRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


