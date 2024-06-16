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
	"time"
	"bytes"
	"fmt"
)

// checks if the UsersInfoGet200ResponseResultApiKeysInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersInfoGet200ResponseResultApiKeysInner{}

// UsersInfoGet200ResponseResultApiKeysInner struct for UsersInfoGet200ResponseResultApiKeysInner
type UsersInfoGet200ResponseResultApiKeysInner struct {
	IsMasterKey bool `json:"isMasterKey"`
	SubaccountIds []int64 `json:"subaccountIds"`
	AccessLevel string `json:"accessLevel"`
	ApiKey string `json:"apiKey"`
	CreatedAt time.Time `json:"createdAt"`
}

type _UsersInfoGet200ResponseResultApiKeysInner UsersInfoGet200ResponseResultApiKeysInner

// NewUsersInfoGet200ResponseResultApiKeysInner instantiates a new UsersInfoGet200ResponseResultApiKeysInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersInfoGet200ResponseResultApiKeysInner(isMasterKey bool, subaccountIds []int64, accessLevel string, apiKey string, createdAt time.Time) *UsersInfoGet200ResponseResultApiKeysInner {
	this := UsersInfoGet200ResponseResultApiKeysInner{}
	this.IsMasterKey = isMasterKey
	this.SubaccountIds = subaccountIds
	this.AccessLevel = accessLevel
	this.ApiKey = apiKey
	this.CreatedAt = createdAt
	return &this
}

// NewUsersInfoGet200ResponseResultApiKeysInnerWithDefaults instantiates a new UsersInfoGet200ResponseResultApiKeysInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersInfoGet200ResponseResultApiKeysInnerWithDefaults() *UsersInfoGet200ResponseResultApiKeysInner {
	this := UsersInfoGet200ResponseResultApiKeysInner{}
	return &this
}

// GetIsMasterKey returns the IsMasterKey field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetIsMasterKey() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.IsMasterKey
}

// GetIsMasterKeyOk returns a tuple with the IsMasterKey field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetIsMasterKeyOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.IsMasterKey, true
}

// SetIsMasterKey sets field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) SetIsMasterKey(v bool) {
	o.IsMasterKey = v
}

// GetSubaccountIds returns the SubaccountIds field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetSubaccountIds() []int64 {
	if o == nil {
		var ret []int64
		return ret
	}

	return o.SubaccountIds
}

// GetSubaccountIdsOk returns a tuple with the SubaccountIds field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetSubaccountIdsOk() ([]int64, bool) {
	if o == nil {
		return nil, false
	}
	return o.SubaccountIds, true
}

// SetSubaccountIds sets field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) SetSubaccountIds(v []int64) {
	o.SubaccountIds = v
}

// GetAccessLevel returns the AccessLevel field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetAccessLevel() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AccessLevel
}

// GetAccessLevelOk returns a tuple with the AccessLevel field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetAccessLevelOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AccessLevel, true
}

// SetAccessLevel sets field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) SetAccessLevel(v string) {
	o.AccessLevel = v
}

// GetApiKey returns the ApiKey field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetApiKey() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ApiKey
}

// GetApiKeyOk returns a tuple with the ApiKey field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetApiKeyOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ApiKey, true
}

// SetApiKey sets field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) SetApiKey(v string) {
	o.ApiKey = v
}

// GetCreatedAt returns the CreatedAt field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetCreatedAt() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultApiKeysInner) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CreatedAt, true
}

// SetCreatedAt sets field value
func (o *UsersInfoGet200ResponseResultApiKeysInner) SetCreatedAt(v time.Time) {
	o.CreatedAt = v
}

func (o UsersInfoGet200ResponseResultApiKeysInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersInfoGet200ResponseResultApiKeysInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["isMasterKey"] = o.IsMasterKey
	toSerialize["subaccountIds"] = o.SubaccountIds
	toSerialize["accessLevel"] = o.AccessLevel
	toSerialize["apiKey"] = o.ApiKey
	toSerialize["createdAt"] = o.CreatedAt
	return toSerialize, nil
}

func (o *UsersInfoGet200ResponseResultApiKeysInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"isMasterKey",
		"subaccountIds",
		"accessLevel",
		"apiKey",
		"createdAt",
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

	varUsersInfoGet200ResponseResultApiKeysInner := _UsersInfoGet200ResponseResultApiKeysInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersInfoGet200ResponseResultApiKeysInner)

	if err != nil {
		return err
	}

	*o = UsersInfoGet200ResponseResultApiKeysInner(varUsersInfoGet200ResponseResultApiKeysInner)

	return err
}

type NullableUsersInfoGet200ResponseResultApiKeysInner struct {
	value *UsersInfoGet200ResponseResultApiKeysInner
	isSet bool
}

func (v NullableUsersInfoGet200ResponseResultApiKeysInner) Get() *UsersInfoGet200ResponseResultApiKeysInner {
	return v.value
}

func (v *NullableUsersInfoGet200ResponseResultApiKeysInner) Set(val *UsersInfoGet200ResponseResultApiKeysInner) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersInfoGet200ResponseResultApiKeysInner) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersInfoGet200ResponseResultApiKeysInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersInfoGet200ResponseResultApiKeysInner(val *UsersInfoGet200ResponseResultApiKeysInner) *NullableUsersInfoGet200ResponseResultApiKeysInner {
	return &NullableUsersInfoGet200ResponseResultApiKeysInner{value: val, isSet: true}
}

func (v NullableUsersInfoGet200ResponseResultApiKeysInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersInfoGet200ResponseResultApiKeysInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


