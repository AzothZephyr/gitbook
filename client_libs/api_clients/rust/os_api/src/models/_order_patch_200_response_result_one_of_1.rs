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
pub struct OrderPatch200ResponseResultOneOf1 {
    #[serde(rename = "Rej")]
    pub rej: Box<models::OrderPatch200ResponseResultOneOf1Rej>,
}

impl OrderPatch200ResponseResultOneOf1 {
    pub fn new(rej: models::OrderPatch200ResponseResultOneOf1Rej) -> OrderPatch200ResponseResultOneOf1 {
        OrderPatch200ResponseResultOneOf1 {
            rej: Box::new(rej),
        }
    }
}

