import { Dispatch, SetStateAction, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../Card';

export default function Work({
  setSection
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    inView && setSection('work');
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Full Stack Software Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Company Name
          </a>{' '}
          • Full-Time • Jan 2021 - Now
        </p>
        <p className="font-light mb-4 text-white/80">Orlando, Florida</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Here&apos;s a paragraph describing what I did at the company from a high level. I
          should state my role, the team that I was on, and what we built while I was there.
        </p>
        <p className="font-light leading-7">
          Here&apos;s a second paragraph which goes into further detail. It should try to use
          hard numbers. Some examples would be &quot;improved conversion rate of landing pages
          by 23%&quot; or &quot;improved API throughput by 3X&quot;.
        </p>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Software Engineer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.wayfair.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Another Company
          </a>{' '}
          • Full-Time • Jan 2020 - Jun 2021
        </p>
        <p className="font-light mb-4 text-white/80">Boston, Massachusetts</p>
        {/* CONTENT */}

        <p className="font-light leading-7 mb-4">
          Here&apos;s a paragraph similar to the previous. It should describe what I did at the
          company from a high level. I should state my role and the, team that I was on, and
          what we built while I was there.
        </p>
        <p className="font-light leading-7 mb-4">
          You could also list your projects using bullet points like this:
        </p>
        <p className="font-light leading-7 mb-4">
          - A suite of tools used by marketing analysts to directly drive efficiency in
          hundreds of millions of dollars of ad spend (React, Java, Dropwizard, Python,
          Vertica, Hive, MSSQL, Presto and more)
        </p>
        <p className="font-light leading-7 mb-4">
          - &quot;Forge&quot; framework for designing jobs which pipe billions of rows of data
          daily (Python, Aerospike, Spark, Hive)
        </p>
        <p className="font-light leading-7 mb-4">
          - Custom data analytics user interfaces which allow analysts to track performance of
          ad campaigns over time (React, PrestoDB, Vertica, Java, Dropwizard)
        </p>
        <p className="font-light leading-7">
          - The &quot;Generic CSV Uploader&quot; API which has cut development time of new CSV
          upload utilities (we&apos;ve got many of them) down from a week to day (Java,
          Dropwizard)
        </p>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Unrelated experience</h3>

        {/* INFO */}
        <p className="font-light text-white/80">
          Various Companies • Full-Time • Aug 2015 - Nov 2018
        </p>
        <p className="font-light mb-4 text-white/80">Various Locations</p>

        {/* CONTENT */}
        <p className="font-light leading-7">
          If you&apos;ve got unrelated experience, you can separate them out as you wish. I
          tend to lump my less relevant experience into one place like this. I worked in
          construction before I became a developer, so I might say something like &quot;lead
          teams of welders and fitters to build projects on a tight deadline&quot;. You get the
          idea {':)'}
        </p>
      </Card>
    </section>
  );
}
