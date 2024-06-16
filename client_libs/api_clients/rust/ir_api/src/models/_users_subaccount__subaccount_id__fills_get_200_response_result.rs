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
pub struct UsersSubaccountSubaccountIdFillsGet200ResponseResult {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "fills")]
    pub fills: Vec<models::UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner>,
}

impl UsersSubaccountSubaccountIdFillsGet200ResponseResult {
    pub fn new(name: String, fills: Vec<models::UsersSubaccountSubaccountIdFillsGet200ResponseResultFillsInner>) -> UsersSubaccountSubaccountIdFillsGet200ResponseResult {
        UsersSubaccountSubaccountIdFillsGet200ResponseResult {
            name,
            fills,
        }
    }
}
