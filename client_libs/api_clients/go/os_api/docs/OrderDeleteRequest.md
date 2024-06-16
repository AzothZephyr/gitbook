# OrderDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketId** | **int32** |  | 
**ClientOrderId** | **int32** | The order ID specified by the client on the NewOrder request. | 
**RequestId** | **int32** | A request ID that is echoed back on the CancelOrderAck or CancelOrderReject | 
**SubaccountId** | **int32** | The subaccount that the NewOrder was placed on. | 

## Methods

### NewOrderDeleteRequest

`func NewOrderDeleteRequest(marketId int32, clientOrderId int32, requestId int32, subaccountId int32, ) *OrderDeleteRequest`

NewOrderDeleteRequest instantiates a new OrderDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderDeleteRequestWithDefaults

`func NewOrderDeleteRequestWithDefaults() *OrderDeleteRequest`

NewOrderDeleteRequestWithDefaults instantiates a new OrderDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketId

`func (o *OrderDeleteRequest) GetMarketId() int32`

GetMarketId returns the MarketId field if non-nil, zero value otherwise.

### GetMarketIdOk

`func (o *OrderDeleteRequest) GetMarketIdOk() (*int32, bool)`

GetMarketIdOk returns a tuple with the MarketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketId

`func (o *OrderDeleteRequest) SetMarketId(v int32)`

SetMarketId sets MarketId field to given value.


### GetClientOrderId

`func (o *OrderDeleteRequest) GetClientOrderId() int32`

GetClientOrderId returns the ClientOrderId field if non-nil, zero value otherwise.

### GetClientOrderIdOk

`func (o *OrderDeleteRequest) GetClientOrderIdOk() (*int32, bool)`

GetClientOrderIdOk returns a tuple with the ClientOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientOrderId

`func (o *OrderDeleteRequest) SetClientOrderId(v int32)`

SetClientOrderId sets ClientOrderId field to given value.


### GetRequestId

`func (o *OrderDeleteRequest) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *OrderDeleteRequest) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *OrderDeleteRequest) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetSubaccountId

`func (o *OrderDeleteRequest) GetSubaccountId() int32`

GetSubaccountId returns the SubaccountId field if non-nil, zero value otherwise.

### GetSubaccountIdOk

`func (o *OrderDeleteRequest) GetSubaccountIdOk() (*int32, bool)`

GetSubaccountIdOk returns a tuple with the SubaccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubaccountId

`func (o *OrderDeleteRequest) SetSubaccountId(v int32)`

SetSubaccountId sets SubaccountId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


