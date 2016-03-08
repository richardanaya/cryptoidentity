CryptoIdentity.generateCurrentIdentity().then(function(identity){
  var safeIdentity = CryptoIdentity.getSafeIdentity(identity);
  QUnit.test( "identity should had data", function( assert ) {
    assert.ok( identity.private != null);
    assert.ok( identity.public != null);
  });

  QUnit.test( "should be able to get safe identity", function( assert ) {
    assert.ok( safeIdentity.private === undefined);
    assert.ok( safeIdentity.public != null);
  });

  QUnit.test( "should be able to verify messages", function( assert ) {
    var message = "Hello World!"
    var signature = CryptoIdentity.createMessageSignature(identity,message)
    assert.ok(CryptoIdentity.verifyMessageSignature(safeIdentity,message,signature))
    assert.ok(CryptoIdentity.verifyMessageSignature(safeIdentity,message,"")==false)
  });

  QUnit.test( "should be able to encrypt and decrypt message", function( assert ) {
    var message = "Hello World!"
    var encryptedMessage = CryptoIdentity.encrypt(safeIdentity,message)
    assert.ok(CryptoIdentity.decrypt(identity,encryptedMessage)==message);
  });
})
