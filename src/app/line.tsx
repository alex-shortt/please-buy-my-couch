export function BigLine() {
    const spacing = "mt-24 mb-32"

  return (
    <>
      <div className={"absolute left-0 w-full h-0.5 bg-gray-600 " + spacing} />
      <div className={"w-full h-0.5 opacity-0 " + spacing} />
    </>
  );
}
