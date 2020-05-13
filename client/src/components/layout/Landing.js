import React from 'react';
import { Link } from 'react-router-dom';

import automation from '../../utils/images/Automation.png';
import analytics from '../../utils/images/Analytics.png';
import marketing from '../../utils/images/Marketing.png';
import hero from '../../utils/images/Hero@2x.png';
import heroMobile from '../../utils/images/Group 92@2x.png';

const Landing = () => {
	return (
		<main>
			{/* ---------------- Hero Section ---------------- */}
			<div className='hero-bg'>
				<section className='hero container row'>
					<div className='col s12 m7'>
						<h1>Advanced Email Marketing Made Simple</h1>
					</div>
					<div className='col s12 m6'>
						<h3>
							Find your audience, build a relationship, and improve your product. Reach your business goals with
							Emetrics' email marketing and automation platform.
						</h3>
					</div>
					<div className='col s7'>
						<Link to='#' className='left waves-effect waves-light btn-large'>
							Sign Up
						</Link>
					</div>
					<img className='responsive-img hide-on-small-and-down' src={hero} alt='hero' />
					<img className='responsive-img hide-on-med-and-up' src={heroMobile} alt='hero' />
				</section>
			</div>
			{/* ---------------- Features Section ---------------- */}
			<section className='features container row'>
				<div className='col s12 m12 l4 center-align'>
					<img src={marketing} alt='marketing icon' />
					<h4>Marketing Campaigns</h4>
					<p>Build meaningful connections and generate valuable feedback with smart email marketing</p>
				</div>
				<div className='col s12 m10 l4 center-align'>
					<img src={automation} alt='automation icon' />
					<h4>Email Automation</h4>
					<p>
						Get better results by doing less work! Our email automation helps you build campaigns with no technical
						skills required
					</p>
				</div>
				<div className='col s12 m10 l4 center-align'>
					<img src={analytics} alt='analytics icon' />
					<h4>Analytics</h4>
					<p>Track key email marketing statistics like sends, responses, clicks, and more</p>
				</div>
			</section>
			{/* ---------------- Sendgrid Section ---------------- */}
			<section className='sendgrid container row right-align'>
				<div className='col m5' />
				<h2 className='col s12 m8'>See how recipients are responding to your campaigns</h2>
				<p className='col s7 center-align'>
					We utilize SendGrid's API and webhooks, trusted by developers and marketers, for quick updates on your
					end-user responses, saving you time.
				</p>
			</section>

			<section className='emails container row center-align'>
				<h2 className='col s7'>98.4% of consumers check their email daily.</h2>
				<p className='muted col s7'>(The other 1.6% forgot their password.)</p>
				<p className='col s7'>
					Connect with customers where they go every day: their inbox. Email marketing is the most effective tool for
					awareness, acquisition, conversion, and retention—and delivers a $38-for-$1 return on investment.
				</p>
			</section>

			<section className='social-proof container'>
				<p>Over 15,000 customers trust Emetrics to send more than 45 million emails every month.</p>
			</section>

			<section className='get-started container row center-align'>
				<h1>It's easy to get started</h1>
				<h3>And it's free. Two things everyone loves.</h3>
				<Link to='#' className='left waves-effect waves-light btn-large'>
					Sign Up
				</Link>
			</section>
		</main>
	);
};

export default Landing;
