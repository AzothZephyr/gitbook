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

/// OrderPatch200ResponseResultOneOf1Rej : Modify-order-reject indicates that a modify-order request was not applied.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct OrderPatch200ResponseResultOneOf1Rej {
    #[serde(rename = "msgSeqNum")]
    pub msg_seq_num: i32,
    /// The client order ID specified in the modify-order request.
    #[serde(rename = "clientOrderId")]
    pub client_order_id: i32,
    /// The request ID specified in the modify-order request.
    #[serde(rename = "requestId")]
    pub request_id: i32,
    /// [Transact time](#transact-time)
    #[serde(rename = "transactTime")]
    pub transact_time: i32,
    #[serde(rename = "subaccountId")]
    pub subaccount_id: i32,
    #[serde(rename = "reason")]
    pub reason: i32,
    #[serde(rename = "marketId")]
    pub market_id: i32,
}

impl OrderPatch200ResponseResultOneOf1Rej {
    /// Modify-order-reject indicates that a modify-order request was not applied.
    pub fn new(msg_seq_num: i32, client_order_id: i32, request_id: i32, transact_time: i32, subaccount_id: i32, reason: i32, market_id: i32) -> OrderPatch200ResponseResultOneOf1Rej {
        OrderPatch200ResponseResultOneOf1Rej {
            msg_seq_num,
            client_order_id,
            request_id,
            transact_time,
            subaccount_id,
            reason,
            market_id,
        }
    }
}

