const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const message = "Hello World via Ethers.js"

const main = async () => {
  const sign = await signer.signMessage(message)
  console.log(`Message Signed: ${sign}\n`)
  const verify = await ethers.verifyMessage(message, sign)
  console.log(verify)
}

main()
