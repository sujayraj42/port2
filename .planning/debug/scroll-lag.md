# Debug Session: Scroll Lag

## Symptoms
- **Expected:** Smooth animations and lag-free scrolling when navigating the page.
- **Actual:** When scrolling down, animations load late and the scroll sequence feels laggy.
- **Errors:** None reported.
- **Reproduction:** Scroll down the webpage.
- **Extra Goal:** Add new projects to the portfolio as well.

## Investigation Path
1. **Analyze Scroll Logic:** Review `js/scroll-skew.js` to look for inefficient scroll event handlers (e.g., lack of requestAnimationFrame or throttling).
2. **Review Initial Load:** Examine `js/loader.js` to understand how elements are surfaced/animated.
3. **HTML/CSS Profile:** Look at `index.html` and relevant stylesheets for heavy or unoptimized animations, filters, or large layout-thrashing techniques.

## Hypothesis & Steps
- A synchronous `scroll` event listener might be aggressively modifying DOM properties, or an `IntersectionObserver` config is miscalibrated and firing callbacks slowly.
- Fix: Use `requestAnimationFrame` for scroll bindings or fix thresholds. Add the requested projects.
