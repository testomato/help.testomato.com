module.exports = {
	docs:
		{
			"Testomato": [
				'introduction',
				'dashboard',
				{
					"Project": [
						"project",
						"common-server-errors",
					]
				},
				'account',
				'invoices',
				'payment',
				'uptime',
				'subscription',
				"http",
			],
			"API Reference": [

				'api/introduction',
				'api/api-key',
				'api/common-responses',

				{
					"Project": [
						'api/project',
						'api/project-start',
						'api/project-results',
						'api/project-simple-status',
						'api/project-status',
						'api/project-response-times',
						'api/project-users',
						'api/project-groups',
					]
				},

				{
					"User": [
						'api/user-projects',
					]
				},
				'api/example-page',
			],
		}
};
