/*
 * Cube Mendelev HTTP API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: support@cube.exchange
 * Generated by: https://openapi-generator.tech
 */

use crate::models;
use serde::{Deserialize, Serialize};

#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct BookMarketIdSnapshotGet200ResponseResultAnyOf1 {
    #[serde(rename = "orders")]
    pub orders: Vec<models::BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner>,
    #[serde(rename = "lastTransactTime")]
    pub last_transact_time: i32,
    #[serde(rename = "lastTradePrice", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub last_trade_price: Option<Option<i32>>,
    #[serde(rename = "marketState")]
    pub market_state: Box<models::BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState>,
}

impl BookMarketIdSnapshotGet200ResponseResultAnyOf1 {
    pub fn new(orders: Vec<models::BookMarketIdSnapshotGet200ResponseResultAnyOf1OrdersInner>, last_transact_time: i32, market_state: models::BookMarketIdSnapshotGet200ResponseResultAnyOfMarketState) -> BookMarketIdSnapshotGet200ResponseResultAnyOf1 {
        BookMarketIdSnapshotGet200ResponseResultAnyOf1 {
            orders,
            last_transact_time,
            last_trade_price: None,
            market_state: Box::new(market_state),
        }
    }
}

