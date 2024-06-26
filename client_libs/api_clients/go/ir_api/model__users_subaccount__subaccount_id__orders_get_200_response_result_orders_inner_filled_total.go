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

// checks if the UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal{}

// UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal struct for UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal
type UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal struct {
	BaseAmount float64 `json:"baseAmount"`
	QuoteAmount float64 `json:"quoteAmount"`
	FeeAmount float64 `json:"feeAmount"`
	FeeAssetId NullableInt32 `json:"feeAssetId,omitempty"`
	FilledAt int64 `json:"filledAt"`
}

type _UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal

// NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal(baseAmount float64, quoteAmount float64, feeAmount float64, filledAt int64) *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal {
	this := UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal{}
	this.BaseAmount = baseAmount
	this.QuoteAmount = quoteAmount
	this.FeeAmount = feeAmount
	this.FilledAt = filledAt
	return &this
}

// NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotalWithDefaults instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotalWithDefaults() *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal {
	this := UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal{}
	return &this
}

// GetBaseAmount returns the BaseAmount field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetBaseAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetBaseAmountOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.BaseAmount, true
}

// SetBaseAmount sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetBaseAmount(v float64) {
	o.BaseAmount = v
}

// GetQuoteAmount returns the QuoteAmount field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetQuoteAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.QuoteAmount
}

// GetQuoteAmountOk returns a tuple with the QuoteAmount field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetQuoteAmountOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.QuoteAmount, true
}

// SetQuoteAmount sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetQuoteAmount(v float64) {
	o.QuoteAmount = v
}

// GetFeeAmount returns the FeeAmount field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFeeAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.FeeAmount
}

// GetFeeAmountOk returns a tuple with the FeeAmount field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFeeAmountOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.FeeAmount, true
}

// SetFeeAmount sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetFeeAmount(v float64) {
	o.FeeAmount = v
}

// GetFeeAssetId returns the FeeAssetId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFeeAssetId() int32 {
	if o == nil || IsNil(o.FeeAssetId.Get()) {
		var ret int32
		return ret
	}
	return *o.FeeAssetId.Get()
}

// GetFeeAssetIdOk returns a tuple with the FeeAssetId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFeeAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.FeeAssetId.Get(), o.FeeAssetId.IsSet()
}

// HasFeeAssetId returns a boolean if a field has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) HasFeeAssetId() bool {
	if o != nil && o.FeeAssetId.IsSet() {
		return true
	}

	return false
}

// SetFeeAssetId gets a reference to the given NullableInt32 and assigns it to the FeeAssetId field.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetFeeAssetId(v int32) {
	o.FeeAssetId.Set(&v)
}
// SetFeeAssetIdNil sets the value for FeeAssetId to be an explicit nil
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetFeeAssetIdNil() {
	o.FeeAssetId.Set(nil)
}

// UnsetFeeAssetId ensures that no value is present for FeeAssetId, not even an explicit nil
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) UnsetFeeAssetId() {
	o.FeeAssetId.Unset()
}

// GetFilledAt returns the FilledAt field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFilledAt() int64 {
	if o == nil {
		var ret int64
		return ret
	}

	return o.FilledAt
}

// GetFilledAtOk returns a tuple with the FilledAt field value
// and a boolean to check if the value has been set.
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) GetFilledAtOk() (*int64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.FilledAt, true
}

// SetFilledAt sets field value
func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) SetFilledAt(v int64) {
	o.FilledAt = v
}

func (o UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["baseAmount"] = o.BaseAmount
	toSerialize["quoteAmount"] = o.QuoteAmount
	toSerialize["feeAmount"] = o.FeeAmount
	if o.FeeAssetId.IsSet() {
		toSerialize["feeAssetId"] = o.FeeAssetId.Get()
	}
	toSerialize["filledAt"] = o.FilledAt
	return toSerialize, nil
}

func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"baseAmount",
		"quoteAmount",
		"feeAmount",
		"filledAt",
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

	varUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal := _UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal)

	if err != nil {
		return err
	}

	*o = UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal(varUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal)

	return err
}

type NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal struct {
	value *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal
	isSet bool
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) Get() *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal {
	return v.value
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) Set(val *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal(val *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal {
	return &NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal{value: val, isSet: true}
}

func (v NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


