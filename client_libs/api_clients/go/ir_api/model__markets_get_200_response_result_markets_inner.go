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

// checks if the MarketsGet200ResponseResultMarketsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketsGet200ResponseResultMarketsInner{}

// MarketsGet200ResponseResultMarketsInner A market is identified by its unique `marketId`. The market definition specifies specifies the base and quote assets and their respective lot sizes for the particular market.
type MarketsGet200ResponseResultMarketsInner struct {
	// The Cube-assigned market ID.
	MarketId int32 `json:"marketId"`
	// The market's symbol. Normally this is base symbol concatenated with the quote symbol.  e.g `BTCUSDC`
	Symbol string `json:"symbol"`
	// The asset ID of the base asset.
	BaseAssetId int32 `json:"baseAssetId"`
	// The number of units of the base asset that are represented by one base lot.
	BaseLotSize string `json:"baseLotSize"`
	// The asset ID of the quote asset.
	QuoteAssetId int32 `json:"quoteAssetId"`
	// The number of units of the quote asset that are represented by one quote lot.
	QuoteLotSize string `json:"quoteLotSize"`
	// The default number of decimal places to display for human-readable prices for this market.
	PriceDisplayDecimals int32 `json:"priceDisplayDecimals"`
	ProtectionPriceLevels int32 `json:"protectionPriceLevels"`
	// The percentage that a new bid can be placed below the current reference price.
	PriceBandBidPct NullableInt32 `json:"priceBandBidPct,omitempty"`
	// The percentage that a new ask can be placed above the current reference price.
	PriceBandAskPct NullableInt32 `json:"priceBandAskPct,omitempty"`
	// The minimum order quantity lots for this market. Inclusive.
	MinOrderQty NullableInt64 `json:"minOrderQty,omitempty"`
	// The maximum order quantity lots for this market. Inclusive.
	MaxOrderQty NullableInt64 `json:"maxOrderQty,omitempty"`
	// The human-readable minimum price increment.
	PriceTickSize string `json:"priceTickSize"`
	// The human-readable minimum quantity increment.
	QuantityTickSize string `json:"quantityTickSize"`
	// ID of the fee table that will be used for lookups on this market.
	FeeTableId int32 `json:"feeTableId"`
	// If this is an implied market, this is the list of implied-through base markets. Otherwise, this is `None`.
	BaseMarketIds []int32 `json:"baseMarketIds,omitempty"`
	// If this market is currently enabled for implied matching, this will be `true`. Otherwise, this will be `false` or missing.
	IsImplied bool `json:"isImplied"`
}

type _MarketsGet200ResponseResultMarketsInner MarketsGet200ResponseResultMarketsInner

// NewMarketsGet200ResponseResultMarketsInner instantiates a new MarketsGet200ResponseResultMarketsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketsGet200ResponseResultMarketsInner(marketId int32, symbol string, baseAssetId int32, baseLotSize string, quoteAssetId int32, quoteLotSize string, priceDisplayDecimals int32, protectionPriceLevels int32, priceTickSize string, quantityTickSize string, feeTableId int32, isImplied bool) *MarketsGet200ResponseResultMarketsInner {
	this := MarketsGet200ResponseResultMarketsInner{}
	this.MarketId = marketId
	this.Symbol = symbol
	this.BaseAssetId = baseAssetId
	this.BaseLotSize = baseLotSize
	this.QuoteAssetId = quoteAssetId
	this.QuoteLotSize = quoteLotSize
	this.PriceDisplayDecimals = priceDisplayDecimals
	this.ProtectionPriceLevels = protectionPriceLevels
	this.PriceTickSize = priceTickSize
	this.QuantityTickSize = quantityTickSize
	this.FeeTableId = feeTableId
	this.IsImplied = isImplied
	return &this
}

// NewMarketsGet200ResponseResultMarketsInnerWithDefaults instantiates a new MarketsGet200ResponseResultMarketsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketsGet200ResponseResultMarketsInnerWithDefaults() *MarketsGet200ResponseResultMarketsInner {
	this := MarketsGet200ResponseResultMarketsInner{}
	return &this
}

// GetMarketId returns the MarketId field value
func (o *MarketsGet200ResponseResultMarketsInner) GetMarketId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MarketId
}

// GetMarketIdOk returns a tuple with the MarketId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetMarketIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.MarketId, true
}

// SetMarketId sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetMarketId(v int32) {
	o.MarketId = v
}

// GetSymbol returns the Symbol field value
func (o *MarketsGet200ResponseResultMarketsInner) GetSymbol() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetSymbolOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Symbol, true
}

