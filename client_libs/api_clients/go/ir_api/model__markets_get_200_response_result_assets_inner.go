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

// checks if the MarketsGet200ResponseResultAssetsInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketsGet200ResponseResultAssetsInner{}

// MarketsGet200ResponseResultAssetsInner struct for MarketsGet200ResponseResultAssetsInner
type MarketsGet200ResponseResultAssetsInner struct {
	// The Cube-assigned asset ID.
	AssetId int32 `json:"assetId"`
	// The canonical symbol for this asset.
	Symbol string `json:"symbol"`
	// The maximum precision of this asset.  e.g `18` for ETH (`10^18` WEI per ETH), `8` for BTC (`10^8` SAT per BTC)
	Decimals int32 `json:"decimals"`
	// The default number of decimal places to display for human-readable quantities for this asset.
	DisplayDecimals int32 `json:"displayDecimals"`
	// Whether this asset settles to the blockchain.
	Settles bool `json:"settles"`
	// The type of this asset.
	AssetType string `json:"assetType"`
	// The source ID of this asset.
	SourceId int32 `json:"sourceId"`
	// Additional metadata about this asset.
	Metadata interface{} `json:"metadata"`
}

type _MarketsGet200ResponseResultAssetsInner MarketsGet200ResponseResultAssetsInner

// NewMarketsGet200ResponseResultAssetsInner instantiates a new MarketsGet200ResponseResultAssetsInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketsGet200ResponseResultAssetsInner(assetId int32, symbol string, decimals int32, displayDecimals int32, settles bool, assetType string, sourceId int32, metadata interface{}) *MarketsGet200ResponseResultAssetsInner {
	this := MarketsGet200ResponseResultAssetsInner{}
	this.AssetId = assetId
	this.Symbol = symbol
	this.Decimals = decimals
	this.DisplayDecimals = displayDecimals
	this.Settles = settles
	this.AssetType = assetType
	this.SourceId = sourceId
	this.Metadata = metadata
	return &this
}

// NewMarketsGet200ResponseResultAssetsInnerWithDefaults instantiates a new MarketsGet200ResponseResultAssetsInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketsGet200ResponseResultAssetsInnerWithDefaults() *MarketsGet200ResponseResultAssetsInner {
	this := MarketsGet200ResponseResultAssetsInner{}
	return &this
}

// GetAssetId returns the AssetId field value
func (o *MarketsGet200ResponseResultAssetsInner) GetAssetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.AssetId
}

// GetAssetIdOk returns a tuple with the AssetId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetAssetIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AssetId, true
}

// SetAssetId sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetAssetId(v int32) {
	o.AssetId = v
}

// GetSymbol returns the Symbol field value
func (o *MarketsGet200ResponseResultAssetsInner) GetSymbol() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetSymbolOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Symbol, true
}

// SetSymbol sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetSymbol(v string) {
	o.Symbol = v
}

// GetDecimals returns the Decimals field value
func (o *MarketsGet200ResponseResultAssetsInner) GetDecimals() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Decimals
}

// GetDecimalsOk returns a tuple with the Decimals field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetDecimalsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Decimals, true
}

// SetDecimals sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetDecimals(v int32) {
	o.Decimals = v
}

// GetDisplayDecimals returns the DisplayDecimals field value
func (o *MarketsGet200ResponseResultAssetsInner) GetDisplayDecimals() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.DisplayDecimals
}

// GetDisplayDecimalsOk returns a tuple with the DisplayDecimals field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetDisplayDecimalsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.DisplayDecimals, true
}

// SetDisplayDecimals sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetDisplayDecimals(v int32) {
	o.DisplayDecimals = v
}

// GetSettles returns the Settles field value
func (o *MarketsGet200ResponseResultAssetsInner) GetSettles() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Settles
}

// GetSettlesOk returns a tuple with the Settles field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetSettlesOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Settles, true
}

// SetSettles sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetSettles(v bool) {
	o.Settles = v
}

// GetAssetType returns the AssetType field value
func (o *MarketsGet200ResponseResultAssetsInner) GetAssetType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AssetType
}

// GetAssetTypeOk returns a tuple with the AssetType field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetAssetTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AssetType, true
}

// SetAssetType sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetAssetType(v string) {
	o.AssetType = v
}

// GetSourceId returns the SourceId field value
func (o *MarketsGet200ResponseResultAssetsInner) GetSourceId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.SourceId
}

// GetSourceIdOk returns a tuple with the SourceId field value
// and a boolean to check if the value has been set.
func (o *MarketsGet200ResponseResultAssetsInner) GetSourceIdOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SourceId, true
}

// SetSourceId sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetSourceId(v int32) {
	o.SourceId = v
}

// GetMetadata returns the Metadata field value
// If the value is explicit nil, the zero value for interface{} will be returned
func (o *MarketsGet200ResponseResultAssetsInner) GetMetadata() interface{} {
	if o == nil {
		var ret interface{}
		return ret
	}

	return o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MarketsGet200ResponseResultAssetsInner) GetMetadataOk() (*interface{}, bool) {
	if o == nil || IsNil(o.Metadata) {
		return nil, false
	}
	return &o.Metadata, true
}

// SetMetadata sets field value
func (o *MarketsGet200ResponseResultAssetsInner) SetMetadata(v interface{}) {
	o.Metadata = v
}

func (o MarketsGet200ResponseResultAssetsInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketsGet200ResponseResultAssetsInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["assetId"] = o.AssetId
	toSerialize["symbol"] = o.Symbol
	toSerialize["decimals"] = o.Decimals
	toSerialize["displayDecimals"] = o.DisplayDecimals
	toSerialize["settles"] = o.Settles
	toSerialize["assetType"] = o.AssetType
	toSerialize["sourceId"] = o.SourceId
	if o.Metadata != nil {
		toSerialize["metadata"] = o.Metadata
	}
	return toSerialize, nil
}

func (o *MarketsGet200ResponseResultAssetsInner) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"assetId",
		"symbol",
		"decimals",
		"displayDecimals",
		"settles",
		"assetType",
		"sourceId",
		"metadata",
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

	varMarketsGet200ResponseResultAssetsInner := _MarketsGet200ResponseResultAssetsInner{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varMarketsGet200ResponseResultAssetsInner)

	if err != nil {
		return err
	}

	*o = MarketsGet200ResponseResultAssetsInner(varMarketsGet200ResponseResultAssetsInner)

	return err
}

type NullableMarketsGet200ResponseResultAssetsInner struct {
	value *MarketsGet200ResponseResultAssetsInner
	isSet bool
}

func (v NullableMarketsGet200ResponseResultAssetsInner) Get() *MarketsGet200ResponseResultAssetsInner {
	return v.value
}

func (v *NullableMarketsGet200ResponseResultAssetsInner) Set(val *MarketsGet200ResponseResultAssetsInner) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketsGet200ResponseResultAssetsInner) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketsGet200ResponseResultAssetsInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketsGet200ResponseResultAssetsInner(val *MarketsGet200ResponseResultAssetsInner) *NullableMarketsGet200ResponseResultAssetsInner {
	return &NullableMarketsGet200ResponseResultAssetsInner{value: val, isSet: true}
}

func (v NullableMarketsGet200ResponseResultAssetsInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketsGet200ResponseResultAssetsInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


