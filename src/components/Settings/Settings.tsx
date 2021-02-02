import React from 'react';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { appLangConst } from '../../assets/appLangConst';
import { toggleSound } from '../../redux/actions';

const Settings: React.FC = () => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

  const selectSoundState = (state: { app: { isSoundOn: any; }; }) => state.app.isSoundOn;
  const isSoundOn = useSelector(selectSoundState);

  const dispatch = useDispatch();

  const handleSoundChange = () => {
    dispatch(toggleSound(!isSoundOn));
  };

  return (
    <>
      <p>Toggle sound</p>
      <Switch
        checked={isSoundOn}
        onChange={handleSoundChange}
        checkedChildren={appLangConst[appLang].soundOn}
        unCheckedChildren={appLangConst[appLang].soundOff}
      />
      <p>Some settings...</p>
    </>
  );
};

export default Settings;
