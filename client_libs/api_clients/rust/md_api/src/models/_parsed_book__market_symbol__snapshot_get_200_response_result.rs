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

/// ParsedBookMarketSymbolSnapshotGet200ResponseResult : A market-by-price order book.  Each level contains the price and the total quantity at that price. There may be multiple orders at the same price.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct ParsedBookMarketSymbolSnapshotGet200ResponseResult {
    #[serde(rename = "ticker_id")]
    pub ticker_id: String,
    #[serde(rename = "timestamp")]
    pub timestamp: i32,
    /// A list of (price, quantity) pairs, sorted by price in descending order.
    #[serde(rename = "bids")]
    pub bids: Vec<Vec<String>>,
    /// A list of (price, quantity) pairs, sorted by price in ascending order.
    #[serde(rename = "asks")]
    pub asks: Vec<Vec<String>>,
}

impl ParsedBookMarketSymbolSnapshotGet200ResponseResult {
    /// A market-by-price order book.  Each level contains the price and the total quantity at that price. There may be multiple orders at the same price.
    pub fn new(ticker_id: String, timestamp: i32, bids: Vec<Vec<String>>, asks: Vec<Vec<String>>) -> ParsedBookMarketSymbolSnapshotGet200ResponseResult {
        ParsedBookMarketSymbolSnapshotGet200ResponseResult {
            ticker_id,
            timestamp,
            bids,
            asks,
        }
    }
}