// SetSymbol sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetSymbol(v string) {
	o.Symbol = v
}

// GetBaseAssetId returns the BaseAssetId field value
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseAssetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.BaseAssetId
}

// GetBaseAssetIdOk returns a tuple with the BaseAssetId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.BaseAssetId, true
}

// SetBaseAssetId sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetBaseAssetId(v int32) {
	o.BaseAssetId = v
}

// GetBaseLotSize returns the BaseLotSize field value
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseLotSize() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.BaseLotSize
}

// GetBaseLotSizeOk returns a tuple with the BaseLotSize field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseLotSizeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.BaseLotSize, true
}

// SetBaseLotSize sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetBaseLotSize(v string) {
	o.BaseLotSize = v
}

// GetQuoteAssetId returns the QuoteAssetId field value
func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteAssetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.QuoteAssetId
}

// GetQuoteAssetIdOk returns a tuple with the QuoteAssetId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.QuoteAssetId, true
}

// SetQuoteAssetId sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetQuoteAssetId(v int32) {
	o.QuoteAssetId = v
}

// GetQuoteLotSize returns the QuoteLotSize field value
func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteLotSize() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.QuoteLotSize
}

// GetQuoteLotSizeOk returns a tuple with the QuoteLotSize field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteLotSizeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.QuoteLotSize, true
}

// SetQuoteLotSize sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetQuoteLotSize(v string) {
	o.QuoteLotSize = v
}

// GetPriceDisplayDecimals returns the PriceDisplayDecimals field value
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceDisplayDecimals() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.PriceDisplayDecimals
}

// GetPriceDisplayDecimalsOk returns a tuple with the PriceDisplayDecimals field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceDisplayDecimalsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.PriceDisplayDecimals, true
}

// SetPriceDisplayDecimals sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceDisplayDecimals(v int32) {
	o.PriceDisplayDecimals = v
}

// GetProtectionPriceLevels returns the ProtectionPriceLevels field value
func (o *MarketsGet200ResponseResultMarketsInner) GetProtectionPriceLevels() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ProtectionPriceLevels
}

// GetProtectionPriceLevelsOk returns a tuple with the ProtectionPriceLevels field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetProtectionPriceLevelsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ProtectionPriceLevels, true
}

// SetProtectionPriceLevels sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetProtectionPriceLevels(v int32) {
	o.ProtectionPriceLevels = v
}

// GetPriceBandBidPct returns the PriceBandBidPct field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandBidPct() int32 {
	if o == nil || IsNil(o.PriceBandBidPct.Get()) {
		var ret int32
		return ret
	}
	return *o.PriceBandBidPct.Get()
}

// GetPriceBandBidPctOk returns a tuple with the PriceBandBidPct field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandBidPctOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.PriceBandBidPct.Get(), o.PriceBandBidPct.IsSet()
}

// HasPriceBandBidPct returns a boolean if a field has been set.
func (o *MarketsGet200ResponseResultMarketsInner) HasPriceBandBidPct() bool {
	if o != nil && o.PriceBandBidPct.IsSet() {
		return true
	}

	return false
}

// SetPriceBandBidPct gets a reference to the given NullableInt32 and assigns it to the PriceBandBidPct field.
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandBidPct(v int32) {
	o.PriceBandBidPct.Set(&v)
}
// SetPriceBandBidPctNil sets the value for PriceBandBidPct to be an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandBidPctNil() {
	o.PriceBandBidPct.Set(nil)
}

// UnsetPriceBandBidPct ensures that no value is present for PriceBandBidPct, not even an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) UnsetPriceBandBidPct() {
	o.PriceBandBidPct.Unset()
}

// GetPriceBandAskPct returns the PriceBandAskPct field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandAskPct() int32 {
	if o == nil || IsNil(o.PriceBandAskPct.Get()) {
		var ret int32
		return ret
	}
	return *o.PriceBandAskPct.Get()
}

// GetPriceBandAskPctOk returns a tuple with the PriceBandAskPct field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandAskPctOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.PriceBandAskPct.Get(), o.PriceBandAskPct.IsSet()
}

// HasPriceBandAskPct returns a boolean if a field has been set.
func (o *MarketsGet200ResponseResultMarketsInner) HasPriceBandAskPct() bool {
	if o != nil && o.PriceBandAskPct.IsSet() {
		return true
	}

	return false
}

