import { useState, useEffect } from 'react';

const initConfig: ISettings = {
  lang: 'zh-cn',
  theme: 'dark',
  config: {
    isLogin: false,
    loading: false,
  },
  list: [],
};

export default function useConfigModel() {
  const [config, setConfig] = useState<ISettings>(initConfig);
  useEffect(() => {}, []);

  const getList = () => {
    setTimeout(() => {
      setConfig({
        ...config,
        list: [1, 2, 3, 4, 5],
      });
    }, 5000);
  };
  return { config, setConfig, getList };
}
