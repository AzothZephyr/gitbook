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

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OrderDelete200ResponseResult {
    OrderDelete200ResponseResultOneOf(Box<models::OrderDelete200ResponseResultOneOf>),
    OrderDelete200ResponseResultOneOf1(Box<models::OrderDelete200ResponseResultOneOf1>),
}

impl Default for OrderDelete200ResponseResult {
    fn default() -> Self {
        Self::OrderDelete200ResponseResultOneOf(Default::default())
    }
}

