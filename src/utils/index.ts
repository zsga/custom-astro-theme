import config from 'config'

const dateFormat = new Intl.DateTimeFormat(
  config.date.locale,
  config.date.options,
)

export function formatDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
) {
  if (typeof options !== 'undefined') {
    return new Date(date).toLocaleDateString(config.date.locale, {
      ...(config.date.options as Intl.DateTimeFormatOptions),
      ...options,
    })
  }

  return dateFormat.format(new Date(date))
}
