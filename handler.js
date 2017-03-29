'use strict';

module.exports.createScaffold = (event, context, callback) => {

	const html = (`

        <html>
            <head>
                <title>Hello =)</title>
            </head>

            <body>
                <h1>Hello =)</h1>
				<p>From Travis CI</p>
            </body>
        </html>

    `);

	callback(null, html);

};
