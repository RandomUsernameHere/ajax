# ajax

AJAX клиент без зависимостей на чистом JS

## Использование

```javascript

let Ajax = Web136Ajax();

Ajax.request({
    url: URL.url
})
    .then(function (data, xhr) {
        console.info("%c Запрос успешно выполнен", "color: green;");
    })
    .catch(function (errorText, xhr) {
        console.error('Проблема при отправке запроса: ' + errorText);
    });

```

## Погружаемся глубже

Библиотека служит оберткой над объектом ```XMLHttpRequest```, смысл в том,
что при выполнении запросов возвращается ```Promise```.

## Методы

### request

```javascript
/**
 * @param options {Object}
 * @return {Promise}
 * */

Web136Ajax.request(options)
```

Принимает объект параметров запроса ```options```, возвращает ```Promise```.

Значения по умолчанию

```javascript
options = {
    method: 'get',
    url: '', //url  может быть как строкой так и объектом URL.  Последний позволяет кодировать параметры
    withCredentials: false,
    async: true,
    timeout: 1000,
    responseType: "",
    data: {}
};
```
