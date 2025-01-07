import React, { useState } from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from '@app/components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { DesktopHeader } from '@app/components/header/layouts/DesktopHeader';
import { ThemePicker } from '@app/components/header/components/settingsDropdown/settingsOverlay/ThemePicker/ThemePicker';
import { NotificationsDropdown } from '@app/components/header/components/notificationsDropdown/NotificationsDropdown';
import { NotificationsOverlay } from '@app/components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { notifications as fetchedNotifications, Notification } from '@app/api/notifications.api';
import ChatUI from '@app/components/nft-dashboard/ClnicalChats/ClinicalChats';
import { useTranslation } from 'react-i18next';

const MedicalDashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          <BaseCol span={24}>
            <RecentActivity />
          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <ChatUI />
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>
        <TrendingCreators />
      </BaseCol>

      <BaseCol span={24}>
        <RecentlyAddedNft />
      </BaseCol>

      <BaseCol span={24}>
        <TrendingCollections />
      </BaseCol>

      <BaseCol span={24}>
        <RecentActivity />
      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
