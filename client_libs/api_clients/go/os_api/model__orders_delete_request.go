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

// checks if the OrdersDeleteRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrdersDeleteRequest{}

// OrdersDeleteRequest Cancel all resting orders, optionally limiting to a particular market and / or order book side.
type OrdersDeleteRequest struct {
	// The subaccount to cancel orders for.
	SubaccountId int32 `json:"subaccountId"`
	// A request ID that is echoed back on the MassCancelAck and individual CancelOrderAck's.
	RequestId int32 `json:"requestId"`
	// If specified, only orders on the corresponding market will be canceled.
	MarketId NullableInt32 `json:"marketId,omitempty"`
	// If specified, only orders with this side will be canceled.
	Side NullableInt32 `json:"side,omitempty"`
}

type _OrdersDeleteRequest OrdersDeleteRequest

// NewOrdersDeleteRequest instantiates a new OrdersDeleteRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrdersDeleteRequest(subaccountId int32, requestId int32) *OrdersDeleteRequest {
	this := OrdersDeleteRequest{}
	this.SubaccountId = subaccountId
	this.RequestId = requestId
	return &this
}

// NewOrdersDeleteRequestWithDefaults instantiates a new OrdersDeleteRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrdersDeleteRequestWithDefaults() *OrdersDeleteRequest {
	this := OrdersDeleteRequest{}
	return &this
}

// GetSubaccountId returns the SubaccountId field value
func (o *OrdersDeleteRequest) GetSubaccountId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SubaccountId
}

// GetSubaccountIdOk returns a tuple with the SubaccountId field value
// and a boolean to check if the value has been set.
func (o *OrdersDeleteRequest) GetSubaccountIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SubaccountId, true
}

// SetSubaccountId sets field value
func (o *OrdersDeleteRequest) SetSubaccountId(v int32) {
	o.SubaccountId = v
}

// GetRequestId returns the RequestId field value
func (o *OrdersDeleteRequest) GetRequestId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RequestId
}

// GetRequestIdOk returns a tuple with the RequestId field value
// and a boolean to check if the value has been set.
func (o *OrdersDeleteRequest) GetRequestIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RequestId, true
}

// SetRequestId sets field value
func (o *OrdersDeleteRequest) SetRequestId(v int32) {
	o.RequestId = v
}

// GetMarketId returns the MarketId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrdersDeleteRequest) GetMarketId() int32 {
	if o == nil || IsNil(o.MarketId.Get()) {
		var ret int32
		return ret
	}
	return *o.MarketId.Get()
}

// GetMarketIdOk returns a tuple with the MarketId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrdersDeleteRequest) GetMarketIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.MarketId.Get(), o.MarketId.IsSet()
}

// HasMarketId returns a boolean if a field has been set.
func (o *OrdersDeleteRequest) HasMarketId() bool {
	if o != nil && o.MarketId.IsSet() {
		return true
	}

	return false
}

// SetMarketId gets a reference to the given NullableInt32 and assigns it to the MarketId field.
func (o *OrdersDeleteRequest) SetMarketId(v int32) {
	o.MarketId.Set(&v)
}
// SetMarketIdNil sets the value for MarketId to be an explicit nil
func (o *OrdersDeleteRequest) SetMarketIdNil() {
	o.MarketId.Set(nil)
}

// UnsetMarketId ensures that no value is present for MarketId, not even an explicit nil
func (o *OrdersDeleteRequest) UnsetMarketId() {
	o.MarketId.Unset()
}

// GetSide returns the Side field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrdersDeleteRequest) GetSide() int32 {
	if o == nil || IsNil(o.Side.Get()) {
		var ret int32
		return ret
	}
	return *o.Side.Get()
}

// GetSideOk returns a tuple with the Side field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrdersDeleteRequest) GetSideOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.Side.Get(), o.Side.IsSet()
}

// HasSide returns a boolean if a field has been set.
func (o *OrdersDeleteRequest) HasSide() bool {
	if o != nil && o.Side.IsSet() {
		return true
	}

	return false
}

// SetSide gets a reference to the given NullableInt32 and assigns it to the Side field.
func (o *OrdersDeleteRequest) SetSide(v int32) {
	o.Side.Set(&v)
}
// SetSideNil sets the value for Side to be an explicit nil
func (o *OrdersDeleteRequest) SetSideNil() {
	o.Side.Set(nil)
}

// UnsetSide ensures that no value is present for Side, not even an explicit nil
func (o *OrdersDeleteRequest) UnsetSide() {
	o.Side.Unset()
}

func (o OrdersDeleteRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrdersDeleteRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["subaccountId"] = o.SubaccountId
	toSerialize["requestId"] = o.RequestId
	if o.MarketId.IsSet() {
		toSerialize["marketId"] = o.MarketId.Get()
	}
	if o.Side.IsSet() {
		toSerialize["side"] = o.Side.Get()
	}
	return toSerialize, nil
}

func (o *OrdersDeleteRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"subaccountId",
		"requestId",
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

	varOrdersDeleteRequest := _OrdersDeleteRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrdersDeleteRequest)

	if err != nil {
		return err
	}

	*o = OrdersDeleteRequest(varOrdersDeleteRequest)

	return err
}

type NullableOrdersDeleteRequest struct {
	value *OrdersDeleteRequest
	isSet bool
}

func (v NullableOrdersDeleteRequest) Get() *OrdersDeleteRequest {
	return v.value
}

func (v *NullableOrdersDeleteRequest) Set(val *OrdersDeleteRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableOrdersDeleteRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableOrdersDeleteRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrdersDeleteRequest(val *OrdersDeleteRequest) *NullableOrdersDeleteRequest {
	return &NullableOrdersDeleteRequest{value: val, isSet: true}
}

func (v NullableOrdersDeleteRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrdersDeleteRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


