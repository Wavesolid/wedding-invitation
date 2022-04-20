import { SMTPClient } from 'emailjs';
import { getSession } from 'next-auth/react';
import path from 'path';
import guestModel from '../../Model/GuestModel';

const client = new SMTPClient({
	user: process.env.USER,
	password: process.env.PASSWORD_USER,
	host: process.env.HOST,
	ssl: true,
});

export default async function sendEmail(req, res) {
	const {guests, filteredQr} = req.body;
	console.log(guests);
	let messages = [];
	try {
		validateAdminLogin(req);
		if(Array.isArray(guests)) {
			await asyncForEach(guests, async(guest) => {
				const message = await client.sendAsync({
					text: '',
					from: 'Gintano & Nesya',
					to: `${guest.email}`,
					subject: 'Wedding Invitation!',
					attachment: [
						{
							data:
								`<html> 
									<div> 
										<h1 style="color:Tomato;">Hai, ${guest.name}</h1>
									</div>
									<div>
										<img src=${guest.imgurQrCode}>
									</div>
								</html>`, alternative: true
						}
					],
				});
				await guestModel.findOneAndUpdate({
					name : guest.name
				}, {
					emailCount: guest.emailCount + 1
				});
				messages.push(message)
			});
		} else {
			const message = await client.sendAsync({
				text: '',
				from: 'Gintano & Nesya',
				to: `${guests.email}`,
				subject: 'Wedding Invitation!',
				attachment: [
					{
						data:
							`<html> 
								<div> 
									<h1 style="color:Tomato;">Hai, ${guests.name}</h1>
								</div>
								<div>
									<img src=${guests.imgurQrCode}>
								</div>
							</html>`, alternative: true	
					}
				],
			});
			await guestModel.findOneAndUpdate({
				name : guests.name
			}, {
				emailCount: guests.emailCount + 1,
				isEmailSent: "Sent"
			});
			messages.push(message)
		}

		return res.status(201).json({
			messages
		});
	} catch (err) {
		console.log(err)
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