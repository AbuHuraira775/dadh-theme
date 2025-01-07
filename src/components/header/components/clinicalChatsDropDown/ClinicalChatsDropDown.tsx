import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseBadge } from '@app/components/common/BaseBadge/BaseBadge';
import { NotificationsOverlay } from '@app/components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { clinicalChats as fetchedClinicalChats, ClinicalChat } from '@app/api/clinicalChats.api';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { ClinicalChatsOverlay } from './ClinicalChatOverlay/ClinicalChatsOverlay';

export const ClinicalChatsDropDown: React.FC = () => {
  const [clinicalChats, setClinicalChats] = useState<ClinicalChat[]>(fetchedClinicalChats);
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover
      trigger="click"
      content={<ClinicalChatsOverlay clinicalChats={clinicalChats} setClinicalChats={setClinicalChats} />}
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <BaseButton
          type={isOpened ? 'ghost' : 'text'}
          icon={
            <BaseBadge dot>
              <BellOutlined />
            </BaseBadge>
          }
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
