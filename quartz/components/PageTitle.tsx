import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
      <img class="site-icon" src="/static/icon.png" alt="Site Icon" />
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.site-icon {
  border-radius: 5px;
  max-width: 1.3rem;
  margin: 0 0.4rem;
  display: inline;
  filter: hue-rotate(60deg);
}

[saved-theme="light"] .site-icon {
  filter: hue-rotate(200deg);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
