import { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';

import Card from '~/components/Card';
import { ThemeContext } from '~/context';

export default function Contributions() {
  const { dark } = useContext(ThemeContext);
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contributions</h3>
      <p className="font-light leading-7 mb-4">
        GitHub:{' '}
        <a
          href="https://github.com/MoonTory"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @MoonTory
        </a>
      </p>
      <div className="flex justify-center">
        <GitHubCalendar username="MoonTory" colorScheme={dark ? 'light' : 'dark'} />
      </div>
    </Card>
  );
}
