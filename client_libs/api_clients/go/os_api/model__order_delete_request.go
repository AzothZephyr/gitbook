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

// checks if the OrderDeleteRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrderDeleteRequest{}

// OrderDeleteRequest Cancel a resting order. Note that this can be done before the order is acknowledged (an aggressive cancel) since the identifying field is the `client_order_id`.
type OrderDeleteRequest struct {
	MarketId int32 `json:"marketId"`
	// The order ID specified by the client on the NewOrder request.
	ClientOrderId int32 `json:"clientOrderId"`
	// A request ID that is echoed back on the CancelOrderAck or CancelOrderReject
	RequestId int32 `json:"requestId"`
	// The subaccount that the NewOrder was placed on.
	SubaccountId int32 `json:"subaccountId"`
}

type _OrderDeleteRequest OrderDeleteRequest

// NewOrderDeleteRequest instantiates a new OrderDeleteRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderDeleteRequest(marketId int32, clientOrderId int32, requestId int32, subaccountId int32) *OrderDeleteRequest {
	this := OrderDeleteRequest{}
	this.MarketId = marketId
	this.ClientOrderId = clientOrderId
	this.RequestId = requestId
	this.SubaccountId = subaccountId
	return &this
}

// NewOrderDeleteRequestWithDefaults instantiates a new OrderDeleteRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderDeleteRequestWithDefaults() *OrderDeleteRequest {
	this := OrderDeleteRequest{}
	return &this
}

// GetMarketId returns the MarketId field value
func (o *OrderDeleteRequest) GetMarketId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MarketId
}

// GetMarketIdOk returns a tuple with the MarketId field value
// and a boolean to check if the value has been set.
func (o *OrderDeleteRequest) GetMarketIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.MarketId, true
}

// SetMarketId sets field value
func (o *OrderDeleteRequest) SetMarketId(v int32) {
	o.MarketId = v
}

// GetClientOrderId returns the ClientOrderId field value
func (o *OrderDeleteRequest) GetClientOrderId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ClientOrderId
}

// GetClientOrderIdOk returns a tuple with the ClientOrderId field value
// and a boolean to check if the value has been set.
func (o *OrderDeleteRequest) GetClientOrderIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ClientOrderId, true
}

// SetClientOrderId sets field value
func (o *OrderDeleteRequest) SetClientOrderId(v int32) {
	o.ClientOrderId = v
}

// GetRequestId returns the RequestId field value
func (o *OrderDeleteRequest) GetRequestId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RequestId
}

// GetRequestIdOk returns a tuple with the RequestId field value
// and a boolean to check if the value has been set.
func (o *OrderDeleteRequest) GetRequestIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RequestId, true
}

// SetRequestId sets field value
func (o *OrderDeleteRequest) SetRequestId(v int32) {
	o.RequestId = v
}

// GetSubaccountId returns the SubaccountId field value
func (o *OrderDeleteRequest) GetSubaccountId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SubaccountId
}

// GetSubaccountIdOk returns a tuple with the SubaccountId field value
// and a boolean to check if the value has been set.
func (o *OrderDeleteRequest) GetSubaccountIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SubaccountId, true
}

// SetSubaccountId sets field value
func (o *OrderDeleteRequest) SetSubaccountId(v int32) {
	o.SubaccountId = v
}

func (o OrderDeleteRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrderDeleteRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["marketId"] = o.MarketId
	toSerialize["clientOrderId"] = o.ClientOrderId
	toSerialize["requestId"] = o.RequestId
	toSerialize["subaccountId"] = o.SubaccountId
	return toSerialize, nil
}

func (o *OrderDeleteRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"marketId",
		"clientOrderId",
		"requestId",
		"subaccountId",
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

	varOrderDeleteRequest := _OrderDeleteRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrderDeleteRequest)

	if err != nil {
		return err
	}

	*o = OrderDeleteRequest(varOrderDeleteRequest)

	return err
}

type NullableOrderDeleteRequest struct {
	value *OrderDeleteRequest
	isSet bool
}

func (v NullableOrderDeleteRequest) Get() *OrderDeleteRequest {
	return v.value
}

func (v *NullableOrderDeleteRequest) Set(val *OrderDeleteRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderDeleteRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderDeleteRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderDeleteRequest(val *OrderDeleteRequest) *NullableOrderDeleteRequest {
	return &NullableOrderDeleteRequest{value: val, isSet: true}
}

func (v NullableOrderDeleteRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderDeleteRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


