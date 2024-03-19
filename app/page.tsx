import Image from "next/image";
import { Input } from "postcss";

export default function Home() {

  return (
    <main className="font-sans max-w-500 mx-auto px-4">
{/*        ////////////another way//////////////////////////////////////////////

     <div className="flex flex-row items-end gap-6 w-96 my-10 center">
  <div className="relative w-full min-w-[200px]">
    <textarea
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "></textarea>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Enter task
    </label>
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enter</button> 

 </div> */}

<div className="text-center text-4xl font-bold mb-5 text-purple-600">Saksham's Todo List</div> 
<div className="flex items-center mb-5">
<input className="text-lg p-2 mr-2 flex-grow border border-gray-300 rounded" placeholder="Add item..."/> 
<button className="text-lg px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">ADD </button> 
</div>

</main>
  );
}
