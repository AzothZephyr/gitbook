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
pub struct ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
    /// The trade ID.
    #[serde(rename = "id")]
    pub id: i32,
    /// The price of the trade.
    #[serde(rename = "p")]
    pub p: f64,
    /// The quantity of the trade.
    #[serde(rename = "q")]
    pub q: f64,
    /// The side of the aggressing order.
    #[serde(rename = "side")]
    pub side: Side,
    /// The millisecond timestamp of the trade.
    #[serde(rename = "ts")]
    pub ts: i32,
}

impl ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
    pub fn new(id: i32, p: f64, q: f64, side: Side, ts: i32) -> ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
        ParsedBookMarketSymbolRecentTradesGet200ResponseResultTradesInner {
            id,
            p,
            q,
            side,
            ts,
        }
    }
}
/// The side of the aggressing order.
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum Side {
    #[serde(rename = "Bid")]
    Bid,
    #[serde(rename = "Ask")]
    Ask,
}

impl Default for Side {
    fn default() -> Side {
        Self::Bid
    }
}
