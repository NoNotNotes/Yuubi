import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import SearchFactory from "../Search"

const NotFound: QuartzComponent = (props: QuartzComponentProps) => {
  const { cfg } = props;
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname
  const Search = SearchFactory({ enablePreview: true })

  return (
    <article class="popover-hint">
      <h1>Note Not Found</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      
      <div class="search-404">
        <Search {...props} />
      </div>
      <br/>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
