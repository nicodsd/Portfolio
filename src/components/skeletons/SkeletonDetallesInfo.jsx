import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={"80vw"}
    height={"60vw"}
    viewBox="0 0 280 400"
    backgroundColor="#0600ff20"
    foregroundColor="#ffffff50"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="80" /> 
    <rect x="0" y="86" rx="0" ry="0" width="280" height="6" />
    <rect x="0" y="160" rx="0" ry="0" width="155" height="37" /> 
    <rect x="0" y="140" rx="0" ry="0" width="280" height="14" /> 
    <rect x="0" y="120" rx="0" ry="0" width="280" height="14" />
  </ContentLoader>
)

export default MyLoader