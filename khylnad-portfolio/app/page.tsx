import ComingSoon from "@/components/comingSoon";

export default function Home() {
  const isEditing = true;
  if (isEditing) {
    return <ComingSoon />;
  } else {
    return <ComingSoon />;
  }
}
