export const abi  = [
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "acceptedToken",
				"type": "address"
			},
			{
				"internalType": "contract ISuperfluid",
				"name": "_host",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_Registrar",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "NotAcceptedSuperToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotImplemented",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UnauthorizedHost",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "CFAV1_TYPE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "HOST",
		"outputs": [
			{
				"internalType": "contract ISuperfluid",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Registrar",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_url",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "addGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cat",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_movieId",
				"type": "string"
			}
		],
		"name": "addMovie",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_url",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "addStream",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agreementClass",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "agreementData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "ctx",
				"type": "bytes"
			}
		],
		"name": "afterAgreementCreated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "newCtx",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agreementClass",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "agreementData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "cbdata",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "ctx",
				"type": "bytes"
			}
		],
		"name": "afterAgreementTerminated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "newCtx",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agreementClass",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "agreementData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "cbdata",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "ctx",
				"type": "bytes"
			}
		],
		"name": "afterAgreementUpdated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "newCtx",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeAgreementCreated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agreementClass",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "agreementData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeAgreementTerminated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agreementClass",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "agreementData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "beforeAgreementUpdated",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "plan",
				"type": "uint256"
			}
		],
		"name": "changeUserSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flow1",
		"outputs": [
			{
				"internalType": "int96",
				"name": "",
				"type": "int96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flow2",
		"outputs": [
			{
				"internalType": "int96",
				"name": "",
				"type": "int96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flow3",
		"outputs": [
			{
				"internalType": "int96",
				"name": "",
				"type": "int96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "games",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "gameUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGames",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gameUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					}
				],
				"internalType": "struct SuperGames.Game[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMovies",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cat",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "movieId",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "plays",
						"type": "uint256"
					}
				],
				"internalType": "struct SuperGames.Movie[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStreams",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					}
				],
				"internalType": "struct SuperGames.Stream[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserFromAddress",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isSubscriber",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "SubscriptionTier",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "MoviePlays",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "GamePlays",
						"type": "uint256"
					}
				],
				"internalType": "struct SuperGames.User",
				"name": "user",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUsers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isSubscriber",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "SubscriptionTier",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "MoviePlays",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "GamePlays",
						"type": "uint256"
					}
				],
				"internalType": "struct SuperGames.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			}
		],
		"name": "isAcceptedSuperToken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "movies",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cat",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "movieId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "plays",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_movieId",
				"type": "string"
			}
		],
		"name": "playMovie",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "streams",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "userExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isSubscriber",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "SubscriptionTier",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "MoviePlays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "GamePlays",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const address = "0x1b161C37BE28DDD5E42D4f897F91cC1EA35D0cD1"