#CryptoIdentity.js

A library for simple crypto identity in the browser

#Cryptography As Identity

This library was made to give very basic functionality for people to cryptigraphically verify each others identity and communicate with each other. It really only does three things, but they are powerful

* **Generate a cryptographic identity** - Create a public and private key! Make sure you never give your private key to anyone else!
* **Let public communicate with you securely** - Encrypt a message with a public key and decrypt it with a private key
* **Communicate with public with a message verified from you** - Create a message signature only possible to be created private key for a message to to be verified with a public key

With these two simple methods, you can start talking with other people to setup conversations between crypoidentities

1. Person A signs a message to public letting them know they are here!
2. Person B encrypts a message including Person B's public key and sends to Person A
3. Person A decrypts message with Person A's private key, and now has Person B's public Key
4. Person A encrypts a message only Person B can read by decrypting with Person B's private key!

Person A and B can now talk encrypted back and forth with each other

#Example

```javascript
CryptoIdentity.generateCurrentIdentity().then(function(identity){
  
  //An identity is made of two things
  identity.public //your public key
  identity.private //your private key
  
  //Verify a message comes from you
  var message = "Hello World!"
  var signature = CryptoIdentity.createMessageSignature(identity,message)
  CryptoIdentity.verifyMessageSignature(identity,message,signature) //True!
  CryptoIdentity.verifyMessageSignature(identity,message,"Err...I don't have the signature") //False!

  var message = "Hello World!"
  var encryptedMessage = CryptoIdentity.encrypt(identity,message) // OMG SECRET!
  CryptoIdentity.decrypt(identity,encryptedMessage) // "Hello World!"
})
```
