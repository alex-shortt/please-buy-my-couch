export function LinkGroup(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="inline-block mx-8 mb-8 flex-grow">
      <h2 className="font-bold text-lg text-gray-500 mb-2">{props.title}</h2>
      <div className="font-light text-md text-gray-500 leading-7 flex flex-col">
        {props.children}
      </div>
    </div>
  );
}
