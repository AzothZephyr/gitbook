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

// checks if the UsersSubaccountSubaccountIdFillsGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountSubaccountIdFillsGet200Response{}

// UsersSubaccountSubaccountIdFillsGet200Response struct for UsersSubaccountSubaccountIdFillsGet200Response
type UsersSubaccountSubaccountIdFillsGet200Response struct {
	Result UsersSubaccountSubaccountIdFillsGet200ResponseResult `json:"result"`
}

type _UsersSubaccountSubaccountIdFillsGet200Response UsersSubaccountSubaccountIdFillsGet200Response

// NewUsersSubaccountSubaccountIdFillsGet200Response instantiates a new UsersSubaccountSubaccountIdFillsGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountSubaccountIdFillsGet200Response(result UsersSubaccountSubaccountIdFillsGet200ResponseResult) *UsersSubaccountSubaccountIdFillsGet200Response {
	this := UsersSubaccountSubaccountIdFillsGet200Response{}
	this.Result = result
	return &this
}

// NewUsersSubaccountSubaccountIdFillsGet200ResponseWithDefaults instantiates a new UsersSubaccountSubaccountIdFillsGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountSubaccountIdFillsGet200ResponseWithDefaults() *UsersSubaccountSubaccountIdFillsGet200Response {
	this := UsersSubaccountSubaccountIdFillsGet200Response{}
	return &this
}

// GetResult returns the Result field value
func (o *UsersSubaccountSubaccountIdFillsGet200Response) GetResult() UsersSubaccountSubaccountIdFillsGet200ResponseResult {
	if o == nil {
		var ret UsersSubaccountSubaccountIdFillsGet200ResponseResult
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdFillsGet200Response) GetResultOk() (*UsersSubaccountSubaccountIdFillsGet200ResponseResult, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *UsersSubaccountSubaccountIdFillsGet200Response) SetResult(v UsersSubaccountSubaccountIdFillsGet200ResponseResult) {
	o.Result = v
}

func (o UsersSubaccountSubaccountIdFillsGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountSubaccountIdFillsGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["result"] = o.Result
	return toSerialize, nil
}

func (o *UsersSubaccountSubaccountIdFillsGet200Response) UnmarshalJSON(data []byte) (err error) {
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

	varUsersSubaccountSubaccountIdFillsGet200Response := _UsersSubaccountSubaccountIdFillsGet200Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountSubaccountIdFillsGet200Response)

	if err != nil {
		return err
	}

	*o = UsersSubaccountSubaccountIdFillsGet200Response(varUsersSubaccountSubaccountIdFillsGet200Response)

	return err
}

type NullableUsersSubaccountSubaccountIdFillsGet200Response struct {
	value *UsersSubaccountSubaccountIdFillsGet200Response
	isSet bool
}

func (v NullableUsersSubaccountSubaccountIdFillsGet200Response) Get() *UsersSubaccountSubaccountIdFillsGet200Response {
	return v.value
}

func (v *NullableUsersSubaccountSubaccountIdFillsGet200Response) Set(val *UsersSubaccountSubaccountIdFillsGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountSubaccountIdFillsGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountSubaccountIdFillsGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountSubaccountIdFillsGet200Response(val *UsersSubaccountSubaccountIdFillsGet200Response) *NullableUsersSubaccountSubaccountIdFillsGet200Response {
	return &NullableUsersSubaccountSubaccountIdFillsGet200Response{value: val, isSet: true}
}

func (v NullableUsersSubaccountSubaccountIdFillsGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountSubaccountIdFillsGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


