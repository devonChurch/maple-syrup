'use strict';

module.exports.createScaffold = (event, context, callback) => {

	const env = 'dev';

	const html = (`

        <html>
            <head>
                <title>Hello =)</title>
            </head>

            <body>
                <h1>Hello =)</h1>
				<p>Any link from the <a href="${env}/">root domain</a> to a arbitrary <a href="${env}/foo/bar/baz/">nested directory</a> will return this predictable HTML response.</p>
            </body>
        </html>

    `);

	callback(null, html);

};
