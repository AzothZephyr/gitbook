/*
 * Cube Osmium HTTP API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: support@cube.exchange
 * Generated by: https://openapi-generator.tech
 */

use crate::models;
use serde::{Deserialize, Serialize};

/// OrderPatchRequest : Modify a resting order. - If the `newPrice` and the current resting order's price is the same, and `newQuantity` is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from `newQuantity` to calculate the new resting quantity. For example:  ```text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 ```  The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.  Regardless of IFM, the invariant for order quantity is that `quantity = remaining_quantity + cumulative_quantity`.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct OrderPatchRequest {
    #[serde(rename = "marketId")]
    pub market_id: i32,
    /// The order ID specified by the client on the NewOrder request.
    #[serde(rename = "clientOrderId")]
    pub client_order_id: i32,
    /// A request ID that is echoed back on the ModifyOrderAck or ModifyOrderReject
    #[serde(rename = "requestId")]
    pub request_id: i32,
    #[serde(rename = "newPrice")]
    pub new_price: i32,
    #[serde(rename = "newQuantity")]
    pub new_quantity: i32,
    /// The subaccount that the NewOrder was placed on.
    #[serde(rename = "subaccountId")]
    pub subaccount_id: i32,
    #[serde(rename = "selfTradePrevention", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub self_trade_prevention: Option<Option<i32>>,
    #[serde(rename = "postOnly")]
    pub post_only: i32,
}

impl OrderPatchRequest {
    /// Modify a resting order. - If the `newPrice` and the current resting order's price is the same, and `newQuantity` is not greater, then the modify is considered a modify down, and the FIFO queue priority is maintained. Otherwise, the modify-order request is treated as an atomic cancel-replace and the replacement order is placed at the end of the FIFO queue for the new price level. - If post-only is specified and the replacement order would trade, then the request is rejected and the current resting order remains resting.  Currently, in-flight-mitigation (IFM) is always enabled. That is, the cumulative fill qty is subtracted from `newQuantity` to calculate the new resting quantity. For example:  ```text | Resting | Filled ---------+---------+-------- New 5    | 5       | 0 Fill 2   | 3       | 2 Modify 4 | 2       | 2 ```  The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.  Regardless of IFM, the invariant for order quantity is that `quantity = remaining_quantity + cumulative_quantity`.
    pub fn new(market_id: i32, client_order_id: i32, request_id: i32, new_price: i32, new_quantity: i32, subaccount_id: i32, post_only: i32) -> OrderPatchRequest {
        OrderPatchRequest {
            market_id,
            client_order_id,
            request_id,
            new_price,
            new_quantity,
            subaccount_id,
            self_trade_prevention: None,
            post_only,
        }
    }
}
