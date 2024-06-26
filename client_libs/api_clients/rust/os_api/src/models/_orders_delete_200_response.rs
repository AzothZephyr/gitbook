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
pub struct OrdersDelete200Response {
    #[serde(rename = "result")]
    pub result: Box<models::OrdersDelete200ResponseResult>,
}

impl OrdersDelete200Response {
    pub fn new(result: models::OrdersDelete200ResponseResult) -> OrdersDelete200Response {
        OrdersDelete200Response {
            result: Box::new(result),
        }
    }
}

