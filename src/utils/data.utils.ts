import { IItem } from '@shared/interfaces';
import _ from 'lodash';

export function injectChildrenById(
   items: IItem[],
   targetId?: string,
   newChildren?: IItem[],
): IItem[] {
   if (!newChildren?.length) {
      return items;
   }
   return items.map(item => {
      if (item.id === targetId) {
         if (!item.children?.length) {
            return {
               ...item,
               children: [...(item.children || []), ...newChildren],
            };
         }
         return {
            ...item,
            children: [...newChildren],
         };
      } else if (item.children) {
         return {
            ...item,
            children: injectChildrenById(item.children, targetId, newChildren),
         };
      }
      return item;
   });
}

export function flattenWithLevelsAndParents(
   array: IItem[],
   level = 0,
   parentId = '',
): IItem[] {
   return _.flatMap(array, (item: IItem) => {
      const newItem = {
         ...item,
         level: level,
      };

      if (parentId !== null) {
         newItem.parentId = parentId;
      }

      let childrenWithLevels: IItem[] = [];
      if (item.children && item.children.length > 0) {
         childrenWithLevels = flattenWithLevelsAndParents(
            item.children,
            level + 1,
            item?.id,
         );
         newItem.children = item.children;
      }

      return [newItem, ...childrenWithLevels];
   });
}

export const getonlyFolderItems = (items: IItem[]): IItem[] => {
   const folders: IItem[] = [];

   for (const item of items) {
      if (!item.isFile) {
         const folderCopy = { ...item };
         if (item.children) {
            folderCopy.children = getonlyFolderItems(item.children);
         }
         folders.push(folderCopy);
      }
   }

   return folders;
};

export const getOnlyFoldersUsingFilter = (items: IItem[]): IItem[] => {
   return items
      .filter(item => !item.isFile)
      .map(item => ({
         ...item,
         children: item.children
            ? getOnlyFoldersUsingFilter(item.children)
            : [],
      }));
};

export type Path = {
   id: string;
   name: string;
   isFile: boolean;
};

export const findItemPath = (
   folders: IItem[],
   targetId: string,
): Path[] | null => {
   function search(
      folders: IItem[],
      targetId: string,
      path: Path[],
   ): { id: string; name: string; isFile: boolean }[] | null {
      if (!targetId || !folders.length) {
         return null;
      }
      for (const folder of folders) {
         const newPath = [
            ...path,
            { id: folder.id, name: folder.name, isFile: folder.isFile },
         ];
         if (folder.id === targetId) {
            return newPath;
         }
         if (folder.children) {
            const result = search(folder.children, targetId, newPath);
            if (result) {
               return result;
            }
         }
      }
      return null;
   }
   return search(folders, targetId, []);
};

export const deleteItemById = (rootFolder: IItem[], id: string): IItem[] => {
   if (rootFolder.find(item => item.id === id)) {
      return rootFolder.filter((item: IItem) => {
         return item.id !== id;
      });
   }

   return rootFolder.map((item: IItem) => {
      if (item.children) {
         return {
            ...item,
            children: item?.children ? deleteItemById(item?.children, id) : [],
         };
      }
      return item;
   });
};

export const getItemById = (rootFolder: IItem[], id: string): IItem | null => {
   if (id === 'ROOT_ITEM_ID') {
      return {
         id: 'ROOT_ITEM_ID',
         isFile: false,
         children: rootFolder,
      } as IItem;
   }
   for (const item of rootFolder) {
      if (item.id === id) {
         return item;
      }
      if (item.children) {
         const foundItem = getItemById(item.children, id);
         if (foundItem) {
            return foundItem;
         }
      }
   }
   return null;
};

export const updateItemById = (
   rootFolder: IItem[],
   id: string,
   updatedData: Partial<IItem>,
): IItem[] => {
   return rootFolder.map((item: IItem) => {
      if (item.id === id) {
         return { ...item, ...updatedData };
      }
      if (item.children) {
         return {
            ...item,
            children: updateItemById(item?.children, id, updatedData),
         };
      }
      return item;
   });
};
