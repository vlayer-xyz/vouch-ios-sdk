// swift-tools-version: 6.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "vouch-ios-sdk",
  platforms: [
    .iOS(.v17)
  ],
  products: [
    .library(
      name: "vouch-ios-sdk",
      targets: ["vouch-ios-sdk", "VouchSDK"])
  ],
  targets: [
    .target(
      name: "vouch-ios-sdk"),
    .binaryTarget(
      name: "VouchSDK",
      path: "Sources/VouchSDK.xcframework"
    ),
  ]
)
