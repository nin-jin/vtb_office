# ВТБ Офис

Ближайшее отделение ВТБ всегда рядом

## Окружение разработчика

Открываем гитпод: [![Gitpod Online Dev Workspace](https://img.shields.io/badge/Gitpod-Online--Dev--Workspace-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hyoo-ru/mam)

Соглашаемся на установку плагинов, и окружение развёрнуто.

Либо можно вручную развернуть локально [по инструкции](https://mol.hyoo.ru/#!section=docs/=yr3qrg_z2908a).

## Где код

- Неймспейс: $vtb лежит в [/vtb/](.)
- Приложение: $vtb_office лежит в [/vtb/office/](./office/)

## Зависимости
 - [$mol](https://mol.hyoo.ru) - наш микромодулный набор библиотек
 - [$hyoo_map](https://map.hyoo.ru) - наш картографический сервис

## Деплой

Деплоится всё само при пуше в масте благодаря [GitHub Workwlow](./.github/workflows/vtb_office.yml).

Локально же сбилдить можно так: `yarn start vtb/office`

## Документация

- [Модульная система](https://mol.hyoo.ru/#!section=docs/=icaxzk_7m3n3b)
- [Реактивная система](https://mol.hyoo.ru/#!section=docs/=yj0h42_ixzv4p)
- [Композиция компонент](https://mol.hyoo.ru/#!section=docs/=vv2nig_s5zr0f)
- [Стилизация компонент](https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg)
