# ParsedTickersGet200ResponseResultInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TickerId** | **string** |  | 
**BaseCurrency** | **string** |  | 
**QuoteCurrency** | **string** |  | 
**Timestamp** | **int32** | The millisecond timestamp of the latest update. | 
**LastPrice** | Pointer to **NullableFloat64** | The last traded price. Also equal to the 24-hour closing price | [optional] 
**BaseVolume** | **float64** | The rolling 24-hour volume in the base currency. | 
**QuoteVolume** | **float64** | The rolling 24-hour volume in the quote currency. | 
**Bid** | Pointer to **NullableFloat64** |  | [optional] 
**Ask** | Pointer to **NullableFloat64** |  | [optional] 
**High** | Pointer to **NullableFloat64** | The rolling 24-hour highest price. | [optional] 
**Low** | Pointer to **NullableFloat64** | The rolling 24-hour lowest price. | [optional] 
**Open** | Pointer to **NullableFloat64** | The rolling 24-hour opening price. | [optional] 

## Methods

### NewParsedTickersGet200ResponseResultInner

`func NewParsedTickersGet200ResponseResultInner(tickerId string, baseCurrency string, quoteCurrency string, timestamp int32, baseVolume float64, quoteVolume float64, ) *ParsedTickersGet200ResponseResultInner`

NewParsedTickersGet200ResponseResultInner instantiates a new ParsedTickersGet200ResponseResultInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParsedTickersGet200ResponseResultInnerWithDefaults

`func NewParsedTickersGet200ResponseResultInnerWithDefaults() *ParsedTickersGet200ResponseResultInner`

NewParsedTickersGet200ResponseResultInnerWithDefaults instantiates a new ParsedTickersGet200ResponseResultInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTickerId

`func (o *ParsedTickersGet200ResponseResultInner) GetTickerId() string`

GetTickerId returns the TickerId field if non-nil, zero value otherwise.

### GetTickerIdOk

`func (o *ParsedTickersGet200ResponseResultInner) GetTickerIdOk() (*string, bool)`

GetTickerIdOk returns a tuple with the TickerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickerId

`func (o *ParsedTickersGet200ResponseResultInner) SetTickerId(v string)`

SetTickerId sets TickerId field to given value.


### GetBaseCurrency

`func (o *ParsedTickersGet200ResponseResultInner) GetBaseCurrency() string`

GetBaseCurrency returns the BaseCurrency field if non-nil, zero value otherwise.

### GetBaseCurrencyOk

`func (o *ParsedTickersGet200ResponseResultInner) GetBaseCurrencyOk() (*string, bool)`

GetBaseCurrencyOk returns a tuple with the BaseCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseCurrency

`func (o *ParsedTickersGet200ResponseResultInner) SetBaseCurrency(v string)`

SetBaseCurrency sets BaseCurrency field to given value.


### GetQuoteCurrency

`func (o *ParsedTickersGet200ResponseResultInner) GetQuoteCurrency() string`

GetQuoteCurrency returns the QuoteCurrency field if non-nil, zero value otherwise.

### GetQuoteCurrencyOk

`func (o *ParsedTickersGet200ResponseResultInner) GetQuoteCurrencyOk() (*string, bool)`

GetQuoteCurrencyOk returns a tuple with the QuoteCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteCurrency

`func (o *ParsedTickersGet200ResponseResultInner) SetQuoteCurrency(v string)`

SetQuoteCurrency sets QuoteCurrency field to given value.


### GetTimestamp

