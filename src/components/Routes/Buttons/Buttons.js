import React from 'react';
import styles from './Buttons.css';
import DownButton from '../../NavigationComponents/AnchorButtons/DownButton/DownButton';
import DarkenButton from '../../ButtonComponents/DarkenButton/DarkenButton';
import OutlineButton from '../../ButtonComponents/OutlineButton/OutlineButton';
import BlockButton from '../../ButtonComponents/BlockButton/BlockButton';
import DarkenButtonGroup from '../../ButtonComponents/DarkenButtonGroup/DarkenButtonGroup';
import OutlineButtonGroup from '../../ButtonComponents/OutlineButtonGroup/OutlineButtonGroup';
import SlideArrowButton from '../../ButtonComponents/SlideArrowButton/SlideArrowButton';

const Buttons = () => {
  return (
    <div className={styles.Buttons}>
      <div>
        <h2>DownButton</h2>
        <DownButton />
      </div>
      <div>
        <h2>DarkenButton</h2>
        <DarkenButton />
      </div>
      <div>
        <h2>OutlineButton</h2>
        <OutlineButton />
      </div>
      <div>
        <h2>BlockButton</h2>
        <BlockButton />
      </div>
      <div>
        <h2>OutlineButtonGroup</h2>
        <OutlineButtonGroup />
      </div>
      <div>
        <h2>DarkenButtonGroup</h2>
        <DarkenButtonGroup />
      </div>
      <div>
        <h2>SlideArrowButton</h2>
        <SlideArrowButton />
      </div>
    </div>
  );
};

export default Buttons;
