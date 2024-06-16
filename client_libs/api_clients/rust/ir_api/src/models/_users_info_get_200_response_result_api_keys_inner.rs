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
pub struct UsersInfoGet200ResponseResultApiKeysInner {
    #[serde(rename = "isMasterKey")]
    pub is_master_key: bool,
    #[serde(rename = "subaccountIds")]
    pub subaccount_ids: Vec<i64>,
    #[serde(rename = "accessLevel")]
    pub access_level: AccessLevel,
    #[serde(rename = "apiKey")]
    pub api_key: uuid::Uuid,
    #[serde(rename = "createdAt")]
    pub created_at: String,
}

impl UsersInfoGet200ResponseResultApiKeysInner {
    pub fn new(is_master_key: bool, subaccount_ids: Vec<i64>, access_level: AccessLevel, api_key: uuid::Uuid, created_at: String) -> UsersInfoGet200ResponseResultApiKeysInner {
        UsersInfoGet200ResponseResultApiKeysInner {
            is_master_key,
            subaccount_ids,
            access_level,
            api_key,
            created_at,
        }
    }
}
/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum AccessLevel {
    #[serde(rename = "read")]
    Read,
    #[serde(rename = "write")]
    Write,
}

impl Default for AccessLevel {
    fn default() -> AccessLevel {
        Self::Read
    }
}
