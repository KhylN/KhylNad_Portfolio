import Updating from "@/components/Updating/updating";

export default function Home() {
  const downTime = true;
  if (downTime) {
    return <Updating />;
  } else {
    return <Updating />;
  }
}
