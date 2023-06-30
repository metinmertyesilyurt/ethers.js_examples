const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const address = signer.address

const main = async () => {
  const balance = await provider.getBalance(address)
  const txcount = await provider.getTransactionCount(address)

  console.log(
    `\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`
  )
  console.log(`\nTx Count of ${address} is --> ${txcount} tx`)
}

main()
