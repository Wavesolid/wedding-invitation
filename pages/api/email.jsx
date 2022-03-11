import { SMTPClient } from 'emailjs';
import { getSession } from 'next-auth/react';
import guestModel from '../../Model/GuestModel';

const client = new SMTPClient({
	user: process.env.USER,
	password: process.env.PASSWORD_USER,
	host: process.env.HOST,
	ssl: true,
});

export default async function sendEmail(req, res) {
	const {guests} = req.body;
	let messages = [];
	try {
		validateAdminLogin(req);
		await asyncForEach(guests, async(guest) => {
			const message = await client.sendAsync({
				text: `Halo ${guest.name}`,
				from: 'Gintano & Nesya',
				to: `${guest.email}`,
				subject: 'Wedding Invitation!',
				attachments: [
					{ data: '<html>i <i>hope</i> this works!</html>', alternative: true },
					{ path: 'public/Photo/bg-batik.png', type: 'image/png', headers: { 'Content-ID': '<my-image>' }
				]
			});
			await guestModel.findOneAndUpdate({
				name : guest.name
			}, {
				emailCount: guest.emailCount + 1
			});
			messages.push(message)
		});
		
		console.log(messages);
		return res.status(201).json({
			messages
		});
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

async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}