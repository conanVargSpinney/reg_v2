import { useRouter } from "next/router";

export default function yacht({ }) {
    const router = useRouter()
    const { yid } = router.query;
  
    return (
    <main>
        yacht {yid}

    </main>
  )
}