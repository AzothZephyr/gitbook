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

// checks if the MarketsGet200ResponseResult type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketsGet200ResponseResult{}

// MarketsGet200ResponseResult struct for MarketsGet200ResponseResult
type MarketsGet200ResponseResult struct {
	Assets []MarketsGet200ResponseResultAssetsInner `json:"assets"`
	Sources []MarketsGet200ResponseResultSourcesInner `json:"sources"`
	Markets []MarketsGet200ResponseResultMarketsInner `json:"markets"`
	FeeTables []MarketsGet200ResponseResultFeeTablesInner `json:"feeTables"`
}

type _MarketsGet200ResponseResult MarketsGet200ResponseResult

// NewMarketsGet200ResponseResult instantiates a new MarketsGet200ResponseResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketsGet200ResponseResult(assets []MarketsGet200ResponseResultAssetsInner, sources []MarketsGet200ResponseResultSourcesInner, markets []MarketsGet200ResponseResultMarketsInner, feeTables []MarketsGet200ResponseResultFeeTablesInner) *MarketsGet200ResponseResult {
	this := MarketsGet200ResponseResult{}
	this.Assets = assets
	this.Sources = sources
	this.Markets = markets
	this.FeeTables = feeTables
	return &this
}

// NewMarketsGet200ResponseResultWithDefaults instantiates a new MarketsGet200ResponseResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketsGet200ResponseResultWithDefaults() *MarketsGet200ResponseResult {
	this := MarketsGet200ResponseResult{}
	return &this
}

// GetAssets returns the Assets field value
func (o *MarketsGet200ResponseResult) GetAssets() []MarketsGet200ResponseResultAssetsInner {
	if o == nil {
		var ret []MarketsGet200ResponseResultAssetsInner
		return ret
	}

	return o.Assets
}

// GetAssetsOk returns a tuple with the Assets field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResult) GetAssetsOk() ([]MarketsGet200ResponseResultAssetsInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.Assets, true
}

// SetAssets sets field value
func (o *MarketsGet200ResponseResult) SetAssets(v []MarketsGet200ResponseResultAssetsInner) {
	o.Assets = v
}

// GetSources returns the Sources field value
func (o *MarketsGet200ResponseResult) GetSources() []MarketsGet200ResponseResultSourcesInner {
	if o == nil {
		var ret []MarketsGet200ResponseResultSourcesInner
		return ret
	}

	return o.Sources
}

// GetSourcesOk returns a tuple with the Sources field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResult) GetSourcesOk() ([]MarketsGet200ResponseResultSourcesInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.Sources, true
}

// SetSources sets field value
func (o *MarketsGet200ResponseResult) SetSources(v []MarketsGet200ResponseResultSourcesInner) {
	o.Sources = v
}

// GetMarkets returns the Markets field value
func (o *MarketsGet200ResponseResult) GetMarkets() []MarketsGet200ResponseResultMarketsInner {
	if o == nil {
		var ret []MarketsGet200ResponseResultMarketsInner
		return ret
	}

	return o.Markets
}

// GetMarketsOk returns a tuple with the Markets field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResult) GetMarketsOk() ([]MarketsGet200ResponseResultMarketsInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.Markets, true
}

// SetMarkets sets field value
func (o *MarketsGet200ResponseResult) SetMarkets(v []MarketsGet200ResponseResultMarketsInner) {
	o.Markets = v
}

// GetFeeTables returns the FeeTables field value
func (o *MarketsGet200ResponseResult) GetFeeTables() []MarketsGet200ResponseResultFeeTablesInner {
	if o == nil {
		var ret []MarketsGet200ResponseResultFeeTablesInner
		return ret
	}

	return o.FeeTables
}

// GetFeeTablesOk returns a tuple with the FeeTables field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResult) GetFeeTablesOk() ([]MarketsGet200ResponseResultFeeTablesInner, bool) {
	if o == nil {
		return nil, false
	}
	return o.FeeTables, true
}

// SetFeeTables sets field value
func (o *MarketsGet200ResponseResult) SetFeeTables(v []MarketsGet200ResponseResultFeeTablesInner) {
	o.FeeTables = v
}

func (o MarketsGet200ResponseResult) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketsGet200ResponseResult) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["assets"] = o.Assets
	toSerialize["sources"] = o.Sources
	toSerialize["markets"] = o.Markets
	toSerialize["feeTables"] = o.FeeTables
	return toSerialize, nil
}

func (o *MarketsGet200ResponseResult) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"assets",
		"sources",
		"markets",
		"feeTables",
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

	varMarketsGet200ResponseResult := _MarketsGet200ResponseResult{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varMarketsGet200ResponseResult)

	if err != nil {
		return err
	}

	*o = MarketsGet200ResponseResult(varMarketsGet200ResponseResult)

	return err
}

type NullableMarketsGet200ResponseResult struct {
	value *MarketsGet200ResponseResult
	isSet bool
}

func (v NullableMarketsGet200ResponseResult) Get() *MarketsGet200ResponseResult {
	return v.value
}

func (v *NullableMarketsGet200ResponseResult) Set(val *MarketsGet200ResponseResult) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketsGet200ResponseResult) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketsGet200ResponseResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketsGet200ResponseResult(val *MarketsGet200ResponseResult) *NullableMarketsGet200ResponseResult {
	return &NullableMarketsGet200ResponseResult{value: val, isSet: true}
}

func (v NullableMarketsGet200ResponseResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketsGet200ResponseResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


