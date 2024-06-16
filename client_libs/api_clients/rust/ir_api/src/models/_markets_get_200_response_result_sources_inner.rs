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

/// MarketsGet200ResponseResultSourcesInner : A collection of assets grouped by origination.  For `Crypto` assets, this is their native blockchain.  e.g `ETH` and `SHIB` are both on the `ethereum` (`CHAIN_ID = 0x1`) blockchain.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct MarketsGet200ResponseResultSourcesInner {
    /// The Cube-assigned source ID.
    #[serde(rename = "sourceId")]
    pub source_id: i32,
    /// A human-readable name for this source.
    #[serde(rename = "name")]
    pub name: String,
    /// The URL of a block explorer that can be used to view transactions.  The value is provided as a format string with a single `{}` placeholder for the transaction. e.g `https://etherscan.io/tx/{}`
    #[serde(rename = "transactionExplorer", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub transaction_explorer: Option<Option<String>>,
    /// The URL of a block explorer that can be used to view addresses.  The value is provided as a format string with a single `{}` placeholder for the address. e.g `https://etherscan.io/address/{}`
    #[serde(rename = "addressExplorer", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub address_explorer: Option<Option<String>>,
    /// Additional metadata about this source.
    #[serde(rename = "metadata", deserialize_with = "Option::deserialize")]
    pub metadata: Option<serde_json::Value>,
}

impl MarketsGet200ResponseResultSourcesInner {
    /// A collection of assets grouped by origination.  For `Crypto` assets, this is their native blockchain.  e.g `ETH` and `SHIB` are both on the `ethereum` (`CHAIN_ID = 0x1`) blockchain.
    pub fn new(source_id: i32, name: String, metadata: Option<serde_json::Value>) -> MarketsGet200ResponseResultSourcesInner {
        MarketsGet200ResponseResultSourcesInner {
            source_id,
            name,
            transaction_explorer: None,
            address_explorer: None,
            metadata,
        }
    }
}
