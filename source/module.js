(function(module) {

	"use strict";

	GLOBAL.root = __dirname;

	module.exports = {

		Archive: require(GLOBAL.root + "/classes/ButtercupArchive.js"),

		// Dataset:  			require(GLOBAL.root + "/classes/Dataset.js"),
		// VaultGroup: 		require(GLOBAL.root + "/classes/VaultGroup.js"),
		// VaultEntry:  		require(GLOBAL.root + "/classes/VaultEntry.js"),

		FileDatasource: require(GLOBAL.root + "/classes/FileDatasource.js"),
		WebDAVDatasource: require(GLOBAL.root + "/classes/WebDAVDatasource.js"),

		// Encryption info from: http://lollyrock.com/articles/nodejs-encryption/
		Encryption: require(GLOBAL.root + "/encryption/encrypt.js"),
		Decryption: require(GLOBAL.root + "/encryption/decrypt.js")

	};

})(module);
