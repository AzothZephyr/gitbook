# ParsedTickersGet200ResponseResultInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ticker_id** | **String** |  | 
**base_currency** | **String** |  | 
**quote_currency** | **String** |  | 
**timestamp** | **i32** | The millisecond timestamp of the latest update. | 
**last_price** | Option<**f64**> | The last traded price. Also equal to the 24-hour closing price | [optional]
**base_volume** | **f64** | The rolling 24-hour volume in the base currency. | 
**quote_volume** | **f64** | The rolling 24-hour volume in the quote currency. | 
**bid** | Option<**f64**> |  | [optional]
**ask** | Option<**f64**> |  | [optional]
**high** | Option<**f64**> | The rolling 24-hour highest price. | [optional]
**low** | Option<**f64**> | The rolling 24-hour lowest price. | [optional]
**open** | Option<**f64**> | The rolling 24-hour opening price. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


