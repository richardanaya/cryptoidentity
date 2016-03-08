var CryptoIdentity = {}

CryptoIdentity.generateCurrentIdentity = function(){
  var keyalg = "RSA";
  var keylen = 2048;
  var kp = KEYUTIL.generateKeypair(keyalg, keylen);
  var ident = {
    public: KEYUTIL.getPEM(kp.pubKeyObj),
    private: KEYUTIL.getPEM(kp.prvKeyObj,"PKCS1PRV")
  }
  return ident;
}

CryptoIdentity.createMessageSignature = function(identity,message){
    var hashAlg = "sha1";
    return KEYUTIL.getKey(identity.private).signString(message, hashAlg);
}

CryptoIdentity.verifyMessageSignature = function(identity,message,signature){
  return KEYUTIL.getKey(identity.public).verifyString(message, signature);
}

CryptoIdentity.encrypt = function(identity,message){
  return KEYUTIL.getKey(identity.public).encrypt(message);
}

CryptoIdentity.decrypt = function(identity,encryptedMessage){
  return KEYUTIL.getKey(identity.private).decrypt(encryptedMessage);
}
