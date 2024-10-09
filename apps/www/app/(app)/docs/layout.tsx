import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="w-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-10 bg-layer-01">
        <aside className="fixed border-r pl-8 top-12 z-30 -ml-2 hidden h-[calc(100vh-3rem)] w-full shrink-0 md:sticky md:block bg-background">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav config={docsConfig} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
