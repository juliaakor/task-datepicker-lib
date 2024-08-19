export interface HolidaysResponse {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: [
    {
      language: string;
      text: string;
    },
  ];
  nationwide: true;
}
