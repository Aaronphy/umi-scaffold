import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IRouteComponentProps } from 'umi';
import { useModel } from 'umi';
import { defaultRoutes } from '@/routes';
import Login from '@/components/Login';

export default function ({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  const config: IGlobalConfig = useModel('config', (model) => ({ ...model }));

  const { loading, isLogin } = config;

  if (!isLogin) return <Login></Login>;

  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        loading={loading}
        location={{
          pathname: location.pathname,
        }}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        title="King"
        route={{
          routes: defaultRoutes,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              history.push(item.path as string);
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer>{children}</PageContainer>
      </ProLayout>
    </div>
  );
}
