import dayjs from 'dayjs'

export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d)
  return date.format('YYYY 年 M 月 D 日 dddd')
}
