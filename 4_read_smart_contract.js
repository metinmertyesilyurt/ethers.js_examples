const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
]

const address = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()

  console.log(`\nReading from ${address}\n`)
  console.log(`Name: ${name}`)
  console.log(`Symbol: ${symbol}`)
  console.log(`Total Supply: ${ethers.formatEther(totalSupply)}\n`)

  const balance = await contract.balanceOf(
    "0x4ff8E32327739F4EbBD04dA56a7167b175215928"
  )

  console.log(`Balance Returned: ${balance}`)
  console.log(`Balance Formatted: ${ethers.formatEther(balance)}\n`)
}

main()
