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

function Button({ children }: { children: React.ReactNode }) {
	return (
		<button className="bg-orange hover:bg-sand focus:bg-sand border-3 border-black px-6 py-2 text-sm font-bold shadow-md">
			{children}
		</button>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-linen border-3 flex flex-col border-black p-6 pb-8 shadow-xl">
			{children}
		</div>
	);
}

export default function Index() {
	return (
		<>
			<header className=" bg-linen sticky top-0 mb-32 flex flex-row items-center border-b-2 px-24 py-4">
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
							<Button>Start for free</Button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section className="bg-linen px-24">
					<div className="max-w-full lg:max-w-[60%]">
						<h2 className="font-display my-6 text-5xl font-bold leading-tight">
							Access Management for your SaaS applications
						</h2>
						<p className="text-casal max-w-[60%] text-xs leading-relaxed">
							Orchestrate your employees’ access to SaaS tools – right in Slack.
							Automate access requests, approvals and provisioning workflows.
						</p>
						<div className="my-8 flex items-center gap-4">
							<Button>Add to Slack</Button>
							<a href="#" className="text-sm">
								Learn more
							</a>
						</div>

						<p className="text-xs font-bold">No credit card required </p>
						<div className="my-20 flex gap-8">
							{['Hosted in Germany', 'Ready in minutes'].map((text) => (
								<div key={text} className="flex items-center gap-2">
									<div className="bg-orange h-8 w-8 rounded-full"></div>
									<p className="text-xs font-bold">{text}</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="bg-white px-24 py-16">
					<div className="flex w-full flex-col items-center">
						<p className="text-sm">
							Automating access management & Compilance at
						</p>
						<ul className="my-4 flex flex-wrap items-center gap-10">
							{['viafintech', 'ZEPLIN', 'Contentfly', 'DREAM'].map(
								(companyName) => {
									return (
										<li
											key={companyName}
											className="font-display text-5xl font-light"
										>
											{companyName}
										</li>
									);
								},
							)}
						</ul>
					</div>

					<div className="my-24 flex flex-row gap-8">
						{[
							{
								title: 'Automate on- & offboarding workflows',
								icon: <div className="bg-casal size-12 rounded-full"></div>,
								description:
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque laudantium odit, ipsum commodi sed inventore architecto repudiandae temporibus neque, aliquam illo quam quod quo, vitae quibusdam deleniti tempore. Nostrum, vitae?',
							},
							{
								title: 'Make your auditors happy',
								icon: <div className="bg-orange size-12 rounded-full"></div>,
								description:
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque laudantium odit, ipsum commodi sed inventore architecto repudiandae temporibus neque, aliquam illo quam quod quo, vitae quibusdam deleniti tempore. Nostrum, vitae?',
							},
							{
								title: 'Simplify approval workflows',
								icon: <div className="bg-lavender size-12 rounded-full"></div>,
								description:
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque laudantium odit, ipsum commodi sed inventore architecto repudiandae temporibus neque, aliquam illo quam quod quo, vitae quibusdam deleniti tempore. Nostrum, vitae?',
							},
						].map(({ title, description, icon }) => {
							return (
								<Card key={title}>
									<div className="">{icon}</div>
									<h3 className="font-display mb-4 mr-4 mt-8 text-xl font-bold">
										{title}
									</h3>
									<p className="text-casal flex-grow text-xs leading-relaxed">
										{description}
									</p>
									<a className="mt-6 text-xs font-bold" href="#">
										Read more ›
									</a>
								</Card>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}
