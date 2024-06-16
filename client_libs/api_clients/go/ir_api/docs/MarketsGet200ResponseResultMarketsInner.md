# MarketsGet200ResponseResultMarketsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** | The Cube-assigned market ID. | 
**Symbol** | **string** | The market&#39;s symbol. Normally this is base symbol concatenated with the quote symbol.  e.g &#x60;BTCUSDC&#x60; | 
**BaseAssetId** | **int32** | The asset ID of the base asset. | 
**BaseLotSize** | **string** | The number of units of the base asset that are represented by one base lot. | 
**QuoteAssetId** | **int32** | The asset ID of the quote asset. | 
**QuoteLotSize** | **string** | The number of units of the quote asset that are represented by one quote lot. | 
**PriceDisplayDecimals** | **int32** | The default number of decimal places to display for human-readable prices for this market. | 
**ProtectionPriceLevels** | **int32** |  | 
**PriceBandBidPct** | Pointer to **NullableInt32** | The percentage that a new bid can be placed below the current reference price. | [optional] 
**PriceBandAskPct** | Pointer to **NullableInt32** | The percentage that a new ask can be placed above the current reference price. | [optional] 
**MinOrderQty** | Pointer to **NullableInt64** | The minimum order quantity lots for this market. Inclusive. | [optional] 
**MaxOrderQty** | Pointer to **NullableInt64** | The maximum order quantity lots for this market. Inclusive. | [optional] 
**PriceTickSize** | **string** | The human-readable minimum price increment. | 
**QuantityTickSize** | **string** | The human-readable minimum quantity increment. | 
**FeeTableId** | **int32** | ID of the fee table that will be used for lookups on this market. | 
**BaseMarketIds** | Pointer to **[]int32** | If this is an implied market, this is the list of implied-through base markets. Otherwise, this is &#x60;None&#x60;. | [optional] 
**IsImplied** | **bool** | If this market is currently enabled for implied matching, this will be &#x60;true&#x60;. Otherwise, this will be &#x60;false&#x60; or missing. | 

## Methods

### NewMarketsGet200ResponseResultMarketsInner

`func NewMarketsGet200ResponseResultMarketsInner(marketId int32, symbol string, baseAssetId int32, baseLotSize string, quoteAssetId int32, quoteLotSize string, priceDisplayDecimals int32, protectionPriceLevels int32, priceTickSize string, quantityTickSize string, feeTableId int32, isImplied bool, ) *MarketsGet200ResponseResultMarketsInner`

NewMarketsGet200ResponseResultMarketsInner instantiates a new MarketsGet200ResponseResultMarketsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketsGet200ResponseResultMarketsInnerWithDefaults

`func NewMarketsGet200ResponseResultMarketsInnerWithDefaults() *MarketsGet200ResponseResultMarketsInner`

NewMarketsGet200ResponseResultMarketsInnerWithDefaults instantiates a new MarketsGet200ResponseResultMarketsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *MarketsGet200ResponseResultMarketsInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *MarketsGet200ResponseResultMarketsInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetSymbol

`func (o *MarketsGet200ResponseResultMarketsInner) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *MarketsGet200ResponseResultMarketsInner) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.


### GetBaseAssetId

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseAssetId() int32`

GetBaseAssetId returns the BaseAssetId field if non-nil, zero value otherwise.

### GetBaseAssetIdOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseAssetIdOk() (*int32, bool)`

GetBaseAssetIdOk returns a tuple with the BaseAssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAssetId

`func (o *MarketsGet200ResponseResultMarketsInner) SetBaseAssetId(v int32)`

SetBaseAssetId sets BaseAssetId field to given value.


### GetBaseLotSize

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseLotSize() string`

GetBaseLotSize returns the BaseLotSize field if non-nil, zero value otherwise.

### GetBaseLotSizeOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseLotSizeOk() (*string, bool)`

GetBaseLotSizeOk returns a tuple with the BaseLotSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseLotSize

`func (o *MarketsGet200ResponseResultMarketsInner) SetBaseLotSize(v string)`

SetBaseLotSize sets BaseLotSize field to given value.


### GetQuoteAssetId

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteAssetId() int32`

GetQuoteAssetId returns the QuoteAssetId field if non-nil, zero value otherwise.

### GetQuoteAssetIdOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteAssetIdOk() (*int32, bool)`

GetQuoteAssetIdOk returns a tuple with the QuoteAssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteAssetId

`func (o *MarketsGet200ResponseResultMarketsInner) SetQuoteAssetId(v int32)`

SetQuoteAssetId sets QuoteAssetId field to given value.