`func (o *ParsedTickersGet200ResponseResultInner) GetTimestamp() int32`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ParsedTickersGet200ResponseResultInner) GetTimestampOk() (*int32, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ParsedTickersGet200ResponseResultInner) SetTimestamp(v int32)`

SetTimestamp sets Timestamp field to given value.


### GetLastPrice

`func (o *ParsedTickersGet200ResponseResultInner) GetLastPrice() float64`

GetLastPrice returns the LastPrice field if non-nil, zero value otherwise.

### GetLastPriceOk

`func (o *ParsedTickersGet200ResponseResultInner) GetLastPriceOk() (*float64, bool)`

GetLastPriceOk returns a tuple with the LastPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPrice

`func (o *ParsedTickersGet200ResponseResultInner) SetLastPrice(v float64)`

SetLastPrice sets LastPrice field to given value.

### HasLastPrice

`func (o *ParsedTickersGet200ResponseResultInner) HasLastPrice() bool`

HasLastPrice returns a boolean if a field has been set.

### SetLastPriceNil

`func (o *ParsedTickersGet200ResponseResultInner) SetLastPriceNil(b bool)`

 SetLastPriceNil sets the value for LastPrice to be an explicit nil

### UnsetLastPrice
`func (o *ParsedTickersGet200ResponseResultInner) UnsetLastPrice()`

UnsetLastPrice ensures that no value is present for LastPrice, not even an explicit nil
### GetBaseVolume

`func (o *ParsedTickersGet200ResponseResultInner) GetBaseVolume() float64`

GetBaseVolume returns the BaseVolume field if non-nil, zero value otherwise.

### GetBaseVolumeOk

`func (o *ParsedTickersGet200ResponseResultInner) GetBaseVolumeOk() (*float64, bool)`

GetBaseVolumeOk returns a tuple with the BaseVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseVolume

`func (o *ParsedTickersGet200ResponseResultInner) SetBaseVolume(v float64)`

SetBaseVolume sets BaseVolume field to given value.


### GetQuoteVolume

`func (o *ParsedTickersGet200ResponseResultInner) GetQuoteVolume() float64`

GetQuoteVolume returns the QuoteVolume field if non-nil, zero value otherwise.

### GetQuoteVolumeOk

`func (o *ParsedTickersGet200ResponseResultInner) GetQuoteVolumeOk() (*float64, bool)`

GetQuoteVolumeOk returns a tuple with the QuoteVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteVolume

`func (o *ParsedTickersGet200ResponseResultInner) SetQuoteVolume(v float64)`

SetQuoteVolume sets QuoteVolume field to given value.


### GetBid

`func (o *ParsedTickersGet200ResponseResultInner) GetBid() float64`

GetBid returns the Bid field if non-nil, zero value otherwise.

### GetBidOk

`func (o *ParsedTickersGet200ResponseResultInner) GetBidOk() (*float64, bool)`

GetBidOk returns a tuple with the Bid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBid

`func (o *ParsedTickersGet200ResponseResultInner) SetBid(v float64)`

SetBid sets Bid field to given value.

### HasBid

`func (o *ParsedTickersGet200ResponseResultInner) HasBid() bool`

HasBid returns a boolean if a field has been set.

### SetBidNil

`func (o *ParsedTickersGet200ResponseResultInner) SetBidNil(b bool)`

 SetBidNil sets the value for Bid to be an explicit nil

### UnsetBid
`func (o *ParsedTickersGet200ResponseResultInner) UnsetBid()`

UnsetBid ensures that no value is present for Bid, not even an explicit nil
### GetAsk

`func (o *ParsedTickersGet200ResponseResultInner) GetAsk() float64`

GetAsk returns the Ask field if non-nil, zero value otherwise.

### GetAskOk

`func (o *ParsedTickersGet200ResponseResultInner) GetAskOk() (*float64, bool)`

GetAskOk returns a tuple with the Ask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsk

`func (o *ParsedTickersGet200ResponseResultInner) SetAsk(v float64)`

SetAsk sets Ask field to given value.

### HasAsk

`func (o *ParsedTickersGet200ResponseResultInner) HasAsk() bool`

HasAsk returns a boolean if a field has been set.

### SetAskNil

`func (o *ParsedTickersGet200ResponseResultInner) SetAskNil(b bool)`

 SetAskNil sets the value for Ask to be an explicit nil

### UnsetAsk
`func (o *ParsedTickersGet200ResponseResultInner) UnsetAsk()`

UnsetAsk ensures that no value is present for Ask, not even an explicit nil
### GetHigh

`func (o *ParsedTickersGet200ResponseResultInner) GetHigh() float64`

GetHigh returns the High field if non-nil, zero value otherwise.

### GetHighOk

`func (o *ParsedTickersGet200ResponseResultInner) GetHighOk() (*float64, bool)`

GetHighOk returns a tuple with the High field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHigh

`func (o *ParsedTickersGet200ResponseResultInner) SetHigh(v float64)`

SetHigh sets High field to given value.

### HasHigh

`func (o *ParsedTickersGet200ResponseResultInner) HasHigh() bool`

HasHigh returns a boolean if a field has been set.

### SetHighNil

`func (o *ParsedTickersGet200ResponseResultInner) SetHighNil(b bool)`

 SetHighNil sets the value for High to be an explicit nil

### UnsetHigh
`func (o *ParsedTickersGet200ResponseResultInner) UnsetHigh()`

UnsetHigh ensures that no value is present for High, not even an explicit nil
### GetLow

`func (o *ParsedTickersGet200ResponseResultInner) GetLow() float64`

GetLow returns the Low field if non-nil, zero value otherwise.

### GetLowOk

`func (o *ParsedTickersGet200ResponseResultInner) GetLowOk() (*float64, bool)`

GetLowOk returns a tuple with the Low field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLow

`func (o *ParsedTickersGet200ResponseResultInner) SetLow(v float64)`

SetLow sets Low field to given value.

### HasLow

`func (o *ParsedTickersGet200ResponseResultInner) HasLow() bool`

HasLow returns a boolean if a field has been set.

### SetLowNil

`func (o *ParsedTickersGet200ResponseResultInner) SetLowNil(b bool)`

 SetLowNil sets the value for Low to be an explicit nil

### UnsetLow
`func (o *ParsedTickersGet200ResponseResultInner) UnsetLow()`

UnsetLow ensures that no value is present for Low, not even an explicit nil
### GetOpen

`func (o *ParsedTickersGet200ResponseResultInner) GetOpen() float64`

GetOpen returns the Open field if non-nil, zero value otherwise.

### GetOpenOk

`func (o *ParsedTickersGet200ResponseResultInner) GetOpenOk() (*float64, bool)`

GetOpenOk returns a tuple with the Open field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpen

`func (o *ParsedTickersGet200ResponseResultInner) SetOpen(v float64)`

SetOpen sets Open field to given value.

### HasOpen

`func (o *ParsedTickersGet200ResponseResultInner) HasOpen() bool`

HasOpen returns a boolean if a field has been set.

### SetOpenNil

`func (o *ParsedTickersGet200ResponseResultInner) SetOpenNil(b bool)`

 SetOpenNil sets the value for Open to be an explicit nil

### UnsetOpen
`func (o *ParsedTickersGet200ResponseResultInner) UnsetOpen()`

UnsetOpen ensures that no value is present for Open, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


