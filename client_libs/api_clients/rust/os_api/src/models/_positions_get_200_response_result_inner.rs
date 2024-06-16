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

#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct PositionsGet200ResponseResultInner {
    #[serde(rename = "assetId")]
    pub asset_id: i32,
    #[serde(rename = "total")]
    pub total: models::Decimal,
    #[serde(rename = "available")]
    pub available: models::Decimal,
}

impl PositionsGet200ResponseResultInner {
    pub fn new(asset_id: i32, total: models::Decimal, available: models::Decimal) -> PositionsGet200ResponseResultInner {
        PositionsGet200ResponseResultInner {
            asset_id,
            total,
            available,
        }
    }
}

