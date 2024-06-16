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

/// OrderPatch200ResponseResultOneOfAck : Modify-order-ack confirms a modify-order request. If the modify resulted in an aggressing cancel-replace, the ack will be ordered before any fills for this order.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct OrderPatch200ResponseResultOneOfAck {
    #[serde(rename = "msgSeqNum")]
    pub msg_seq_num: i32,
    #[serde(rename = "clientOrderId")]
    pub client_order_id: i32,
    /// The request ID specified in the modify request.
    #[serde(rename = "requestId")]
    pub request_id: i32,
    /// [Transact time](#transact-time)
    #[serde(rename = "transactTime")]
    pub transact_time: i32,
    /// The quantity remaining on the book after applying the modify request.
    #[serde(rename = "remainingQuantity")]
    pub remaining_quantity: i32,
    #[serde(rename = "subaccountId")]
    pub subaccount_id: i32,
    #[serde(rename = "marketId")]
    pub market_id: i32,
    #[serde(rename = "price")]
    pub price: i32,
    /// The quantity submitted in the modify request.
    #[serde(rename = "quantity")]
    pub quantity: i32,
    /// The cumulative filled quantity for this order.
    #[serde(rename = "cumulativeQuantity")]
    pub cumulative_quantity: i32,
    /// [Exchange order ID](#exchange-order-id)
    #[serde(rename = "exchangeOrderId")]
    pub exchange_order_id: i32,
}

impl OrderPatch200ResponseResultOneOfAck {
    /// Modify-order-ack confirms a modify-order request. If the modify resulted in an aggressing cancel-replace, the ack will be ordered before any fills for this order.
    pub fn new(msg_seq_num: i32, client_order_id: i32, request_id: i32, transact_time: i32, remaining_quantity: i32, subaccount_id: i32, market_id: i32, price: i32, quantity: i32, cumulative_quantity: i32, exchange_order_id: i32) -> OrderPatch200ResponseResultOneOfAck {
        OrderPatch200ResponseResultOneOfAck {
            msg_seq_num,
            client_order_id,
            request_id,
            transact_time,
            remaining_quantity,
            subaccount_id,
            market_id,
            price,
            quantity,
            cumulative_quantity,
            exchange_order_id,
        }
    }
}

