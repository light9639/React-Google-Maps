# ๐บ๏ธ React-Google-Maps/api ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์์ ์๋๋ค.

![127 0 0 1_5173_ (1)](https://user-images.githubusercontent.com/95972251/217141072-3dcae7e8-3a4f-44e3-9792-757e2e9ad218.png)

:sparkles: ๐บ๏ธ React-Google-Maps/api ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์์ ์๋๋ค. :sparkles:
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt-SWC ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## โ๏ธ ๊ตฌ๊ธ ๋งต ํค ๋ฐ๊ธ ํ, @react-google-maps/api ์ค์น
- ์ฐ์  ๊ตฌ๊ธ ๋งต ํค๋ฅผ <a href="https://webruden.tistory.com/378">์ฌ์ดํธ</a>๋ฅผ ์ฐธ๊ณ ํ์ฌ ๋ฐ๊ธ ํ `.env` ํ์ผ์ ์ํํ๋ค.
```javascript
VITE_GOOGLE_KEY={๋ฐ๊ธ๋ฐ์ ํค ์๋ ฅ}
```
- `.env` ํ์ผ ์์ฑ์ ์๋ฃํ์๋ค๋ฉด, `@react-google-maps/api` ์ค์นํ๊ธฐ
```bash
$ npm install @react-google-maps/api
# or
$ yarn add @react-google-maps/api
```
## โ๏ธ App.tsx, App.css ์์  ๋ฐ ์์ฑ
### โก App.tsx
- `components` ํ์ผ ์ `MyComponent.tsx`๋ฅผ `import`ํ ํ ์ปดํฌ๋ํธ๋ฅผ App์์ ๋ฃ์ผ๋ฉด ๋๋ค.
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './components/MyComponent'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className='Top'>
        <img src="https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg" alt="Img" />
        <h1>React Google Maps</h1>
      </div>
      <MyComponent />
    </div>
  )
}
```
### โก App.css
- `#root`์ CSS๋ฅผ ์ค์ ํด์ค๋ค.
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
}
```
## ๐ MyComponent.tsx ์์  ๋ฐ ์์ฑ
### โก MyComponent.tsx 
- `@react-google-maps/api`์ ์ฌ๋ฌ ์ค์ ๋ค์ `import`ํ๋ค.
- `GoogleMap` ์์ ์ฌ๋ฌ ์ค์ ๋ค์ ๋ฃ์ด์ ์์ฑํ๋ค. ์์ฑ๋ฒ์ <a href="https://www.npmjs.com/package/@react-google-maps/api">Npm ๋ฌธ์</a>๋ฅผ ์ฐธ๊ณ ํ๋ค.
- `React.memo`๋ฅผ ์ด์ฉํ์ฌ ๋ณ๊ฒฝ์์๋ง ์๋ํ๋๋ก ์ค์ ํ๋ค.
```typescript
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '650px'
};

const center = {
  lat: 37.5649867,
  lng: 126.985575
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
```
## ๐ ์ถ์ฒ
- <a href="https://www.npmjs.com/package/@react-google-maps/api">@react-google-maps/api</a>
- <a href="https://www.hyeonjun.com/react-google-map-api">React์์ Google Map API ์ฌ์ฉํ๊ธฐ</a>
