// import React from "react";

// // 변수를 선언할 때 타입을 주는 방법
// // 변수 오른편에 : 쓰고 타입을 적어주면 됨
// // 예시 const 변수: string='my variable'

// import { useState } from "react";
// const App = () => {
//   const [value, setValue] = useState<string>("");
//   const [number, setNumber] = useState<number>(0);
//   // '0'=>숫자가 아니기 때문에 숫자로 하는 연산이 불가능 함
//   return (
//     <div>
//       <h1>App</h1>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default App;

// //props-drilling 값에 타입 주는 법
// //오브젝트에서 바로 값을 꺼내오는 것을 de-structure
// //{} 오른편에 :{값을 선택해서 :타입을 지정}
// //예시 {text}:{text:string}
// // const Item = ({ text }: { text: string }) => {
// //   return <p>{text}</p>;
// // };

import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export interface Todo {
  text: string;
  id: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "learn React in Typescript", id: "123" },
  ]);

  return (
    <div>
      <h1>App</h1>
      <TodoForm
        onSubmit={(newTodo) => {
          setTodos((prev) => [newTodo, ...prev]);
          alert("추가되었습니다.");
        }}
      />

      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              payload={todo}
              index={index}
              onDelete={() => {
                setTodos((prev) => prev.filter((item) => item.id !== todo.id));
                alert("삭제되었습니다");
              }}
              onUpdate={(newTodo) => {
                setTodos((prev) =>
                  prev.map((item) => (item.id === newTodo.id ? newTodo : item))
                );
                alert("수정되었습니다");
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
