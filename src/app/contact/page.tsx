import ContactForm from '@/components/Contact';
import { FC } from 'react';

interface Props {}

const Page: FC<Props> = (): JSX.Element => {
  return (
        <div>
            <ContactForm />
        </div>
  );
};

export default Page;