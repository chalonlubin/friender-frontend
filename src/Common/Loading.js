import { LiquidLoader  } from "react-loaders-kit";

/** Render loading message
 *
 * App/ -> Loading
 */
function Loading() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <LiquidLoader  {...loaderProps} />
    </div>
  );
}

export default Loading;
