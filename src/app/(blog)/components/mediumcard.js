

export default function MediumCard({img, title}) {

  return (
    <div className="cursor-pointer hover:scale-105 lg:hover:scale-[1.01] transition duration-200">
      <div
        className="relative h-80 w-80"
        onClick={() => console.log('The click was triggered')}
      >
        {/* <Image src={img} layout="fill" className="rounded-xl" /> */}
        <div className="h-full w-full rounded-xl bg-gray-50" />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export { MediumCard };