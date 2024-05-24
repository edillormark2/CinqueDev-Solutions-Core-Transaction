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

export const teams = [
  'Web Developer Team 1',
  'Web Developer Team 2',
  'Mobile Developer Team 1',
  'Mobile Developer Team 2',
  'Desktop Developer Team 1',
  'Desktop Developer Team 2',
]