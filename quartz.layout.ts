import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.NotFor(
      { titles: ["Note Not Found"] },
      Component.Comments({
        provider: 'giscus',
        options: {
          repo: 'nonotnotes/nonotnotes.github.io',
          repoId: 'R_kgDOLAjZSQ',
          category: 'Announcements',
          categoryId: 'DIC_kwDOLAjZSc4CjcmW',
          reactionsEnabled: false,
        }
      })
    ),
    Component.OnlyFor(
      { titles: ["No, Not Notes"] },
      Component.RecentNotes({
        showTags: false,
        title: "New/Updated Notes",
        showDate: false,
        limit: 5
      })
    ),
  ],
  footer: Component.Footer({
    links: {
      "Twitter": "https://x.com/hsterts",
      "GitHub": "https://github.com/NoNotNotes/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // Component.MobileOnly(Component.TableOfContents()),
    Component.TableOfContents(),
  ],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.OverlayExplorer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        const omit = new Set(["q"])
        return !omit.has(node.name.toLowerCase())
      },
    }
    )),
  ],
  right: [
    //Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph({
      localGraph: {
        depth: 2,
        showTags: false
      },
      globalGraph: {
      }
    })
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.OverlayExplorer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        showTags: false
      },
      globalGraph: {
      }}),
    Component.DesktopOnly(Component.TableOfContents())
  ]
}
