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
pub struct OrderDelete200ResponseResultOneOf {
    #[serde(rename = "Ack")]
    pub ack: Box<models::OrderDelete200ResponseResultOneOfAck>,
}

impl OrderDelete200ResponseResultOneOf {
    pub fn new(ack: models::OrderDelete200ResponseResultOneOfAck) -> OrderDelete200ResponseResultOneOf {
        OrderDelete200ResponseResultOneOf {
            ack: Box::new(ack),
        }
    }
}

