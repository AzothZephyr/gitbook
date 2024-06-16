# OrdersDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubaccountId** | **int32** | The subaccount to cancel orders for. | 
**RequestId** | **int32** | A request ID that is echoed back on the MassCancelAck and individual CancelOrderAck&#39;s. | 
**MarketId** | Pointer to **NullableInt32** | If specified, only orders on the corresponding market will be canceled. | [optional] 
**Side** | Pointer to **NullableInt32** | If specified, only orders with this side will be canceled. | [optional] 

## Methods

### NewOrdersDeleteRequest

`func NewOrdersDeleteRequest(subaccountId int32, requestId int32, ) *OrdersDeleteRequest`

NewOrdersDeleteRequest instantiates a new OrdersDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrdersDeleteRequestWithDefaults

`func NewOrdersDeleteRequestWithDefaults() *OrdersDeleteRequest`

NewOrdersDeleteRequestWithDefaults instantiates a new OrdersDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubaccountId

`func (o *OrdersDeleteRequest) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrdersDeleteRequest) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrdersDeleteRequest) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetRequestId

`func (o *OrdersDeleteRequest) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrdersDeleteRequest) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrdersDeleteRequest) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetMarketId

`func (o *OrdersDeleteRequest) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrdersDeleteRequest) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrdersDeleteRequest) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.

### HasMarketId

`func (o *OrdersDeleteRequest) HasMarketId() bool`

HasMarketId returns a boolean if a field has been set.

### SetMarketIdNil

`func (o *OrdersDeleteRequest) SetMarketIdNil(b bool)`

 SetMarketIdNil sets the value for MarketId to be an explicit nil

### UnsetMarketId
`func (o *OrdersDeleteRequest) UnsetMarketId()`

UnsetMarketId ensures that no value is present for MarketId, not even an explicit nil
### GetSide

`func (o *OrdersDeleteRequest) GetSide() int32`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *OrdersDeleteRequest) GetSideOk() (*int32, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *OrdersDeleteRequest) SetSide(v int32)`

SetSide sets Side field to given value.

### HasSide

`func (o *OrdersDeleteRequest) HasSide() bool`

HasSide returns a boolean if a field has been set.

### SetSideNil

`func (o *OrdersDeleteRequest) SetSideNil(b bool)`

 SetSideNil sets the value for Side to be an explicit nil

### UnsetSide
`func (o *OrdersDeleteRequest) UnsetSide()`

UnsetSide ensures that no value is present for Side, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