### GetQuoteLotSize

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteLotSize() string`

GetQuoteLotSize returns the QuoteLotSize field if non-nil, zero value otherwise.

### GetQuoteLotSizeOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuoteLotSizeOk() (*string, bool)`

GetQuoteLotSizeOk returns a tuple with the QuoteLotSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteLotSize

`func (o *MarketsGet200ResponseResultMarketsInner) SetQuoteLotSize(v string)`

SetQuoteLotSize sets QuoteLotSize field to given value.


### GetPriceDisplayDecimals

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceDisplayDecimals() int32`

GetPriceDisplayDecimals returns the PriceDisplayDecimals field if non-nil, zero value otherwise.

### GetPriceDisplayDecimalsOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceDisplayDecimalsOk() (*int32, bool)`

GetPriceDisplayDecimalsOk returns a tuple with the PriceDisplayDecimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceDisplayDecimals

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceDisplayDecimals(v int32)`

SetPriceDisplayDecimals sets PriceDisplayDecimals field to given value.


### GetProtectionPriceLevels

`func (o *MarketsGet200ResponseResultMarketsInner) GetProtectionPriceLevels() int32`

GetProtectionPriceLevels returns the ProtectionPriceLevels field if non-nil, zero value otherwise.

### GetProtectionPriceLevelsOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetProtectionPriceLevelsOk() (*int32, bool)`

GetProtectionPriceLevelsOk returns a tuple with the ProtectionPriceLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectionPriceLevels

`func (o *MarketsGet200ResponseResultMarketsInner) SetProtectionPriceLevels(v int32)`

SetProtectionPriceLevels sets ProtectionPriceLevels field to given value.


### GetPriceBandBidPct

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandBidPct() int32`

GetPriceBandBidPct returns the PriceBandBidPct field if non-nil, zero value otherwise.

### GetPriceBandBidPctOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandBidPctOk() (*int32, bool)`

GetPriceBandBidPctOk returns a tuple with the PriceBandBidPct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceBandBidPct

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandBidPct(v int32)`

SetPriceBandBidPct sets PriceBandBidPct field to given value.

### HasPriceBandBidPct

`func (o *MarketsGet200ResponseResultMarketsInner) HasPriceBandBidPct() bool`

HasPriceBandBidPct returns a boolean if a field has been set.

### SetPriceBandBidPctNil

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandBidPctNil(b bool)`

 SetPriceBandBidPctNil sets the value for PriceBandBidPct to be an explicit nil

### UnsetPriceBandBidPct
`func (o *MarketsGet200ResponseResultMarketsInner) UnsetPriceBandBidPct()`

UnsetPriceBandBidPct ensures that no value is present for PriceBandBidPct, not even an explicit nil
### GetPriceBandAskPct

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandAskPct() int32`

GetPriceBandAskPct returns the PriceBandAskPct field if non-nil, zero value otherwise.

### GetPriceBandAskPctOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceBandAskPctOk() (*int32, bool)`

GetPriceBandAskPctOk returns a tuple with the PriceBandAskPct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceBandAskPct

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandAskPct(v int32)`

SetPriceBandAskPct sets PriceBandAskPct field to given value.

### HasPriceBandAskPct

`func (o *MarketsGet200ResponseResultMarketsInner) HasPriceBandAskPct() bool`

HasPriceBandAskPct returns a boolean if a field has been set.

### SetPriceBandAskPctNil

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceBandAskPctNil(b bool)`

 SetPriceBandAskPctNil sets the value for PriceBandAskPct to be an explicit nil

### UnsetPriceBandAskPct
`func (o *MarketsGet200ResponseResultMarketsInner) UnsetPriceBandAskPct()`

UnsetPriceBandAskPct ensures that no value is present for PriceBandAskPct, not even an explicit nil
### GetMinOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) GetMinOrderQty() int64`

GetMinOrderQty returns the MinOrderQty field if non-nil, zero value otherwise.

### GetMinOrderQtyOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetMinOrderQtyOk() (*int64, bool)`

GetMinOrderQtyOk returns a tuple with the MinOrderQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) SetMinOrderQty(v int64)`

SetMinOrderQty sets MinOrderQty field to given value.

### HasMinOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) HasMinOrderQty() bool`

HasMinOrderQty returns a boolean if a field has been set.

### SetMinOrderQtyNil

`func (o *MarketsGet200ResponseResultMarketsInner) SetMinOrderQtyNil(b bool)`

 SetMinOrderQtyNil sets the value for MinOrderQty to be an explicit nil

