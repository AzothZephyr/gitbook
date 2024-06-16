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

// checks if the UsersAddressGet200ResponseResultAddressesInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UsersAddressGet200ResponseResultAddressesInner{}

// UsersAddressGet200ResponseResultAddressesInner struct for UsersAddressGet200ResponseResultAddressesInner
type UsersAddressGet200ResponseResultAddressesInner struct {
	Id string `json:"id"`
	Name string `json:"name"`
	SourceId int32 `json:"sourceId"`
	AssetId NullableInt32 `json:"assetId,omitempty"`
	Address string `json:"address"`
	Status string `json:"status"`
	CreatedAt time.Time `json:"createdAt"`
	ApprovedAt time.Time `json:"approvedAt"`
	ActiveSince time.Time `json:"activeSince"`
}

type _UsersAddressGet200ResponseResultAddressesInner UsersAddressGet200ResponseResultAddressesInner

// NewUsersAddressGet200ResponseResultAddressesInner instantiates a new UsersAddressGet200ResponseResultAddressesInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUsersAddressGet200ResponseResultAddressesInner(id string, name string, sourceId int32, address string, status string, createdAt time.Time, approvedAt time.Time, activeSince time.Time) *UsersAddressGet200ResponseResultAddressesInner {
	this := UsersAddressGet200ResponseResultAddressesInner{}
	this.Id = id
	this.Name = name
	this.SourceId = sourceId
	this.Address = address
	this.Status = status
	this.CreatedAt = createdAt
	this.ApprovedAt = approvedAt
	this.ActiveSince = activeSince
	return &this
}

// NewUsersAddressGet200ResponseResultAddressesInnerWithDefaults instantiates a new UsersAddressGet200ResponseResultAddressesInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUsersAddressGet200ResponseResultAddressesInnerWithDefaults() *UsersAddressGet200ResponseResultAddressesInner {
	this := UsersAddressGet200ResponseResultAddressesInner{}
	return &this
}

// GetId returns the Id field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetId(v string) {
	o.Id = v
}

// GetName returns the Name field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetName(v string) {
	o.Name = v
}

// GetSourceId returns the SourceId field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetSourceId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SourceId
}

// GetSourceIdOk returns a tuple with the SourceId field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetSourceIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SourceId, true
}

// SetSourceId sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetSourceId(v int32) {
	o.SourceId = v
}

// GetAssetId returns the AssetId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *UsersAddressGet200ResponseResultAddressesInner) GetAssetId() int32 {
	if o == nil || IsNil(o.AssetId.Get()) {
		var ret int32
		return ret
	}
	return *o.AssetId.Get()
}

// GetAssetIdOk returns a tuple with the AssetId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *UsersAddressGet200ResponseResultAddressesInner) GetAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.AssetId.Get(), o.AssetId.IsSet()
}

// HasAssetId returns a boolean if a field has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) HasAssetId() bool {
	if o != nil && o.AssetId.IsSet() {
		return true
	}

	return false
}

// SetAssetId gets a reference to the given NullableInt32 and assigns it to the AssetId field.
func (o *UsersAddressGet200ResponseResultAddressesInner) SetAssetId(v int32) {
	o.AssetId.Set(&v)
}
// SetAssetIdNil sets the value for AssetId to be an explicit nil
func (o *UsersAddressGet200ResponseResultAddressesInner) SetAssetIdNil() {
	o.AssetId.Set(nil)
}

// UnsetAssetId ensures that no value is present for AssetId, not even an explicit nil
func (o *UsersAddressGet200ResponseResultAddressesInner) UnsetAssetId() {
	o.AssetId.Unset()
}

// GetAddress returns the Address field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetAddress() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Address
}

// GetAddressOk returns a tuple with the Address field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetAddressOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Address, true
}

// SetAddress sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetAddress(v string) {
	o.Address = v
}

// GetStatus returns the Status field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetStatusOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetStatus(v string) {
	o.Status = v
}

// GetCreatedAt returns the CreatedAt field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetCreatedAt() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CreatedAt, true
}

// SetCreatedAt sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetCreatedAt(v time.Time) {
	o.CreatedAt = v
}

// GetApprovedAt returns the ApprovedAt field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetApprovedAt() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.ApprovedAt
}

// GetApprovedAtOk returns a tuple with the ApprovedAt field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetApprovedAtOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ApprovedAt, true
}

// SetApprovedAt sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetApprovedAt(v time.Time) {
	o.ApprovedAt = v
}

// GetActiveSince returns the ActiveSince field value
func (o *UsersAddressGet200ResponseResultAddressesInner) GetActiveSince() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.ActiveSince
}

// GetActiveSinceOk returns a tuple with the ActiveSince field value
// and a boolean to check if the value has been set.
func (o *UsersAddressGet200ResponseResultAddressesInner) GetActiveSinceOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ActiveSince, true
}

// SetActiveSince sets field value
func (o *UsersAddressGet200ResponseResultAddressesInner) SetActiveSince(v time.Time) {
	o.ActiveSince = v
}

func (o UsersAddressGet200ResponseResultAddressesInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UsersAddressGet200ResponseResultAddressesInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["name"] = o.Name
	toSerialize["sourceId"] = o.SourceId
	if o.AssetId.IsSet() {
		toSerialize["assetId"] = o.AssetId.Get()
	}
	toSerialize["address"] = o.Address
	toSerialize["status"] = o.Status
	toSerialize["createdAt"] = o.CreatedAt
	toSerialize["approvedAt"] = o.ApprovedAt
	toSerialize["activeSince"] = o.ActiveSince
	return toSerialize, nil
}

func (o *UsersAddressGet200ResponseResultAddressesInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
		"name",
		"sourceId",
		"address",
		"status",
		"createdAt",
		"approvedAt",
		"activeSince",
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

	varUsersAddressGet200ResponseResultAddressesInner := _UsersAddressGet200ResponseResultAddressesInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varUsersAddressGet200ResponseResultAddressesInner)

	if err != nil {
		return err
	}

	*o = UsersAddressGet200ResponseResultAddressesInner(varUsersAddressGet200ResponseResultAddressesInner)

	return err
}

type NullableUsersAddressGet200ResponseResultAddressesInner struct {
	value *UsersAddressGet200ResponseResultAddressesInner
	isSet bool
}

func (v NullableUsersAddressGet200ResponseResultAddressesInner) Get() *UsersAddressGet200ResponseResultAddressesInner {
	return v.value
}

func (v *NullableUsersAddressGet200ResponseResultAddressesInner) Set(val *UsersAddressGet200ResponseResultAddressesInner) {
	v.value = val
	v.isSet = true
}

func (v NullableUsersAddressGet200ResponseResultAddressesInner) IsSet() bool {
	return v.isSet
}

func (v *NullableUsersAddressGet200ResponseResultAddressesInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUsersAddressGet200ResponseResultAddressesInner(val *UsersAddressGet200ResponseResultAddressesInner) *NullableUsersAddressGet200ResponseResultAddressesInner {
	return &NullableUsersAddressGet200ResponseResultAddressesInner{value: val, isSet: true}
}

func (v NullableUsersAddressGet200ResponseResultAddressesInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUsersAddressGet200ResponseResultAddressesInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

