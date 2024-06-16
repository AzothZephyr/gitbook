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

// checks if the UsersCheckGet200ResponseResult type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersCheckGet200ResponseResult{}

// UsersCheckGet200ResponseResult struct for UsersCheckGet200ResponseResult
type UsersCheckGet200ResponseResult struct {
	Id string `json:"id"`
}

type _UsersCheckGet200ResponseResult UsersCheckGet200ResponseResult

// NewUsersCheckGet200ResponseResult instantiates a new UsersCheckGet200ResponseResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersCheckGet200ResponseResult(id string) *UsersCheckGet200ResponseResult {
	this := UsersCheckGet200ResponseResult{}
	this.Id = id
	return &this
}

// NewUsersCheckGet200ResponseResultWithDefaults instantiates a new UsersCheckGet200ResponseResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersCheckGet200ResponseResultWithDefaults() *UsersCheckGet200ResponseResult {
	this := UsersCheckGet200ResponseResult{}
	return &this
}

// GetId returns the Id field value
func (o *UsersCheckGet200ResponseResult) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *UsersCheckGet200ResponseResult) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *UsersCheckGet200ResponseResult) SetId(v string) {
	o.Id = v
}

func (o UsersCheckGet200ResponseResult) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersCheckGet200ResponseResult) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	return toSerialize, nil
}

func (o *UsersCheckGet200ResponseResult) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
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

	varUsersCheckGet200ResponseResult := _UsersCheckGet200ResponseResult{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersCheckGet200ResponseResult)

	if err != nil {
		return err
	}

	*o = UsersCheckGet200ResponseResult(varUsersCheckGet200ResponseResult)

	return err
}

type NullableUsersCheckGet200ResponseResult struct {
	value *UsersCheckGet200ResponseResult
	isSet bool
}

func (v NullableUsersCheckGet200ResponseResult) Get() *UsersCheckGet200ResponseResult {
	return v.value
}

func (v *NullableUsersCheckGet200ResponseResult) Set(val *UsersCheckGet200ResponseResult) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersCheckGet200ResponseResult) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersCheckGet200ResponseResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersCheckGet200ResponseResult(val *UsersCheckGet200ResponseResult) *NullableUsersCheckGet200ResponseResult {
	return &NullableUsersCheckGet200ResponseResult{value: val, isSet: true}
}

func (v NullableUsersCheckGet200ResponseResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersCheckGet200ResponseResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