### UnsetMinOrderQty
`func (o *MarketsGet200ResponseResultMarketsInner) UnsetMinOrderQty()`

UnsetMinOrderQty ensures that no value is present for MinOrderQty, not even an explicit nil
### GetMaxOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) GetMaxOrderQty() int64`

GetMaxOrderQty returns the MaxOrderQty field if non-nil, zero value otherwise.

### GetMaxOrderQtyOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetMaxOrderQtyOk() (*int64, bool)`

GetMaxOrderQtyOk returns a tuple with the MaxOrderQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) SetMaxOrderQty(v int64)`

SetMaxOrderQty sets MaxOrderQty field to given value.

### HasMaxOrderQty

`func (o *MarketsGet200ResponseResultMarketsInner) HasMaxOrderQty() bool`

HasMaxOrderQty returns a boolean if a field has been set.

### SetMaxOrderQtyNil

`func (o *MarketsGet200ResponseResultMarketsInner) SetMaxOrderQtyNil(b bool)`

 SetMaxOrderQtyNil sets the value for MaxOrderQty to be an explicit nil

### UnsetMaxOrderQty
`func (o *MarketsGet200ResponseResultMarketsInner) UnsetMaxOrderQty()`

UnsetMaxOrderQty ensures that no value is present for MaxOrderQty, not even an explicit nil
### GetPriceTickSize

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceTickSize() string`

GetPriceTickSize returns the PriceTickSize field if non-nil, zero value otherwise.

### GetPriceTickSizeOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetPriceTickSizeOk() (*string, bool)`

GetPriceTickSizeOk returns a tuple with the PriceTickSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceTickSize

`func (o *MarketsGet200ResponseResultMarketsInner) SetPriceTickSize(v string)`

SetPriceTickSize sets PriceTickSize field to given value.


### GetQuantityTickSize

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuantityTickSize() string`

GetQuantityTickSize returns the QuantityTickSize field if non-nil, zero value otherwise.

### GetQuantityTickSizeOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetQuantityTickSizeOk() (*string, bool)`

GetQuantityTickSizeOk returns a tuple with the QuantityTickSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantityTickSize

`func (o *MarketsGet200ResponseResultMarketsInner) SetQuantityTickSize(v string)`

SetQuantityTickSize sets QuantityTickSize field to given value.


### GetFeeTableId

`func (o *MarketsGet200ResponseResultMarketsInner) GetFeeTableId() int32`

GetFeeTableId returns the FeeTableId field if non-nil, zero value otherwise.

### GetFeeTableIdOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetFeeTableIdOk() (*int32, bool)`

GetFeeTableIdOk returns a tuple with the FeeTableId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeTableId

`func (o *MarketsGet200ResponseResultMarketsInner) SetFeeTableId(v int32)`

SetFeeTableId sets FeeTableId field to given value.


### GetBaseMarketIds

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseMarketIds() []int32`

GetBaseMarketIds returns the BaseMarketIds field if non-nil, zero value otherwise.

### GetBaseMarketIdsOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetBaseMarketIdsOk() (*[]int32, bool)`

GetBaseMarketIdsOk returns a tuple with the BaseMarketIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseMarketIds

`func (o *MarketsGet200ResponseResultMarketsInner) SetBaseMarketIds(v []int32)`

SetBaseMarketIds sets BaseMarketIds field to given value.

### HasBaseMarketIds

`func (o *MarketsGet200ResponseResultMarketsInner) HasBaseMarketIds() bool`

HasBaseMarketIds returns a boolean if a field has been set.

### SetBaseMarketIdsNil

`func (o *MarketsGet200ResponseResultMarketsInner) SetBaseMarketIdsNil(b bool)`

 SetBaseMarketIdsNil sets the value for BaseMarketIds to be an explicit nil

### UnsetBaseMarketIds
`func (o *MarketsGet200ResponseResultMarketsInner) UnsetBaseMarketIds()`

UnsetBaseMarketIds ensures that no value is present for BaseMarketIds, not even an explicit nil
### GetIsImplied

`func (o *MarketsGet200ResponseResultMarketsInner) GetIsImplied() bool`

GetIsImplied returns the IsImplied field if non-nil, zero value otherwise.

### GetIsImpliedOk

`func (o *MarketsGet200ResponseResultMarketsInner) GetIsImpliedOk() (*bool, bool)`

GetIsImpliedOk returns a tuple with the IsImplied field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsImplied

`func (o *MarketsGet200ResponseResultMarketsInner) SetIsImplied(v bool)`

SetIsImplied sets IsImplied field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


