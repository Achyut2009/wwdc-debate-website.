import Page from "@/components/header";
import { leaders } from "@/data";
import Image from "next/image";

export default function Brief() {
  return (
    <Page title="Our Leaders" desc="">
      <div>
        <div className="container gap-8 flex flex-col flex-wrap justify-center">
          <div>
            <div className="m-4">
              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src="https://cdn.aayus.me/logo.png"
                  width={300}
                  height={300}
                  alt={"Ms. Asna Nafees"}
                  className="rounded-full aspect-square h-64 w-64 object-cover"
                />
                <div className="text-lg mt-3 font-semibold">
                  Ms. Asna Nafees
                </div>
                <div className="text-md font-medium">
                  Principal, DPS Modern Indian School
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8">
            {leaders.map((member, index) => (
              <div key={index} className="m-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    src={member.image}
                    width={300}
                    height={300}
                    alt={member.name}
                    className="rounded-full aspect-square md:h-64 md:w-64 object-cover"
                  />
                  <div className="text-lg mt-3 font-semibold">
                    {member.name}
                  </div>
                  <div className="text-md font-medium">{member.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
