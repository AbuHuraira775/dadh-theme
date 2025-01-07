import React from 'react';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import * as S from '../Header.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseSelect } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { useTranslation } from 'react-i18next';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ThemePicker } from '../components/settingsDropdown/settingsOverlay/ThemePicker/ThemePicker';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const { t } = useTranslation();
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <BaseCol xl={15} xxl={12}>
        <NFTCardHeader title={t('dadh.notifications')}></NFTCardHeader>
      </BaseCol>
    </S.SearchColumn>
  ) : (
    <>
      {/* <BaseCol lg={10} xxl={8}>
        <HeaderSearch />
      </BaseCol>
      <BaseCol>
        <S.GHButton />
      </BaseCol> */}
    </>
  );

  return (
    <BaseRow justify="space-between" align="middle">
      {leftSide}
      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow align="middle" justify="space-between" gutter={[{ xxl: 5 }, { xxl: 5 }]}>
          <BaseCol xl={15} xxl={7}>
            <HeaderSearch />
          </BaseCol>
          <BaseCol>
            <ThemePicker />
          </BaseCol>
        </BaseRow>
      </S.ProfileColumn>
    </BaseRow>
  );
};
