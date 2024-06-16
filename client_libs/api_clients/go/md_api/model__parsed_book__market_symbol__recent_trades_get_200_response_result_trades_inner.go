/*
Cube Mendelev HTTP API

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

// checks if the ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner{}

// ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner struct for ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner
type ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner struct {
	// The trade ID.
	Id int32 `json:"id"`
	// The price of the trade.
	P float64 `json:"p"`
	// The quantity of the trade.
	Q float64 `json:"q"`
	// The side of the aggressing order.
	Side string `json:"side"`
	// The millisecond timestamp of the trade.
	Ts int32 `json:"ts"`
}

type _ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner

// NewParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner instantiates a new ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner(id int32, p float64, q float64, side string, ts int32) *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
	this := ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner{}
	this.Id = id
	this.P = p
	this.Q = q
	this.Side = side
	this.Ts = ts
	return &this
}

// NewParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInnerWithDefaults instantiates a new ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInnerWithDefaults() *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
	this := ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner{}
	return &this
}

// GetId returns the Id field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) SetId(v int32) {
	o.Id = v
}

// GetP returns the P field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetP() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.P
}

// GetPOk returns a tuple with the P field value
// and a boolean to check if the value has been set.
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetPOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.P, true
}

// SetP sets field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) SetP(v float64) {
	o.P = v
}

// GetQ returns the Q field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetQ() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Q
}

// GetQOk returns a tuple with the Q field value
// and a boolean to check if the value has been set.
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetQOk() (*float64, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Q, true
}

// SetQ sets field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) SetQ(v float64) {
	o.Q = v
}

// GetSide returns the Side field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetSide() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Side
}

// GetSideOk returns a tuple with the Side field value
// and a boolean to check if the value has been set.
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetSideOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Side, true
}

// SetSide sets field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) SetSide(v string) {
	o.Side = v
}

// GetTs returns the Ts field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetTs() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Ts
}

// GetTsOk returns a tuple with the Ts field value
// and a boolean to check if the value has been set.
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) GetTsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Ts, true
}

// SetTs sets field value
func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) SetTs(v int32) {
	o.Ts = v
}

func (o ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["p"] = o.P
	toSerialize["q"] = o.Q
	toSerialize["side"] = o.Side
	toSerialize["ts"] = o.Ts
	return toSerialize, nil
}

func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
		"p",
		"q",
		"side",
		"ts",
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

	varParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner := _ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner)

	if err != nil {
		return err
	}

	*o = ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner(varParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner)

	return err
}

type NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner struct {
	value *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner
	isSet bool
}

func (v NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) Get() *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
	return v.value
}

func (v *NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) Set(val *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) {
	v.value = val
	v.isSet = true
}

func (v NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) IsSet() bool {
	return v.isSet
}

func (v *NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner(val *ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) *NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
	return &NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner{value: val, isSet: true}
}

func (v NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

