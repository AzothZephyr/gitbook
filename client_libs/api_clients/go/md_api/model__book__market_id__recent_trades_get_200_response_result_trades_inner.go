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

// checks if the BookMarketIdRecentTradesGet200ResponseResultTradesInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BookMarketIdRecentTradesGet200ResponseResultTradesInner{}

// BookMarketIdRecentTradesGet200ResponseResultTradesInner struct for BookMarketIdRecentTradesGet200ResponseResultTradesInner
type BookMarketIdRecentTradesGet200ResponseResultTradesInner struct {
	// The ID assigned to this trade. All trades that occur from the same event will be assigned the same ID, and are considered to be an atomic batch.
	TradeId int32 `json:"tradeId"`
	// The price that this trade occurred at.
	Price int32 `json:"price"`
	// The side of the aggressing order.
	AggressingSide int32 `json:"aggressingSide"`
	// The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the resting order.
	RestingExchangeOrderId int32 `json:"restingExchangeOrderId"`
	FillQuantity int32 `json:"fillQuantity"`
	// The [transact time](./websocket-trade-api.md#transact-time) assigned by the matching engine for this trade. All trades that occur from the same event will be assigned the same transact time.
	TransactTime int32 `json:"transactTime"`
	// The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of the aggressing order.
	AggressingExchangeOrderId int32 `json:"aggressingExchangeOrderId"`
}

type _BookMarketIdRecentTradesGet200ResponseResultTradesInner BookMarketIdRecentTradesGet200ResponseResultTradesInner

// NewBookMarketIdRecentTradesGet200ResponseResultTradesInner instantiates a new BookMarketIdRecentTradesGet200ResponseResultTradesInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBookMarketIdRecentTradesGet200ResponseResultTradesInner(tradeId int32, price int32, aggressingSide int32, restingExchangeOrderId int32, fillQuantity int32, transactTime int32, aggressingExchangeOrderId int32) *BookMarketIdRecentTradesGet200ResponseResultTradesInner {
	this := BookMarketIdRecentTradesGet200ResponseResultTradesInner{}
	this.TradeId = tradeId
	this.Price = price
	this.AggressingSide = aggressingSide
	this.RestingExchangeOrderId = restingExchangeOrderId
	this.FillQuantity = fillQuantity
	this.TransactTime = transactTime
	this.AggressingExchangeOrderId = aggressingExchangeOrderId
	return &this
}

// NewBookMarketIdRecentTradesGet200ResponseResultTradesInnerWithDefaults instantiates a new BookMarketIdRecentTradesGet200ResponseResultTradesInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBookMarketIdRecentTradesGet200ResponseResultTradesInnerWithDefaults() *BookMarketIdRecentTradesGet200ResponseResultTradesInner {
	this := BookMarketIdRecentTradesGet200ResponseResultTradesInner{}
	return &this
}

// GetTradeId returns the TradeId field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTradeId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TradeId
}

// GetTradeIdOk returns a tuple with the TradeId field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTradeIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TradeId, true
}

// SetTradeId sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetTradeId(v int32) {
	o.TradeId = v
}

// GetPrice returns the Price field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetPrice() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Price
}

// GetPriceOk returns a tuple with the Price field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetPriceOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Price, true
}

// SetPrice sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetPrice(v int32) {
	o.Price = v
}

// GetAggressingSide returns the AggressingSide field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingSide() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.AggressingSide
}

// GetAggressingSideOk returns a tuple with the AggressingSide field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingSideOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AggressingSide, true
}

// SetAggressingSide sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetAggressingSide(v int32) {
	o.AggressingSide = v
}

// GetRestingExchangeOrderId returns the RestingExchangeOrderId field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetRestingExchangeOrderId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RestingExchangeOrderId
}

// GetRestingExchangeOrderIdOk returns a tuple with the RestingExchangeOrderId field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetRestingExchangeOrderIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RestingExchangeOrderId, true
}

// SetRestingExchangeOrderId sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetRestingExchangeOrderId(v int32) {
	o.RestingExchangeOrderId = v
}

// GetFillQuantity returns the FillQuantity field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetFillQuantity() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.FillQuantity
}

// GetFillQuantityOk returns a tuple with the FillQuantity field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetFillQuantityOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.FillQuantity, true
}

// SetFillQuantity sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetFillQuantity(v int32) {
	o.FillQuantity = v
}

// GetTransactTime returns the TransactTime field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTransactTime() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TransactTime
}

// GetTransactTimeOk returns a tuple with the TransactTime field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetTransactTimeOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TransactTime, true
}

// SetTransactTime sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetTransactTime(v int32) {
	o.TransactTime = v
}

// GetAggressingExchangeOrderId returns the AggressingExchangeOrderId field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingExchangeOrderId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.AggressingExchangeOrderId
}

// GetAggressingExchangeOrderIdOk returns a tuple with the AggressingExchangeOrderId field value
// and a boolean to check if the value has been set.
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) GetAggressingExchangeOrderIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AggressingExchangeOrderId, true
}

// SetAggressingExchangeOrderId sets field value
func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) SetAggressingExchangeOrderId(v int32) {
	o.AggressingExchangeOrderId = v
}

func (o BookMarketIdRecentTradesGet200ResponseResultTradesInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BookMarketIdRecentTradesGet200ResponseResultTradesInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["tradeId"] = o.TradeId
	toSerialize["price"] = o.Price
	toSerialize["aggressingSide"] = o.AggressingSide
	toSerialize["restingExchangeOrderId"] = o.RestingExchangeOrderId
	toSerialize["fillQuantity"] = o.FillQuantity
	toSerialize["transactTime"] = o.TransactTime
	toSerialize["aggressingExchangeOrderId"] = o.AggressingExchangeOrderId
	return toSerialize, nil
}

func (o *BookMarketIdRecentTradesGet200ResponseResultTradesInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"tradeId",
		"price",
		"aggressingSide",
		"restingExchangeOrderId",
		"fillQuantity",
		"transactTime",
		"aggressingExchangeOrderId",
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

	varBookMarketIdRecentTradesGet200ResponseResultTradesInner := _BookMarketIdRecentTradesGet200ResponseResultTradesInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varBookMarketIdRecentTradesGet200ResponseResultTradesInner)

	if err != nil {
		return err
	}

	*o = BookMarketIdRecentTradesGet200ResponseResultTradesInner(varBookMarketIdRecentTradesGet200ResponseResultTradesInner)

	return err
}

type NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner struct {
	value *BookMarketIdRecentTradesGet200ResponseResultTradesInner
	isSet bool
}

func (v NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) Get() *BookMarketIdRecentTradesGet200ResponseResultTradesInner {
	return v.value
}

func (v *NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) Set(val *BookMarketIdRecentTradesGet200ResponseResultTradesInner) {
	v.value = val
	v.isSet = true
}

func (v NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) IsSet() bool {
	return v.isSet
}

func (v *NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBookMarketIdRecentTradesGet200ResponseResultTradesInner(val *BookMarketIdRecentTradesGet200ResponseResultTradesInner) *NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner {
	return &NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner{value: val, isSet: true}
}

func (v NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBookMarketIdRecentTradesGet200ResponseResultTradesInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


