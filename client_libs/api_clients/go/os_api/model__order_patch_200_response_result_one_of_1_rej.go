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

// checks if the OrderPatch200ResponseResultOneOf1Rej type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrderPatch200ResponseResultOneOf1Rej{}

// OrderPatch200ResponseResultOneOf1Rej Modify-order-reject indicates that a modify-order request was not applied.
type OrderPatch200ResponseResultOneOf1Rej struct {
	MsgSeqNum int32 `json:"msgSeqNum"`
	// The client order ID specified in the modify-order request.
	ClientOrderId int32 `json:"clientOrderId"`
	// The request ID specified in the modify-order request.
	RequestId int32 `json:"requestId"`
	// [Transact time](#transact-time)
	TransactTime int32 `json:"transactTime"`
	SubaccountId int32 `json:"subaccountId"`
	Reason int32 `json:"reason"`
	MarketId int32 `json:"marketId"`
}

type _OrderPatch200ResponseResultOneOf1Rej OrderPatch200ResponseResultOneOf1Rej

// NewOrderPatch200ResponseResultOneOf1Rej instantiates a new OrderPatch200ResponseResultOneOf1Rej object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderPatch200ResponseResultOneOf1Rej(msgSeqNum int32, clientOrderId int32, requestId int32, transactTime int32, subaccountId int32, reason int32, marketId int32) *OrderPatch200ResponseResultOneOf1Rej {
	this := OrderPatch200ResponseResultOneOf1Rej{}
	this.MsgSeqNum = msgSeqNum
	this.ClientOrderId = clientOrderId
	this.RequestId = requestId
	this.TransactTime = transactTime
	this.SubaccountId = subaccountId
	this.Reason = reason
	this.MarketId = marketId
	return &this
}

// NewOrderPatch200ResponseResultOneOf1RejWithDefaults instantiates a new OrderPatch200ResponseResultOneOf1Rej object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderPatch200ResponseResultOneOf1RejWithDefaults() *OrderPatch200ResponseResultOneOf1Rej {
	this := OrderPatch200ResponseResultOneOf1Rej{}
	return &this
}

// GetMsgSeqNum returns the MsgSeqNum field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetMsgSeqNum() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MsgSeqNum
}

// GetMsgSeqNumOk returns a tuple with the MsgSeqNum field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetMsgSeqNumOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.MsgSeqNum, true
}

// SetMsgSeqNum sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetMsgSeqNum(v int32) {
	o.MsgSeqNum = v
}

// GetClientOrderId returns the ClientOrderId field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetClientOrderId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ClientOrderId
}

// GetClientOrderIdOk returns a tuple with the ClientOrderId field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetClientOrderIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ClientOrderId, true
}

// SetClientOrderId sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetClientOrderId(v int32) {
	o.ClientOrderId = v
}

// GetRequestId returns the RequestId field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetRequestId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RequestId
}

// GetRequestIdOk returns a tuple with the RequestId field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetRequestIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RequestId, true
}

// SetRequestId sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetRequestId(v int32) {
	o.RequestId = v
}

// GetTransactTime returns the TransactTime field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetTransactTime() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TransactTime
}

// GetTransactTimeOk returns a tuple with the TransactTime field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetTransactTimeOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TransactTime, true
}

// SetTransactTime sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetTransactTime(v int32) {
	o.TransactTime = v
}

// GetSubaccountId returns the SubaccountId field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetSubaccountId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SubaccountId
}

// GetSubaccountIdOk returns a tuple with the SubaccountId field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetSubaccountIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SubaccountId, true
}

// SetSubaccountId sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetSubaccountId(v int32) {
	o.SubaccountId = v
}

// GetReason returns the Reason field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetReason() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Reason
}

// GetReasonOk returns a tuple with the Reason field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetReasonOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Reason, true
}

// SetReason sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetReason(v int32) {
	o.Reason = v
}

// GetMarketId returns the MarketId field value
func (o *OrderPatch200ResponseResultOneOf1Rej) GetMarketId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MarketId
}

// GetMarketIdOk returns a tuple with the MarketId field value
// and a boolean to check if the value has been set.
func (o *OrderPatch200ResponseResultOneOf1Rej) GetMarketIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.MarketId, true
}

// SetMarketId sets field value
func (o *OrderPatch200ResponseResultOneOf1Rej) SetMarketId(v int32) {
	o.MarketId = v
}

func (o OrderPatch200ResponseResultOneOf1Rej) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrderPatch200ResponseResultOneOf1Rej) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["msgSeqNum"] = o.MsgSeqNum
	toSerialize["clientOrderId"] = o.ClientOrderId
	toSerialize["requestId"] = o.RequestId
	toSerialize["transactTime"] = o.TransactTime
	toSerialize["subaccountId"] = o.SubaccountId
	toSerialize["reason"] = o.Reason
	toSerialize["marketId"] = o.MarketId
	return toSerialize, nil
}

func (o *OrderPatch200ResponseResultOneOf1Rej) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"msgSeqNum",
		"clientOrderId",
		"requestId",
		"transactTime",
		"subaccountId",
		"reason",
		"marketId",
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

	varOrderPatch200ResponseResultOneOf1Rej := _OrderPatch200ResponseResultOneOf1Rej{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrderPatch200ResponseResultOneOf1Rej)

	if err != nil {
		return err
	}

	*o = OrderPatch200ResponseResultOneOf1Rej(varOrderPatch200ResponseResultOneOf1Rej)

	return err
}

type NullableOrderPatch200ResponseResultOneOf1Rej struct {
	value *OrderPatch200ResponseResultOneOf1Rej
	isSet bool
}

func (v NullableOrderPatch200ResponseResultOneOf1Rej) Get() *OrderPatch200ResponseResultOneOf1Rej {
	return v.value
}

func (v *NullableOrderPatch200ResponseResultOneOf1Rej) Set(val *OrderPatch200ResponseResultOneOf1Rej) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderPatch200ResponseResultOneOf1Rej) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderPatch200ResponseResultOneOf1Rej) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderPatch200ResponseResultOneOf1Rej(val *OrderPatch200ResponseResultOneOf1Rej) *NullableOrderPatch200ResponseResultOneOf1Rej {
	return &NullableOrderPatch200ResponseResultOneOf1Rej{value: val, isSet: true}
}

func (v NullableOrderPatch200ResponseResultOneOf1Rej) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderPatch200ResponseResultOneOf1Rej) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

