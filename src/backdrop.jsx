/* ============================================================
   Layer 1 of 2 — the backdrop.
   ============================================================

   A fixed, full-viewport layer that sits behind every page. All page
   content lives on `.layer-content` above it (see App.jsx).

   Right now it is plain white, on purpose. To add the animation later,
   put it inside <div className="backdrop-stage"> below — the stage is
   already full-bleed, sits behind the content, and ignores pointer
   events, so anything you drop in (canvas, SVG, video, WebGL, Motion)
   needs no extra plumbing.

   Two things to keep in mind when you do:
   - Gate it on `useReducedMotion()` and render a still frame instead.
   - The green bands, cards and footer are opaque, so the backdrop only
     shows through the neutral areas. Make those surfaces translucent
     if you want the animation visible behind them too.
*/

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-stage">
        {/* animation goes here */}
      </div>
    </div>
  );
}
