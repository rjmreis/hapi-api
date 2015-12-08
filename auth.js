exports.register = function (plugin, options, next) {

	plugin.auth.strategy('jwt', 'jwt', {
		key: 'NeverShareYourSecret', // Secret key
		verifyOptions: {
			algorithms: ['HS256']
		},
		validateFunc: (decoded, request, callback) => {
			// Implement validation function
			if (false) {
				return callback(null, false);
			}
			else {
				return callback(null, true);
			}
		}
    });

    // Uncomment this to apply default auth to all routes
    //plugin.auth.default('jwt');

    next();
};

exports.register.attributes = {
    name: 'auth'
};