import { LawyerType } from '@components/Lawyer/lawyer.type';
import { ExpertiseType } from '@components/Expertise/expertise.type';

export type LawyersResponseType = {
   _links: { self: { href: string } };
   _embedded: {
      lawyers: LawyerType[];
   };
};

export type ExpertisesResponseType = {
   _links: { self: { href: string } };
   _embedded: {
      expertises: ExpertiseType[];
   };
};

export type GetLawyersArgsType = {
   q_fn: string;
   q_ln: string;
   q_mail: string;
   per_page: number;
   page: number;
};
