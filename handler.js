'use strict';

module.exports.createScaffold = (event, context, callback) => {

	const html = (`

        <html>
            <head>
                <title>Hello</title>
            </head>

            <body>
                <h1>Hello</h1>
				<p>This content has been generated via an AWS API Gateway request that calls a Lambda to generate the HTML.</p>
				<p>We can pass in any URL from the a root domain request to an arbitrary nested directory and always return this predictable HTML response.</p>
            </body>
        </html>

    `);

	callback(null, html);

};
