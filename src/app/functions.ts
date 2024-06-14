export function hasMonthName(numberM: number) {
  return months[numberM - 1];
}

export function convertMonthName(postsMonths: any[]): string[] {
  let monthName: string[] = [];
  postsMonths.forEach((numberM) => {
    let nameM: string = hasMonthName(numberM);
    monthName.push(nameM);
  });
  console.log(monthName);
  return monthName;
}

export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
