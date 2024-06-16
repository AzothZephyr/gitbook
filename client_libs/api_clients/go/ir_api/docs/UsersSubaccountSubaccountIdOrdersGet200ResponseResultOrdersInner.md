# UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | Pointer to **NullableInt64** | The cube-assigned order ID, also known as &#x60;ExchangeOrderId&#x60;. Unique per order. | [optional] 
**MarketId** | **int32** |  | 
**Side** | **string** |  | 
**Price** | **int32** | Most recent price, including modifies | 
**Qty** | **int32** | Most recent quantity, including modifies | 
**CreatedAt** | **int64** | The matching-engine transact-time in nanoseconds that this order was created. | 
**ModifiedAt** | Pointer to **NullableInt64** | The matching-engine transact-time in nanoseconds of the most recent modify event. Empty if the order was never modified. | [optional] 
**CanceledAt** | Pointer to **NullableInt64** | The matching-engine transact-time in nanoseconds when this order was cancelled. Empty if the order was never cancelled, e.g. is open or filled. | [optional] 
**FilledAt** | Pointer to **NullableInt64** |  | [optional] 
**FilledTotal** | Pointer to [**NullableUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal**](UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal.md) |  | [optional] 
**Fills** | [**[]UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner**](UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner.md) |  | 
**Modifies** | [**[]UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner**](UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner.md) | Any previous states of price/quantity associated with this order due to modifies. If the order has been modified, the original price/quantity will appear in this list. | 
**Reason** | Pointer to **NullableString** | Reject reason if rejected. Cancel reason if canceled. | [optional] 
**Settled** | Pointer to **NullableBool** | The settlement status for this order&#39;s fills.  If the order has no fills, or none of the fills have been assigned to a settlement batch, then this will be &#x60;None&#x60;. This can be derived from &#x60;fills&#x60;. | [optional] 
**Status** | **string** | The current status of this order. Note that if the order is &#x60;Open&#x60;, this is a best-effort estimation, and the order service has the most correct status. | 
**ClientOrderId** | Pointer to **NullableInt32** |  | [optional] 
**TimeInForce** | Pointer to **NullableInt32** |  | [optional] 
**OrderType** | Pointer to **NullableInt32** |  | [optional] 
**SelfTradePrevention** | Pointer to **NullableInt32** |  | [optional] 
**CancelOnDisconnect** | Pointer to **NullableBool** |  | [optional] 
**PostOnly** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner

`func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner(marketId int32, side string, price int32, qty int32, createdAt int64, fills []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner, modifies []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner, status string, ) *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner`

NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerWithDefaults

`func NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerWithDefaults() *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner`

NewUsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerWithDefaults instantiates a new UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetOrderId() int64`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetOrderIdOk() (*int64, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetOrderId(v int64)`

SetOrderId sets OrderId field to given value.

### HasOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasOrderId() bool`

HasOrderId returns a boolean if a field has been set.

### SetOrderIdNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetOrderIdNil(b bool)`

 SetOrderIdNil sets the value for OrderId to be an explicit nil

