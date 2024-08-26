export interface ILink {
   href: string;
}
export interface ILinks {
   self: ILink;
   createFolder: ILink;
   upload: ILink;
   download: ILink;
   delete: ILink;
   rename: ILink;
   timestamp: ILink;
   lock: ILink;
}

export interface IDepositary {
   firstName: string;
   lastName: string;
   role: string;
}

export interface IEmbedded {
   children: IItem[];
   depositary: IDepositary;
}

export interface IItem {
   _links: Partial<ILinks>;
   id: string;
   name: string;
   creationDate: string;
   isFile: boolean;
   isLocked?: boolean;
   isLeaf?: boolean;
   confidential?: boolean;
   isNew?: boolean;
   size?: number;
   newCount?: number;
   nonDematerializedPartyRootFolder: boolean;
   _embedded?: Partial<IEmbedded>;
   children?: IItem[];
   level?: number;
   parentId?: string;
}
