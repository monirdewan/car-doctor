import dbConnect, { collectionNameObj } from "@/lib/DBConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const HomeServiceDB = async () => {
const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
const services = await serviceCollection.find({}).toArray();
  return (
    <div className="mt-12">
      <div className="text-center w-full md:w-[500px] mx-auto">
        <h1 className="text-4xl font-bold ">Our Service Area From DataBAse</h1>
        <p className="mt-2 text-[16px] text-gray-800">
         The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {services.map((service) => (
          <div key={service._id} className="shadow p-4 rounded">
            <div className="relative  min-h-[208px] md:min-h-[250px]">
              <Image className="rounded"
                src={service.img}
                alt="Service Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
                <h4 className="text-xl font-bold mt-2">{service.title}</h4>
                <Link href={`/services/${service._id}`} className="font-bold mt-1 text-[#FF3811] flex items-center"><span className="me-auto">Price: {service.price}</span>  <FaArrowRightLong className="text-2xl" /></Link>
               

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServiceDB;
