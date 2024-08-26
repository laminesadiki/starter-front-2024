import { IItem } from '@shared/interfaces';
import { Path, findItemPath, injectChildrenById } from './data.utils';
import { describe, it, expect } from 'vitest';
import { flattenWithLevelsAndParents } from './data.utils';

describe('data.utils module', () => {
   describe('injectChildrenById', () => {
      it('should inject new children into the target item when it has no children', () => {
         const items = [
            {
               id: '1',
               name: 'Item 1',
               creationDate: '2023-01-01',
               isFile: false,
               nonDematerializedPartyRootFolder: false,
            },
            {
               id: '2',
               name: 'Item 2',
               creationDate: '2023-01-01',
               isFile: false,
               nonDematerializedPartyRootFolder: false,
            },
         ];
         const newChildren = [
            {
               id: '3',
               name: 'Child 1',
               creationDate: '2023-01-01',
               isFile: false,
               nonDematerializedPartyRootFolder: false,
            },
         ];
         const result = injectChildrenById(
            items as IItem[],
            '1',
            newChildren as IItem[],
         );
         expect(result[0].children).toEqual(newChildren);
      });

      it('should inject new children into a nested target item', () => {
         const items = [
            {
               id: '1',
               name: 'Item 1',
               creationDate: '2023-01-01',
               isFile: false,
               nonDematerializedPartyRootFolder: false,
               children: [
                  {
                     id: '2',
                     name: 'Nested Item',
                     creationDate: '2023-01-01',
                     isFile: false,
                     nonDematerializedPartyRootFolder: false,
                  },
               ],
            },
         ];
         const newChildren = [
            {
               id: '3',
               name: 'Child 1',
               creationDate: '2023-01-01',
               isFile: false,
               nonDematerializedPartyRootFolder: false,
            },
         ];
         const result = injectChildrenById(
            items as IItem[],
            '2',
            newChildren as IItem[],
         );
         expect(result[0].children![0].children).toEqual(newChildren);
      });
   });

   describe('flattenWithLevelsAndParents', () => {
      it('flattens a nested array and adds levels and parentId', () => {
         const input = [
            {
               id: '1',
               name: 'Item 1',
               children: [
                  {
                     id: '1.1',
                     name: 'Item 1.1',
                     children: [
                        {
                           id: '1.1.1',
                           name: 'Item 1.1.1',
                        },
                     ],
                  },
                  {
                     id: '1.2',
                     name: 'Item 1.2',
                  },
               ],
            },
            {
               id: '2',
               name: 'Item 2',
            },
         ];

         const result = flattenWithLevelsAndParents(input as IItem[]);
         expect(result.length).toEqual(5);
         expect(result.map(el => el.id)).toEqual([
            '1',
            '1.1',
            '1.1.1',
            '1.2',
            '2',
         ]);
      });

      it('handles an empty array', () => {
         const input: IItem[] = [];
         const expectedOutput: IItem[] = [];
         const result = flattenWithLevelsAndParents(input);
         expect(result).toEqual(expectedOutput);
      });

      it('handles array with no children', () => {
         const input = [
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
         ];
         const expectedOutput = [
            { id: '1', name: 'Item 1', level: 0, parentId: '' },
            { id: '2', name: 'Item 2', level: 0, parentId: '' },
         ];
         const result = flattenWithLevelsAndParents(input as IItem[]);
         expect(result).toEqual(expectedOutput);
      });
   });

   describe('findItemPath', () => {
      it('finds the path to the targetId', () => {
         const folders = [
            {
               id: '1',
               name: 'Folder 1',
               isFile: false,
               children: [
                  {
                     id: '1.1',
                     name: 'Folder 1.1',
                     isFile: false,
                     children: [
                        {
                           id: '1.1.1',
                           name: 'Folder 1.1.1',
                           isFile: false,
                        },
                     ],
                  },
                  {
                     id: '1.2',
                     name: 'File 1.2',
                     isFile: true,
                  },
               ],
            },
            {
               id: '2',
               name: 'Folder 2',
               isFile: false,
            },
         ];

         const targetId = '1.1.1';
         const expectedPath: Path[] = [
            { id: '1', name: 'Folder 1', isFile: false },
            { id: '1.1', name: 'Folder 1.1', isFile: false },
            { id: '1.1.1', name: 'Folder 1.1.1', isFile: false },
         ];

         const result = findItemPath(folders as IItem[], targetId);
         expect(result).toEqual(expectedPath);
      });

      it('returns null if the targetId is not found', () => {
         const folders = [
            {
               id: '1',
               name: 'Folder 1',
               isFile: false,
               children: [
                  {
                     id: '1.1',
                     name: 'Folder 1.1',
                     isFile: false,
                  },
               ],
            },
         ];

         const targetId = '2';
         const result = findItemPath(folders as IItem[], targetId);
         expect(result).toBeNull();
      });

      it('handles an empty array', () => {
         const folders: IItem[] = [];
         const targetId = '1';
         const result = findItemPath(folders, targetId);
         expect(result).toBeNull();
      });

      it('ignores files in the search', () => {
         const folders = [
            {
               id: '1',
               name: 'Folder 1',
               isFile: false,
               children: [
                  {
                     id: '1.1',
                     name: 'File 1.1',
                     isFile: true,
                  },
                  {
                     id: '1.2',
                     name: 'Folder 1.2',
                     isFile: false,
                  },
               ],
            },
         ];

         const targetId = '1.2';
         const expectedPath: Path[] = [
            {
               id: '1',
               isFile: false,
               name: 'Folder 1',
            },
            {
               id: '1.2',
               isFile: false,
               name: 'Folder 1.2',
            },
         ];

         const result = findItemPath(folders as IItem[], targetId);
         expect(result).toEqual(expectedPath);
      });
   });
});
