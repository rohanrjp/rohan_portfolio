import { Button } from "./ui/button"
import Link from "next/link"

const ContactSection = () => {
  return (
    <section className=" py-36 xl:py-0">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 pb-10 text-center max-w-3xl">
                I’d love to hear from you, reach out anytime.
                </h2>
                <Link href="/contact">
                    <Button>
                        <h3 className="text-xl font-bold">Contact Me</h3>
                    </Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSection