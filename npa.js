// Сгенерировано build_npa.py — руками не править.
window.NPA_GRAPH = {
 "meta": {
  "asof": "2026-09-24",
  "source": "лист «IFC к 16.10» рабочей таблицы проверок"
 },
 "sections": [
  {
   "key": "4.1",
   "short": "Форматы файлов",
   "title": "Требования к форматам файлов ЦИМ АГР"
  },
  {
   "key": "4.2",
   "short": "Юридическая значимость",
   "title": "Требования к обеспечению юридической значимости"
  },
  {
   "key": "4.3",
   "short": "Наименование файлов",
   "title": "Требования к наименованию файлов ЦИМ АГР"
  },
  {
   "key": "4.4",
   "short": "Наименование ведомости",
   "title": "Требования к наименованию ведомости ЦИМ АГР"
  },
  {
   "key": "4.5",
   "short": "Размер файлов",
   "title": "Требования к размеру файлов"
  },
  {
   "key": "4.6",
   "short": "Координация",
   "title": "Требования к координации ЦИМ АГР"
  },
  {
   "key": "4.7",
   "short": "Масштаб и единицы",
   "title": "Требования к масштабу и единицам измерения"
  },
  {
   "key": "4.8",
   "short": "Отметки, уровни, оси",
   "title": "Требования к отметкам, уровням и осям ЦИМ АГР"
  },
  {
   "key": "4.9",
   "short": "Элементы",
   "title": "Требования к элементам ЦИМ АГР"
  },
  {
   "key": "5.1",
   "short": "Общие к дисциплинарным ЦИМ",
   "title": "Общие требования к дисциплинарным ЦИМ"
  },
  {
   "key": "5.2",
   "short": "ЦИМ ПС",
   "title": "Требования к ЦИМ ПС"
  },
  {
   "key": "5.3",
   "short": "ЦИМ АР",
   "title": "Требования к ЦИМ АР"
  },
  {
   "key": "6.1",
   "short": "Аннотации",
   "title": "Требования к аннотациям ЦИМ АГР"
  },
  {
   "key": "6.2",
   "short": "Подготовка при экспорте",
   "title": "Требования к подготовке ЦИМ АГР при экспорте в формат открытой спецификации"
  },
  {
   "key": "6.3",
   "short": "Коллизии",
   "title": "Требования к отсутствию коллизий"
  },
  {
   "key": "7",
   "short": "ТЭП",
   "title": "Требования к технико-экономическим показателям"
  }
 ],
 "checks": [
  {
   "id": "IFC-01",
   "label": "IFC-01",
   "title": "Формат IFC4 ReferenceView, Файл в формате IFC SPF (.ifc)",
   "parts": [
    "Формат IFC4 ReferenceView, Файл в формате IFC SPF (.ifc)"
   ],
   "clauses": [
    "4.1.1",
    "4.1.2"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": false,
   "inModel": [
    "IFC-01"
   ],
   "ord": 0,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-96",
   "label": "IFC-96",
   "title": "Контейнер TRM",
   "parts": [
    "Контейнер TRM"
   ],
   "clauses": [
    "4.1.2"
   ],
   "sec": "4.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-96"
   ],
   "ord": 1,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-04",
   "label": "IFC-04",
   "title": "Схема IFC 4.0.2.1 или новее",
   "parts": [
    "Схема IFC 4.0.2.1 или новее"
   ],
   "clauses": [
    "4.1.3"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": true,
   "inModel": [
    "IFC-04"
   ],
   "ord": 2,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-03",
   "label": "IFC-03",
   "title": "Проверка на отсутствие элементов с одинаковой геометрией и положением",
   "parts": [
    "Проверка на отсутствие элементов с одинаковой геометрией и положением"
   ],
   "clauses": [
    "4.1.3.1"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-03"
   ],
   "ord": 3,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-93",
   "label": "IFC-93",
   "title": "Некорректная топология non-manifold geometry",
   "parts": [
    "Некорректная топология non-manifold geometry"
   ],
   "clauses": [
    "4.1.3.2"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-93"
   ],
   "ord": 4,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-94",
   "label": "IFC-94",
   "title": "Уникальность элементов (идентификаторы, одинаковые названия)",
   "parts": [
    "Уникальность элементов (идентификаторы, одинаковые названия)"
   ],
   "clauses": [
    "4.1.4.1"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": true,
   "inModel": [
    "IFC-94"
   ],
   "ord": 5,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-108",
   "label": "IFC-108",
   "title": "Атрибуты с одинаковыми\nназваниями ( групп с одинаковыми названиями и в группе не должно быть одинаковых названий)",
   "parts": [
    "Атрибуты с одинаковыми\nназваниями ( групп с одинаковыми названиями и в группе не должно быть одинаковых названий)"
   ],
   "clauses": [
    "4.1.4.2",
    "4.1.4.3"
   ],
   "sec": "4.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-108"
   ],
   "ord": 6,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-109",
   "label": "IFC-109",
   "title": "Правило именования значения атрибутов",
   "parts": [
    "Правило именования значения атрибутов"
   ],
   "clauses": [
    "4.1.4.4",
    "4.1.4.5"
   ],
   "sec": "4.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-109"
   ],
   "ord": 7,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-05",
   "label": "IFC-05",
   "title": "Наличие ведомости ЦИМ АГР в формате XML",
   "parts": [
    "Наличие ведомости ЦИМ АГР в формате XML"
   ],
   "clauses": [
    "4.1.5",
    "4.1.6",
    "4.4"
   ],
   "sec": "4.1",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": false,
   "inModel": [
    "IFC-05"
   ],
   "ord": 8,
   "side": "ved",
   "disc": ""
  },
  {
   "id": "IFC-11-19",
   "label": "IFC-11–19",
   "title": "Структура имени файла: Шифр вида объекта - Номер объекта (корпуса) - Номер подобъекта (секции) - Шифр ЦИМ - Шифр этапа",
   "parts": [
    "Структура имени файла: Шифр вида объекта - Номер объекта (корпуса) - Номер подобъекта (секции) - Шифр ЦИМ - Шифр этапа"
   ],
   "clauses": [
    "4.3.1",
    "4.3.1.1",
    "4.3.1.2",
    "4.3.1.3",
    "4.3.1.4",
    "4.3.1.5",
    "4.3.1.6"
   ],
   "sec": "4.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-11-19"
   ],
   "ord": 9,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-21-24",
   "label": "IFC-21–24",
   "title": "Координация дисциплинарных файлов между собой.",
   "parts": [
    "Координация дисциплинарных файлов между собой.",
    "Единая система координат, отметок и угла поворота. Что проверять: единая система координат и угол поворота.",
    "Что проверять: базовая точка — пересечение осей 1 и А, отметка 0,000.",
    "Привязка к фактическим координатам местности, местной СК МСК-77, проектному углу поворота объекта относительно истинного севера"
   ],
   "clauses": [
    "4.6.1",
    "4.6.2",
    "4.6.3",
    "4.6.4",
    "4.6.5"
   ],
   "sec": "4.6",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-21",
    "IFC-22",
    "IFC-23",
    "IFC-24"
   ],
   "ord": 10,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-25",
   "label": "IFC-25",
   "title": "Масштаб 1:1, метрическая система (мм, м², м³)",
   "parts": [
    "Масштаб 1:1, метрическая система (мм, м², м³)"
   ],
   "clauses": [
    "4.7.1"
   ],
   "sec": "4.7",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-25"
   ],
   "ord": 11,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-26",
   "label": "IFC-26",
   "title": "Соответствие количественных показателей фактической геометрии",
   "parts": [
    "Соответствие количественных показателей фактической геометрии"
   ],
   "clauses": [
    "4.7.2"
   ],
   "sec": "4.7",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-26"
   ],
   "ord": 12,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-27",
   "label": "IFC-27",
   "title": "Точность записи количественных показателей",
   "parts": [
    "Точность записи количественных показателей"
   ],
   "clauses": [
    "4.7.2"
   ],
   "sec": "4.7",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-27"
   ],
   "ord": 13,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-28",
   "label": "IFC-28",
   "title": "Уровни по проектным высотным положениям этажей",
   "parts": [
    "Уровни по проектным высотным положениям этажей"
   ],
   "clauses": [
    "4.8.1"
   ],
   "sec": "4.8",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-28"
   ],
   "ord": 14,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-29",
   "label": "IFC-29",
   "title": "Отметка 0.000: уровень чистого пола 1 этажа - рельеф",
   "parts": [
    "Отметка 0.000: уровень чистого пола 1 этажа - рельеф"
   ],
   "clauses": [
    "4.8.2"
   ],
   "sec": "4.8",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-29"
   ],
   "ord": 15,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-30",
   "label": "IFC-30",
   "title": "Моделирование уровней по отметке чистого пола",
   "parts": [
    "Моделирование уровней по отметке чистого пола"
   ],
   "clauses": [
    "4.8.3"
   ],
   "sec": "4.8",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-30"
   ],
   "ord": 16,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-35-39",
   "label": "IFC-35–39",
   "title": "Наименование уровня: `<секция>_<номер>_<наименование>_<назначение>_<отметка>`",
   "parts": [
    "Наименование уровня: `<секция>_<номер>_<наименование>_<назначение>_<отметка>`"
   ],
   "clauses": [
    "4.8.8"
   ],
   "sec": "4.8",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-35-39"
   ],
   "ord": 17,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-40-41",
   "label": "IFC-40/41",
   "title": "Сетка осей включена в модель",
   "parts": [
    "Сетка осей включена в модель"
   ],
   "clauses": [
    "4.8.10"
   ],
   "sec": "4.8",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-40-41"
   ],
   "ord": 18,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-42",
   "label": "IFC-42",
   "title": "Элементы в проектном положении, точные размеры.",
   "parts": [
    "Элементы в проектном положении, точные размеры."
   ],
   "clauses": [
    "4.9.1"
   ],
   "sec": "4.9",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-42"
   ],
   "ord": 19,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-43",
   "label": "IFC-43",
   "title": "Поэтажная разбивка: элементы привязаны к уровням",
   "parts": [
    "Поэтажная разбивка: элементы привязаны к уровням"
   ],
   "clauses": [
    "4.9.2"
   ],
   "sec": "4.9",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-43"
   ],
   "ord": 20,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-44",
   "label": "IFC-44",
   "title": "Все необходимые параметры заполнены",
   "parts": [
    "Все необходимые параметры заполнены"
   ],
   "clauses": [
    "4.9.3"
   ],
   "sec": "4.9",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": false,
   "inModel": [
    "IFC-44"
   ],
   "ord": 21,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-45",
   "label": "IFC-45",
   "title": "Состав ЦИМ АГР: ЦИМ ПС, ЦИМ АР",
   "parts": [
    "Состав ЦИМ АГР: ЦИМ ПС, ЦИМ АР"
   ],
   "clauses": [
    "5.1.1"
   ],
   "sec": "5.1",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": true,
   "inModel": [
    "IFC-45"
   ],
   "ord": 22,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-46",
   "label": "IFC-46",
   "title": "Разбиение по корпусам: 1 файл = 1 корпус",
   "parts": [
    "Разбиение по корпусам: 1 файл = 1 корпус"
   ],
   "clauses": [
    "5.1.2"
   ],
   "sec": "5.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": true,
   "inModel": [
    "IFC-46"
   ],
   "ord": 23,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-92",
   "label": "IFC-92",
   "title": "При разбиении на подобъекты/секции/этажи учитывать это в наименовании файла",
   "parts": [
    "При разбиении на подобъекты/секции/этажи учитывать это в наименовании файла"
   ],
   "clauses": [
    "5.1.3"
   ],
   "sec": "5.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-92"
   ],
   "ord": 24,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-72",
   "label": "IFC-72",
   "title": "Учитывать только RusSet_*",
   "parts": [
    "Учитывать только RusSet_*"
   ],
   "clauses": [
    "5.1.5"
   ],
   "sec": "5.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-72"
   ],
   "ord": 25,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-73",
   "label": "IFC-73",
   "title": "Атрибуты с RUS_, слитно",
   "parts": [
    "Атрибуты с RUS_, слитно"
   ],
   "clauses": [
    "5.1.7",
    "5.1.9"
   ],
   "sec": "5.1",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-73"
   ],
   "ord": 26,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-50",
   "label": "IFC-50",
   "title": "Проверка планировочного рельефа",
   "parts": [
    "Проверка планировочного рельефа"
   ],
   "clauses": [
    "5.2.2",
    "5.2.5",
    "5.2.6"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-50"
   ],
   "ord": 27,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-51",
   "label": "IFC-51",
   "title": "Проверка твердых покрытий, газона, площадок",
   "parts": [
    "Проверка твердых покрытий, газона, площадок"
   ],
   "clauses": [
    "5.2.2",
    "5.2.6"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-51"
   ],
   "ord": 28,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-52",
   "label": "IFC-52",
   "title": "Проверка функционального зонирования",
   "parts": [
    "Проверка функционального зонирования"
   ],
   "clauses": [
    "5.2.2",
    "5.2.7",
    "5.2.8"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-52"
   ],
   "ord": 29,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-97",
   "label": "IFC-97",
   "title": "Парковочные места в ЦИМ ПС",
   "parts": [
    "Парковочные места в ЦИМ ПС"
   ],
   "clauses": [
    "5.2.2",
    "5.2.14",
    "5.2.15",
    "5.2.16"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-97"
   ],
   "ord": 30,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-98",
   "label": "IFC-98",
   "title": "Пожарные проезды",
   "parts": [
    "Пожарные проезды"
   ],
   "clauses": [
    "5.2.2",
    "5.2.17"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-98"
   ],
   "ord": 31,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-47",
   "label": "IFC-47",
   "title": "ЦИМ ПС должна содержать: границы земельного участка",
   "parts": [
    "ЦИМ ПС должна содержать: границы земельного участка"
   ],
   "clauses": [
    "5.2.3"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-47"
   ],
   "ord": 32,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-101",
   "label": "IFC-101",
   "title": "Расчет площади поверхностей ЦИМ ПС по 2D-площади",
   "parts": [
    "Расчет площади поверхностей ЦИМ ПС по 2D-площади"
   ],
   "clauses": [
    "5.2.17"
   ],
   "sec": "5.2",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-101"
   ],
   "ord": 33,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-02",
   "label": "IFC-02",
   "title": "Соответствие классов IFC элементам из приложений",
   "parts": [
    "Соответствие классов IFC элементам из приложений"
   ],
   "clauses": [
    "5.2.18",
    "5.3.9"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-02"
   ],
   "ord": 34,
   "side": "",
   "disc": "both"
  },
  {
   "id": "IFC-109-b",
   "label": "IFC-109 (2)",
   "title": "IfcBuildingElementProxy для раздела ЦИМ ПС",
   "parts": [
    "IfcBuildingElementProxy для раздела ЦИМ ПС"
   ],
   "clauses": [
    "5.2.18"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [],
   "ord": 35,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-59",
   "label": "IFC-59",
   "title": "Атрибутивный состав ЦИМ ПС по приложению",
   "parts": [
    "Атрибутивный состав ЦИМ ПС по приложению"
   ],
   "clauses": [
    "5.2.19"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-59"
   ],
   "ord": 36,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-104",
   "label": "IFC-104",
   "title": "Этап проектирования: атрибут RUS_Stage (RusSet_Location) у элементов ЦИМ ПС и ЦИМ АР",
   "parts": [
    "Этап проектирования: атрибут RUS_Stage (RusSet_Location) у элементов ЦИМ ПС и ЦИМ АР"
   ],
   "clauses": [
    "5.2.23",
    "5.2.24",
    "5.2.25",
    "5.3.20",
    "5.3.21",
    "5.3.22"
   ],
   "sec": "5.2",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-104"
   ],
   "ord": 37,
   "side": "",
   "disc": "both"
  },
  {
   "id": "IFC-102",
   "label": "IFC-102",
   "title": "Минимальный атрибутивный состав для ЦИМ ПС, которых нет в приложении",
   "parts": [
    "Минимальный атрибутивный состав для ЦИМ ПС, которых нет в приложении"
   ],
   "clauses": [
    "5.2.25"
   ],
   "sec": "5.2",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": true,
   "inModel": [
    "IFC-102"
   ],
   "ord": 38,
   "side": "",
   "disc": "ps"
  },
  {
   "id": "IFC-60",
   "label": "IFC-60",
   "title": "Состав элементов ЦИМ АР по таблице",
   "parts": [
    "Состав элементов ЦИМ АР по таблице"
   ],
   "clauses": [
    "5.3.1",
    "5.3.9"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-60"
   ],
   "ord": 39,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-64",
   "label": "IFC-64",
   "title": "Атрибут `RUS_FNO` = \"Жилое здание\" / \"Нежилое здание\"",
   "parts": [
    "Атрибут `RUS_FNO` = \"Жилое здание\" / \"Нежилое здание\""
   ],
   "clauses": [
    "5.3.3"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": true,
   "dev": false,
   "inModel": [
    "IFC-64"
   ],
   "ord": 40,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-65-66",
   "label": "IFC-65/66",
   "title": "Зонирование IfcSpace для расчёта СПП в ГНС и общей площади",
   "parts": [
    "Зонирование IfcSpace для расчёта СПП в ГНС и общей площади"
   ],
   "clauses": [
    "5.3.4"
   ],
   "sec": "5.3",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-65-66"
   ],
   "ord": 41,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-68",
   "label": "IFC-68",
   "title": "Наружные ограждения: IfcCurtainWall / IfcMember+IfcPlate",
   "parts": [
    "Наружные ограждения: IfcCurtainWall / IfcMember+IfcPlate"
   ],
   "clauses": [
    "5.3.6"
   ],
   "sec": "5.3",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-68"
   ],
   "ord": 42,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-99",
   "label": "IFC-99",
   "title": "параметры ГЗК/ГПЗУ/ППТ для IfcSite",
   "parts": [
    "параметры ГЗК/ГПЗУ/ППТ для IfcSite"
   ],
   "clauses": [
    "5.3.6"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": true,
   "inModel": [
    "IFC-99"
   ],
   "ord": 43,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-107",
   "label": "IFC-107",
   "title": "Функциональные зоны по ГПЗУ: RUS_GPZU_Zone и RUS_GPZU_CodeZone у помещений и зон ЦИМ АР",
   "parts": [
    "Функциональные зоны по ГПЗУ: RUS_GPZU_Zone и RUS_GPZU_CodeZone у помещений и зон ЦИМ АР"
   ],
   "clauses": [
    "5.3.9",
    "5.3.10",
    "5.3.11"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-107"
   ],
   "ord": 44,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-70",
   "label": "IFC-70",
   "title": "Атрибутивный состав элементов ЦИМ АР по приложению",
   "parts": [
    "Атрибутивный состав элементов ЦИМ АР по приложению"
   ],
   "clauses": [
    "5.3.10"
   ],
   "sec": "5.3",
   "changed": false,
   "role": null,
   "analysis": true,
   "dev": true,
   "inModel": [
    "IFC-70"
   ],
   "ord": 45,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-106",
   "label": "IFC-106",
   "title": "Помещения квартир жилых объектов: атрибуты RUS_Group_Type, RUS_Group_Number, RUS_Number",
   "parts": [
    "Помещения квартир жилых объектов: атрибуты RUS_Group_Type, RUS_Group_Number, RUS_Number"
   ],
   "clauses": [
    "5.3.12"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-106"
   ],
   "ord": 46,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-71",
   "label": "IFC-71",
   "title": "Элементы ЦИМ АР, отсутствующие в приложении",
   "parts": [
    "Элементы ЦИМ АР, отсутствующие в приложении"
   ],
   "clauses": [
    "5.3.13"
   ],
   "sec": "5.3",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-71"
   ],
   "ord": 47,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-110",
   "label": "IFC-110",
   "title": "Моделирование наружних ограждающих конструкций",
   "parts": [
    "Моделирование наружних ограждающих конструкций"
   ],
   "clauses": [
    "5.3.14",
    "5.3.15"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [],
   "ord": 48,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-100",
   "label": "IFC-100",
   "title": "Машиноместа в подземном паркинге",
   "parts": [
    "Машиноместа в подземном паркинге"
   ],
   "clauses": [
    "5.3.16"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-100"
   ],
   "ord": 49,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-105",
   "label": "IFC-105",
   "title": "Информационные конструкции (вывески) в ЦИМ АР",
   "parts": [
    "Информационные конструкции (вывески) в ЦИМ АР"
   ],
   "clauses": [
    "5.3.18",
    "5.3.19"
   ],
   "sec": "5.3",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-105"
   ],
   "ord": 50,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-74",
   "label": "IFC-74",
   "title": "Проверка состава и формата передачи аннотаций",
   "parts": [
    "Проверка состава и формата передачи аннотаций"
   ],
   "clauses": [
    "6.1.2"
   ],
   "sec": "6.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [],
   "ord": 51,
   "side": "ved",
   "disc": ""
  },
  {
   "id": "IFC-75",
   "label": "IFC-75",
   "title": "Проверка идентификации и связности файлов аннотаций",
   "parts": [
    "Проверка идентификации и связности файлов аннотаций"
   ],
   "clauses": [
    "6.1.4"
   ],
   "sec": "6.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [],
   "ord": 52,
   "side": "ved",
   "disc": ""
  },
  {
   "id": "IFC-76",
   "label": "IFC-76",
   "title": "Проверка наименования проекций сечений ЦИМ АГР",
   "parts": [
    "Проверка наименования проекций сечений ЦИМ АГР"
   ],
   "clauses": [
    "6.1.6",
    "6.1.6.1",
    "6.1.6.2",
    "6.1.6.3",
    "6.1.6.4"
   ],
   "sec": "6.1",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [],
   "ord": 53,
   "side": "ved",
   "disc": ""
  },
  {
   "id": "IFC-86",
   "label": "IFC-86",
   "title": "Соответствие ЦИМ АГР и 2D-документации 1 этап - наличие файла dwg",
   "parts": [
    "Соответствие ЦИМ АГР и 2D-документации 1 этап - наличие файла dwg"
   ],
   "clauses": [
    "6.2.1"
   ],
   "sec": "6.2",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-86"
   ],
   "ord": 54,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-88",
   "label": "IFC-88",
   "title": "Отсутствие «висячих» элементов, точные примыкания, отсутствие коллизий",
   "parts": [
    "Отсутствие «висячих» элементов, точные примыкания, отсутствие коллизий"
   ],
   "clauses": [
    "6.2.1",
    "6.3.1",
    "6.3.4"
   ],
   "sec": "6.2",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-88-1",
    "IFC-88-2",
    "IFC-88-3"
   ],
   "ord": 55,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-95",
   "label": "IFC-95",
   "title": "Правила заполнения отсутствующих значений / коды МССК",
   "parts": [
    "Правила заполнения отсутствующих значений / коды МССК"
   ],
   "clauses": [
    "6.2.4",
    "6.2.5"
   ],
   "sec": "6.2",
   "changed": false,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-95"
   ],
   "ord": 56,
   "side": "",
   "disc": ""
  },
  {
   "id": "IFC-89-91",
   "label": "IFC-89–91",
   "title": "Возможность формирования ТЭП из данных ЦИМ АГР в соответствии с таблицей 7.1",
   "parts": [
    "Возможность формирования ТЭП из данных ЦИМ АГР в соответствии с таблицей 7.1"
   ],
   "clauses": [
    "7.1",
    "7.2",
    "7.3",
    "5.3.11"
   ],
   "sec": "7",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-89",
    "IFC-90",
    "IFC-91"
   ],
   "ord": 57,
   "side": "",
   "disc": "ar"
  },
  {
   "id": "IFC-103",
   "label": "IFC-103",
   "title": "Значение основных ТЭП в формате XML",
   "parts": [
    "Значение основных ТЭП в формате XML"
   ],
   "clauses": [
    "7.4"
   ],
   "sec": "7",
   "changed": true,
   "role": null,
   "analysis": false,
   "dev": false,
   "inModel": [
    "IFC-103"
   ],
   "ord": 58,
   "side": "",
   "disc": ""
  }
 ],
 "notes": [
  "IFC-109: номер встречается в таблице дважды — вторая строка (п. 5.2.18) показана как IFC-109 (2)",
  "IFC-111: строка 64 без номера пункта и описания — не показана"
 ]
};
