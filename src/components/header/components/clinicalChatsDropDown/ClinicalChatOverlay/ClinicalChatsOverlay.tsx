import React, { useMemo, ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BaseNotification } from '@app/components/common/BaseNotification/BaseNotification';
import { capitalize } from '@app/utils/utils';
import { Mention, Notification as NotificationType } from 'api/notifications.api';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from '../../notificationsDropdown/NotificationsOverlay/NotificationsOverlay.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

interface NotificationsOverlayProps {
  notifications: NotificationType[];
  setNotifications: (state: NotificationType[]) => void;
}

export const ClinicalChatsOverlay: React.FC<NotificationsOverlayProps> = ({
  clinicalChats,
  setClinicalChats,
  ...props
}) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      clinicalChats.map((chats, index) => {
        const type = notificationsSeverities.find((dbSeverity) => dbSeverity.id === chats.id)?.name;

        return (
          <BaseNotification
            key={index}
            type={type || 'warning'}
            title={capitalize(type || 'warning')}
            description={t(chats.description)}
            {...(type === 'mention' && {
              mentionIconSrc: (chats as Mention).userIcon,
              title: (chats as Mention).userName,
              description: (
                <Trans i18nKey={(chats as Mention).description}>
                  <S.LinkBtn type="link" href={(chats as Mention).href}>
                    {
                      { place: t((chats as Mention).place) } as unknown as ReactNode // todo: remove casting
                    }
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [chats, t],
  );

  return (
    <S.NoticesOverlayMenu {...props}>
      <BaseRow gutter={[20, 20]}>
        <BaseCol span={24}>
          {clinicalChats.length > 0 ? (
            <BaseSpace direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </BaseSpace>
          ) : (
            <S.Text>{t('header.notifications.noNotifications')}</S.Text>
          )}
        </BaseCol>
        <BaseCol span={24}>
          <BaseRow gutter={[10, 10]}>
            {clinicalChats.length > 0 && (
              <BaseCol span={24}>
                <S.Btn type="ghost" onClick={() => setClinicalChats([])}>
                  {t('header.notifications.readAll')}
                </S.Btn>
              </BaseCol>
            )}
            <BaseCol span={24}>
              <S.Btn type="link">
                <Link to="/">{t('header.notifications.viewAll')}</Link>
              </S.Btn>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.NoticesOverlayMenu>
  );
};
