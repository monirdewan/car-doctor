import dbConnect, { collectionNameObj } from "@/lib/DBConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = async ({ params }) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            alt="service banner"
            width={1250}
            height={300}
          />
          <div className="bg-transparent w-full h-full absolute border-2 overlay-bg border-amber-300 top-0">
            <div className="w-full h-full flex items-center ps-16">
              <h1 className="text-white text-4xl font-bold">Service Details</h1>
            </div>
          </div>
        </figure>
      </section>
      <section className="mt-8">
        <div className=" mx-ato">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-9">
             <div className="relative w-full h-[400px]">
               <Image src={data.img} 
              fill
              style={{objectFit:"cover"}}
                alt={data.title}
                 />
             </div>
              <h3 className="text-4xl font-bold mt-4">{data.title}</h3>
              <p className="mt-4">{data.description}</p>
            </div>


            <div className="col-span-3">
              <div className="bg-gray-300 w-full">
                  <h4 className="text-2xl font-bold ">Services</h4>

                  <ul>
                    <li><Link className="flex items-center justify-between" href="/"><span>Full Car Repair</span>  <FaArrowRightLong className="text-2xl" /></Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default page;
