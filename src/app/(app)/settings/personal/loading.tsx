import Skeleton from "react-loading-skeleton"
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return Array(6).map((_, i) => <Skeleton key={i} height={50} />)
}
