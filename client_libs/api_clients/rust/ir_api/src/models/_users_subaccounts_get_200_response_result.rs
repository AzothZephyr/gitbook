/*
 * Cube Iridium HTTP API
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
pub struct UsersSubaccountsGet200ResponseResult {
    #[serde(rename = "ids")]
    pub ids: Vec<i64>,
}

impl UsersSubaccountsGet200ResponseResult {
    pub fn new(ids: Vec<i64>) -> UsersSubaccountsGet200ResponseResult {
        UsersSubaccountsGet200ResponseResult {
            ids,
        }
    }
}

