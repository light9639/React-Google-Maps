# 🗺️ React-Google-Maps/api 라이브러리를 이용하여 만든 예제입니다.

![127 0 0 1_5173_ (1)](https://user-images.githubusercontent.com/95972251/217141072-3dcae7e8-3a4f-44e3-9792-757e2e9ad218.png)

:sparkles: 🗺️ React-Google-Maps/api 라이브러리를 이용하여 만든 예제입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## ✈️ 구글 맵 키 발급 후, @react-google-maps/api 설치
- 우선 구글 맵 키를 <a href="https://webruden.tistory.com/378">사이트</a>를 참고하여 발급 후 `.env` 파일에 새팅한다.
```javascript
VITE_GOOGLE_KEY={발급받은 키 입력}
```
- `.env` 파일 작성을 완료하였다면, `@react-google-maps/api` 설치하기
```bash
$ npm install @react-google-maps/api
# or
$ yarn add @react-google-maps/api
```
## ✒️ App.tsx, App.css 수정 및 작성
### ⚡ App.tsx
- `components` 파일 속 `MyComponent.tsx`를 `import`한 후 컴포넌트를 App안에 넣으면 된다.
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
### ⚡ App.css
- `#root`의 CSS를 설정해준다.
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
}
```
## 📝 MyComponent.tsx 수정 및 작성
### ⚡ MyComponent.tsx 
- `@react-google-maps/api`의 여러 설정들을 `import`한다.
- `GoogleMap` 안에 여러 설정들을 넣어서 작성한다. 작성법은 <a href="https://www.npmjs.com/package/@react-google-maps/api">Npm 문서</a>를 참고한다.
- `React.memo`를 이용하여 변경시에만 작동하도록 설정한다.
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
