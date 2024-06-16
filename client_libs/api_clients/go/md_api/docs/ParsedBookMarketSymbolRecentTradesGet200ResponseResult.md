# ParsedBookMarketSymbolRecentTradesGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TickerId** | **string** |  | 
**Trades** | [**[]ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner**](ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner.md) |  | 

## Methods

### NewParsedBookMarketSymbolRecentTradesGet200ResponseResult

`func NewParsedBookMarketSymbolRecentTradesGet200ResponseResult(tickerId string, trades []ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner, ) *ParsedBookMarketSymbolRecentTradesGet200ResponseResult`

NewParsedBookMarketSymbolRecentTradesGet200ResponseResult instantiates a new ParsedBookMarketSymbolRecentTradesGet200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParsedBookMarketSymbolRecentTradesGet200ResponseResultWithDefaults

`func NewParsedBookMarketSymbolRecentTradesGet200ResponseResultWithDefaults() *ParsedBookMarketSymbolRecentTradesGet200ResponseResult`

NewParsedBookMarketSymbolRecentTradesGet200ResponseResultWithDefaults instantiates a new ParsedBookMarketSymbolRecentTradesGet200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTickerId

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) GetTickerId() string`

GetTickerId returns the TickerId field if non-nil, zero value otherwise.

### GetTickerIdOk

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) GetTickerIdOk() (*string, bool)`

GetTickerIdOk returns a tuple with the TickerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickerId

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) SetTickerId(v string)`

SetTickerId sets TickerId field to given value.


### GetTrades

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) GetTrades() []ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner`

GetTrades returns the Trades field if non-nil, zero value otherwise.

### GetTradesOk

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) GetTradesOk() (*[]ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner, bool)`

GetTradesOk returns a tuple with the Trades field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrades

`func (o *ParsedBookMarketSymbolRecentTradesGet200ResponseResult) SetTrades(v []ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner)`

SetTrades sets Trades field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


