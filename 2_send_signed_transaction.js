const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.EtherscanProvider(
  "goerli",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const account1 = signer.address
const account2 = "" // Address that will take the Ethers

const main = async () => {
  const senderBalanceBefore = await provider.getBalance(account1)
  const recieverBalanceBefore = await provider.getBalance(account2)

  console.log(
    `\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`
  )
  console.log(
    `reciever balance before: ${ethers.formatEther(recieverBalanceBefore)}\n`
  )

  const tx = await signer.sendTransaction({
    to: account2,
    value: ethers.parseEther("0.025"),
  })

  await tx.wait()
  console.log(`Transaction Completed. Here is the details:\n`)
  console.log(tx)

  const senderBalanceAfter = await provider.getBalance(account1)
  const recieverBalanceAfter = await provider.getBalance(account2)

  console.log(
    `\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`
  )
  console.log(
    `reciever balance after: ${ethers.formatEther(recieverBalanceAfter)}\n`
  )
}

main()
