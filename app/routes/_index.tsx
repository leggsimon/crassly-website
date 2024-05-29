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
		<>
			<header className="mb-32 flex flex-row items-center border-b-2 py-4">
				<h1 className="font-display text-2xl font-bold uppercase">Crassly</h1>
				<nav className="flex-grow">
					<ul className="flex flex-row items-center justify-end gap-5">
						{[
							'How it works',
							'Solutions',
							'Customers',
							'Pricing',
							'Get in touch',
						].map((link) => (
							<li key={link}>
								<a
									href="#"
									className="text-casal text-xs hover:text-black focus:text-black"
								>
									{link}
								</a>
							</li>
						))}
						<li className="ml-2">
							<button className="bg-orange hover:bg-sand focus:bg-sand border-2 border-black px-6 py-2 text-sm font-bold shadow-md">
								Start for free
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>
					<h2>Access management for your SaaS applications</h2>
					<p>
						Orchestrate your employees’ access to SaaS tools – right in Slack.
						Automate access requests, approvals and provisioning workflows.
					</p>
					<div>
						<button>Add to Slack</button>
						<a href="#">Learn more</a>
					</div>

					<p>No credit card required </p>
					<div>
						<div></div>
						<p>Hosted in Germany</p>
					</div>
					<div>
						<div></div>
						<p>Ready in minutes</p>
					</div>
				</section>
				<section>
					<p>Automating access management & Compilance at</p>

					<div>
						<div>
							<h3>Automate on- & offboarding workflows</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
								laudantium odit, ipsum commodi sed inventore architecto
								repudiandae temporibus neque, aliquam illo quam quod quo, vitae
								quibusdam deleniti tempore. Nostrum, vitae?
							</p>
							<a href="#">Read more ›</a>
						</div>
						<div>
							<h3>Make you auditors happy</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
								laudantium odit, ipsum commodi sed inventore architecto
								repudiandae temporibus neque, aliquam illo quam quod quo, vitae
								quibusdam deleniti tempore. Nostrum, vitae?
							</p>
							<a href="#">Read more ›</a>
						</div>
						<div>
							<h3>Simplify approval workflows</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
								laudantium odit, ipsum commodi sed inventore architecto
								repudiandae temporibus neque, aliquam illo quam quod quo, vitae
								quibusdam deleniti tempore. Nostrum, vitae?
							</p>
							<a href="#">Read more ›</a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
