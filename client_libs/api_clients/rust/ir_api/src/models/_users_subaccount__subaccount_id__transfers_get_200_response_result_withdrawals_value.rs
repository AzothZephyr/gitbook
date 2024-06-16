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
pub struct UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "inner")]
    pub inner: Vec<models::UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner>,
}

impl UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue {
    pub fn new(name: String, inner: Vec<models::UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValueInnerInner>) -> UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue {
        UsersSubaccountSubaccountIdTransfersGet200ResponseResultWithdrawalsValue {
            name,
            inner,
        }
    }
}
