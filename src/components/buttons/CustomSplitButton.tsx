import React from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import { MosaicButton } from './MosaicButton';
import { Icon } from '@blueprintjs/core';

export const CustomSplitButton = () => {
  const { mosaicWindowActions } = React.useContext(MosaicWindowContext);
  
  const split = React.useCallback(() => {
    mosaicWindowActions
      .split()
  }, [mosaicWindowActions]);

  return (
    <MosaicButton 
      onClick={split}
      title="Split Window"
      className="split-button"
    >
      <Icon icon="add-column-right" size={16} />
    </MosaicButton>
  );
}; 