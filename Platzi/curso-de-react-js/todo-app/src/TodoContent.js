import { TodoSearch } from "./TodoSearch";

function TodoContent({ children }){
  return (
    <section className="content_box">
      {children}
    </section>
  );
}

export {
  TodoContent,
}