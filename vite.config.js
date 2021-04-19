import { UserConfigExport } from 'vite';
import styleImport from 'vite-plugin-style-import';

export default () => {
  return {
    // 1. 如果使用的是ant-design 系列的 需要配置这个
    // 2. 确保less安装在依赖 `yarn add less -D`
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => {
              return `vant/es/${name}/style`;
            },
          },
        ],
      }),
    ],
  };
};