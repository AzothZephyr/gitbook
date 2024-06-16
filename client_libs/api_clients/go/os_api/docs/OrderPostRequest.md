# OrderPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientOrderId** | **int32** | A unique order ID assigned by the client for this order. The ID must be unique among open orders by this subaccount. | 
**RequestId** | **int32** | A request ID that is echoed back on the NewOrderAck or NewOrderReject | 
**MarketId** | **int32** |  | 
**Price** | Pointer to **NullableInt32** |  | [optional] 
**Quantity** | **int32** |  | 
**Side** | **int32** |  | 
**TimeInForce** | **int32** |  | 
**OrderType** | **int32** |  | 
**SubaccountId** | **int32** | The subaccount to place this order on. This subaccount must be writable by the API key specified in the Credentials message. | 
**SelfTradePrevention** | Pointer to **NullableInt32** |  | [optional] 
**PostOnly** | **int32** |  | 
**CancelOnDisconnect** | **bool** | If true, this order will be automatically cancelled after the closure of the network connection between Cube&#39;s servers and the client that placed the order.  If the client initiates the disconnect or network instability drops the connection, the order will be cancelled when Cube&#39;s servers recognize the disconnection.  In the event of a server-side disconnect that causes a halt in trading, such as scheduled downtime, the order will be cancelled before trading resumes. | 

## Methods

### NewOrderPostRequest

`func NewOrderPostRequest(clientOrderId int32, requestId int32, marketId int32, quantity int32, side int32, timeInForce int32, orderType int32, subaccountId int32, postOnly int32, cancelOnDisconnect bool, ) *OrderPostRequest`

NewOrderPostRequest instantiates a new OrderPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPostRequestWithDefaults

`func NewOrderPostRequestWithDefaults() *OrderPostRequest`

NewOrderPostRequestWithDefaults instantiates a new OrderPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientOrderId

`func (o *OrderPostRequest) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderPostRequest) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderPostRequest) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderPostRequest) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderPostRequest) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderPostRequest) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetMarketId

`func (o *OrderPostRequest) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderPostRequest) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderPostRequest) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetPrice

`func (o *OrderPostRequest) GetPrice() int32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *OrderPostRequest) GetPriceOk() (*int32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *OrderPostRequest) SetPrice(v int32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *OrderPostRequest) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *OrderPostRequest) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *OrderPostRequest) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetQuantity

`func (o *OrderPostRequest) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OrderPostRequest) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OrderPostRequest) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetSide

`func (o *OrderPostRequest) GetSide() int32`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *OrderPostRequest) GetSideOk() (*int32, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *OrderPostRequest) SetSide(v int32)`

SetSide sets Side field to given value.


### GetTimeInForce

`func (o *OrderPostRequest) GetTimeInForce() int32`

GetTimeInForce returns the TimeInForce field if non-nil, zero value otherwise.

### GetTimeInForceOk

`func (o *OrderPostRequest) GetTimeInForceOk() (*int32, bool)`

GetTimeInForceOk returns a tuple with the TimeInForce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInForce

`func (o *OrderPostRequest) SetTimeInForce(v int32)`

SetTimeInForce sets TimeInForce field to given value.


### GetOrderType

`func (o *OrderPostRequest) GetOrderType() int32`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *OrderPostRequest) GetOrderTypeOk() (*int32, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *OrderPostRequest) SetOrderType(v int32)`

SetOrderType sets OrderType field to given value.


### GetSubaccountId

`func (o *OrderPostRequest) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderPostRequest) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderPostRequest) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetSelfTradePrevention

`func (o *OrderPostRequest) GetSelfTradePrevention() int32`

GetSelfTradePrevention returns the SelfTradePrevention field if non-nil, zero value otherwise.

### GetSelfTradePreventionOk

`func (o *OrderPostRequest) GetSelfTradePreventionOk() (*int32, bool)`

GetSelfTradePreventionOk returns a tuple with the SelfTradePrevention field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelfTradePrevention

`func (o *OrderPostRequest) SetSelfTradePrevention(v int32)`

SetSelfTradePrevention sets SelfTradePrevention field to given value.

### HasSelfTradePrevention

`func (o *OrderPostRequest) HasSelfTradePrevention() bool`

HasSelfTradePrevention returns a boolean if a field has been set.

### SetSelfTradePreventionNil

`func (o *OrderPostRequest) SetSelfTradePreventionNil(b bool)`

 SetSelfTradePreventionNil sets the value for SelfTradePrevention to be an explicit nil

### UnsetSelfTradePrevention
`func (o *OrderPostRequest) UnsetSelfTradePrevention()`

UnsetSelfTradePrevention ensures that no value is present for SelfTradePrevention, not even an explicit nil
### GetPostOnly

`func (o *OrderPostRequest) GetPostOnly() int32`

GetPostOnly returns the PostOnly field if non-nil, zero value otherwise.

### GetPostOnlyOk

`func (o *OrderPostRequest) GetPostOnlyOk() (*int32, bool)`

GetPostOnlyOk returns a tuple with the PostOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostOnly

`func (o *OrderPostRequest) SetPostOnly(v int32)`

SetPostOnly sets PostOnly field to given value.


### GetCancelOnDisconnect

`func (o *OrderPostRequest) GetCancelOnDisconnect() bool`

GetCancelOnDisconnect returns the CancelOnDisconnect field if non-nil, zero value otherwise.

### GetCancelOnDisconnectOk

`func (o *OrderPostRequest) GetCancelOnDisconnectOk() (*bool, bool)`

GetCancelOnDisconnectOk returns a tuple with the CancelOnDisconnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelOnDisconnect

`func (o *OrderPostRequest) SetCancelOnDisconnect(v bool)`

SetCancelOnDisconnect sets CancelOnDisconnect field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


