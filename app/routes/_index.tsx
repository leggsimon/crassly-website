import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Crassly' },
		{
			name: 'description',
			content: 'Access management for your SaaS applications.',
		},
	];
};

export default function Index() {
	return (
		<div>
			<h1 className="font-display">
				Access management for your SaaS applications
			</h1>
		</div>
	);
}
