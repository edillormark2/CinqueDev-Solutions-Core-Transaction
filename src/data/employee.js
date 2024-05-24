import { randFullName } from "@ngneat/falso"

export function generateEmployee(count) {
  if (typeof count !== 'number' || count <= 0) {
    throw new Error('Invalid count: Please provide a positive integer.');
  }

  return Array.from({ length: count }, () => ({
    name: randFullName({ withAccents: false }),
  }));
}

export const employees = [
  'Mark Daniel Edillor',
  'Ricardo Aron III',
  'Mark Angelo Alde',
  'Matt Franky Boneo',
  'Julian Jules Pardi'
]

export const developerTeams = [
  "Alpha Developer Team",
  "Bravo Developer Team",
  "Charlie Developer Team",
  "Delta Developer Team",
  "Echo Developer Team",
  "Foxtrot Developer Team",
  "Golf Developer Team",
  "Hotel Developer Team",
  "India Developer Team",
  "Juliet Developer Team"
];