#CryptoIdentity.js

A library for simple crypto identity in the browser

#Cryptography As Identity

This library was created to let entities talk with each other securely using RSA cryptography under the covers. It really only does four things, but they are powerful

* **Generate a cryptographic identity** 
* **Create a safe cryptographic identity that can be given to other people to represent you** 
* **Let public communicate with you securely with the safe identity** 
* **Verify messages come from you with your safe identity** 

With these simple methods, you can start talking with other people to setup conversations between crypto identities

1. Jane signs a message to the public along with her safe identity!
2. Bob verifies Jane as the source of message using her safe identity
3. Bob encrypts his safe identity and sends to Jane
4. Jane encypts a message using Bob's safe identity and sends to him

Jane and Bob can now talk encrypted back and forth with each other

#Example

```javascript

//Task 1: Create a crypto identity for you
CryptoIdentity.generateCurrentIdentity().then(function(identity){
  //identity is just JSON that can be stringified

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
  //1. Someone can encrypt a message to me with my safe identity
  var message = "Hello World!"
  var encryptedMessage = CryptoIdentity.encrypt(safeIdentity,message) 
  // OMG SECRET!
  //2. Give encrypted message and safeIdentity to someone else
  //3. Decrypt a message from someone else
  CryptoIdentity.decrypt(identity,encryptedMessage) 
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
