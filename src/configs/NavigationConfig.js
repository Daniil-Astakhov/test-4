import {
  DashboardOutlined,
  FileTextOutlined,
  MobileOutlined,
  SettingOutlined,
  MailOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ShopOutlined,
  GiftOutlined,
  PictureOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const navTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/main`,
    title: "Основные",
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [],
  },
  {
    key: "dashboards-analytic",
    path: `${APP_PREFIX_PATH}/main/analytic`,
    title: "Дашборд",
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [],
  },
  {
    key: "main-katalog",
    path: `${APP_PREFIX_PATH}/main/katalog`,
    title: "Каталог",
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-katalog-productList",
        path: `${APP_PREFIX_PATH}/main/katalog/product-list`,
        title: "Товары",
        icon: "",
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-katalog-kategory",
        path: `${APP_PREFIX_PATH}/main/katalog/category`,
        title: "Категории",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-collection",
        path: `${APP_PREFIX_PATH}/main/collection`,
        title: "Коллекции",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-combo",
        path: `${APP_PREFIX_PATH}/main/combo`,
        title: "Комбо",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: "main-orders",
    path: `${APP_PREFIX_PATH}/main/orders`,
    title: "Заказы",
    icon: ShoppingOutlined,
    breadcrumb: true,
    submenu: [],
  },
  {
    key: "main-user",
    path: `${APP_PREFIX_PATH}/apps/user-list`,
    title: "Клиенты",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-userList",
        path: `${APP_PREFIX_PATH}/main/user-list`,
        title: "Список клиентов",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-groups",
        path: `${APP_PREFIX_PATH}/main/groups`,
        title: "Группы клиентов",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: "banners",
    path: `${APP_PREFIX_PATH}/banners`,
    title: "Баннеры",
    icon: PictureOutlined,
    breadcrumb: true,
    submenu: [],
  },
  {
    key: "main-promocods",
    path: `${APP_PREFIX_PATH}/main/promocods`,
    title: "Промокоды",
    icon: GiftOutlined,
    breadcrumb: true,
    submenu: [],
  },
  {
    key: "main-offline",
    path: `${APP_PREFIX_PATH}/main/offline`,
    title: "Офлайн точки",
    icon: ShopOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "main-offline-addresses",
        path: `${APP_PREFIX_PATH}/main/offline/addresses`,
        title: "Адреса",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "apps-offline-geo",
        path: `${APP_PREFIX_PATH}/apps/offline/geo`,
        title: "Геозоны",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: "apps-employees",
    path: `${APP_PREFIX_PATH}/apps/employees`,
    title: "Сотрудники",
    icon: UsergroupAddOutlined,
    breadcrumb: true,
    submenu: [],
  },
  {
    key: "apps-newsletters",
    path: `${APP_PREFIX_PATH}/apps/newsletters`,
    title: "Рассылки",
    icon: MailOutlined,
    breadcrumb: true,
    submenu: [],
  },
];
const sistemTree = [
  {
    key: "sistem",
    path: `${APP_PREFIX_PATH}/sistem`,
    title: "Системные",
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [],
  },
  {
    key: "sistem-settings",
    path: `${APP_PREFIX_PATH}/sistem/settings`,
    title: "Настройки",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "sistem-mobileApp",
    path: `${APP_PREFIX_PATH}/sistem/mobileApp`,
    title: "Мобильное приложение",
    icon: MobileOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "sistem-logs",
    path: `${APP_PREFIX_PATH}/sistem/logs`,
    title: "Логи",
    icon: FileTextOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const schedulerTree = [
  {
    key: "scheduler",
    path: `${APP_PREFIX_PATH}/scheduler`,
    title: "Планировщик",
    breadcrumb: true,
    submenu: [],
  },
];

const navigationConfig = [...navTree, ...sistemTree, ...schedulerTree];

export default navigationConfig;
