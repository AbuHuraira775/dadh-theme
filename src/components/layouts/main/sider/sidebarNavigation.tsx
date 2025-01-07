import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
  FileDoneOutlined,
  InboxOutlined,
  PhoneOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'dadh.sideMenu.home',
    key: 'nft-dashboard',
    // TODO use path variable
    url: '/',
    icon: <NftIcon />,
  },

  {
    title: 'dadh.sideMenu.inbox',
    key: 'medical-dashboard',
    url: '/medical-dashboard',
    icon: <InboxOutlined />,
  },
  {
    title: 'dadh.sideMenu.consultHistory',
    key: 'apps',
    icon: <PhoneOutlined />,
  },
  {
    title: 'dadh.sideMenu.billing',
    key: 'auth',
    icon: <FileDoneOutlined />,
  },
  {
    title: 'dadh.sideMenu.support',
    key: 'forms',
    icon: <CustomerServiceOutlined />,
  },
  {
    title: 'dadh.sideMenu.myAccount',
    key: 'dataTables',
    url: '/data-tables',
    icon: <UserOutlined />,
  },
  {
    title: 'dadh.sideMenu.logout',
    key: 'charts',
    url: '/charts',
    icon: <LogoutOutlined />,
  },
];
