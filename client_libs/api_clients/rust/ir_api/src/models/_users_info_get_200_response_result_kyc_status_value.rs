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
pub struct UsersInfoGet200ResponseResultKycStatusValue {
    #[serde(rename = "level")]
    pub level: i32,
    #[serde(rename = "state")]
    pub state: State,
    #[serde(rename = "approved")]
    pub approved: bool,
}

impl UsersInfoGet200ResponseResultKycStatusValue {
    pub fn new(level: i32, state: State, approved: bool) -> UsersInfoGet200ResponseResultKycStatusValue {
        UsersInfoGet200ResponseResultKycStatusValue {
            level,
            state,
            approved,
        }
    }
}
/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum State {
    #[serde(rename = "init")]
    Init,
    #[serde(rename = "pending")]
    Pending,
    #[serde(rename = "prechecked")]
    Prechecked,
    #[serde(rename = "queued")]
    Queued,
    #[serde(rename = "onHold")]
    OnHold,
    #[serde(rename = "completed")]
    Completed,
}

impl Default for State {
    fn default() -> State {
        Self::Init
    }
}
