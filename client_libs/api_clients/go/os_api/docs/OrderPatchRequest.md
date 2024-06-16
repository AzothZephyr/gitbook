# OrderPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** |  | 
**ClientOrderId** | **int32** | The order ID specified by the client on the NewOrder request. | 
**RequestId** | **int32** | A request ID that is echoed back on the ModifyOrderAck or ModifyOrderReject | 
**NewPrice** | **int32** |  | 
**NewQuantity** | **int32** |  | 
**SubaccountId** | **int32** | The subaccount that the NewOrder was placed on. | 
**SelfTradePrevention** | Pointer to **NullableInt32** |  | [optional] 
**PostOnly** | **int32** |  | 

## Methods

### NewOrderPatchRequest

`func NewOrderPatchRequest(marketId int32, clientOrderId int32, requestId int32, newPrice int32, newQuantity int32, subaccountId int32, postOnly int32, ) *OrderPatchRequest`

NewOrderPatchRequest instantiates a new OrderPatchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderPatchRequestWithDefaults

`func NewOrderPatchRequestWithDefaults() *OrderPatchRequest`

NewOrderPatchRequestWithDefaults instantiates a new OrderPatchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *OrderPatchRequest) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderPatchRequest) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderPatchRequest) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetClientOrderId

`func (o *OrderPatchRequest) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderPatchRequest) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderPatchRequest) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderPatchRequest) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderPatchRequest) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderPatchRequest) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetNewPrice

`func (o *OrderPatchRequest) GetNewPrice() int32`

GetNewPrice returns the NewPrice field if non-nil, zero value otherwise.

### GetNewPriceOk

`func (o *OrderPatchRequest) GetNewPriceOk() (*int32, bool)`

GetNewPriceOk returns a tuple with the NewPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPrice

`func (o *OrderPatchRequest) SetNewPrice(v int32)`

SetNewPrice sets NewPrice field to given value.


### GetNewQuantity

`func (o *OrderPatchRequest) GetNewQuantity() int32`

GetNewQuantity returns the NewQuantity field if non-nil, zero value otherwise.

### GetNewQuantityOk

`func (o *OrderPatchRequest) GetNewQuantityOk() (*int32, bool)`

GetNewQuantityOk returns a tuple with the NewQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewQuantity

`func (o *OrderPatchRequest) SetNewQuantity(v int32)`

SetNewQuantity sets NewQuantity field to given value.


### GetSubaccountId

`func (o *OrderPatchRequest) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderPatchRequest) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderPatchRequest) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.


### GetSelfTradePrevention

`func (o *OrderPatchRequest) GetSelfTradePrevention() int32`

GetSelfTradePrevention returns the SelfTradePrevention field if non-nil, zero value otherwise.

### GetSelfTradePreventionOk

`func (o *OrderPatchRequest) GetSelfTradePreventionOk() (*int32, bool)`

GetSelfTradePreventionOk returns a tuple with the SelfTradePrevention field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelfTradePrevention

`func (o *OrderPatchRequest) SetSelfTradePrevention(v int32)`

SetSelfTradePrevention sets SelfTradePrevention field to given value.

### HasSelfTradePrevention

`func (o *OrderPatchRequest) HasSelfTradePrevention() bool`

HasSelfTradePrevention returns a boolean if a field has been set.

### SetSelfTradePreventionNil

`func (o *OrderPatchRequest) SetSelfTradePreventionNil(b bool)`

 SetSelfTradePreventionNil sets the value for SelfTradePrevention to be an explicit nil

### UnsetSelfTradePrevention
`func (o *OrderPatchRequest) UnsetSelfTradePrevention()`

UnsetSelfTradePrevention ensures that no value is present for SelfTradePrevention, not even an explicit nil
### GetPostOnly

`func (o *OrderPatchRequest) GetPostOnly() int32`

GetPostOnly returns the PostOnly field if non-nil, zero value otherwise.

### GetPostOnlyOk

`func (o *OrderPatchRequest) GetPostOnlyOk() (*int32, bool)`

GetPostOnlyOk returns a tuple with the PostOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostOnly

`func (o *OrderPatchRequest) SetPostOnly(v int32)`

SetPostOnly sets PostOnly field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


