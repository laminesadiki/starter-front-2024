export interface Link {
   href: string;
}

export interface Links {
   self: Link;
   share: Link;
   itemsList: Link;
   downloadBundle: Link;
   actors: Link;
   parties: Link;
   status: Link;
   progress: Link;
   search: Link;
   createActors: Link;
   createParties: Link;
   name: Link;
   taxationDate: Link;
   costTracking: Link;
   contradictory: Link;
   administration: Link;
}

export interface ExpertiseData {
   _links: Partial<Links>;
   id: string;
   name: string;
   status: string;
   designationDate: string | null;
   isAdmin: boolean;
   taxationDate: string | null;
   highlighted: boolean;
}
