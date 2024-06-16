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

// checks if the UsersSubaccountSubaccountIdOrdersGet200ResponseResult type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountSubaccountIdOrdersGet200ResponseResult{}

// UsersSubaccountSubaccountIdOrdersGet200ResponseResult struct for UsersSubaccountSubaccountIdOrdersGet200ResponseResult
type UsersSubaccountSubaccountIdOrdersGet200ResponseResult struct {
	Name string `json:"name"`
	Orders []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner `json:"orders"`
}

type _UsersSubaccountSubaccountIdOrdersGet200ResponseResult UsersSubaccountSubaccountIdOrdersGet200ResponseResult

// NewUsersSubaccountSubaccountIdOrdersGet200ResponseResult instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResult(name string, orders []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) *UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
	this := UsersSubaccountSubaccountIdOrdersGet200ResponseResult{}
	this.Name = name
	this.Orders = orders
	return &this
}

// NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultWithDefaults instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultWithDefaults() *UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
	this := UsersSubaccountSubaccountIdOrdersGet200ResponseResult{}
	return &this
}

// GetName returns the Name field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) SetName(v string) {
	o.Name = v
}

// GetOrders returns the Orders field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) GetOrders() []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner {
	if o == nil {
		var ret []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner
		return ret
	}

	return o.Orders
}

// GetOrdersOk returns a tuple with the Orders field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) GetOrdersOk() ([]UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.Orders, true
}

// SetOrders sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) SetOrders(v []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) {
	o.Orders = v
}

func (o UsersSubaccountSubaccountIdOrdersGet200ResponseResult) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountSubaccountIdOrdersGet200ResponseResult) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["name"] = o.Name
	toSerialize["orders"] = o.Orders
	return toSerialize, nil
}

func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"name",
		"orders",
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

	varUsersSubaccountSubaccountIdOrdersGet200ResponseResult := _UsersSubaccountSubaccountIdOrdersGet200ResponseResult{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountSubaccountIdOrdersGet200ResponseResult)

	if err != nil {
		return err
	}

	*o = UsersSubaccountSubaccountIdOrdersGet200ResponseResult(varUsersSubaccountSubaccountIdOrdersGet200ResponseResult)

	return err
}

type NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult struct {
	value *UsersSubaccountSubaccountIdOrdersGet200ResponseResult
	isSet bool
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) Get() *UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
	return v.value
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) Set(val *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult(val *UsersSubaccountSubaccountIdOrdersGet200ResponseResult) *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult {
	return &NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult{value: val, isSet: true}
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


