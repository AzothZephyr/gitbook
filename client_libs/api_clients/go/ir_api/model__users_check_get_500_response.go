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

// checks if the UsersCheckGet500Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersCheckGet500Response{}

// UsersCheckGet500Response struct for UsersCheckGet500Response
type UsersCheckGet500Response struct {
	Error string `json:"error"`
}

type _UsersCheckGet500Response UsersCheckGet500Response

// NewUsersCheckGet500Response instantiates a new UsersCheckGet500Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersCheckGet500Response(error_ string) *UsersCheckGet500Response {
	this := UsersCheckGet500Response{}
	this.Error = error_
	return &this
}

// NewUsersCheckGet500ResponseWithDefaults instantiates a new UsersCheckGet500Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersCheckGet500ResponseWithDefaults() *UsersCheckGet500Response {
	this := UsersCheckGet500Response{}
	return &this
}

// GetError returns the Error field value
func (o *UsersCheckGet500Response) GetError() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Error
}

// GetErrorOk returns a tuple with the Error field value
// and a boolean to check if the value has been set.
func (o *UsersCheckGet500Response) GetErrorOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Error, true
}

// SetError sets field value
func (o *UsersCheckGet500Response) SetError(v string) {
	o.Error = v
}

func (o UsersCheckGet500Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersCheckGet500Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["error"] = o.Error
	return toSerialize, nil
}

func (o *UsersCheckGet500Response) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"error",
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

	varUsersCheckGet500Response := _UsersCheckGet500Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersCheckGet500Response)

	if err != nil {
		return err
	}

	*o = UsersCheckGet500Response(varUsersCheckGet500Response)

	return err
}

type NullableUsersCheckGet500Response struct {
	value *UsersCheckGet500Response
	isSet bool
}

func (v NullableUsersCheckGet500Response) Get() *UsersCheckGet500Response {
	return v.value
}

func (v *NullableUsersCheckGet500Response) Set(val *UsersCheckGet500Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersCheckGet500Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersCheckGet500Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersCheckGet500Response(val *UsersCheckGet500Response) *NullableUsersCheckGet500Response {
	return &NullableUsersCheckGet500Response{value: val, isSet: true}
}

func (v NullableUsersCheckGet500Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersCheckGet500Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


