const expertisesMock = [
   {
      _links: { self: { href: '/expertises/UpL-giUl_Hc' } },
      id: 'UpL-giUl_Hc',
      name: 'AYOUB_SADIKI_123_1_BOULORE_10_22-09-2024',
      designationDate: null,
      taxationDate: null,
      magistrateFullName: null,
      expertFullName: 'François Bouloré',
      status: 'COMPLETING',
      highlighted: false,
   },
   {
      _links: { self: { href: '/expertises/h57cEo89t7M' } },
      id: 'h57cEo89t7M',
      name: 'TEST_TEST_TEST_R1234_ZEROUAL_TEST_02-02-2024',
      designationDate: null,
      taxationDate: null,
      magistrateFullName: null,
      expertFullName: 'François Bouloré',
      status: 'TAXATION_COMPLEMENT',
      highlighted: false,
   },
];

export const mockExpertisesResponse = {
   _links: { self: { href: '/expertises' } },
   _embedded: {
      expertises: expertisesMock,
   },
};
