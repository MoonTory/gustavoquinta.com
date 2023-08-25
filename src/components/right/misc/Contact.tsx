import Card from '../../Card';

export default function Contact() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contact</h3>
      <p className="font-light leading-7 mb-6">
        If you&apos;d like to connect or discuss potential collaborations, please feel free to
        reach out, either on LinkedIn or through email (I&apos;m not much of a twitter guy).
        Give me a shout here:
      </p>
      <p className="font-light leading-7">
        Email:{' '}
        <a
          href="mailto:youremail@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          gustavoqnt40@gmail.com
        </a>
      </p>
      <p className="font-light leading-7">
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/gustavo-quinta"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @gustavo-quinta
        </a>
      </p>
    </Card>
  );
}
