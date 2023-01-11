const dateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZone: "Asia/Seoul",
} as Intl.DateTimeFormatOptions;

const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", dateTimeOptions);

export default dateTimeFormatter;
