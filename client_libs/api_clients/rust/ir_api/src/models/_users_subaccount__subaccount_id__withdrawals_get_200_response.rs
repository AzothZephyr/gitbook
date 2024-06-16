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
pub struct UsersSubaccountSubaccountIdWithdrawalsGet200Response {
    #[serde(rename = "result")]
    pub result: std::collections::HashMap<String, models::UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue>,
}

impl UsersSubaccountSubaccountIdWithdrawalsGet200Response {
    pub fn new(result: std::collections::HashMap<String, models::UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue>) -> UsersSubaccountSubaccountIdWithdrawalsGet200Response {
        UsersSubaccountSubaccountIdWithdrawalsGet200Response {
            result,
        }
    }
}

