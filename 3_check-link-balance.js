const { ethers } = require("ethers")
const { Interface } = require("readline")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
]

contract = new ethers.Contract(
  "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  abi,
  signer
)

const walletAddress = signer.address

const convertCoin = async (rawBalance) => {
  return ethers.formatEther(rawBalance)
}

const main = async () => {
  const linkBalanceRaw = await contract.balanceOf(walletAddress)
  const linkBalance = await convertCoin(linkBalanceRaw)
  console.log(linkBalance)
}

main()
