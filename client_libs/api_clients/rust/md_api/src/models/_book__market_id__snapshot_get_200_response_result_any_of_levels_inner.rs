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

/// BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner : Each price level is the aggregate total quantity of orders placed at that price.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner {
    #[serde(rename = "price")]
    pub price: i32,
    #[serde(rename = "quantity")]
    pub quantity: i32,
    #[serde(rename = "side")]
    pub side: i32,
}

impl BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner {
    /// Each price level is the aggregate total quantity of orders placed at that price.
    pub fn new(price: i32, quantity: i32, side: i32) -> BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner {
        BookMarketIdSnapshotGet200ResponseResultAnyOfLevelsInner {
            price,
            quantity,
            side,
        }
    }
}
