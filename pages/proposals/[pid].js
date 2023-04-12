import { useRouter } from "next/router";

export default function proposal({ }) {
    const router = useRouter()
    const { pid } = router.query

    return (
        <main>
            <p>Proposal: {pid}</p>

        </main>
    )
}