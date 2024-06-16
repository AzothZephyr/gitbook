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

// checks if the UsersSubaccountsGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountsGet200Response{}

// UsersSubaccountsGet200Response struct for UsersSubaccountsGet200Response
type UsersSubaccountsGet200Response struct {
	Result UsersSubaccountsGet200ResponseResult `json:"result"`
}

type _UsersSubaccountsGet200Response UsersSubaccountsGet200Response

// NewUsersSubaccountsGet200Response instantiates a new UsersSubaccountsGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountsGet200Response(result UsersSubaccountsGet200ResponseResult) *UsersSubaccountsGet200Response {
	this := UsersSubaccountsGet200Response{}
	this.Result = result
	return &this
}

// NewUsersSubaccountsGet200ResponseWithDefaults instantiates a new UsersSubaccountsGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountsGet200ResponseWithDefaults() *UsersSubaccountsGet200Response {
	this := UsersSubaccountsGet200Response{}
	return &this
}

// GetResult returns the Result field value
func (o *UsersSubaccountsGet200Response) GetResult() UsersSubaccountsGet200ResponseResult {
	if o == nil {
		var ret UsersSubaccountsGet200ResponseResult
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountsGet200Response) GetResultOk() (*UsersSubaccountsGet200ResponseResult, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *UsersSubaccountsGet200Response) SetResult(v UsersSubaccountsGet200ResponseResult) {
	o.Result = v
}

func (o UsersSubaccountsGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountsGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["result"] = o.Result
	return toSerialize, nil
}

func (o *UsersSubaccountsGet200Response) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"result",
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

	varUsersSubaccountsGet200Response := _UsersSubaccountsGet200Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountsGet200Response)

	if err != nil {
		return err
	}

	*o = UsersSubaccountsGet200Response(varUsersSubaccountsGet200Response)

	return err
}

type NullableUsersSubaccountsGet200Response struct {
	value *UsersSubaccountsGet200Response
	isSet bool
}

func (v NullableUsersSubaccountsGet200Response) Get() *UsersSubaccountsGet200Response {
	return v.value
}

func (v *NullableUsersSubaccountsGet200Response) Set(val *UsersSubaccountsGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountsGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountsGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountsGet200Response(val *UsersSubaccountsGet200Response) *NullableUsersSubaccountsGet200Response {
	return &NullableUsersSubaccountsGet200Response{value: val, isSet: true}
}

func (v NullableUsersSubaccountsGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountsGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

