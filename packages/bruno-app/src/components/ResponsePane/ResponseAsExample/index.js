import React from 'react';

import { IconDeviceFloppy } from '@tabler/icons';
import StyledWrapper from './StyledWrapper';

const ResponseAsExample = ({ item }) => {
  const response = item.response || {};
  return (
    <StyledWrapper className="ml-2 flex items-center">
      <button disabled={!response.dataBuffer} title="Save response as example">
        <IconDeviceFloppy size={16} strokeWidth={1.5} />
      </button>
    </StyledWrapper>
  );
};

export default ResponseAsExample;
