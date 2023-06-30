const { ethers } = require("ethers")
require("dotenv").config()

const provider = new ethers.AlchemyProvider("goerli", process.env.ALCHEMY_API_S)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const account1 = signer.address
const account2 = "" // Address that will take the Ethers

const main = async () => {
  const gasp0 = await (await provider.getFeeData()).gasPrice
  const gasp = ethers.formatUnits(gasp0, "gwei")
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
    value: ethers.parseEther("0.000000025"),
    gasPrice: gasp0,
  })

  await tx.wait()
  console.log(`Transaction Completed. Here is the details:\n`)

  const senderBalanceAfter = await provider.getBalance(account1)
  const recieverBalanceAfter = await provider.getBalance(account2)

  console.log(`\nGas Price is ${gasp}`)

  console.log(
    `\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`
  )
  console.log(
    `reciever balance after: ${ethers.formatEther(recieverBalanceAfter)}\n`
  )
}

main()
