const path = require('path')
const fs = require('fs')

const makeWellKnownDir = () => {
  fs.mkdirSync(path.resolve(__dirname, './src/dist/.well-known'))
}

const writeAssociationFile = () => {
  const contents = fs.readFileSync(path.resolve(__dirname, './.well-known/apple-app-site-association'))

  fs.writeFileSync(path.resolve(__dirname, './src/dist/.well-known/apple-app-site-association'), contents)
}

makeWellKnownDir()
writeAssociationFile()

console.log(`
site association file created
`)
