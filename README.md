# Gravas

## Transations

### Adding a new translation namespace.

1. Create a file `[namespace].json` (e.g. `navbar.json`) under each of the languages in `static/locales/`.
2. Go to the page-level component that will display the translations either inside of it directly or in one of it's component children and set the following

```javascript
const Index = () => {
    ...
}

// this ensures that the page and any it's children can use this translation namespace
Index.getInitialProps = ( async () => ({
    namespacesRequired: ['navbar']
}))

```

3. Go to the component that will output the translations and set the following

```javascript

//import HOC (Higher order component) for translations
import { withTranslation } from '../../i18n'

//since the export below is wrapped in the HOC, we 
//have acess to the prop "t" (short for translate)
const Navbar = ({ t }) => { 
    ...
    return (
        <div>{ t('my_translation_key')}</div> 
        //Will give <div>Translation</div>
    )
}

//wrap component in the HOC and indicate the translation namespace
export default withTranslation('navbar')(Navbar)

```

### Access current language
In order to access the currently set language do the following

```javascript

import { i18n } from '../i18n'
...

const Test = () => (
    <div>{i18n.language}</div> //<div>lv</div>
)
```

### Set language

```javascript
import { i18n } from '../i18n'

...

const Test = () => (
    //will change language to 'lv' when pressed
    <button onClick={() => i18n.changeLanguage('lv')}></button>
)
```

### Passing arguments to translations

Set the following in your translation file:

```json
{
    "key": "this is my translation string with {{some_variable_name}}"
}
```

and, use it like this in your component:

```javascript
t('key', { some_variable_name: "some custom value" })
//Will result in "this is my translation string with some custom value"
```

### Pluralization

To pluralize your translations conditionally, set the following in your translation file:
```json
{
  "key": "item",
  "key_plural": "items",
  "keyWithCount": "{{count}} item",
  "keyWithCount_plural": "{{count}} items"
}
```
and, use it like this in your component:

```javascript
t('key', { count: 1 }) // "item"
t('key', { count: 55 }) // "items"
t('keyWithCount', { count: 1 }) // "1 item"
t('keyWithCount', { count: 100 }) // "100 items"
```