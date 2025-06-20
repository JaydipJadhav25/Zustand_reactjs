import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//  Interfaces
interface Counter {
  count: number;
  status: string | null;
  addCount: () => void;
  showCount: () => number;
  checkOddOrEven: () => void;
  addNumber: (num: number) => void;
  reset: () => void;
}

interface Todo {
  id: string;
  name: string;
}

interface Todos {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

// Define the complete state
type StoreState = Counter & Todos;

//  Correct generic for Zustand with middleware
export const useCounter = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        count: 0,
        status: "even",
        todos: [],

        showCount: () => get().count,

        addCount: () => set((state) => ({ count: state.count + 1 })),

        checkOddOrEven: () => {
          const current = get().count;
          set({ status: current % 2 === 0 ? "even" : "odd" });
        },

        addNumber: (num: number) => {
          set((state) => ({ count: state.count + num }));
        },

        reset: () => set({ count: 0 }),

        addTodo: (todo: Todo) => {
          set((state) => ({ todos: [...state.todos, todo] }));
        },
      }),
      {
        name: "counter-storage", // Required for persist
      }
    )
  )
);









// import { create } from "zustand";
// import {devtools , persist} from "zustand/middleware"



// //  Interface to define the shape of the store
// interface Counter {
//   count: number;
//   status : string | null;
//   addCount: () => void;
//   showCount: () => void;
//   checkOddOrEven : () =>void;
//   addNumber : (num : number) => void;
//   reset : () =>void;
// }
// interface Todo {
//   id : string;
//   name : string;
// }

// interface Todos{
//   todos : Todo[],
//   addTodo : (todo : Todo) => void;

// }


// // ✅ Define the complete state
// type StoreState = Counter & Todos;


// // Zustand store using TypeScript and typed state
// export const useCounter = create<StoreState>(
//   devtools(
//       persist(
//         (set , get) => ({
//   count: 0,
//   status : "even",
//   todos : [],

//   showCount : ()=>{ 
//   const current = get().count;
//   // console.log("counte is : " , current)
// return current;
//   },

//   // Correct function to update the count
//   addCount: () => set((state) => ({ count: state.count + 1 })),

//   checkOddOrEven : ()=>{
//       const current = get().count;
   
//       if(current %2 == 0){
        
//         set({status : "even"});
       
//       }else{
//         set({status : "odd"});
//       }
       
//   },
//   addNumber : (num :number) =>{
//     set((state) =>({count : state.count+num }))
//   },
//   reset : () =>set({count : 0}),

//   //todo
//   addTodo : (todo : Todo) =>{
//     set((state) => ({todos : [...state.todos, todo]}))
//   },
 
// })
//  ,
//   {
//     name : "zustand-store"
//   }
//       )
//   )
// );





