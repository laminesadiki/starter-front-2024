import { IItem } from '@shared/interfaces';

export interface expertiseDetailsSlice {
   sectionTitle: string;
   folder: IItem;
   rootFolder: IItem[];
   expertiseId: string;
   expandedItemsList: string[];
   safeTableSelectedItems: string[];
   itemsListLink: string;
   rootItemId: string;
   itemId: string;
   showTabs: {
      showAdminTab: false;
      showContradictoryTab: false;
      showCostTrackingTab: false;
      showSearchTab: false;
   };
   searchKeyword: string;
}
