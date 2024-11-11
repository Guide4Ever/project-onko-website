
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
    content} = await request.json();

  try {
    const { data, error } = await resend.emails.send({
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

    if (error) {
      return Response.json({ error }, { status: 500  });
    }

    return Response.json({ message: 'Email sent successfully', data });
  } catch (error) {
    return Response.json({  message: 'meow' }, { status: 500 });
  }
}
