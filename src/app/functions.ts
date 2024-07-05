export function hasMonthName(numberM: number) {
  return months[numberM - 1];
}

export function convertMonthName(postsMonths: any[]): string[] {
  let monthName: string[] = [];
  postsMonths.forEach((numberM) => {
    let nameM: string = hasMonthName(numberM);
    monthName.push(nameM);
  });
  return monthName;
}

export function convertDateToString(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
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

export const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

