import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#0600ff30"
    foregroundColor="#ffffff70"
    {...props}
  >
    <rect x="12" y="2" rx="0" ry="0" width="155" height="37" /> 
    <rect x="13" y="45" rx="0" ry="0" width="307" height="14" /> 
    <rect x="13" y="65" rx="0" ry="0" width="307" height="14" />
  </ContentLoader>
)

export default MyLoader

