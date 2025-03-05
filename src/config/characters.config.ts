export const characterMap: { [key: string]: number[] } = {
  'A': [0x7F, 0x63, 0x63, 0x7F, 0x63, 0x63, 0x63],
  'H': [0x63, 0x63, 0x63, 0x7F, 0x63, 0x63, 0x63],
  '†': [0x1C, 0x7F, 0x7F, 0x7F, 0x1C, 0x1C, 0x1C],
  '+': [0x1C, 0x1C, 0x7F, 0x7F, 0x7F, 0x1C, 0x1C],
  'S': [0x7F, 0x7F, 0x60, 0x7F, 0x3, 0x7F, 0x7F]
};

export type ICalendarCharacter = keyof typeof characterMap;
