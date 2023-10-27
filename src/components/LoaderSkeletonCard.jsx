import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2.5}
        width={270}
        height={160}
        viewBox="0 0 270 160"
        backgroundColor="#0600ff30"
        foregroundColor="#ffffff70"
        {...props}
    >
        <rect x="13" y="137" width="270" height="6" />
        <rect x="13" y="120" width="270" height="6" />
        <rect x="13" y="153" width="120" height="6" />
        <rect x="13" y="8" width="270" height="100" />
    </ContentLoader>
)

export default MyLoader
