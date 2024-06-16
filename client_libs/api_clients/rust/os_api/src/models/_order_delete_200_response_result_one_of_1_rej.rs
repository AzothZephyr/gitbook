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

/// OrderDelete200ResponseResultOneOf1Rej : Cancel-order-reject indicates that a cancel-order request was not applied.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct OrderDelete200ResponseResultOneOf1Rej {
    #[serde(rename = "msgSeqNum")]
    pub msg_seq_num: i32,
    /// The client order ID specified in the cancel-order request.
    #[serde(rename = "clientOrderId")]
    pub client_order_id: i32,
    /// The request ID specified in the cancel-order request.
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

impl OrderDelete200ResponseResultOneOf1Rej {
    /// Cancel-order-reject indicates that a cancel-order request was not applied.
    pub fn new(msg_seq_num: i32, client_order_id: i32, request_id: i32, transact_time: i32, subaccount_id: i32, reason: i32, market_id: i32) -> OrderDelete200ResponseResultOneOf1Rej {
        OrderDelete200ResponseResultOneOf1Rej {
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
