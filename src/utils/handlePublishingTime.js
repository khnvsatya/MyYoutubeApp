function handlePublishingTime(publishedTime) {
  let publishedAgo = 0;
  const publishedAt = new Date(publishedTime);
  const TodayDate = new Date();

  let DayDiff = TodayDate.getDate() - publishedAt.getDate();
  let monthDiff = TodayDate.getMonth() - publishedAt.getMonth();
  let yearDiff = TodayDate.getFullYear() - publishedAt.getFullYear();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  publishedAgo =
    yearDiff > 0
      ? `${yearDiff} ${yearDiff < 2 ? `year` : `years`}`
      : monthDiff > 0
      ? `${monthDiff} ${monthDiff < 2 ? `month` : `months`}`
      : `${DayDiff} ${DayDiff < 2 ? `day` : `days`}`;

  return publishedAgo;
}

export default handlePublishingTime;
