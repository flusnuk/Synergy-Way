import React from 'react';
import { MosaicContext, MosaicWindowContext } from 'react-mosaic-component';
import { MosaicButton } from './MosaicButton';
import { Icon } from '@blueprintjs/core';

export const CustomRemoveButton = () => {
  const { mosaicActions } = React.useContext(MosaicContext);
  const { mosaicWindowActions } = React.useContext(MosaicWindowContext);
  
  const remove = React.useCallback(() => {
    mosaicActions.remove(mosaicWindowActions.getPath());
  }, [mosaicActions, mosaicWindowActions]);

  return (
    <MosaicButton 
      onClick={remove}
      title="Close Window"
      className="close-button"
    >
      <Icon icon="cross" size={16} />
    </MosaicButton>
  );
}; 