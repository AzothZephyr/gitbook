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

// checks if the UsersInfoGet200ResponseResultGuardianHasKeyInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersInfoGet200ResponseResultGuardianHasKeyInner{}

// UsersInfoGet200ResponseResultGuardianHasKeyInner struct for UsersInfoGet200ResponseResultGuardianHasKeyInner
type UsersInfoGet200ResponseResultGuardianHasKeyInner struct {
	Id int32 `json:"id"`
	Name string `json:"name"`
	HasKey NullableBool `json:"hasKey,omitempty"`
}

type _UsersInfoGet200ResponseResultGuardianHasKeyInner UsersInfoGet200ResponseResultGuardianHasKeyInner

// NewUsersInfoGet200ResponseResultGuardianHasKeyInner instantiates a new UsersInfoGet200ResponseResultGuardianHasKeyInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersInfoGet200ResponseResultGuardianHasKeyInner(id int32, name string) *UsersInfoGet200ResponseResultGuardianHasKeyInner {
	this := UsersInfoGet200ResponseResultGuardianHasKeyInner{}
	this.Id = id
	this.Name = name
	return &this
}

// NewUsersInfoGet200ResponseResultGuardianHasKeyInnerWithDefaults instantiates a new UsersInfoGet200ResponseResultGuardianHasKeyInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersInfoGet200ResponseResultGuardianHasKeyInnerWithDefaults() *UsersInfoGet200ResponseResultGuardianHasKeyInner {
	this := UsersInfoGet200ResponseResultGuardianHasKeyInner{}
	return &this
}

// GetId returns the Id field value
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) SetId(v int32) {
	o.Id = v
}

// GetName returns the Name field value
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) SetName(v string) {
	o.Name = v
}

// GetHasKey returns the HasKey field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetHasKey() bool {
	if o == nil || IsNil(o.HasKey.Get()) {
		var ret bool
		return ret
	}
	return *o.HasKey.Get()
}

// GetHasKeyOk returns a tuple with the HasKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) GetHasKeyOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return o.HasKey.Get(), o.HasKey.IsSet()
}

// HasHasKey returns a boolean if a field has been set.
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) HasHasKey() bool {
	if o != nil && o.HasKey.IsSet() {
		return true
	}

	return false
}

// SetHasKey gets a reference to the given NullableBool and assigns it to the HasKey field.
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) SetHasKey(v bool) {
	o.HasKey.Set(&v)
}
// SetHasKeyNil sets the value for HasKey to be an explicit nil
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) SetHasKeyNil() {
	o.HasKey.Set(nil)
}

// UnsetHasKey ensures that no value is present for HasKey, not even an explicit nil
func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) UnsetHasKey() {
	o.HasKey.Unset()
}

func (o UsersInfoGet200ResponseResultGuardianHasKeyInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersInfoGet200ResponseResultGuardianHasKeyInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["name"] = o.Name
	if o.HasKey.IsSet() {
		toSerialize["hasKey"] = o.HasKey.Get()
	}
	return toSerialize, nil
}

func (o *UsersInfoGet200ResponseResultGuardianHasKeyInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
		"name",
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

	varUsersInfoGet200ResponseResultGuardianHasKeyInner := _UsersInfoGet200ResponseResultGuardianHasKeyInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersInfoGet200ResponseResultGuardianHasKeyInner)

	if err != nil {
		return err
	}

	*o = UsersInfoGet200ResponseResultGuardianHasKeyInner(varUsersInfoGet200ResponseResultGuardianHasKeyInner)

	return err
}

type NullableUsersInfoGet200ResponseResultGuardianHasKeyInner struct {
	value *UsersInfoGet200ResponseResultGuardianHasKeyInner
	isSet bool
}

func (v NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) Get() *UsersInfoGet200ResponseResultGuardianHasKeyInner {
	return v.value
}

func (v *NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) Set(val *UsersInfoGet200ResponseResultGuardianHasKeyInner) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersInfoGet200ResponseResultGuardianHasKeyInner(val *UsersInfoGet200ResponseResultGuardianHasKeyInner) *NullableUsersInfoGet200ResponseResultGuardianHasKeyInner {
	return &NullableUsersInfoGet200ResponseResultGuardianHasKeyInner{value: val, isSet: true}
}

func (v NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersInfoGet200ResponseResultGuardianHasKeyInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


