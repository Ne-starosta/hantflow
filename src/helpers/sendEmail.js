export function sendEmail (text, email) {
  const baseUrl = 'https://api.unisender.com/ru/api/sendEmail?format=json&api_key=61695smjxb8jcdcjeq3zu7prbzx55386xgtsanna'
  const emailTo = 'email=' + email
  const sender = 'sender_name=HuntFlow&sender_email=hantflow2022@gmail.com&subject=Sample+Subject'
  const text2 = 'body=' + text
  const url = baseUrl + '&' + emailTo + '&' + sender + '&' + text2 + '&list_id=1'
  fetch(url)
}

export function sendUpdatedStatus (id, email) {
  const text = {
    1: 'Вас внесли в систему в huntflow. Ваше резюме рассматривается руководством!',
    2: 'Вам необходимо пройти тестирование! Результаты отправьте своему рекрутеру! Удачи! https://drive.google.com/file/d/1PXAdPQIqqam4RoMuiNQ9QDhpYKMqzp-T/view?usp=sharing',
    3: 'Вы успешно прошли тестирование, в ближайшее время с Вами свяжется рекрутер для индивидуального разговора!',
    4: 'Вы успешно прошли предыдущие этапы. В ближайшее время у Вас будет собеседование с руководителем!',
    5: 'Вы успешно прошли предыдущие этапы! Теперь вас проверяет отдел ИБ!',
    6: 'Вы успешно прошли все предыдущие этапы! Теперь вам необходимо пройти мед. комиссию!',
    7: 'Вы успешно прошли предыдущие этапы! С вами свяжется hr для получения предложения о работе!',
    8: 'Вы приняты на работу! Поздравляем!',
    9: 'К сожалению, наша компания не готова вас принять!'
  }

  sendEmail(text[id], email)
}
