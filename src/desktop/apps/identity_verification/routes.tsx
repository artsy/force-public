import { buildServerApp } from "reaction/Artsy/Router/server"
import { buildServerAppContext } from "desktop/lib/buildServerAppContext"
import { routes } from "reaction/Apps/IdentityVerification/routes"
import { stitch } from "@artsy/stitch"
// const metaphysics = require("lib/metaphysics.coffee")

export const identityVerification = async (req, res, next) => {
  if (!res.locals.sd.CURRENT_USER) {
    return res.redirect(
      `/login?redirectTo=${encodeURIComponent(req.originalUrl)}`
    )
  }
  try {
    const {
      bodyHTML,
      redirect,
      status,
      headTags,
      scripts,
      styleTags,
    } = await buildServerApp({
      routes,
      url: req.url,
      userAgent: req.header("User-Agent"),
      context: buildServerAppContext(req, res),
    })

    if (redirect) {
      res.redirect(302, redirect.url)
      return
    }

    // Render layout
    const layout = await stitch({
      basePath: __dirname,
      layout:
        "../../components/main_layout/templates/react_minimal_header.jade",
      blocks: {
        head: () => headTags,
        body: bodyHTML,
      },
      locals: {
        ...res.locals,
        assetPackage: "identity_verification",
        headerLogoHref: res.locals.sd.APP_URL,
        hideHeaderOnEigen: res.locals.sd.EIGEN,
        scripts,
        styleTags,
      },
    })

    res.status(status).send(layout)
  } catch (error) {
    next(error)
  }
}