// SetPriceBandAskPct gets a reference to the given NullableInt32 and assigns it to the PriceBandAskPct field.
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandAskPct(v int32) {
	o.PriceBandAskPct.Set(&v)
}
// SetPriceBandAskPctNil sets the value for PriceBandAskPct to be an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandAskPctNil() {
	o.PriceBandAskPct.Set(nil)
}

// UnsetPriceBandAskPct ensures that no value is present for PriceBandAskPct, not even an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) UnsetPriceBandAskPct() {
	o.PriceBandAskPct.Unset()
}

// GetMinOrderQty returns the MinOrderQty field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MarketsGet200ResponseResultMarketsInner) GetMinOrderQty() int64 {
	if o == nil || IsNil(o.MinOrderQty.Get()) {
		var ret int64
		return ret
	}
	return *o.MinOrderQty.Get()
}

// GetMinOrderQtyOk returns a tuple with the MinOrderQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultMarketsInner) GetMinOrderQtyOk() (*int64, bool) {
	if o == nil {
		return nil, false
	}
	return o.MinOrderQty.Get(), o.MinOrderQty.IsSet()
}

// HasMinOrderQty returns a boolean if a field has been set.
func (o *MarketsGet200ResponseResultMarketsInner) HasMinOrderQty() bool {
	if o != nil && o.MinOrderQty.IsSet() {
		return true
	}

	return false
}

// SetMinOrderQty gets a reference to the given NullableInt64 and assigns it to the MinOrderQty field.
func (o *MarketsGet200ResponseResultMarketsInner) SetMinOrderQty(v int64) {
	o.MinOrderQty.Set(&v)
}
// SetMinOrderQtyNil sets the value for MinOrderQty to be an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) SetMinOrderQtyNil() {
	o.MinOrderQty.Set(nil)
}

// UnsetMinOrderQty ensures that no value is present for MinOrderQty, not even an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) UnsetMinOrderQty() {
	o.MinOrderQty.Unset()
}

// GetMaxOrderQty returns the MaxOrderQty field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MarketsGet200ResponseResultMarketsInner) GetMaxOrderQty() int64 {
	if o == nil || IsNil(o.MaxOrderQty.Get()) {
		var ret int64
		return ret
	}
	return *o.MaxOrderQty.Get()
}

// GetMaxOrderQtyOk returns a tuple with the MaxOrderQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultMarketsInner) GetMaxOrderQtyOk() (*int64, bool) {
	if o == nil {
		return nil, false
	}
	return o.MaxOrderQty.Get(), o.MaxOrderQty.IsSet()
}

// HasMaxOrderQty returns a boolean if a field has been set.
func (o *MarketsGet200ResponseResultMarketsInner) HasMaxOrderQty() bool {
	if o != nil && o.MaxOrderQty.IsSet() {
		return true
	}

	return false
}

// SetMaxOrderQty gets a reference to the given NullableInt64 and assigns it to the MaxOrderQty field.
func (o *MarketsGet200ResponseResultMarketsInner) SetMaxOrderQty(v int64) {
	o.MaxOrderQty.Set(&v)
}
// SetMaxOrderQtyNil sets the value for MaxOrderQty to be an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) SetMaxOrderQtyNil() {
	o.MaxOrderQty.Set(nil)
}

// UnsetMaxOrderQty ensures that no value is present for MaxOrderQty, not even an explicit nil
func (o *MarketsGet200ResponseResultMarketsInner) UnsetMaxOrderQty() {
	o.MaxOrderQty.Unset()
}

// GetPriceTickSize returns the PriceTickSize field value
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceTickSize() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.PriceTickSize
}

// GetPriceTickSizeOk returns a tuple with the PriceTickSize field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetPriceTickSizeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.PriceTickSize, true
}

// SetPriceTickSize sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetPriceTickSize(v string) {
	o.PriceTickSize = v
}

// GetQuantityTickSize returns the QuantityTickSize field value
func (o *MarketsGet200ResponseResultMarketsInner) GetQuantityTickSize() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.QuantityTickSize
}

// GetQuantityTickSizeOk returns a tuple with the QuantityTickSize field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetQuantityTickSizeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.QuantityTickSize, true
}

// SetQuantityTickSize sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetQuantityTickSize(v string) {
	o.QuantityTickSize = v
}

// GetFeeTableId returns the FeeTableId field value
func (o *MarketsGet200ResponseResultMarketsInner) GetFeeTableId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.FeeTableId
}

// GetFeeTableIdOk returns a tuple with the FeeTableId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetFeeTableIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.FeeTableId, true
}

// SetFeeTableId sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetFeeTableId(v int32) {
	o.FeeTableId = v
}

