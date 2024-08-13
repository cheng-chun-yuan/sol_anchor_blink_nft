/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/action_example.json`.
 */
export type ActionExample = {
    "address": "BDwf8Mx2Cji2rNWCQ1atRsBMrDvcX485USgg7TVD3UjK",
    "metadata": {
      "name": "actionExample",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "createSingleNft",
        "discriminator": [
          72,
          147,
          43,
          96,
          33,
          125,
          194,
          31
        ],
        "accounts": [
          {
            "name": "authority",
            "writable": true,
            "signer": true
          },
          {
            "name": "mint",
            "writable": true,
            "signer": true
          },
          {
            "name": "tokenAccount",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "authority"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "mint"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "rent",
            "address": "SysvarRent111111111111111111111111111111111"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          {
            "name": "metadataProgram",
            "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
          },
          {
            "name": "masterEditionAccount",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    109,
                    101,
                    116,
                    97,
                    100,
                    97,
                    116,
                    97
                  ]
                },
                {
                  "kind": "account",
                  "path": "metadataProgram"
                },
                {
                  "kind": "account",
                  "path": "mint"
                },
                {
                  "kind": "const",
                  "value": [
                    101,
                    100,
                    105,
                    116,
                    105,
                    111,
                    110
                  ]
                }
              ],
              "program": {
                "kind": "account",
                "path": "metadataProgram"
              }
            }
          },
          {
            "name": "nftMetadata",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    109,
                    101,
                    116,
                    97,
                    100,
                    97,
                    116,
                    97
                  ]
                },
                {
                  "kind": "account",
                  "path": "metadataProgram"
                },
                {
                  "kind": "account",
                  "path": "mint"
                }
              ],
              "program": {
                "kind": "account",
                "path": "metadataProgram"
              }
            }
          }
        ],
        "args": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    ]
  };
  