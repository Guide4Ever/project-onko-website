import StoryEmail from '@/emails/my-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const { 
    logoUrl,
    imageUrl, 
    firstName, 
    lastName, 
    age, 
    content
  } = await request.json();

  try {
    const { data } = await resend.emails.send({
      from: 'Spletna stran ONKO <newsletter@resend.dev>',
      to: ['projekt.onko@dsms.net'],
      subject: `Nova zgodba - ${firstName} ${lastName}, ${age}`,
      react: StoryEmail({ 
        logoUrl: logoUrl,
        imageUrl: imageUrl,
        firstName: firstName,
        lastName: lastName,
        age: age,
        content: content,
      }),
    });

    return Response.json({ message: 'Email sent successfully', data });
  } catch {
    return Response.json({ message: 'Failed to send email' }, { status: 500 });
  }
}