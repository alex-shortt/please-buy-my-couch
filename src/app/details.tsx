export default function Details(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-xl mx-auto my-16">
      <h1 className="text-xl text-gray-600">{props.title}</h1>
      <div className="w-full h-0.5 bg-gray-600 mb-2" />
      {props.children}
    </div>
  );
}

export function DetailPair(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-md leading-5 mb-2">
      <p className="font-bold">{props.title}</p>
      <p className="text-gray-500">{props.children}</p>
    </div>
  );
}
