import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function DoctorEvaluationCard() {
  return (
    <div className="text-center pt-12 my-12 w-full">
      <Card className="relative bg-orange-light border-0 shadow-lg w-[100%] md:h-56 h-110 mx-auto rounded-3xl">
        <div className="absolute bottom-0 left-0 flex flex-row items-center justify-center">
          <Image src="/doctor1.png" alt="Doctor1" className="relative md:left-20 left-5 scale-x-[-1]" width={200} height={110} />
          <Image src="/doctor2.png" alt="Doctor2" className="relative md:left-10 left-0 -bottom-1" width={185} height={105} />
        </div>
        <CardContent className="p-8 text-center w-80 flex flex-col items-center absolute right-[15%]">
          <h3 className="text-2xl font-semibold text-gray-600 mb-4 pt-5">
            ¿No sabes cuál es tu tratamiento ideal?
          </h3>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 mt-2 rounded-xl">
            Solicita tu evaluación gratuita
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
