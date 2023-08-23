import { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../Card';

export default function Education({
  setSection
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    inView && setSection('education');
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Dope School University</h3>
        <p className="font-light leading-7 mb-6">
          You can keep this relatively short. Talk a bit about your major, when you graduated
          (or when you WILL graduate), and any accomplishments you made while you were there.
          Deans list, sports teams, clubs, whatever shows you&apos;ve put in some effort!
        </p>

        <div className="mt-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Another School</h3>
        <p className="font-light leading-7 mb-6">
          If you&apos;ve got more than one education to list, dope! Add it. Don&apos;t feel
          like you have to add your high school if you don&apos;t feel it&apos;s relevant, but
          it doesn&apos;t hurt if you&apos;ve got some other cool stuff (captain of a team etc)
          to show off.
        </p>

        <div className="mt-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>
    </section>
  );
}
