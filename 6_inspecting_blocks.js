const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.AlchemyProvider("mainnet", process.env.ALCHEMY_API)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const main = async () => {
  const block = await provider.getBlockNumber()

  console.log(`\nBlock Number: ${block}\n`)

  const blockInfo = await provider.getBlock(block)

  console.log(blockInfo)

  const hash = await blockInfo.hash

  console.log(`\nBlock Hash:\n`)
  console.log(hash)
}

main()
