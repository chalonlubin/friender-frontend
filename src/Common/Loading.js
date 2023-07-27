import { GooeyCircleLoader } from "react-loaders-kit";

/** Render loading message
 *
 * App/ -> Loading
 */
function Loading() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
      <GooeyCircleLoader {...loaderProps} />
    </div>
  );
}

export default Loading;
