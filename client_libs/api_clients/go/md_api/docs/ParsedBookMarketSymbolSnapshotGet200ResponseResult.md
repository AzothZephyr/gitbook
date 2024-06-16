# ParsedBookMarketSymbolSnapshotGet200ResponseResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TickerId** | **string** |  | 
**Timestamp** | **int32** |  | 
**Bids** | **[][]string** | A list of (price, quantity) pairs, sorted by price in descending order. | 
**Asks** | **[][]string** | A list of (price, quantity) pairs, sorted by price in ascending order. | 

## Methods

### NewParsedBookMarketSymbolSnapshotGet200ResponseResult

`func NewParsedBookMarketSymbolSnapshotGet200ResponseResult(tickerId string, timestamp int32, bids [][]string, asks [][]string, ) *ParsedBookMarketSymbolSnapshotGet200ResponseResult`

NewParsedBookMarketSymbolSnapshotGet200ResponseResult instantiates a new ParsedBookMarketSymbolSnapshotGet200ResponseResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParsedBookMarketSymbolSnapshotGet200ResponseResultWithDefaults

`func NewParsedBookMarketSymbolSnapshotGet200ResponseResultWithDefaults() *ParsedBookMarketSymbolSnapshotGet200ResponseResult`

NewParsedBookMarketSymbolSnapshotGet200ResponseResultWithDefaults instantiates a new ParsedBookMarketSymbolSnapshotGet200ResponseResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTickerId

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetTickerId() string`

GetTickerId returns the TickerId field if non-nil, zero value otherwise.

### GetTickerIdOk

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetTickerIdOk() (*string, bool)`

GetTickerIdOk returns a tuple with the TickerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickerId

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) SetTickerId(v string)`

SetTickerId sets TickerId field to given value.


### GetTimestamp

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetTimestamp() int32`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetTimestampOk() (*int32, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) SetTimestamp(v int32)`

SetTimestamp sets Timestamp field to given value.


### GetBids

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetBids() [][]string`

GetBids returns the Bids field if non-nil, zero value otherwise.

### GetBidsOk

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetBidsOk() (*[][]string, bool)`

GetBidsOk returns a tuple with the Bids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBids

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) SetBids(v [][]string)`

SetBids sets Bids field to given value.


### GetAsks

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetAsks() [][]string`

GetAsks returns the Asks field if non-nil, zero value otherwise.

### GetAsksOk

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) GetAsksOk() (*[][]string, bool)`

GetAsksOk returns a tuple with the Asks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsks

`func (o *ParsedBookMarketSymbolSnapshotGet200ResponseResult) SetAsks(v [][]string)`

SetAsks sets Asks field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


