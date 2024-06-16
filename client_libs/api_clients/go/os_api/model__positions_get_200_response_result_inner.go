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

// checks if the PositionsGet200ResponseResultInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PositionsGet200ResponseResultInner{}

// PositionsGet200ResponseResultInner struct for PositionsGet200ResponseResultInner
type PositionsGet200ResponseResultInner struct {
	AssetId int32 `json:"assetId"`
	Total float64 `json:"total"`
	Available float64 `json:"available"`
}

type _PositionsGet200ResponseResultInner PositionsGet200ResponseResultInner

// NewPositionsGet200ResponseResultInner instantiates a new PositionsGet200ResponseResultInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPositionsGet200ResponseResultInner(assetId int32, total float64, available float64) *PositionsGet200ResponseResultInner {
	this := PositionsGet200ResponseResultInner{}
	this.AssetId = assetId
	this.Total = total
	this.Available = available
	return &this
}

// NewPositionsGet200ResponseResultInnerWithDefaults instantiates a new PositionsGet200ResponseResultInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPositionsGet200ResponseResultInnerWithDefaults() *PositionsGet200ResponseResultInner {
	this := PositionsGet200ResponseResultInner{}
	return &this
}

// GetAssetId returns the AssetId field value
func (o *PositionsGet200ResponseResultInner) GetAssetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.AssetId
}

// GetAssetIdOk returns a tuple with the AssetId field value
// and a boolean to check if the value has been set.
func (o *PositionsGet200ResponseResultInner) GetAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AssetId, true
}

// SetAssetId sets field value
func (o *PositionsGet200ResponseResultInner) SetAssetId(v int32) {
	o.AssetId = v
}

// GetTotal returns the Total field value
func (o *PositionsGet200ResponseResultInner) GetTotal() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *PositionsGet200ResponseResultInner) GetTotalOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *PositionsGet200ResponseResultInner) SetTotal(v float64) {
	o.Total = v
}

// GetAvailable returns the Available field value
func (o *PositionsGet200ResponseResultInner) GetAvailable() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Available
}

// GetAvailableOk returns a tuple with the Available field value
// and a boolean to check if the value has been set.
func (o *PositionsGet200ResponseResultInner) GetAvailableOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Available, true
}

// SetAvailable sets field value
func (o *PositionsGet200ResponseResultInner) SetAvailable(v float64) {
	o.Available = v
}

func (o PositionsGet200ResponseResultInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PositionsGet200ResponseResultInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["assetId"] = o.AssetId
	toSerialize["total"] = o.Total
	toSerialize["available"] = o.Available
	return toSerialize, nil
}

func (o *PositionsGet200ResponseResultInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"assetId",
		"total",
		"available",
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

	varPositionsGet200ResponseResultInner := _PositionsGet200ResponseResultInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varPositionsGet200ResponseResultInner)

	if err != nil {
		return err
	}

	*o = PositionsGet200ResponseResultInner(varPositionsGet200ResponseResultInner)

	return err
}

type NullablePositionsGet200ResponseResultInner struct {
	value *PositionsGet200ResponseResultInner
	isSet bool
}

func (v NullablePositionsGet200ResponseResultInner) Get() *PositionsGet200ResponseResultInner {
	return v.value
}

func (v *NullablePositionsGet200ResponseResultInner) Set(val *PositionsGet200ResponseResultInner) {
	v.value = val
	v.isSet = true
}

func (v NullablePositionsGet200ResponseResultInner) IsSet() bool {
	return v.isSet
}

func (v *NullablePositionsGet200ResponseResultInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePositionsGet200ResponseResultInner(val *PositionsGet200ResponseResultInner) *NullablePositionsGet200ResponseResultInner {
	return &NullablePositionsGet200ResponseResultInner{value: val, isSet: true}
}

func (v NullablePositionsGet200ResponseResultInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePositionsGet200ResponseResultInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


