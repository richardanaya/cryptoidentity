#CryptoIdentity.js

A library for simple crypto identity in the browser

#Cryptography As Identity

This library was made to give very basic functionality for people to cryptographically verify each others identity and communicate with each other. It really only does four things, but they are powerful

* **Generate a cryptographic identity** 
* **Create a safe cryptographic identity that can be given to other people** 
* **Let public communicate with you securely with safe identity** 
* **Communicate with public with messages verified with safe identity** 

With these two simple methods, you can start talking with other people to setup conversations between crypto identities

1. Person A signs a message to public letting them know they are here!
2. Person B encrypts a message including Person B's identity and sends to Person A
3. Person A decrypts message with Person B's identity

Person A and B can now talk encrypted back and forth with each other

#Example

```javascript

//Task 1: Create a crypto identity for you
CryptoIdentity.generateCurrentIdentity().then(function(identity){
  //Task 2: Verify a message comes from you
  //1. On my side
  var message = "Hello World!"
  var signature = CryptoIdentity.createMessageSignature(identity,message)
  var safeIdentity = CryptoIdentity.getSafeIdentity(identity);
  //2. give the safeIdentity that represents you to someone else
  //3. Now if you ever sign a message, they can verify its from you with the signature and safe identity
  CryptoIdentity.verifyMessageSignature(safeIdentity,message,signature) 
  //True! This was my message
  CryptoIdentity.verifyMessageSignature(safeIdentity,message,"Err...I don't have the signature") 
  //False! This wasn't from me

  //Task 3: Encrypt a message 
  //1. Encrypt the message with our identity
  var message = "Hello World!"
  var encryptedMessage = CryptoIdentity.encrypt(identity,message) 
  // OMG SECRET!
  //2.Give encrypted message and safeIdentity to someone else
  //3. They can decrypt our message
  CryptoIdentity.decrypt(safeIdentity,encryptedMessage) 
  // "Hello World!"
})
```

#Install

```
npm install cryptoidentity
```

```
<script src="https://cdn.rawgit.com/richardanaya/cryptoidentity/master/cryptoidentity.min.js"></script>
```

#Don't Lose Your Keys!
Remember, your public and private key is your identity, store them somewhere safe! LocalStore might be a nice start.
