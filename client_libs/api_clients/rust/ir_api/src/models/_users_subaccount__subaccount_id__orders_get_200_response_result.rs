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
pub struct UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "orders")]
    pub orders: Vec<models::UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner>,
}

impl UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
    pub fn new(name: String, orders: Vec<models::UsersSubaccountSubaccountIdOrdersGet200ResponseResultOrdersInner>) -> UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
        UsersSubaccountSubaccountIdOrdersGet200ResponseResult {
            name,
            orders,
        }
    }
}

