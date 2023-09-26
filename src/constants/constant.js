export const abi  = [
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
		"inputs": [],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "address",
				"name": "_Registrar",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
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

export const address = "0x3A9A5994DA05DD12F5811C19833c802cF46968d4"