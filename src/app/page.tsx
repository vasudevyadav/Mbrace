import MbraceHome from "@/components/sections/MbraceHome";
import { getHomeData } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getHomeData();
  return <MbraceHome data={data} />;
}
