import React from 'react';
import toast from 'react-hot-toast';
import { IconDeviceFloppy } from '@tabler/icons';
import StyledWrapper from './StyledWrapper';
import { useDispatch } from 'react-redux';
import { saveResponseAsExample } from 'providers/ReduxStore/slices/collections/actions';

const ResponseAsExample = ({ item }) => {
  const response = item.response || {};

  const dispatch = useDispatch();

  const saveAsExample = () => {
    dispatch(saveResponseAsExample(item))
      .then(() => toast.success('Response is saved'))
      .catch(() => toast.error('An error occurred while saving the response'));
  };

  return (
    <StyledWrapper className="ml-2 flex items-center">
      <button onClick={saveAsExample} disabled={!response.dataBuffer} title="Save response as example">
        <IconDeviceFloppy size={16} strokeWidth={1.5} />
      </button>
    </StyledWrapper>
  );
};

export default ResponseAsExample;
