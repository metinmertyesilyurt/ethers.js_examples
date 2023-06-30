const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const abi = [
  "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
]

const contract = new ethers.Contract(
  "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  abi,
  signer
)

const ab = signer.address

const main = async () => {
  const filter = contract.filters.Transfer(ab)
  console.log(filter)
}

main()
