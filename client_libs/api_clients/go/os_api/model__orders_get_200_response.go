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

// checks if the OrdersGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrdersGet200Response{}

// OrdersGet200Response struct for OrdersGet200Response
type OrdersGet200Response struct {
	Result OrdersGet200ResponseResult `json:"result"`
}

type _OrdersGet200Response OrdersGet200Response

// NewOrdersGet200Response instantiates a new OrdersGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrdersGet200Response(result OrdersGet200ResponseResult) *OrdersGet200Response {
	this := OrdersGet200Response{}
	this.Result = result
	return &this
}

// NewOrdersGet200ResponseWithDefaults instantiates a new OrdersGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrdersGet200ResponseWithDefaults() *OrdersGet200Response {
	this := OrdersGet200Response{}
	return &this
}

// GetResult returns the Result field value
func (o *OrdersGet200Response) GetResult() OrdersGet200ResponseResult {
	if o == nil {
		var ret OrdersGet200ResponseResult
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *OrdersGet200Response) GetResultOk() (*OrdersGet200ResponseResult, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *OrdersGet200Response) SetResult(v OrdersGet200ResponseResult) {
	o.Result = v
}

func (o OrdersGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrdersGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["result"] = o.Result
	return toSerialize, nil
}

func (o *OrdersGet200Response) UnmarshalJSON(data []byte) (err error) {
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

	varOrdersGet200Response := _OrdersGet200Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrdersGet200Response)

	if err != nil {
		return err
	}

	*o = OrdersGet200Response(varOrdersGet200Response)

	return err
}

type NullableOrdersGet200Response struct {
	value *OrdersGet200Response
	isSet bool
}

func (v NullableOrdersGet200Response) Get() *OrdersGet200Response {
	return v.value
}

func (v *NullableOrdersGet200Response) Set(val *OrdersGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableOrdersGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableOrdersGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrdersGet200Response(val *OrdersGet200Response) *NullableOrdersGet200Response {
	return &NullableOrdersGet200Response{value: val, isSet: true}
}

func (v NullableOrdersGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrdersGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


