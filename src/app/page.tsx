import Details, { DetailPair } from "@/app/details";
import Video from "@/app/video";

export default function Home() {
  const sectionClass = "py-8 max-w-4xl mx-auto";

  return (
    <div className="bg-gray-100 min-h-full">
      <div id="top" className={sectionClass}>
        <section id="title" className="mb-8">
          <h1 className="text-4xl text-center">PleaseBuyMyCouch.com</h1>
        </section>
      </div>
      <section id="product-view">
        <Video />
      </section>
      <div id="bottom" className={sectionClass}>
        <section id="product-info" className="mt-12 text-center">
          <h2 className="text-2xl">Victorian Couch</h2>
          <p className="text-gray-400 text-md">Ships to SF Bay Area Only</p>
          <h2 className="text-2xl">Only $250</h2>
          <button className="max-w-lg w-full mx-2 mt-4 py-4 text-xl bg-gray-200">
            Buy
          </button>
        </section>
        <section id="product-specs" className="mt-12 ">
          <Details title="Product Specifications">
            <DetailPair title="Upholstery">Canvas</DetailPair>
            <DetailPair title="Suspension Type">
              Some sort of spring thing
            </DetailPair>
            <DetailPair title="Sizing">Big</DetailPair>
            <DetailPair title="Fun Fact">
              The upholstery was misprinted ot be inside out. Still looks great
              but now has a very unique design.
            </DetailPair>
          </Details>
          <Details title="Frequently Asked Questions">
            <DetailPair title="How does the product preview look so realistic?">
              This is a rendered NeRF created by{" "}
              <a href="https://twitter.com/muse_place" className="underline">
                Muse
              </a>
            </DetailPair>
            <DetailPair title="Why is such a sick couch so cheap?">
              {"I got a new couch that's even sicker"}
            </DetailPair>
            <DetailPair title="How does shipping work?">
              {
                "Upon purchase we will reach out to deliver it right to your doorstep. SF Bay Area only."
              }
            </DetailPair>
            <DetailPair title="Is Sacramento the Bay?">No.</DetailPair>
            <DetailPair title="Can I buy your couch?">
              Yes, please do!
            </DetailPair>
          </Details>
        </section>
        <div className="w-full h-0.5 bg-gray-600 mb-2" />
        <section id="you-may-also-like">
          <h2 className="text-2xl text-center">YOU MAY ALSO LIKE</h2>
        </section>
        <div className="w-full h-0.5 bg-gray-600 mb-2" />
        <section id="you-may-also-like">
          <h2 className="text-2xl text-center">socials</h2>
        </section>
      </div>
    </div>
  );
}
