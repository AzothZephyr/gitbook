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

// checks if the OrderPostRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OrderPostRequest{}

// OrderPostRequest Place a new order.
type OrderPostRequest struct {
	// A unique order ID assigned by the client for this order. The ID must be unique among open orders by this subaccount.
	ClientOrderId int32 `json:"clientOrderId"`
	// A request ID that is echoed back on the NewOrderAck or NewOrderReject
	RequestId int32 `json:"requestId"`
	MarketId int32 `json:"marketId"`
	Price NullableInt32 `json:"price,omitempty"`
	Quantity int32 `json:"quantity"`
	Side int32 `json:"side"`
	TimeInForce int32 `json:"timeInForce"`
	OrderType int32 `json:"orderType"`
	// The subaccount to place this order on. This subaccount must be writable by the API key specified in the Credentials message.
	SubaccountId int32 `json:"subaccountId"`
	SelfTradePrevention NullableInt32 `json:"selfTradePrevention,omitempty"`
	PostOnly int32 `json:"postOnly"`
	// If true, this order will be automatically cancelled after the closure of the network connection between Cube's servers and the client that placed the order.  If the client initiates the disconnect or network instability drops the connection, the order will be cancelled when Cube's servers recognize the disconnection.  In the event of a server-side disconnect that causes a halt in trading, such as scheduled downtime, the order will be cancelled before trading resumes.
	CancelOnDisconnect bool `json:"cancelOnDisconnect"`
}

type _OrderPostRequest OrderPostRequest

// NewOrderPostRequest instantiates a new OrderPostRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderPostRequest(clientOrderId int32, requestId int32, marketId int32, quantity int32, side int32, timeInForce int32, orderType int32, subaccountId int32, postOnly int32, cancelOnDisconnect bool) *OrderPostRequest {
	this := OrderPostRequest{}
	this.ClientOrderId = clientOrderId
	this.RequestId = requestId
	this.MarketId = marketId
	this.Quantity = quantity
	this.Side = side
	this.TimeInForce = timeInForce
	this.OrderType = orderType
	this.SubaccountId = subaccountId
	this.PostOnly = postOnly
	this.CancelOnDisconnect = cancelOnDisconnect
	return &this
}

// NewOrderPostRequestWithDefaults instantiates a new OrderPostRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderPostRequestWithDefaults() *OrderPostRequest {
	this := OrderPostRequest{}
	return &this
}

// GetClientOrderId returns the ClientOrderId field value
func (o *OrderPostRequest) GetClientOrderId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ClientOrderId
}

// GetClientOrderIdOk returns a tuple with the ClientOrderId field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetClientOrderIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ClientOrderId, true
}

// SetClientOrderId sets field value
func (o *OrderPostRequest) SetClientOrderId(v int32) {
	o.ClientOrderId = v
}

// GetRequestId returns the RequestId field value
func (o *OrderPostRequest) GetRequestId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RequestId
}

// GetRequestIdOk returns a tuple with the RequestId field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetRequestIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RequestId, true
}

// SetRequestId sets field value
func (o *OrderPostRequest) SetRequestId(v int32) {
	o.RequestId = v
}

// GetMarketId returns the MarketId field value
func (o *OrderPostRequest) GetMarketId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MarketId
}

// GetMarketIdOk returns a tuple with the MarketId field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetMarketIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.MarketId, true
}

// SetMarketId sets field value
func (o *OrderPostRequest) SetMarketId(v int32) {
	o.MarketId = v
}

// GetPrice returns the Price field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrderPostRequest) GetPrice() int32 {
	if o == nil || IsNil(o.Price.Get()) {
		var ret int32
		return ret
	}
	return *o.Price.Get()
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderPostRequest) GetPriceOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.Price.Get(), o.Price.IsSet()
}

// HasPrice returns a boolean if a field has been set.
func (o *OrderPostRequest) HasPrice() bool {
	if o != nil && o.Price.IsSet() {
		return true
	}

	return false
}

// SetPrice gets a reference to the given NullableInt32 and assigns it to the Price field.
func (o *OrderPostRequest) SetPrice(v int32) {
	o.Price.Set(&v)
}
// SetPriceNil sets the value for Price to be an explicit nil
func (o *OrderPostRequest) SetPriceNil() {
	o.Price.Set(nil)
}

// UnsetPrice ensures that no value is present for Price, not even an explicit nil
func (o *OrderPostRequest) UnsetPrice() {
	o.Price.Unset()
}

// GetQuantity returns the Quantity field value
func (o *OrderPostRequest) GetQuantity() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetQuantityOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Quantity, true
}

// SetQuantity sets field value
func (o *OrderPostRequest) SetQuantity(v int32) {
	o.Quantity = v
}

// GetSide returns the Side field value
func (o *OrderPostRequest) GetSide() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Side
}

// GetSideOk returns a tuple with the Side field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetSideOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Side, true
}

// SetSide sets field value
func (o *OrderPostRequest) SetSide(v int32) {
	o.Side = v
}

// GetTimeInForce returns the TimeInForce field value
func (o *OrderPostRequest) GetTimeInForce() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TimeInForce
}

