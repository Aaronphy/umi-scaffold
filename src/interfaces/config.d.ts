interface IGlobalConfig {
  isLogin: boolean;
  loading: boolean;
}

interface ISettings {
  lang: 'zh-cn' | 'en-us' | string;
  theme: 'white' | 'dark' | string;
  config: IGlobalConfig;
  list: any[];
}
