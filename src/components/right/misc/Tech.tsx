import Card from '../../Card';

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech I Love ❤️</h3>
      <p className="font-light leading-7 mb-4">
        I normally add a list of the tech that I use to my portfolios. Instead to doing one of
        those weird graphs where you say you&apos;re 73% in JavaScript or whatever, try
        something like this:
      </p>
      <p className="font-light leading-7 mb-2">
        My choice tech stack for personal projects is GENERALLY (but not always):
      </p>
      <ul className="mb-4 grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• React (Next JS)</li>
        <li className="font-light leading-7">• React Native</li>
        <li className="font-light leading-7">• Typescript</li>
        <li className="font-light leading-7">• Node</li>
        <li className="font-light leading-7">• Express</li>
        <li className="font-light leading-7">• Postgres</li>
        <li className="font-light leading-7">• Redis</li>
        <li className="font-light leading-7">• Firebase (whole suite of tools)</li>
        <li className="font-light leading-7">• Netlify</li>
        <li className="font-light leading-7">• Heroku</li>
      </ul>
      <p className="font-light leading-7 mb-2">
        Some other tech that I love and/or have built at scale with:
      </p>
      <ul className="grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• Python (Flask, Django, custom frameworks)</li>
        <li className="font-light leading-7">
          • Java (Dropwizard primarily + a bit of Spring)
        </li>
        <li className="font-light leading-7">• PHP (custom frameworks)</li>
        <li className="font-light leading-7">• MongoDB</li>
        <li className="font-light leading-7">• MySQL</li>
        <li className="font-light leading-7">• InfluxDB</li>
        <li className="font-light leading-7">• Aerospike</li>
        <li className="font-light leading-7">• Presto</li>
        <li className="font-light leading-7">• HDFS/Hive</li>
        <li className="font-light leading-7">• Vertica</li>
      </ul>
    </Card>
  );
}
