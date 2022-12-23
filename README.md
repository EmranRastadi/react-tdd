
A modern, beautiful, customizable date picker for React.

## Installation 🚀
```bash
npm i @emranrastadi/react-modern-calendar-datepicker

# or if you prefer Yarn:
yarn add @emranrastadi/react-modern-calendar-datepicker
```

## new parameter for time picker
You can add this for active or deactive time-picker in calendar
 ```bash
  enableTime={true|false}
```
After enable time-picker , if you want to use range date , you can send `fromTime` and `toTime` with look likes value `19:17` to default value with `from` and `to` date. 
After select time with day , we will give you an object with four key and values :
```
{
  from : {
    year : 1398,
    month: 9,
    day: 21
  },
  to : {
    year : 1398,
    month: 9,
    day: 28
  },
  fromTime : '21:18',
  toTime: '18:18`
}
```
## Documentation 📄
You can find documentation on [the website.](https://kiarash-z.github.io/react-modern-calendar-datepicker/)

The documentation is divided into several sections:
- [Getting Started](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/getting-started)
- [Core Concepts](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/core-concepts)
- [Default Values](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/default-values)
- [Minimum & Maximum Date](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/minimum-maximum-date)
- [Disabled Days](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/disabled-days)
- [Customization](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/customization)
- [Responsive Guide](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/responsive-guide)
- [Utilities](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/utilities)
- [Different Locales](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/different-locales)
- [TypeScript](https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/typescript)

## LICENSE

[MIT](LICENSE)
