import Image from "next/image";
import {Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption} from "@/components/ui/table"
import Herosection from "@/components/Herosection";
import { LayoutGrids } from "@/components/grid-layout";
export default function Home() {
  return (
    <main>
      <section>
        <Herosection />
        <LayoutGrids />
      </section>
    </main>
  
  );
}
