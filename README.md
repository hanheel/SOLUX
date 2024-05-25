


## createBrowserRouter example

* **createBrowserRouter란** : React Router v6에서 새롭게 도입된 API 중 하나로, 라우터 객체를 생성하는 데 사용


  
* **장점** : routing 설정의 간결
  > 1) 기존의 중첩된 구조의 라우팅은 가독성이 떨어지나, createBrowserRouter은 라우터 구성을 객체 형태로 선언할 수 있게 하여 훨씬 간결하며 가독성이 좋음
  > 2) 라우팅 처리를 독립적인 파일로 제작하여 다룰 수 있음, App 파일의 복잡성이 줄어듦



* **설명**
1) router 객체 생성 : 어떤 주소에 어떤 파일을 연결할 것인가? 어떤 계층 구조를 갖게 할 것인가?


   ![image](https://github.com/hanheel/SOLUX/assets/168459001/02679aaa-8edf-4b44-ab57-739bdf6df6b0)

  * 메인페이지('/'): App.jsx
  * '/button1' : 해당 주소로 이동 시 Button1 컴포넌트를 렌더링
  * '/button2' : 해당 주소로 이동 시 Button2 컴포넌트를 렌더링

2) RouterProvider : RouterProvider 하위 컴포넌트들은 모두 해당 라우팅에 영향을 받는
   위에서 정의한 router 객체를 router 속성에 할당해준다
   (main 컴포넌트, App 컴포넌트 어디에 RouterProvider를 할당해도 상관 없다)


   ![image](https://github.com/hanheel/SOLUX/assets/168459001/0a31feb0-d4b1-4406-a9b0-ea6c1016004d)


3) Link를 통해 해당 주소로 이동하기 위한 도구를 생성해 준다 (기존 라우팅과 동일)

   
  ![image](https://github.com/hanheel/SOLUX/assets/168459001/04463b38-26e4-433b-b086-1c829a27bb48)
  * button1 이라는 버튼을 누르면 '/button1' 주소로 이동
  * button2 라는 버튼을 누르면 '/button2' 주소로 이동
  * button3 이라는 버튼을 누르면 'page' 주소로 이동


4) Outlet : 상위 컴포넌트를 UI에 그대로 보여주는 상태에서 하위 컴포넌트만 렌더링
    * router 객체에서 App 컴포넌트 하위에 Button1, Button2 컴포넌트가 위치해 있음
    * App 컴포넌트에 있는 Header와 button1, button2는 그대로 UI에 있으면서 **'아래쪽 빈 부분'**에 하위 컴포넌트에 해당하는 UI가 렌더링 됨
    * button1을 누르면 Button1 컴포넌트가 App 컴포넌트 UI 밑에 렌더링
    * button2를 누르면 Button2 컴포넌트가 App 컴포넌트 UI 밑에 렌더링
      
  Uploading Vite + React - Chrome 2024-05-25 15-31-06.mp4…
https://github.com/hanheel/SOLUX/assets/168459001/ea86118e-491c-4cc8-bc50-d569f82b9950

**'Page' 컴포넌트는 App의 하위 컴포넌트가 아니며 동일한 계층을 가지므로 App 하단에 렌더링 되는 게 아니라 전혀 다른 새로운 페이지로 이동된다**

 
