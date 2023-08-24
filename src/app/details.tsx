export default function Details(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-3xl px-8 mx-auto my-16">
      <h1 className="text-xl text-gray-800">{props.title}</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-2" />
      {props.children}
    </div>
  );
}

export function DetailPair(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-base leading-6 mb-4">
      <p className="font-bold text-gray-600">{props.title}</p>
      <p className="text-gray-500 ml-2">{props.children}</p>
    </div>
  );
}
