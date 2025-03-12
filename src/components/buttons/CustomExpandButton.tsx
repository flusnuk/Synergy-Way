import React from 'react';
import { MosaicContext, MosaicWindowContext } from 'react-mosaic-component';
import { MosaicButton } from './MosaicButton';
import { Icon } from '@blueprintjs/core';

export const CustomExpandButton = () => {
  const { mosaicActions } = React.useContext(MosaicContext);
  const { mosaicWindowActions } = React.useContext(MosaicWindowContext);
  
  const expand = React.useCallback(() => {
    if (mosaicWindowActions.getPath() != null) {
      mosaicActions.expand(mosaicWindowActions.getPath());
    }
  }, [mosaicActions, mosaicWindowActions]);

  return (
    <MosaicButton 
      onClick={expand}
      title="Expand"
      className="expand-button"
    >
      <Icon icon="maximize" size={16} />
    </MosaicButton>
  );
}; 