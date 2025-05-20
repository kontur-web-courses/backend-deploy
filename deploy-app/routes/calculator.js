var express = require('express');
var router = express.Router();

router.get('/sum/:numbers*', function (req, res, next) {
    // Получаем часть URL после '/add/'
    const numbersPart = req.params.numbers + (req.params[0] || '');

    // Разбиваем на отдельные числа
    const numbers = numbersPart.split('/').map(Number);

    // Проверяем, что все элементы - числа
    if (numbers.some(isNaN)) {
        return res.status(400).send('All parameters must be numbers');
    }

    // Суммируем числа
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Отправляем результат
    res.send(`The sum is: ${sum}`);
});

module.exports = router;