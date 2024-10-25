import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.png")

    const fileDate = fileData.dates?.created ?? new Date();

    // Determine the og:image URL based on the presence of a description
    let ogImageUrl: string
    if (fileData.frontmatter?.description) {
      // If a description is present, use the custom API for the og:image
      const customOgImageUrl = new URL(`https://nnn-vercel-og.vercel.app/api/og`)
      customOgImageUrl.searchParams.append("title", title)
      customOgImageUrl.searchParams.append("content", description)
      customOgImageUrl.searchParams.append("tags", fileData.frontmatter?.tags?.join(",") || "")
      customOgImageUrl.searchParams.append("yy", new Date(fileDate).getFullYear().toString())
      customOgImageUrl.searchParams.append(
        "mmdd",
        new Date(fileDate).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
        })
      )
      ogImageUrl = customOgImageUrl.toString()
    } else {
      // If no description is found, use the original static/og-image.png
      ogImageUrl = `https://${cfg.baseUrl}/static/og-image.png`
    }

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
