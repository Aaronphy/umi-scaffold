import { useModel } from 'umi';

export default function IndexPage() {
  const settings = useModel('settings', (model) => model);
  console.log(settings);

  const change = () => {
    settings.setConfig({
      ...settings.config,
      lang: 'test',
    });
  };

  const changeTheme = () => {
    settings.setConfig({
      ...settings.config,
      lang: 'nb',
      theme: '1111',
    });
  };

  return (
    <div>
      <h1 onClick={change}>{settings.config.lang}</h1>
      <h2 onClick={changeTheme}>{settings.config.theme}</h2>
      <button onClick={() => settings.getList()}>获取列表</button>
      {settings.config.list.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}
    </div>
  );
}
