import React from 'react';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { appLangConst } from '../../assets/appLangConst';
import { changeTheme, toggleSound } from '../../redux/actions';

const Settings: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const { appLang, isSoundOn, theme } = useSelector(selectAppState);

  const dispatch = useDispatch();

  const handleSoundChange = () => {
    dispatch(toggleSound(!isSoundOn));
  };

  const handleThemeChange = (value: any) => {
    dispatch(changeTheme(value ? 'dark' : 'light'));
  };

  return (
    <>
      <span style={{ marginRight: '1rem' }}>
        {appLangConst[appLang].toggleSound}
      </span>
      <Switch
        checked={isSoundOn}
        onChange={handleSoundChange}
        checkedChildren={appLangConst[appLang].soundOn}
        unCheckedChildren={appLangConst[appLang].soundOff}
      />
      <br />
      <br />
      <span style={{ marginRight: '1rem' }}>
        {appLangConst[appLang].toggleTheme}
      </span>
      <Switch
        checked={theme === 'dark'}
        onChange={handleThemeChange}
        checkedChildren={appLangConst[appLang].darkTheme}
        unCheckedChildren={appLangConst[appLang].lightTheme}
      />
    </>
  );
};

export default Settings;