// GetTimeInForceOk returns a tuple with the TimeInForce field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetTimeInForceOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TimeInForce, true
}

// SetTimeInForce sets field value
func (o *OrderPostRequest) SetTimeInForce(v int32) {
	o.TimeInForce = v
}

// GetOrderType returns the OrderType field value
func (o *OrderPostRequest) GetOrderType() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.OrderType
}

// GetOrderTypeOk returns a tuple with the OrderType field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetOrderTypeOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.OrderType, true
}

// SetOrderType sets field value
func (o *OrderPostRequest) SetOrderType(v int32) {
	o.OrderType = v
}

// GetSubaccountId returns the SubaccountId field value
func (o *OrderPostRequest) GetSubaccountId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SubaccountId
}

// GetSubaccountIdOk returns a tuple with the SubaccountId field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetSubaccountIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SubaccountId, true
}

// SetSubaccountId sets field value
func (o *OrderPostRequest) SetSubaccountId(v int32) {
	o.SubaccountId = v
}

// GetSelfTradePrevention returns the SelfTradePrevention field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrderPostRequest) GetSelfTradePrevention() int32 {
	if o == nil || IsNil(o.SelfTradePrevention.Get()) {
		var ret int32
		return ret
	}
	return *o.SelfTradePrevention.Get()
}

// GetSelfTradePreventionOk returns a tuple with the SelfTradePrevention field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderPostRequest) GetSelfTradePreventionOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.SelfTradePrevention.Get(), o.SelfTradePrevention.IsSet()
}

// HasSelfTradePrevention returns a boolean if a field has been set.
func (o *OrderPostRequest) HasSelfTradePrevention() bool {
	if o != nil && o.SelfTradePrevention.IsSet() {
		return true
	}

	return false
}

// SetSelfTradePrevention gets a reference to the given NullableInt32 and assigns it to the SelfTradePrevention field.
func (o *OrderPostRequest) SetSelfTradePrevention(v int32) {
	o.SelfTradePrevention.Set(&v)
}
// SetSelfTradePreventionNil sets the value for SelfTradePrevention to be an explicit nil
func (o *OrderPostRequest) SetSelfTradePreventionNil() {
	o.SelfTradePrevention.Set(nil)
}

// UnsetSelfTradePrevention ensures that no value is present for SelfTradePrevention, not even an explicit nil
func (o *OrderPostRequest) UnsetSelfTradePrevention() {
	o.SelfTradePrevention.Unset()
}

// GetPostOnly returns the PostOnly field value
func (o *OrderPostRequest) GetPostOnly() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.PostOnly
}

// GetPostOnlyOk returns a tuple with the PostOnly field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetPostOnlyOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.PostOnly, true
}

// SetPostOnly sets field value
func (o *OrderPostRequest) SetPostOnly(v int32) {
	o.PostOnly = v
}

// GetCancelOnDisconnect returns the CancelOnDisconnect field value
func (o *OrderPostRequest) GetCancelOnDisconnect() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CancelOnDisconnect
}

// GetCancelOnDisconnectOk returns a tuple with the CancelOnDisconnect field value
// and a boolean to check if the value has been set.
func (o *OrderPostRequest) GetCancelOnDisconnectOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CancelOnDisconnect, true
}

// SetCancelOnDisconnect sets field value
func (o *OrderPostRequest) SetCancelOnDisconnect(v bool) {
	o.CancelOnDisconnect = v
}

func (o OrderPostRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OrderPostRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["clientOrderId"] = o.ClientOrderId
	toSerialize["requestId"] = o.RequestId
	toSerialize["marketId"] = o.MarketId
	if o.Price.IsSet() {
		toSerialize["price"] = o.Price.Get()
	}
	toSerialize["quantity"] = o.Quantity
	toSerialize["side"] = o.Side
	toSerialize["timeInForce"] = o.TimeInForce
	toSerialize["orderType"] = o.OrderType
	toSerialize["subaccountId"] = o.SubaccountId
	if o.SelfTradePrevention.IsSet() {
		toSerialize["selfTradePrevention"] = o.SelfTradePrevention.Get()
	}
	toSerialize["postOnly"] = o.PostOnly
	toSerialize["cancelOnDisconnect"] = o.CancelOnDisconnect
	return toSerialize, nil
}

func (o *OrderPostRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"clientOrderId",
		"requestId",
		"marketId",
		"quantity",
		"side",
		"timeInForce",
		"orderType",
		"subaccountId",
		"postOnly",
		"cancelOnDisconnect",
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

	varOrderPostRequest := _OrderPostRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varOrderPostRequest)

	if err != nil {
		return err
	}

	*o = OrderPostRequest(varOrderPostRequest)

	return err
}

type NullableOrderPostRequest struct {
	value *OrderPostRequest
	isSet bool
}

func (v NullableOrderPostRequest) Get() *OrderPostRequest {
	return v.value
}

func (v *NullableOrderPostRequest) Set(val *OrderPostRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderPostRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderPostRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderPostRequest(val *OrderPostRequest) *NullableOrderPostRequest {
	return &NullableOrderPostRequest{value: val, isSet: true}
}

func (v NullableOrderPostRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderPostRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


