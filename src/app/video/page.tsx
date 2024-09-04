import VideoGallery from '@/components/VideoGallery';
import SectionWrapper from '@/components/SectionWrapper';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div>
        <SectionWrapper id='videoGallery'>
            <VideoGallery />
        </SectionWrapper>
    </div>
  );
};

export default page;