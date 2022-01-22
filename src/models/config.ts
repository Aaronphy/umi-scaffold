import { useState, useEffect } from 'react';

const initConfig: IGlobalConfig = {
  loading: false,
  isLogin: true,
};

export default function useConfigModel() {
  const [config, setConfig] = useState<IGlobalConfig>(initConfig);
  useEffect(() => {
    setTimeout(() => {
      setConfig({
        loading: false,
        isLogin: true,
      });
    }, 10000000);
  }, []);
  return config;
}
