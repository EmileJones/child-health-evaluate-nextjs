# 儿童健康评估系统 (Child Health Evaluation System)

这是一个基于 Next.js 14 开发的现代化儿童健康评估系统前端项目。系统旨在为医疗机构提供一个直观、高效的界面，用于处理儿童健康评估数据、生成统计报表及管理异常上传记录。

## 🚀 功能特性

- **🔐 身份认证**：完善的登录机制，支持基于 Token 的 API 安全访问。
- **📊 自动化评估**：支持上传 Excel 格式的原始健康数据，系统自动调用后端引擎进行评估并实时反馈结果。
- **📋 患病花名册管理**：支持按年份快速检索并下载特定年度的患病儿童详细名单。
- **📈 统计报表生成**：一键导出年度健康统计摘要，支持 Excel 格式下载。
- **🛠 异常数据修正**：专门的异常管理页面，支持对上传失败的条目进行手动标记成功或指定重新上传。
- **🔍 灵活查询**：支持通过身份证号或姓名快速检索儿童健康档案。
- **📱 响应式 UI**：基于 Tailwind CSS 构建，适配多种屏幕尺寸，提供流畅的用户体验。

## 🛠 技术栈

- **框架**: [Next.js 14 (App Router)](https://nextjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **网络请求**: [Axios](https://axios-http.com/)
- **状态管理**: React Hooks (useState, useEffect)
- **容器化**: [Docker](https://www.docker.com/)

## 📂 项目结构

```text
src/
├── api/             # API 接口定义与 Axios 实例封装 (ServerAccess.ts)
├── app/             # Next.js App Router 页面路由
│   ├── login/       # 登录相关页面与组件
│   └── home/        # 核心业务页面 (评估、统计、花名册、异常管理)
├── entity/          # TypeScript 实体类与接口定义
├── util/            # 通用工具函数 (文件下载、表格处理等)
└── public/          # 静态资源 (图标、Loading 动画等)
```

## 🏃 快速启动

### 1. 克隆项目
```bash
git clone <repository-url>
cd child-health-evaluate-nextjs
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可预览。

## 🐳 Docker 部署

项目包含 `Dockerfile`，支持快速容器化部署。

**构建镜像：**
```bash
docker build -t child-health-system .
```

**运行容器：**
```bash
docker run -p 3000:3000 child-health-system
```

## 📝 评估流程说明

1. **登录系统**：使用管理员账号进入系统。
2. **选择文件**：在“评估”页面选择包含儿童健康数据的 Excel 文件。
3. **开始评估**：点击“评估”按钮，系统将上传文件并处理。
4. **结果下载**：若数据校验成功，系统会自动下载处理后的结果文件；若有错误（如单元格格式不正确），会弹出详细的错误定位提示。

---
