import { SMTPClient } from 'emailjs';
import { getSession } from 'next-auth/react';

const client = new SMTPClient({
	user: process.env.USER,
	password: process.env.PASSWORD_USER,
	host: process.env.HOST,
	ssl: true,
});

export default async function sendEmail(req, res) {
	const {emails} = req.body;
	try {
		validateAdminLogin(req);
		const message = await client.sendAsync({
			text: 'i hope this works',
			from: 'Gintano & Nesya',
			to: `${emails}`,
			subject: 'Wedding Invitation!',
			attachments: [
				{ data: '<html>i <i>hope</i> this works!</html>', alternative: true }
			]
		});
		return res.status(201).json({
			message
		})
	} catch (err) {
		return res.status(400).json({
			err
		})
	}
}

async function validateAdminLogin(req)
{
	const session = await getSession({req});

	if(!session)  throw new Error('Pastikan anda telah login sebagai Admin');

	return session;
}