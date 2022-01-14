import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi';
import { defaultRoutes } from '@/routes';

export default function ({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        location={{
          pathname: location.pathname,
        }}
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
