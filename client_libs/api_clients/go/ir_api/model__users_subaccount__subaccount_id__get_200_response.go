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

// checks if the UsersSubaccountSubaccountIdGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountSubaccountIdGet200Response{}

// UsersSubaccountSubaccountIdGet200Response struct for UsersSubaccountSubaccountIdGet200Response
type UsersSubaccountSubaccountIdGet200Response struct {
	Result UsersInfoGet200ResponseResultSubaccountsInner `json:"result"`
}

type _UsersSubaccountSubaccountIdGet200Response UsersSubaccountSubaccountIdGet200Response

// NewUsersSubaccountSubaccountIdGet200Response instantiates a new UsersSubaccountSubaccountIdGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountSubaccountIdGet200Response(result UsersInfoGet200ResponseResultSubaccountsInner) *UsersSubaccountSubaccountIdGet200Response {
	this := UsersSubaccountSubaccountIdGet200Response{}
	this.Result = result
	return &this
}

// NewUsersSubaccountSubaccountIdGet200ResponseWithDefaults instantiates a new UsersSubaccountSubaccountIdGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountSubaccountIdGet200ResponseWithDefaults() *UsersSubaccountSubaccountIdGet200Response {
	this := UsersSubaccountSubaccountIdGet200Response{}
	return &this
}

// GetResult returns the Result field value
func (o *UsersSubaccountSubaccountIdGet200Response) GetResult() UsersInfoGet200ResponseResultSubaccountsInner {
	if o == nil {
		var ret UsersInfoGet200ResponseResultSubaccountsInner
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdGet200Response) GetResultOk() (*UsersInfoGet200ResponseResultSubaccountsInner, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *UsersSubaccountSubaccountIdGet200Response) SetResult(v UsersInfoGet200ResponseResultSubaccountsInner) {
	o.Result = v
}

func (o UsersSubaccountSubaccountIdGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountSubaccountIdGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["result"] = o.Result
	return toSerialize, nil
}

func (o *UsersSubaccountSubaccountIdGet200Response) UnmarshalJSON(data []byte) (err error) {
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

	varUsersSubaccountSubaccountIdGet200Response := _UsersSubaccountSubaccountIdGet200Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountSubaccountIdGet200Response)

	if err != nil {
		return err
	}

	*o = UsersSubaccountSubaccountIdGet200Response(varUsersSubaccountSubaccountIdGet200Response)

	return err
}

type NullableUsersSubaccountSubaccountIdGet200Response struct {
	value *UsersSubaccountSubaccountIdGet200Response
	isSet bool
}

func (v NullableUsersSubaccountSubaccountIdGet200Response) Get() *UsersSubaccountSubaccountIdGet200Response {
	return v.value
}

func (v *NullableUsersSubaccountSubaccountIdGet200Response) Set(val *UsersSubaccountSubaccountIdGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountSubaccountIdGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountSubaccountIdGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountSubaccountIdGet200Response(val *UsersSubaccountSubaccountIdGet200Response) *NullableUsersSubaccountSubaccountIdGet200Response {
	return &NullableUsersSubaccountSubaccountIdGet200Response{value: val, isSet: true}
}

func (v NullableUsersSubaccountSubaccountIdGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountSubaccountIdGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


