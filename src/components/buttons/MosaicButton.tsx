import React from 'react';
import classNames from 'classnames';
import { Button, Intent } from '@blueprintjs/core';

export interface MosaicButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export const MosaicButton = ({
  onClick,
  children,
  className,
  title,
}: MosaicButtonProps) => (
  <Button
    onClick={onClick}
    className={classNames('mosaic-default-control', className)}
    title={title}
    minimal={true}
    small={true}
    intent={Intent.PRIMARY}
  >
    {children}
  </Button>
); 