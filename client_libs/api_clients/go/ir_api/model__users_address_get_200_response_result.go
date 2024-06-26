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

// checks if the UsersAddressGet200ResponseResult type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersAddressGet200ResponseResult{}

// UsersAddressGet200ResponseResult struct for UsersAddressGet200ResponseResult
type UsersAddressGet200ResponseResult struct {
	Addresses []UsersAddressGet200ResponseResultAddressesInner `json:"addresses"`
	Settings UsersAddressGet200ResponseResultSettings `json:"settings"`
}

type _UsersAddressGet200ResponseResult UsersAddressGet200ResponseResult

// NewUsersAddressGet200ResponseResult instantiates a new UsersAddressGet200ResponseResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersAddressGet200ResponseResult(addresses []UsersAddressGet200ResponseResultAddressesInner, settings UsersAddressGet200ResponseResultSettings) *UsersAddressGet200ResponseResult {
	this := UsersAddressGet200ResponseResult{}
	this.Addresses = addresses
	this.Settings = settings
	return &this
}

// NewUsersAddressGet200ResponseResultWithDefaults instantiates a new UsersAddressGet200ResponseResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersAddressGet200ResponseResultWithDefaults() *UsersAddressGet200ResponseResult {
	this := UsersAddressGet200ResponseResult{}
	return &this
}

// GetAddresses returns the Addresses field value
func (o *UsersAddressGet200ResponseResult) GetAddresses() []UsersAddressGet200ResponseResultAddressesInner {
	if o == nil {
		var ret []UsersAddressGet200ResponseResultAddressesInner
		return ret
	}

	return o.Addresses
}

// GetAddressesOk returns a tuple with the Addresses field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResult) GetAddressesOk() ([]UsersAddressGet200ResponseResultAddressesInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.Addresses, true
}

// SetAddresses sets field value
func (o *UsersAddressGet200ResponseResult) SetAddresses(v []UsersAddressGet200ResponseResultAddressesInner) {
	o.Addresses = v
}

// GetSettings returns the Settings field value
func (o *UsersAddressGet200ResponseResult) GetSettings() UsersAddressGet200ResponseResultSettings {
	if o == nil {
		var ret UsersAddressGet200ResponseResultSettings
		return ret
	}

	return o.Settings
}

// GetSettingsOk returns a tuple with the Settings field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResult) GetSettingsOk() (*UsersAddressGet200ResponseResultSettings, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Settings, true
}

// SetSettings sets field value
func (o *UsersAddressGet200ResponseResult) SetSettings(v UsersAddressGet200ResponseResultSettings) {
	o.Settings = v
}

func (o UsersAddressGet200ResponseResult) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersAddressGet200ResponseResult) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["addresses"] = o.Addresses
	toSerialize["settings"] = o.Settings
	return toSerialize, nil
}

func (o *UsersAddressGet200ResponseResult) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"addresses",
		"settings",
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

	varUsersAddressGet200ResponseResult := _UsersAddressGet200ResponseResult{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersAddressGet200ResponseResult)

	if err != nil {
		return err
	}

	*o = UsersAddressGet200ResponseResult(varUsersAddressGet200ResponseResult)

	return err
}

type NullableUsersAddressGet200ResponseResult struct {
	value *UsersAddressGet200ResponseResult
	isSet bool
}

func (v NullableUsersAddressGet200ResponseResult) Get() *UsersAddressGet200ResponseResult {
	return v.value
}

func (v *NullableUsersAddressGet200ResponseResult) Set(val *UsersAddressGet200ResponseResult) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersAddressGet200ResponseResult) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersAddressGet200ResponseResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersAddressGet200ResponseResult(val *UsersAddressGet200ResponseResult) *NullableUsersAddressGet200ResponseResult {
	return &NullableUsersAddressGet200ResponseResult{value: val, isSet: true}
}

func (v NullableUsersAddressGet200ResponseResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersAddressGet200ResponseResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