// GetBaseMarketIds returns the BaseMarketIds field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseMarketIds() []int32 {
	if o == nil {
		var ret []int32
		return ret
	}
	return o.BaseMarketIds
}

// GetBaseMarketIdsOk returns a tuple with the BaseMarketIds field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultMarketsInner) GetBaseMarketIdsOk() ([]int32, bool) {
	if o == nil || IsNil(o.BaseMarketIds) {
		return nil, false
	}
	return o.BaseMarketIds, true
}

// HasBaseMarketIds returns a boolean if a field has been set.
func (o *MarketsGet200ResponseResultMarketsInner) HasBaseMarketIds() bool {
	if o != nil && !IsNil(o.BaseMarketIds) {
		return true
	}

	return false
}

// SetBaseMarketIds gets a reference to the given []int32 and assigns it to the BaseMarketIds field.
func (o *MarketsGet200ResponseResultMarketsInner) SetBaseMarketIds(v []int32) {
	o.BaseMarketIds = v
}

// GetIsImplied returns the IsImplied field value
func (o *MarketsGet200ResponseResultMarketsInner) GetIsImplied() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.IsImplied
}

// GetIsImpliedOk returns a tuple with the IsImplied field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultMarketsInner) GetIsImpliedOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.IsImplied, true
}

// SetIsImplied sets field value
func (o *MarketsGet200ResponseResultMarketsInner) SetIsImplied(v bool) {
	o.IsImplied = v
}

func (o MarketsGet200ResponseResultMarketsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketsGet200ResponseResultMarketsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["marketId"] = o.MarketId
	toSerialize["symbol"] = o.Symbol
	toSerialize["baseAssetId"] = o.BaseAssetId
	toSerialize["baseLotSize"] = o.BaseLotSize
	toSerialize["quoteAssetId"] = o.QuoteAssetId
	toSerialize["quoteLotSize"] = o.QuoteLotSize
	toSerialize["priceDisplayDecimals"] = o.PriceDisplayDecimals
	toSerialize["protectionPriceLevels"] = o.ProtectionPriceLevels
	if o.PriceBandBidPct.IsSet() {
		toSerialize["priceBandBidPct"] = o.PriceBandBidPct.Get()
	}
	if o.PriceBandAskPct.IsSet() {
		toSerialize["priceBandAskPct"] = o.PriceBandAskPct.Get()
	}
	if o.MinOrderQty.IsSet() {
		toSerialize["minOrderQty"] = o.MinOrderQty.Get()
	}
	if o.MaxOrderQty.IsSet() {
		toSerialize["maxOrderQty"] = o.MaxOrderQty.Get()
	}
	toSerialize["priceTickSize"] = o.PriceTickSize
	toSerialize["quantityTickSize"] = o.QuantityTickSize
	toSerialize["feeTableId"] = o.FeeTableId
	if o.BaseMarketIds != nil {
		toSerialize["baseMarketIds"] = o.BaseMarketIds
	}
	toSerialize["isImplied"] = o.IsImplied
	return toSerialize, nil
}

func (o *MarketsGet200ResponseResultMarketsInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"marketId",
		"symbol",
		"baseAssetId",
		"baseLotSize",
		"quoteAssetId",
		"quoteLotSize",
		"priceDisplayDecimals",
		"protectionPriceLevels",
		"priceTickSize",
		"quantityTickSize",
		"feeTableId",
		"isImplied",
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

	varMarketsGet200ResponseResultMarketsInner := _MarketsGet200ResponseResultMarketsInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varMarketsGet200ResponseResultMarketsInner)

	if err != nil {
		return err
	}

	*o = MarketsGet200ResponseResultMarketsInner(varMarketsGet200ResponseResultMarketsInner)

	return err
}

type NullableMarketsGet200ResponseResultMarketsInner struct {
	value *MarketsGet200ResponseResultMarketsInner
	isSet bool
}

func (v NullableMarketsGet200ResponseResultMarketsInner) Get() *MarketsGet200ResponseResultMarketsInner {
	return v.value
}

func (v *NullableMarketsGet200ResponseResultMarketsInner) Set(val *MarketsGet200ResponseResultMarketsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketsGet200ResponseResultMarketsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketsGet200ResponseResultMarketsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketsGet200ResponseResultMarketsInner(val *MarketsGet200ResponseResultMarketsInner) *NullableMarketsGet200ResponseResultMarketsInner {
	return &NullableMarketsGet200ResponseResultMarketsInner{value: val, isSet: true}
}

func (v NullableMarketsGet200ResponseResultMarketsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketsGet200ResponseResultMarketsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