### UnsetOrderId
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetOrderId()`

UnsetOrderId ensures that no value is present for OrderId, not even an explicit nil
### GetMarketId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetSide

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSide() string`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSideOk() (*string, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetSide(v string)`

SetSide sets Side field to given value.


### GetPrice

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetPrice(v int32)`

SetPrice sets Price field to given value.


### GetQty

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetQty() int32`

GetQty returns the Qty field if non-nil, zero value otherwise.

### GetQtyOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetQtyOk() (*int32, bool)`

GetQtyOk returns a tuple with the Qty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQty

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetQty(v int32)`

SetQty sets Qty field to given value.


### GetCreatedAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetModifiedAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetModifiedAt() int64`

GetModifiedAt returns the ModifiedAt field if non-nil, zero value otherwise.

### GetModifiedAtOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetModifiedAtOk() (*int64, bool)`

GetModifiedAtOk returns a tuple with the ModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetModifiedAt(v int64)`

SetModifiedAt sets ModifiedAt field to given value.

### HasModifiedAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasModifiedAt() bool`

HasModifiedAt returns a boolean if a field has been set.

### SetModifiedAtNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetModifiedAtNil(b bool)`

 SetModifiedAtNil sets the value for ModifiedAt to be an explicit nil

### UnsetModifiedAt
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetModifiedAt()`

UnsetModifiedAt ensures that no value is present for ModifiedAt, not even an explicit nil
### GetCanceledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCanceledAt() int64`

GetCanceledAt returns the CanceledAt field if non-nil, zero value otherwise.

### GetCanceledAtOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCanceledAtOk() (*int64, bool)`

GetCanceledAtOk returns a tuple with the CanceledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanceledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetCanceledAt(v int64)`

SetCanceledAt sets CanceledAt field to given value.

### HasCanceledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasCanceledAt() bool`

HasCanceledAt returns a boolean if a field has been set.

### SetCanceledAtNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetCanceledAtNil(b bool)`

 SetCanceledAtNil sets the value for CanceledAt to be an explicit nil

### UnsetCanceledAt
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetCanceledAt()`

UnsetCanceledAt ensures that no value is present for CanceledAt, not even an explicit nil
### GetFilledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFilledAt() int64`

GetFilledAt returns the FilledAt field if non-nil, zero value otherwise.

### GetFilledAtOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFilledAtOk() (*int64, bool)`

GetFilledAtOk returns a tuple with the FilledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetFilledAt(v int64)`

SetFilledAt sets FilledAt field to given value.

### HasFilledAt

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasFilledAt() bool`

HasFilledAt returns a boolean if a field has been set.

### SetFilledAtNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetFilledAtNil(b bool)`

 SetFilledAtNil sets the value for FilledAt to be an explicit nil

### UnsetFilledAt
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetFilledAt()`

UnsetFilledAt ensures that no value is present for FilledAt, not even an explicit nil
### GetFilledTotal

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFilledTotal() UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal`

GetFilledTotal returns the FilledTotal field if non-nil, zero value otherwise.

### GetFilledTotalOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFilledTotalOk() (*UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal, bool)`

GetFilledTotalOk returns a tuple with the FilledTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilledTotal

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetFilledTotal(v UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFilledTotal)`

SetFilledTotal sets FilledTotal field to given value.

### HasFilledTotal

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasFilledTotal() bool`

HasFilledTotal returns a boolean if a field has been set.

### SetFilledTotalNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetFilledTotalNil(b bool)`

 SetFilledTotalNil sets the value for FilledTotal to be an explicit nil

### UnsetFilledTotal
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetFilledTotal()`

UnsetFilledTotal ensures that no value is present for FilledTotal, not even an explicit nil
### GetFills

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFills() []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner`

GetFills returns the Fills field if non-nil, zero value otherwise.

### GetFillsOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetFillsOk() (*[]UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner, bool)`

GetFillsOk returns a tuple with the Fills field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFills

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetFills(v []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerFillsInner)`

SetFills sets Fills field to given value.


### GetModifies

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetModifies() []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner`

GetModifies returns the Modifies field if non-nil, zero value otherwise.

### GetModifiesOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetModifiesOk() (*[]UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner, bool)`

GetModifiesOk returns a tuple with the Modifies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifies

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetModifies(v []UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInnerModifiesInner)`

SetModifies sets Modifies field to given value.


### GetReason

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil
### GetSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSettled() bool`

GetSettled returns the Settled field if non-nil, zero value otherwise.

### GetSettledOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSettledOk() (*bool, bool)`

GetSettledOk returns a tuple with the Settled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetSettled(v bool)`

SetSettled sets Settled field to given value.

### HasSettled

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasSettled() bool`

HasSettled returns a boolean if a field has been set.

### SetSettledNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetSettledNil(b bool)`

 SetSettledNil sets the value for Settled to be an explicit nil

### UnsetSettled
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetSettled()`

UnsetSettled ensures that no value is present for Settled, not even an explicit nil
### GetStatus

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetClientOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.

### HasClientOrderId

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasClientOrderId() bool`

HasClientOrderId returns a boolean if a field has been set.

### SetClientOrderIdNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetClientOrderIdNil(b bool)`

 SetClientOrderIdNil sets the value for ClientOrderId to be an explicit nil

### UnsetClientOrderId
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetClientOrderId()`

UnsetClientOrderId ensures that no value is present for ClientOrderId, not even an explicit nil
### GetTimeInForce

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetTimeInForce() int32`

GetTimeInForce returns the TimeInForce field if non-nil, zero value otherwise.

### GetTimeInForceOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetTimeInForceOk() (*int32, bool)`

GetTimeInForceOk returns a tuple with the TimeInForce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInForce

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetTimeInForce(v int32)`

SetTimeInForce sets TimeInForce field to given value.

### HasTimeInForce

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasTimeInForce() bool`

HasTimeInForce returns a boolean if a field has been set.

### SetTimeInForceNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetTimeInForceNil(b bool)`

 SetTimeInForceNil sets the value for TimeInForce to be an explicit nil

### UnsetTimeInForce
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetTimeInForce()`

UnsetTimeInForce ensures that no value is present for TimeInForce, not even an explicit nil
### GetOrderType

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetOrderType() int32`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetOrderTypeOk() (*int32, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetOrderType(v int32)`

SetOrderType sets OrderType field to given value.

### HasOrderType

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasOrderType() bool`

HasOrderType returns a boolean if a field has been set.

### SetOrderTypeNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetOrderTypeNil(b bool)`

 SetOrderTypeNil sets the value for OrderType to be an explicit nil

### UnsetOrderType
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetOrderType()`

UnsetOrderType ensures that no value is present for OrderType, not even an explicit nil
### GetSelfTradePrevention

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSelfTradePrevention() int32`

GetSelfTradePrevention returns the SelfTradePrevention field if non-nil, zero value otherwise.

### GetSelfTradePreventionOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetSelfTradePreventionOk() (*int32, bool)`

GetSelfTradePreventionOk returns a tuple with the SelfTradePrevention field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelfTradePrevention

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetSelfTradePrevention(v int32)`

SetSelfTradePrevention sets SelfTradePrevention field to given value.

### HasSelfTradePrevention

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasSelfTradePrevention() bool`

HasSelfTradePrevention returns a boolean if a field has been set.

### SetSelfTradePreventionNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetSelfTradePreventionNil(b bool)`

 SetSelfTradePreventionNil sets the value for SelfTradePrevention to be an explicit nil

### UnsetSelfTradePrevention
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetSelfTradePrevention()`

UnsetSelfTradePrevention ensures that no value is present for SelfTradePrevention, not even an explicit nil
### GetCancelOnDisconnect

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCancelOnDisconnect() bool`

GetCancelOnDisconnect returns the CancelOnDisconnect field if non-nil, zero value otherwise.

### GetCancelOnDisconnectOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetCancelOnDisconnectOk() (*bool, bool)`

GetCancelOnDisconnectOk returns a tuple with the CancelOnDisconnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelOnDisconnect

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetCancelOnDisconnect(v bool)`

SetCancelOnDisconnect sets CancelOnDisconnect field to given value.

### HasCancelOnDisconnect

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasCancelOnDisconnect() bool`

HasCancelOnDisconnect returns a boolean if a field has been set.

### SetCancelOnDisconnectNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetCancelOnDisconnectNil(b bool)`

 SetCancelOnDisconnectNil sets the value for CancelOnDisconnect to be an explicit nil

### UnsetCancelOnDisconnect
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetCancelOnDisconnect()`

UnsetCancelOnDisconnect ensures that no value is present for CancelOnDisconnect, not even an explicit nil
### GetPostOnly

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetPostOnly() bool`

GetPostOnly returns the PostOnly field if non-nil, zero value otherwise.

### GetPostOnlyOk

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) GetPostOnlyOk() (*bool, bool)`

GetPostOnlyOk returns a tuple with the PostOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostOnly

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetPostOnly(v bool)`

SetPostOnly sets PostOnly field to given value.

### HasPostOnly

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) HasPostOnly() bool`

HasPostOnly returns a boolean if a field has been set.

### SetPostOnlyNil

`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) SetPostOnlyNil(b bool)`

 SetPostOnlyNil sets the value for PostOnly to be an explicit nil

### UnsetPostOnly
`func (o *UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner) UnsetPostOnly()`

UnsetPostOnly ensures that no value is present for PostOnly, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


