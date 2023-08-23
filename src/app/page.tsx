import Details, { DetailPair } from "@/app/details";
import Video from "@/app/video";
import Carousel from "@/app/carousel";
import { PRICE_STR } from "@/app/config";
import { BigLine } from "@/app/line";
import { LinkGroup } from "@/app/links";
import Image from "next/image";

export default function Home() {
  const navbarheight = "24";

  return (
    <div className="bg-gray-100 min-h-full overflow-x-hidden">
      <section
        id="top"
        className={`fixed w-full top-0 left-0 z-50 bg-gray-100 h-${navbarheight} drop-shadow-xl`}
      >
        <Image
          alt="PleasBuyMyCouch.com"
          src="/wordart.png"
          className="w-full h-full object-contain max-w-2xl mx-auto"
          width={2048}
          height={281}
        />
      </section>
      <section id="product-view" className={`mt-${navbarheight}`}>
        <Video />
      </section>
      <div id="bottom" className="py-8 max-w-4xl mx-auto">
        <section id="product-info" className="mt-12 text-center">
          <h2 className="text-2xl">Victorian Couch</h2>
          <p className="text-gray-400 text-md">Ships to SF Bay Area Only</p>
          <h2 className="text-2xl">Only {PRICE_STR}</h2>
          <button className="max-w-lg w-[80%] mx-2 mt-4 py-4 text-xl bg-gray-200">
            Buy
          </button>
        </section>
        <br />
        <section id="product-specs" className="mt-12 ">
          <Details title="Product Specifications">
            <DetailPair title="Upholstery">Canvas</DetailPair>
            <DetailPair title="Suspension Type">
              Some sort of spring thing
            </DetailPair>
            <DetailPair title="Sizing">Big</DetailPair>
            <DetailPair title="Fun Fact">
              The upholstery was misprinted to be inside out. Still looks great
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
        <BigLine />
        <section id="you-may-also-like">
          <h2 className="text-2xl text-center font-thin">YOU MAY ALSO LIKE</h2>
          <br />
          <br />
          <Carousel />
        </section>
        <BigLine />
        <section className="links flex flex-wrap mx-auto">
          <LinkGroup title="Resources">
            <a href="https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8734487,-123.7393586,8z/data=!3m1!4b1!4m6!3m5!1s0x808583a3a688d7b5:0x8c891b8457461fa9!8m2!3d37.8271784!4d-122.2913078!16zL20vMDZwdnI?entry=ttu">
              Map of the Bay
            </a>
            <a>What is a NeRF?</a>
            <a>What about Gaussian Splatting?</a>
            <a>What is Muse?</a>
            <a href="https://medium.com/@muse_place/deprecating-muse-2ce8b4f8c3b4">
              What happened to Muse Place?
            </a>
          </LinkGroup>
          <LinkGroup title="Contact Us">
            <a href="mailto:info@muse.place">Send an Email</a>
            <a href="https://twitter.com/muse_place">DM on Twitter</a>
          </LinkGroup>
        </section>
        <section id="contact">
          <br />
          <br />
          <h2 className="text-sm text-center text-gray-500 font-light">
            Copyright © 2023 Terra Labs Inc. All rights reserved.
          </h2>
        </section>
        <div className="h-12" />
      </div>
    </div>
  );
}
