/*
Cube Osmium HTTP API

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

// checks if the OrderPost200ResponseResultOneOf1 type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrderPost200ResponseResultOneOf1{}

// OrderPost200ResponseResultOneOf1 struct for OrderPost200ResponseResultOneOf1
type OrderPost200ResponseResultOneOf1 struct {
	Rej OrderPost200ResponseResultOneOf1Rej `json:"Rej"`
}

type _OrderPost200ResponseResultOneOf1 OrderPost200ResponseResultOneOf1

// NewOrderPost200ResponseResultOneOf1 instantiates a new OrderPost200ResponseResultOneOf1 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderPost200ResponseResultOneOf1(rej OrderPost200ResponseResultOneOf1Rej) *OrderPost200ResponseResultOneOf1 {
	this := OrderPost200ResponseResultOneOf1{}
	this.Rej = rej
	return &this
}

// NewOrderPost200ResponseResultOneOf1WithDefaults instantiates a new OrderPost200ResponseResultOneOf1 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderPost200ResponseResultOneOf1WithDefaults() *OrderPost200ResponseResultOneOf1 {
	this := OrderPost200ResponseResultOneOf1{}
	return &this
}

// GetRej returns the Rej field value
func (o *OrderPost200ResponseResultOneOf1) GetRej() OrderPost200ResponseResultOneOf1Rej {
	if o == nil {
		var ret OrderPost200ResponseResultOneOf1Rej
		return ret
	}

	return o.Rej
}

// GetRejOk returns a tuple with the Rej field value
// and a boolean to check if the value has been set.
func (o *OrderPost200ResponseResultOneOf1) GetRejOk() (*OrderPost200ResponseResultOneOf1Rej, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Rej, true
}

// SetRej sets field value
func (o *OrderPost200ResponseResultOneOf1) SetRej(v OrderPost200ResponseResultOneOf1Rej) {
	o.Rej = v
}

func (o OrderPost200ResponseResultOneOf1) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrderPost200ResponseResultOneOf1) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["Rej"] = o.Rej
	return toSerialize, nil
}

func (o *OrderPost200ResponseResultOneOf1) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"Rej",
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

	varOrderPost200ResponseResultOneOf1 := _OrderPost200ResponseResultOneOf1{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrderPost200ResponseResultOneOf1)

	if err != nil {
		return err
	}

	*o = OrderPost200ResponseResultOneOf1(varOrderPost200ResponseResultOneOf1)

	return err
}

type NullableOrderPost200ResponseResultOneOf1 struct {
	value *OrderPost200ResponseResultOneOf1
	isSet bool
}

func (v NullableOrderPost200ResponseResultOneOf1) Get() *OrderPost200ResponseResultOneOf1 {
	return v.value
}

func (v *NullableOrderPost200ResponseResultOneOf1) Set(val *OrderPost200ResponseResultOneOf1) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderPost200ResponseResultOneOf1) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderPost200ResponseResultOneOf1) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderPost200ResponseResultOneOf1(val *OrderPost200ResponseResultOneOf1) *NullableOrderPost200ResponseResultOneOf1 {
	return &NullableOrderPost200ResponseResultOneOf1{value: val, isSet: true}
}

func (v NullableOrderPost200ResponseResultOneOf1) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderPost200ResponseResultOneOf1) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

