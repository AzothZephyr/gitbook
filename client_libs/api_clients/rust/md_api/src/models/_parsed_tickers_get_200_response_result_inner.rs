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
pub struct ParsedTickersGet200ResponseResultInner {
    #[serde(rename = "ticker_id")]
    pub ticker_id: String,
    #[serde(rename = "base_currency")]
    pub base_currency: String,
    #[serde(rename = "quote_currency")]
    pub quote_currency: String,
    /// The millisecond timestamp of the latest update.
    #[serde(rename = "timestamp")]
    pub timestamp: i32,
    /// The last traded price. Also equal to the 24-hour closing price
    #[serde(rename = "last_price", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub last_price: Option<Option<f64>>,
    /// The rolling 24-hour volume in the base currency.
    #[serde(rename = "base_volume")]
    pub base_volume: f64,
    /// The rolling 24-hour volume in the quote currency.
    #[serde(rename = "quote_volume")]
    pub quote_volume: f64,
    #[serde(rename = "bid", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub bid: Option<Option<f64>>,
    #[serde(rename = "ask", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub ask: Option<Option<f64>>,
    /// The rolling 24-hour highest price.
    #[serde(rename = "high", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub high: Option<Option<f64>>,
    /// The rolling 24-hour lowest price.
    #[serde(rename = "low", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub low: Option<Option<f64>>,
    /// The rolling 24-hour opening price.
    #[serde(rename = "open", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub open: Option<Option<f64>>,
}

impl ParsedTickersGet200ResponseResultInner {
    pub fn new(ticker_id: String, base_currency: String, quote_currency: String, timestamp: i32, base_volume: f64, quote_volume: f64) -> ParsedTickersGet200ResponseResultInner {
        ParsedTickersGet200ResponseResultInner {
            ticker_id,
            base_currency,
            quote_currency,
            timestamp,
            last_price: None,
            base_volume,
            quote_volume,
            bid: None,
            ask: None,
            high: None,
            low: None,
            open: None,
        }
    }
}

