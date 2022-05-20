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
									<div style="border: 16px solid #A28A4A;padding:16px;background-color: #610606;color: #DED6C5;">
										<div style="text-align:center">
											<img style="width:10%" src="https://i.imgur.com/iX94zuH.png">
										</div>
										<div> 
											<h2>Kepada <strong>yth Bapak/Ibu/Saudari/i ${guest.name}</strong></h2>
											<p>Terima kasih telah melakukan konfirmasi kehadiran pada acara pernikahan Neysa Almira dan Gintano Scorpy.
											<p>
											<br>
											<p>Acara akan dilaksanakan pada</p>
											<p>Hari/Tanggal: <strong>Minggu/29 Mei 2022</strong><p>
											<p>Pukul: <strong>07.30 WIB</strong></p>
											<br>
											<p>Mohon klik link <a href="${process.env.BASE_URL}/seat/${guest.slug}"> disini </a> untuk melihat nomor meja yang 
											disediakan beserta barcode yang akan ditunjukkan ke penerima tamu
											agar mengetahui presensi anda pada pernikahan nanti.</p>
											<p>
												Dimohon undangan dapat hadir tepat waktu demi kelancaran berlangsungnya acara.
												<br>
												Terimakasih
											</p>
										</div>
										<div style="text-align:center">
											<img style="padding: 8px;background-color: white;" src=${guest.imgurQrCode}>
										</div>
									</div>
								</html>`, alternative: true
						}
					],
				});
				await guestModel.findOneAndUpdate({
					name : guest.name
				}, {
					emailCount: guest.emailCount + 1,
					isEmailSent: "Sent"
				});
				messages.push(message)
			});
		} else {
			if(guests.email === "") {
				return res.status(406).json({
					messages: "Tamu ini tidak memasukan email"
				});
			}
			const message = await client.sendAsync({
				text: '',
				from: 'Gintano & Nesya',
				to: `${guests.email}`,
				subject: 'Wedding Invitation!',
				attachment: [
					{
						data:
							`<html> 
								<div style="border: 16px solid #A28A4A;padding:16px;background-color: #610606;color: #DED6C5;">
									<div style="text-align:center">
										<img style="width:10%"  src="https://i.imgur.com/iX94zuH.png">
									</div>
									<div color: #DED6C5;> 
										<h2>Kepada <strong>yth Bapak/Ibu/Saudari/i ${guests.name}</strong></h2>
										<p>Terima kasih telah melakukan konfirmasi kehadiran pada acara pernikahan Neysa Almira dan Gintano Scorpy.
										<p>
										<br>
										<p>Acara akan dilaksanakan pada</p>
										<p>Hari/Tanggal: <strong>Minggu/29 Mei 2022</strong><p>
										<p>Pukul: <strong>07.30 WIB</strong></p>
										<br>
										<p>Mohon klik link <a href="${process.env.BASE_URL}/seat/${guests.slug}"> disini </a> untuk melihat nomor meja yang 
										disediakan beserta barcode yang akan ditunjukkan ke penerima tamu
										agar mengetahui presensi anda pada pernikahan nanti.</p>
										<p>
											Dimohon undangan dapat hadir tepat waktu demi kelancaran berlangsungnya acara.
											<br>
											Terimakasih
										</p>
									</div>
									<div style="text-align:center">
										<img style="padding: 8px;background-color: white;" src=${guests.imgurQrCode}>
									</div>
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
