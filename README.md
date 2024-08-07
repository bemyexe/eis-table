# Readme

### Project

- housing and utilities service table
- [https://eis-table.netlify.app/](https://eis-table.netlify.app/)

### Stack
- React + Typescript
- Mobx + Mobx-state-tree
- TanStack React Query, REST
- rc-table
- CSS
- ESLint + Prettier
- Vite

### Tech task
- [FIGMA](https://www.figma.com/design/gxVXNv5MEY8RQ1KXRVvkUT/%D0%A2%D0%B5%D1%81%D1%82-(%D1%84%D1%80%D0%BE%D0%BD%D1%82)?node-id=0-1&t=4r5zEMeitjkW88uI-0)
<details>
<summary>More details:</summary>
Создать приложение для отображения списка счётчиков горячей и холодной воды.<br/>
1. Список счётчиков.<br/>
Счётчики получать запросом GET http://showroom.eis24.me/api/v4/test/meters/<br/>
Параметры limit=20 и offset (выводить по 20 на страницу).<br/>
Данные должны выводиться на странице с внутренним скроллом
(«шапка» фиксированная, табличка скроллится внутри).<br/>
Колонки:<br/>
1. Порядковый номер.<br/>
2. Тип (ColdWaterAreaMeter — ХВС, HotWaterAreaMeter — ГВС).<br/>
3. Дата установки в формате дд.мм.гггг.<br/>
4. Автоматический ли он (is_automatic).<br/>
5. Значение (initial_values).<br/>
6. Адреc.<br/>
7. Примечание (description).<br/>
2. Адрес счётчика.<br/>
Адреса получать параллельным запросом<br/>
GET http://showroom.eis24.me/api/v4/test/areas/ с параметром списка айди id__in.<br/>
Продумать оптимизацию, не запрашивать уже известные адреса.<br/>
Выводить улицу, дом, номер квартиры.<br/>
3. Удаление счётчика.<br/>
При наведении на строку должна появляться кнопка удаления, инициирующая
удаление счётчика (DELETE http://showroom.eis24.me/api/v4/test/meters/:meterId/).<br/>
На странице при этом всегда должно оставаться 20 элементов.<br/>
Стек технологий:<br/>
Использовать React, TypeScript, mobx-state-tree — обязательно,
styled-components — по желанию.

</details>
