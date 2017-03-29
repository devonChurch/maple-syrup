'use strict';

module.exports.createScaffold = (event, context, callback) => {

	const html = (`

        <html>
            <head>
                <title>Hello =)</title>
            </head>

            <body>
                <h1>Hello =)</h1>
            </body>
        </html>

    `);

	callback(null, html);

};
