import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type CursorProps = {
  cursorColor?: string;
  cursorStyle?: React.ReactNode;
  cursorBlinking?: boolean;
};

const MemoizedCursor: React.FC<CursorProps> = ({
  cursorStyle = '|',
  cursorBlinking = true,
  cursorColor = 'inherit'
}) => {
  return (
    <span
      style={{ color: cursorColor }}
      className={clsx(styles.blinkingCursor, cursorBlinking && styles.blinking)}
    >
      {cursorStyle}
    </span>
  );
};

export const Cursor = React.memo(MemoizedCursor);
