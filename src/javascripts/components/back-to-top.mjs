import { Component } from 'govuk-frontend'

/**
 * Website back to top link
 */
class BackToTop extends Component {
  static moduleName = 'app-back-to-top'

  /**
   * @param {Element} $module - HTML element
   */
  constructor($module) {
    super($module)

    const $footer = document.querySelector('.app-footer')
    const $subNav = document.querySelector('.app-subnav')

    // Check if we can use Intersection Observers
    if (!('IntersectionObserver' in window)) {
      // If there's no support fallback to regular behaviour
      // Since JavaScript is enabled we can remove the default hidden state
      this.$root.classList.remove('app-back-to-top--hidden')
      return this
    }

    if (!$footer || !$subNav) {
      return this
    }

    let footerIsIntersecting = false
    let subNavIsIntersecting = false
    let subNavIntersectionRatio = 0

    const observer = new window.IntersectionObserver((entries) => {
      // Find the elements we care about from the entries
      const footerEntry = entries.find((entry) => entry.target === $footer)
      const subNavEntry = entries.find((entry) => entry.target === $subNav)

      // If there is an entry this means the element has changed so lets check if it's intersecting.
      if (footerEntry) {
        footerIsIntersecting = footerEntry.isIntersecting
      }
      if (subNavEntry) {
        subNavIsIntersecting = subNavEntry.isIntersecting
        subNavIntersectionRatio = subNavEntry.intersectionRatio
      }

      // If the subnav or the footer not visible then fix the back to top link to follow the user
      if (subNavIsIntersecting || footerIsIntersecting) {
        this.$root.classList.remove('app-back-to-top--fixed')
      } else {
        this.$root.classList.add('app-back-to-top--fixed')
      }

      // If the subnav is visible but you can see it all at once, then a back to top link is likely not as useful.
      // We hide the link but make it focusable for screen readers users who might still find it useful.
      if (subNavIsIntersecting && subNavIntersectionRatio === 1) {
        this.$root.classList.add('app-back-to-top--hidden')
      } else {
        this.$root.classList.remove('app-back-to-top--hidden')
      }
    })

    observer.observe($footer)
    observer.observe($subNav)
  }
}

export default BackToTop
