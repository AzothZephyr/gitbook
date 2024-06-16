# MarketsGet200ResponseResultMarketsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**market_id** | **i32** | The Cube-assigned market ID. | 
**symbol** | **String** | The market's symbol. Normally this is base symbol concatenated with the quote symbol.  e.g `BTCUSDC` | 
**base_asset_id** | **i32** | The asset ID of the base asset. | 
**base_lot_size** | **String** | The number of units of the base asset that are represented by one base lot. | 
**quote_asset_id** | **i32** | The asset ID of the quote asset. | 
**quote_lot_size** | **String** | The number of units of the quote asset that are represented by one quote lot. | 
**price_display_decimals** | **i32** | The default number of decimal places to display for human-readable prices for this market. | 
**protection_price_levels** | **i32** |  | 
**price_band_bid_pct** | Option<**i32**> | The percentage that a new bid can be placed below the current reference price. | [optional]
**price_band_ask_pct** | Option<**i32**> | The percentage that a new ask can be placed above the current reference price. | [optional]
**min_order_qty** | Option<**i64**> | The minimum order quantity lots for this market. Inclusive. | [optional]
**max_order_qty** | Option<**i64**> | The maximum order quantity lots for this market. Inclusive. | [optional]
**price_tick_size** | **String** | The human-readable minimum price increment. | 
**quantity_tick_size** | **String** | The human-readable minimum quantity increment. | 
**fee_table_id** | **i32** | ID of the fee table that will be used for lookups on this market. | 
**base_market_ids** | Option<**Vec<i32>**> | If this is an implied market, this is the list of implied-through base markets. Otherwise, this is `None`. | [optional]
**is_implied** | **bool** | If this market is currently enabled for implied matching, this will be `true`. Otherwise, this will be `false` or missing. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


