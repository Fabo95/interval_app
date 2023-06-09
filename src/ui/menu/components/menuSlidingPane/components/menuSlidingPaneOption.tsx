import Link from 'next/link';

import { Row } from 'common/row';
import { ClockIcon } from 'icons/clockIcon';
import { Text } from 'common/text';
import { SettingsIcon } from 'icons/settingsIcon';
import { CalendarIcon } from 'icons/calendarIcon';
import { Page } from 'utils/types';
import { ChartIcon } from 'icons/chartIcon';

export const MenuSlidingPaneOption = ({
  currentLocale,
  menuOption,
  onClick,
  isSelected,
}: {
  currentLocale: string;
  menuOption: { translation: string; page: Page };
  onClick: () => void;
  isSelected: boolean;
}) => {
  // --- HELPERS ---

  const MENU_OPTION_TO_ICON_MAP = {
    [Page.SETTINGS]: <SettingsIcon />,
    [Page.HISTORY]: <CalendarIcon />,
    [Page.HOME]: <ClockIcon />,
    [Page.STATISTICS]: <ChartIcon />,
  };

  // --- RENDER ---

  return (
    <Link href={`/${currentLocale}/${menuOption.page}`}>
      <Row
        className={`menu-sliding-pane-option ${
          isSelected && 'menu-sliding-pane-option-selected '
        }`}
        onClick={onClick}
      >
        {MENU_OPTION_TO_ICON_MAP[menuOption.page]}
        <Text
          className={`menu-sliding-pane-option-text ${
            isSelected && 'menu-sliding-pane-option-text-selected'
          }`}
        >
          {menuOption.translation}
        </Text>
      </Row>
    </Link>
  );
};
