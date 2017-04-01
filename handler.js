'use strict';

module.exports.createScaffold = (event, context, callback) => {

	const isProduction = process.env.NODE_ENV === 'production';
	const createLinkTag = src => `<link rel="stylesheet" href="${src}"/>`;
	const createScriptTag = src => `<script src="${src}"></script>`;
	const styles = isProduction ? createLinkTag('https://s3-ap-southeast-2.amazonaws.com/research-hub/css/client.css') : '';
	const script = isProduction ? createScriptTag('https://s3-ap-southeast-2.amazonaws.com/research-hub/js/client.js') : createScriptTag('http://localhost:8004/research-hub/client.js');
	const doctype = '<!doctype html>';
	const html = (`
		<html>

			<head>

				<meta charset="utf-8">
				<meta http-equiv="x-ua-compatible" content="ie=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Research Hub</title>

				${styles}

			</head>

			<body>

				<h1>Hello</h1>
				<p>This content has been generated via an AWS API Gateway request that calls a Lambda to generate the HTML.</p>
				<p>We can pass in any URL from the a root domain request to an arbitrary nested directory and always return this predictable HTML response.</p>

				${script}

			</body>

		</html>
	`);

	callback(null, `${doctype}${html}`);

};
