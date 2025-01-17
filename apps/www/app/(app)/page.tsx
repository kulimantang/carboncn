import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>
          Truly accessible Carbon Components
        </PageHeaderHeading>
        <PageHeaderDescription>
          Carbon styled components that you can copy and paste into your apps
          and have full access to.
        </PageHeaderDescription>
        <p className="font-bold">100% compatible with Tailwind CSS</p>
        <p className="font-bold">
          100% compatible with the original Carbon Components
        </p>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden border bg-background shadow">
          <MailPage />
        </div>
      </section>
    </div>
  )
}
